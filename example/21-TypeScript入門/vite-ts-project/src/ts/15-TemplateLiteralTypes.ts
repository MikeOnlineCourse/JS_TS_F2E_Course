/**
 * 1. 可以針對現在流行的 Atomic CSS 去做一些應用，利用 Template Literal Types 來做一些限制
 * 2. 可以避免使用者輸入錯誤的 Atomic CSS
 * 3. 更有效地去規範個別的 Atomic CSS 使用範圍
*/

type TColor = "black" | "white" | "yellow" | "pink";

type TAtomicStyleColor = `bg-${TColor}` | `text-${TColor}` | `border-${TColor}`;


const resBgStatus: TAtomicStyleColor = "bg-black";
const resTextStatus: TAtomicStyleColor = "text-white";
const resBorderStatus: TAtomicStyleColor = "border-yellow";


