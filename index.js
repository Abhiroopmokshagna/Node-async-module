const async = require('async');

async.series(
  [
    function (callback) {
      setTimeout(function () {
        console.log('Task 1');
        callback(null);
      }, 300);
    },
    function (callback) {
      setTimeout(function () {
        console.log('Task 2');
        callback(null);
      }, 200);
    },
    function (callback) {
      setTimeout(function () {
        console.log('Task 3');
        callback(null);
      }, 100);
    },
  ],
  (err, response) => {
    if (err) {
      console.log(err);
    } else {
      console.log(response);
    }
  }
);
