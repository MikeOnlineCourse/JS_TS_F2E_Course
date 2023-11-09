import "../css/normalize.css";
import "../css/style.css";

import { apiGetPhotoList } from "../api/index.js";

// 所有照片列表
let photoList = [];

// 手機版照片列表
let smallPhotoList = [];

// 是不是手機版
const phoneMediaQuery = window.matchMedia("(max-width: 768px)");

// 容器
const content = document.querySelector(".content");

// 照片列表渲染
const renderPhotoList = (photoArr) => {
  let html = "";
  photoArr.forEach((item) => {
    html += `
      <div class="card">
        <img
          src="${item.url}"
          alt=""
        />
        <div class="text-content">
          <h1>這是一個好的產品</h1>
        </div>
      </div>
    `;
  });
  content.innerHTML = html;
};

// 照片是否切割處理
const splicePhoto = () => {
  console.log(phoneMediaQuery);
  if (phoneMediaQuery.matches) {
    const copyLost = [...photoList];
    smallPhotoList = copyLost.splice(0, 4);
    renderPhotoList(smallPhotoList);
  } else {
    renderPhotoList(photoList);
  }
};

// 初始化抓資料
const fetchInit = async () => {
  try {
    const res = await apiGetPhotoList();
    photoList = res.data;
    splicePhoto();
  } catch (error) {
    console.log(error);
  }
};

// 初始化抓資料
fetchInit();

// 有些瀏覽器 window.matchMedia 沒有 addEventListener
if ("addEventListener" in phoneMediaQuery) {
  phoneMediaQuery.addEventListener("change", splicePhoto);
} else {
  phoneMediaQuery.addListener(splicePhoto);
}
