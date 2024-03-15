const priceNum: unknown = 3.14159;
const countNun = priceNum;
console.log(countNun.toFixed()); // -> '3'


// ------------------------------------------------

/* eslint-disable @typescript-eslint/no-explicit-any */
const strValue: any = "this is a string";
const strLength: number = strValue.length
console.log(strLength);

// ------------------------------------------------

// 這樣就不用處理 null 的部分，因為你確定類型不可能是 null
const titleRef = document.querySelector(".title");
const inpTxtRef = document.querySelector("input.inpTxt");
const sendRef = document.querySelector(".send");
