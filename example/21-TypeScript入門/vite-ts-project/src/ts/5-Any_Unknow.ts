/**
 * 任意型別 any
 */

// 一般來說會盡量避免使用 any
let count: any = 3;
count = "3";
count = 5;

/**
 * 未知型別 unknown
 */
const price: unknown = 3.14159;

// 當我今天想要使用 number 才有的方法時，就需要進行型別檢查
if (typeof price === "number") {
  console.log(price.toFixed()); // -> '3'
}
