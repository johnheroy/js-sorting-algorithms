var expect = require('chai').expect;
var quicksort = require('../src/quicksort').quicksort;

describe('quicksort algorithm', function(){
  it('should sort a list of integers', function(){
    var integers = [3, 5, 2, 6];
    expect(quicksort(integers)).to.be.eql([2, 3, 5, 6]);
  });

  it('should sort a list of characters', function(){
    var characters = ['a', 'c', 'b', 'x'];
    expect(quicksort(characters)).to.be.eql(['a', 'b', 'c', 'x']);
  });

  xit('should accept a comparator as a parameter', function(){

  });
});
