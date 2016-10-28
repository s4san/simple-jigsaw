import React from 'react';
import GameStore from '../stores/GameStore';

let clone = o => JSON.parse(JSON.stringify(o));

export default class Scorecard extends React.Component {
  constructor(props) {
    let players = [];
    super(props);
    for(var i = 1; i <= 5; ++i) {
      players.push({
        id: `P${i}`,
        score: 0,
        status: i === this.props.player ? 'ON' : 'OFF'
      });
    }
    this.state = {
      players,
      isOpen: false
    };
    this.updatePlayerStatus = this.updatePlayerStatus.bind(this);
    this.onStoreChange = this.onStoreChange.bind(this);
  }
  componentDidMount() {
    if(window.localStorage) {
      window.addEventListener('storage', this.updatePlayerStatus);
      let players = clone(this.state.players);
      localStorage.setItem(`P${this.props.player}`, players[this.props.player - 1].score);
      for(var i = 1; i <= 5; ++i) {
        let item = localStorage.getItem(`P${i}`);
        players[i - 1].status = item ? 'ON' : 'OFF';
        players[i - 1].score = item ? parseInt(item, 10) : 0;
      }
      this.setState({
        players
      });
    }
    GameStore.listen(this.onStoreChange);
  }
  componentWillUnMount() {
    GameStore.unlisten(this.onStoreChange);
    window.removeEventListener('storage', this.updatePlayerStatus);
  }
  onStoreChange(data) {
    if(data.playerScore) {
      let players = clone(this.state.players);
      players[this.props.player - 1].score = data.playerScore;
      localStorage.setItem(`P${this.props.player}`, data.playerScore);
      this.setState({
        players
      });
    }
  }
  updatePlayerStatus(e) {
    let players = clone(this.state.players);
    let foundIndex = -1;
    players.find((player, index) => {
      let found = player.id === e.key;
      foundIndex = found ? index : foundIndex;
      return found;
    });
    if(foundIndex > -1) {
      players[foundIndex].status = 'ON';
      players[foundIndex].score = parseInt(e.newValue, 10) || 0;
      this.setState({
        players
      });
    }
  }
  getPlayerHTML(player) {
    return (
      <li className="flex dir-col align-center justify-between" key={player.id}>
        <p>{`${player.id}`}</p>
        <p>{`${player.score}`}</p>
        <p>{`${player.status}`}</p>
      </li>
    );
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  };
  render() {
    return (
      <section className="flex dir-col align-center justify-between">
        <nav className="flex align-center justify-between" style={{width: '100%'}}>
          <h2>Scorecard</h2>
          <h2 onClick={this.toggle.bind(this)} style={{cursor: 'pointer'}}>&#9776;</h2>
        </nav>
        {
          this.state.isOpen
          ? <ul className="flex align-center justify-around appear">
              {this.state.players.map(this.getPlayerHTML)}
            </ul>
          : ''
        }
      </section>
    );
  }
}

Scorecard.defaultProps = {
  player: 1
};

Scorecard.propTypes = {
  player: React.PropTypes.number.isRequired
};
