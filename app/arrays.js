if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
                for (var i = 0; i < arr.length; i++) {
                  if (arr[i] === item) {
                    return i;
                  }
                }
                return -1;
              },

  sum : function(arr) {
          var sum = 0;
          for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
          }
          return sum;
        },

  remove : function(arr, item) {
             var array = []
               for (var i = 0, len = arr.length; i < len; i++) {
                 if (arr[i] != item) {
                   array.push(arr[i]);
                 }
               }
             return array;

           },

  removeWithoutCopy : function(arr, item) {
                        for (var i = 1, len = arr.length; i < len; i++) {
                          if (arr[i] == item) {
                            arr.splice(i, i);
                          }
                        }
                        for (var i = 1, len = arr.length; i < len; i++) {
                          if (arr[i] == item) {
                            arr.splice(i, i);
                          }
                          return arr
                        }
                      },

  append : function(arr, item) {
             arr.push(item);
             return arr;
           },

  truncate : function(arr) {
               arr.pop(1);
               return arr;
             },

  prepend : function(arr, item) {
              arr.unshift(item);
              return arr;
            },

  curtail : function(arr) {
              arr.shift(1);
              return arr;
            },

  concat : function(arr1, arr2) {
             return arr1.concat(arr2);
           },

  insert : function(arr, item, index) {
             arr.splice(index, 0, item);
             return arr;
           },

  count : function(arr, item) {
            var count = 0;
            for (var i = 0, len = arr.length; i < len; i++) {
              if (arr[i] === item) {
                count++;
              }
            }
            return count;

          },

  duplicates : function(arr) {
                 var temp = [];
                 var dupes = [];

                 if (![].includes) {
                   Array.prototype.includes = function(searchElement /*, fromIndex*/ ) {
                     'use strict';
                     var O = Object(this);
                     var len = parseInt(O.length) || 0;
                     if (len === 0) {
                       return false;
                     }
                     var n = parseInt(arguments[1]) || 0;
                     var k;
                     if (n >= 0) {
                       k = n;
                     } else {
                       k = len + n;
                       if (k < 0) {k = 0;}
                     }
                     var currentElement;
                     while (k < len) {
                       currentElement = O[k];
                       if (searchElement === currentElement ||
                           (searchElement !== searchElement && currentElement !== currentElement)) {
                         return true;
                       }
                       k++;
                     }
                     return false;
                   };
                 }

                 var popCheck = function popAndCheck(array){
                   if (temp.includes(array[-1])){
                     dupes.push(array.pop())
                   }
                   else{
                     temp.push(array.pop())
                   }
                 }
                 for (i = 0, len = arr.length; i < len; i++){
                   popCheck(arr)
                 }
                 return arr
               },

  square : function(arr) {
             var result = [];
             for (var i = 0, len = arr.length; i < len; i++) {
               result.push(arr[i] * arr[i]);
             }
             return result;
           },

  findAllOccurrences : function(arr, target) {
                         var result = [];
                         for (var i = 0, len = arr.length; i < len; i++) {
                           if (arr[i] === target) {
                             result.push(i);
                           }
                         }
                         return result;
                       }
  };
});
