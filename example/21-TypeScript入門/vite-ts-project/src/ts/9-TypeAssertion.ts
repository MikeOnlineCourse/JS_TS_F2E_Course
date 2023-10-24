const priceNum: unknown = 3.14159;

const countNun: number = priceNum as number; // 如果你確定類型，可以使用断言告訴ts編譯器它是什麼類型

console.log(countNun.toFixed()); // -> '3'

// ------------------------------------------------

/* eslint-disable @typescript-eslint/no-explicit-any */
const strValue: any = "this is a string";
const strLength: number = (strValue as string).length;
console.log(strLength);

// ------------------------------------------------

// 這樣就不用處理 null 的部分，因為你確定類型不可能是 null
const titleRef = document.querySelector(".title") as HTMLHeadingElement;
const inpTxtRef = document.querySelector("input.inpTxt") as HTMLInputElement;
const sendRef = document.querySelector(".send") as HTMLButtonElement;
