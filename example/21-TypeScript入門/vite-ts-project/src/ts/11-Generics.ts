function resArg<T>(arg: T): T {
  return arg;
}

// const resArg = <T>(arg: T): T => {
//   return arg;
// };

const res1 = resArg<string>("Mike");
const res2 = resArg<number>(100);

console.log(res1); // -> "Mike"
console.log(res2); // -> 100

//---------------------------------------------

function getFirstItem<T>(arr: T[]): T {
  return arr[0];
}

const numbers = [1, 2, 3, 4];
const firstNumber = getFirstItem(numbers);
console.log(firstNumber); // => 1

const strings = ["a", "b", "c", "d"];
const firstString = getFirstItem(strings);
console.log(firstString); // => "a"
