import "../css/normalize.css";
import "../css/scroll.css";
import star from "../images/star.svg";
import { apiGetRepos } from "../api";

let repos = []; // repo列表
let html = "";
const limit = 10; // 一次取得的repo數量
const cardBox = document.querySelector(".card_box");

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
  try {
    const res = await apiGetRepos("MikeCheng1208", 1, limit);
    repos = res.data;
    renderRepos();
  } catch (error) {
    console.log(error);
  }
};

const fetchInit = () => {
  getRepos();
};

// 初始化
fetchInit();
