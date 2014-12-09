var expect = require('chai').expect;
var mergesort = require('../src/mergesort').mergesort;

describe('mergesort algorithm', function(){
  it('should sort a list of integers', function(){
    var integers = [3, 5, 2, 6];
    expect(mergesort(integers)).to.be.eql([2, 3, 5, 6]);
  });

  it('should sort a list of characters', function(){
    var characters = ['a', 'c', 'b', 'x'];
    expect(mergesort(characters)).to.be.eql(['a', 'b', 'c', 'x']);
  });

  it('should handle empty arrays', function(){
    var array = [];
    expect(mergesort(array)).to.be.eql([]);
  });

  xit('should accept a comparator as a parameter', function(){

  });
});
