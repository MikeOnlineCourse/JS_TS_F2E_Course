/*eslint-disable*/
import "../css/normalize.css";
import "../css/style.css";
import {
  routerQueryReplace,
  routerQueryPush,
  routerQueryRemove,
  getParams,
} from "./utils/url";
import { apiGetTagsList, apiGetTagsProduct } from "../api";
import loading from "./utils/load.js";

const tagParent = document.querySelector(".parent");
const tagChild = document.querySelector(".child");
const content = document.querySelector(".content");
let tagsArr = [];
let productsArr = [];
let tagsHtml = "";
let tagsChildHtml = "";
let productsHtml = "";

// 產品列表渲染
const productsRender = () => {
  productsHtml = "";
  if (productsArr.length === 0) {
    productsHtml = "<h1 class='no_data'>目前尚無任何資料</h1>";
  } else {
    productsArr.forEach((item) => {
      productsHtml += `
        <div class="card">
          <h1>${item.title}</h1>
          <a href="${item.url}" target="_blank">${item.url}</a>
          <p>${item.content}</p>
        </div>
      `;
    });
  }
  content.innerHTML = productsHtml;

  // return Promise
};

// 抓取產品資料
const fetchProducts = async () => {
  const params = {};
  const res = await apiGetTagsProduct(params);
  productsArr = res.data;
};

// 第二層選單渲染
const tagChildRender = () => {};

// 第一層選單渲染
const tagsRender = () => {};

// 抓 tags 所有資料
const fetchTags = async () => {
  try {
    const res = await apiGetTagsList();
    tagsArr = res.data;
    console.log(1);
  } catch (error) {
    console.log(error);
  }
};

// 網址確認
const routeCheck = () => {};

// 抓完產品資料後跟者渲染
const fetchProductsRender = async () => {
  await fetchProducts(); // 抓取產品資料
  await productsRender(); // 產品列表渲染
};

// 第二層 tag event listener
const addTagChildListener = () => {
  const tagChildAll = document.querySelectorAll(".child > a");
};

// 第一層 tag event listener
const addTagListener = () => {
  const tagParentAll = document.querySelectorAll(".parent > a");
};

// 初始化
const init = async () => {
  loading.show();
  await routeCheck(); // 網址確認
  await fetchTags(); // 抓 tags 所有資料
  await tagsRender(); // 第一層 tags 渲染
  await tagChildRender(); // 第二層 tags 渲染
  await fetchProductsRender(); // 抓產品資料以及渲染
  loading.hidden();
  addTagListener();
  addTagChildListener();
};

init();
