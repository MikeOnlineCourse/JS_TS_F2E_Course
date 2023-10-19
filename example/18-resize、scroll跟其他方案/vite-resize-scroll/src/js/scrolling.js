import "../css/normalize.css";
import "../css/scrolling.css";
import star from "../images/star.svg";
import { apiGetRepos } from "../api";

let repos = []; // repo列表
let html = "";
const limit = 100; // 每頁數量
const cardBox = document.querySelector(".card_box");
let cards = null;

const scrollHandler = () => {
  const windowCenter = window.innerHeight / 2;
  cards.forEach((card) => {
    const elTop = card.getBoundingClientRect().top;
    if (windowCenter > elTop) {
      card.classList.add("show");
    } else {
      card.classList.remove("show");
    }
  });
  // 到底部時，全部顯示
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
    cards.forEach((card) => {
      card.classList.add("show");
    });
  }
};

const renderRepos = () => {
  html = "";
  repos.forEach((item) => {
    html += `
      <li class="card">
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
  cards = document.querySelectorAll(".card");
  scrollHandler();
};

const getRepos = async () => {
  try {
    const res = await apiGetRepos("MikeCheng1208", 1, limit);
    repos = [...repos, ...res.data];
    renderRepos();
  } catch (error) {
    console.log(error);
  }
};

const fetchInit = () => {
  getRepos();
  window.addEventListener("scroll", scrollHandler);
};

// 初始化
fetchInit();
