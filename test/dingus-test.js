//could use var but we were feeling fancy and used const
const chai = require('chai');
const assert = chai.assert;
// or const assert - require.('chai').assert;

// don't have to add .js to dingus because of webpack
const Dingus = require('../lib/dingus');

describe('Dingus', function() {
  context('with default attributes', function() {
    // Create a Dingus
    var dingus = new Dingus({});

    it('has all default values', function(){
      // assert that dingus.x === whatever our default x should be.
      assert.equal(dingus.x, 5);
      assert.equal(dingus.y, 5);
      assert.equal(dingus.height, 10);
      assert.equal(dingus.width, 10);
    });
    // Test that it starts with a default x and y coordinates
    // it('has a default y value', function() {
    //   assert.equal(dingus.y, 5);
    // });
    // Test that it starts with a default height and width.
    // it('has a default height value', function() {
    //   assert.equal(dingus.height, 10);
    // });
    // it('has a default width value', function() {
    //   assert.equal(dingus.width, 10);
    // });
  });

  context('with some assigned attributes', function(){
    //Create a dingus with only a height and width assigned
    var heightValue = 26;
    var widthValue = 100;
    var options = {height: heightValue, width: widthValue};
    var dingus = new Dingus(options);

    it('should allow me to assign specific values and otherwise use defaults', function(){
      // I should be able to create a Dingus with height and width assigned
      // test that the height and width are not defaults
      assert.equal(dingus.height, heightValue);
      assert.equal(dingus.width, widthValue);
      assert.equal(dingus.x, 5);
      assert.equal(dingus.y, 5);
      // test that the x and y are defaults
    });
  });

  context('with all assigned attributes', function() {
    var xValue = 57;
    var yValue = 8;
    var heightValue = 42;
    var widthValue = 24;
    // Create a Dingus
    // var dingus = new Dingus();

    var options = {
      x: xValue,
      y: yValue,
      height: heightValue,
      width: widthValue};
    var dingus = new Dingus(options);


      // give it assigned attributes
    // test that what we pass in equals what is set
    it('assigns the xValue passed in as the dingus x', function(){
      assert.equal(dingus.x, xValue);
    });
    // if we tell a dingus what it's x is, it doesn't use the default value
    it('assigns the yValue passed in as the dingus y', function(){
      assert.equal(dingus.y, yValue);
    });
    it('assigns the heightValue passed in as the dingus height', function(){
      assert.equal(dingus.height, heightValue);
    });
    it('assigns the widthValue passed in as the dingus width', function(){
      assert.equal(dingus.width, widthValue);
    });
  });
});
