import "../css/normalize.css";
import "../css/scroll.css";
import star from "../images/star.svg";
import { apiGetRepos } from "../api";

let repos = []; // repo列表
let pageIdx = 0; // 頁數
let html = "";
let isDisable = false; // 是否禁止請求
let observerRef = null; // 監控器
const limit = 10; // 每頁數量
const cardBox = document.querySelector(".card_box");
const loading = document.querySelector(".loading");

const renderRepos = () => {
  html = "";
  repos.forEach((item) => {
    html += `
      <li>
          <h1 class="title">${item.name}</h1>
          <h2 class="description">${item.description}</h2>
          <a class="url" href="${item.html_url}" target="_blank">
            ${item.html_url}
          </a>
          <div class="star_box">
            <img class="star_icon" src="${star}" alt="star" />
            ${item.stargazers_count}
          </div>
        </li>
    `;
  });
  cardBox.innerHTML = html;
};

const getRepos = async () => {
  if (isDisable) return;
  try {
    pageIdx += 1;
    const res = await apiGetRepos("MikeCheng1208", pageIdx, limit);
    repos = [...repos, ...res.data];
    renderRepos();
    if (res.data.length < limit) {
      isDisable = true; // 禁止請求
      loading.style = "display: none"; // 隱藏 loading
      observerRef.unobserve(loading); // 停止監控
    }
  } catch (error) {
    console.log(error);
  }
};

const fetchInit = () => {
  getRepos();
};

// 初始化
fetchInit();

// 產生監控器
observerRef = new IntersectionObserver((entries) => {
  if (entries[0].intersectionRatio <= 0) return;
  getRepos();
});

// 監控 loading 元素是否有出現在可視範圍
observerRef.observe(loading);
