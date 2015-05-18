if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
                 var listOfFiles = [];
                 var dirs = [];

                 processDir(data);

                 function processDir(dir){
                   var i, len, file;
                   var files = dir.files;

                   dirs.push(dir.dir);

                   for (i = 0, len = files.length; i < len; i++){
                     file = files[i];
                     if (typeof file == "string"){
                       if (!dirName || dirs.indexOf(dirName) > -1){
                         listOfFiles.push(file)
                       }
                     }
                     else {
                       processDir(file);
                     }
                   }
                   dirs.pop();
                 }
                 return listOfFiles;

               },

      permute: function(arr)
                 var iterations = 1;
                 var permutations = [];
                 for (var i = arr.length; i > 1; i--){
                   iterations = (iterations * i);
                 }





                 function fy(a,b,c,d){
                   c=a.length;while(c)b=Math.random()*c--|0,d=a[c],a[c]=a[b],a[b]=d
                 }

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
                 for (var i = 0; i < iterations; i++){
                   var newArray = []
                     do {
                       newArray = fy(arr)
                     } while (!permutations.includes(newArray))
                   permutations.push(newArray)
                 }
                 return permutations.sort();
               },

      fibonacci: function(n) {
                   if(n <= 2) {
                     return 1;
                   }
                   else {
                     return this.fibonacci(n - 1) + this.fibonacci(n - 2);
                   }
                 },

      validParentheses: function(n) {

                        }
  };
});
