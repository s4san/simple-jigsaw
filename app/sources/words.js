let words = ['BEAUTIFUL', 'COURAGE', 'GLORY', 'AWESOME', 'LANGUAGE', 'TEST', 'CHECK', 'LOVE', 'ANGEL', 'SACRIFICE'];
let ValidWords = {
  fetch: function () {
    // returning a Promise because that is what fetch does.
    return new Promise(function (resolve, reject) {
      // simulate an asynchronous action where data is fetched on
      // a remote server somewhere.
      resolve(words);
    });
  }
};

export default ValidWords;
