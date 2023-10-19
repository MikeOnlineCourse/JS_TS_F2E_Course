import "../css/normalize.css";
import "../css/style.css";

import { apiGetPhotoList } from "../api/index.js";

// 所有照片列表
let photoList = [];

// 手機版照片列表
let smallPhotoList = [];

// 是不是手機版
let isMobile = window.innerWidth < 768;

// 容器
const content = document.querySelector(".content");

// 照片列表渲染
const renderPhotoList = (photoArr) => {
  if (isMobile && document.querySelectorAll(".card").length === 4) return;
  if (!isMobile && document.querySelectorAll(".card").length === photoList.length) return;
  console.log("Render Photo List");
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
  isMobile = window.innerWidth < 768;
  if (isMobile) {
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

fetchInit();

// 監聽 resize
window.addEventListener("resize", splicePhoto);
