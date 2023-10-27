/**
 * Array 與 Tuple(元組)
 * tuple 是固定長度的 array，type 和 value 相互對應
 */
const tuple1: [number, string] = [1, "a"];
const tuple2: [number, string] = ["a", 1]; // error -> 不可以改變類型順序
const tuple3: [number, string] = [1, "a", 2]; // error -> 不可以多加類型
