"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-02

      Project to convert between celsius and fahrenheit
      Author: shaddon meyer
      Date:   5-8-25

      Filename: project12-02.js
*/
// // step 3
// $("input#cValue").change(e => {
//       // step 3a
//       let celsius = $(e.target).val();
// // step 3b
//       let fahrenheit =(celsius * 1.8)+ 32;
// //step3c
// $("input#fValue").val(fahrenheit.toFixed(0));
// })

// // step 4
// $("input#fValue").change( e => {
// //step4a
// let fahrenheit = $(e.target).val();
// // step 4b
// let celsius= (fahrenheit - 32) /1.8;
// //step 4c
// $("input#cValue").val(celsius.toFixed(0));

// })
// javascript code
document.querySelector("input#cValue").onchange = function(e)
{
      let celsius = e.target.value;

      let fahrenheit = 1.8*celsius +32;
      document.querySelector("input#fValue").value = fahrenheit
}

document.querySelector("input#fValue").onchange = function(e)
{
      let fahrenheit = e.target.value;

      let celsius = (fahrenheit - 32) /1.8;
      document.querySelector("input#cValue").value = celsius
}
