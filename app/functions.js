if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
                    return fn.apply(null, arr);
                  },

  speak : function(fn, obj) {
            return fn.call(obj);
          },

  functionFunction : function(str) {
                       return function(string){
                         return str + ", " + string;
                       }
                     },

  makeClosures : function(arr, fn) {
                   var results = [];

                   var newFn = function(num) {
                     return function(){
                       return fn(num);
                     };
                   };

                   for (var i = 0, len = arr.length; i < len; i++) {
                     results.push(newFn(arr[i]));
                   }
                   return results;
                 },

  partial : function(fn, str1, str2) {
              return fn.bind(this, str1, str2);

            },

  useArguments : function() {
                   var sum = Array.prototype.slice.call(arguments).reduce(function(sum, num) {
                     return sum + num;
                   });
                   return sum;
                 },

  callIt : function(fn) {
             var args = Array.prototype.slice.call(arguments, 1, arguments.length);
             return fn.apply(null, args);
           },

  partialUsingArguments : function(fn) {
                            var args = Array.prototype.slice.call(arguments, 1, arguments.length);
                            return function(){
                              var extraArgs = args.concat(Array.prototype.slice.call(arguments));
                              return fn.apply(null, extraArgs);
                            }
                          },

  curryIt : function(fn) {
              //wut
              }
  };
});
