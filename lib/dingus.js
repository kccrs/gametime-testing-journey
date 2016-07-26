// lib/dingus.js

// require() requires whatever we export

function Dingus(options) {
  // console.log(options);
  // options = {width: widthValue, height: heightValue}

  // if all values are passed in a test we get a default
  // var dingus = new Dingus(xValue, yValue, heightValue, widthValue)

  // if no values are passed in, we get 'x is undefined' error
  // var dingus = new Dingus(); <-- have to pass in an empty object or it
  // will fail so var dingus = new Dingus({});

  this.x = options.x || 5;
  this.y = options.y || 5;
  this.height = options.height || 10;
  this.width = options.width || 10;
}

module.exports = Dingus;
