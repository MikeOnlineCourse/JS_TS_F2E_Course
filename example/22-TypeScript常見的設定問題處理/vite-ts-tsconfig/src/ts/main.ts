import { getRandomInt } from "../lib/randomFn.js";
import axios, { AxiosResponse } from "axios"; // axios 自己有提供宣告檔案
import _ from "lodash"; //找不到模組 'lodash' 的宣告檔案。 npm i --save-dev @types/lodash

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { SwiperOptions } from "swiper/types"; // 官方提供的宣告檔案
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/style.css";
// ----------------- 1 -----------------
const user: TUserBaseType = {
  name: "John",
  age: 30,
  userAddress: "USA",
};
console.log(user);

// ----------------- 2 -----------------
const randomNum = getRandomInt(3, 10);
console.log(randomNum);

// ----------------- 3 -----------------
console.log(window);
console.log(document);

// ----------------- 4 -----------------
type TPhotoList = {
  url: string;
};
function apiGetPhotoList(): Promise<AxiosResponse<TPhotoList>> {
  return axios.get("https://vue-lessons-api.vercel.app/photo/list");
}
const photo = await apiGetPhotoList();
console.log(photo);

// 第三方套件就要看它的宣告檔案，沒有的話就要自己寫或是去找看看有沒有 @types/xxx
const arr: string[] = ["a", "b", "c", "d"];
const chunk: string[][] = _.chunk(arr, 2);
console.log(chunk);

// 如果官方有提供原本的就會棄用 https://www.npmjs.com/package/@types/swiper
// 由此可知官方有提供宣告檔案
const options: SwiperOptions = {
  modules: [Navigation, Pagination],
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
};

new Swiper(".mySwiper", options);
