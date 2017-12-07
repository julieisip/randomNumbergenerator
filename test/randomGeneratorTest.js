'use strict';

var chai = require('chai');
var rewire = require('rewire');

var expect = chai.expect;

var randomGenerator = rewire('../randomGenerator.js');


describe('randomGenerator', function(){

  it('should work', function(done){

  var list = randomGenerator.listGenerator();

  //test list should not have 0 range should be 1-10000
  expect(list).to.be.an('array').to.not.include(0);

  //test list should not have 10001 range should be 1-10000
  expect(list).to.be.an('array').to.not.include(10001);

//test list size should be 10000
  expect(10000).to.equal(list.length);

//test the order when called should be random this test could fail since it is being generated randomly but the chance of it to fail is slim.
var list2 = randomGenerator.listGenerator();
var list3 = randomGenerator.listGenerator();
expect([list]).to.not.have.ordered.members(list2);
expect([list2]).to.not.have.ordered.members(list3);


  done();

  });
});
