// ES6 Module : An extrenal file that contains reusable code
//              that can be imported into other JavaScript Files.
//              Write reusable code for many different apps.
//              can contain variables, classes, functions ... and more
//              Introduced as a part of ECMAScript 2015 update


import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';

console.log(PI);
console.log(getArea(10).toFixed(2));
console.log(getCircumference(10).toFixed(2));
console.log(getVolume(10).toFixed(2));