var run = function(testSuite) {
  for(var test in testSuite) {
    var res = testSuite[test]();
    var expected = res[0];
    var result = res[1];
    if (expected === result) {
      console.info(test, "succeed");
    } else {
      var report = {
        expected: expected,
        got: result
      };
      console.error(test, "failed ", report);
    }
  }
};


/////////////////////////


run({

  "onePlusOneShouldBe2": function(){
    return [2, 1 + 1];
  },

  "trueShouldBeTrue": function(){
    return [true, true];
  },

  "falseShouldBeTrue": function(){
    return [true, false];
  }

});

