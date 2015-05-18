if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    fizzBuzz : function(num) {
                 if(isNaN(num)){
                   return false;
                 } else {
                   return fizzBuzz(num);
                 };

                 function fizzBuzz(number){
                   if(number % 3 == 0 && number % 5 == 0) {
                     return "fizzbuzz";
                   } else if(number % 5 == 0){
                     return "buzz";
                   } else if(number % 3 == 0){
                     return "fizz";
                   } else {
                     return number;
                   }
                 }
               }
  };
});
