if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
                       return /\d/.test(str);
                     },

  containsRepeatingLetter : function(str) {
                              return /([A-Za-z])\1/.test(str);
                            },

  endsWithVowel : function(str) {
                    return /[aeiou]$/i.test(str);

                  },

  captureThreeNumbers : function(str) {
                          var answer = /\d{3}/.exec(str);
                          if (answer) {
                            return answer[0];
                          }
                          else {
                            return false;
                          };
                        },

  matchesPattern : function(str) {
                     return /^\d{3}-\d{3}-\d{4}$/.test(str);

                   },
  isUSD : function(str) {
            return /^((?!(34|3,4)).)*$/.test(str);
          }
  };
});
