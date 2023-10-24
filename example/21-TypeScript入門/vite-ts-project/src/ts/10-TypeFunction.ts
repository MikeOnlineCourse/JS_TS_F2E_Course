// 不需要回傳任何 value 的 function 後面可加上 :void 或不加
const compose = (name: string, age: number): void => {
  const inputTextRef = document.querySelector(".inpTxt") as HTMLInputElement;
  inputTextRef.value = `你好 ${name} ~ 今年 ${age} 歲`;
};

compose("Mike", 12);

// ------------------------------------------

// 回傳 string 的 function 後面加上 :string
const composeReturn = (name: string, age: number): string => {
  return `你好 ${name} ~ 今年 ${age} 歲`;
};

const res = composeReturn("Mike", 12);
console.log(res);

// ------------------------------------------

// 可以透過定義 input 跟 output 來限制 function 的輸入跟輸出型別
type IHandleNumber = {
  (a: number, b: number): number;
};

const add: IHandleNumber = (a, b) => a + b;
const reduce: IHandleNumber = (a, b) => a - b;

console.log("加:", add(2, 3)); // -> 5
console.log("減:", reduce(6, 3)); // -> 3
