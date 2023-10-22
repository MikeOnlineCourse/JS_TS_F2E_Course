import "../css/normalize.css";
import "../css/style.css";
import { routerQueryReplace, routerQueryPush, routerQueryRemove, getParams } from "./utils/url";
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
  console.log(5);
  return new Promise((resolve) => setTimeout(resolve, 0));
};

// 抓取產品資料
const fetchProducts = async () => {
  try {
    const tag = getParams().get("tag");
    const child = getParams().get("child");
    const params = {};
    if (tag) params.tag = tag;
    if (child) params.child = child;
    const res = await apiGetTagsProduct(params);

    productsArr = res.data;
    console.log(4);
  } catch (error) {
    console.log(error);
  }
};

// 第二層選單渲染
const tagChildRender = () => {
  tagsChildHtml = "";
  const tagQuery = getParams().get("tag");
  const childQuery = getParams().get("child");
  const child = tagsArr.filter((item) => item.id === tagQuery);
  child.forEach((childItem) => {
    childItem.child.forEach((item) => {
      tagsChildHtml += `
        <a class="${childQuery === item.id ? "active" : ""}" data-key="${item.id}">${item.name}</a>
      `;
    });
  });
  tagChild.innerHTML = tagsChildHtml;
  console.log(3);
  return new Promise((resolve) => setTimeout(resolve, 0));
};

// 第一層選單渲染
const tagsRender = () => {
  tagsHtml = "";
  const tagQuery = getParams().get("tag");
  tagsArr.forEach((item) => {
    tagsHtml += `
        <a class="${tagQuery === item.id ? "active" : ""}" data-key="${item.id}">${item.name}</a>
    `;
  });
  tagParent.innerHTML = tagsHtml;
  console.log(2);
  return new Promise((resolve) => setTimeout(resolve, 0));
};

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
const routeCheck = () => {
  if (window.location.search === "") {
    routerQueryReplace("tag=frontEnd");
  }
  return new Promise((resolve) => setTimeout(resolve, 0));
};

// 抓完產品資料後跟者渲染
const fetchProductsRender = async () => {
  await fetchProducts(); // 抓取產品資料
  await productsRender(); // 產品列表渲染
};

// 第二層 tag event listener
const addTagChildListener = () => {
  const tagChildAll = document.querySelectorAll(".child > a");
  for (let i = 0; i < tagChildAll.length; i++) {
    tagChildAll[i].addEventListener("click", async (e) => {
      loading.show();
      const tagKey = e.target.attributes["data-key"].value;
      tagChildAll.forEach((item) => item.classList.remove("active"));
      e.target.classList.add("active");
      routerQueryPush(`child=${tagKey}`);
      await fetchProductsRender(); // 抓產品資料以及渲染
      loading.hidden();
    });
  }
};

// 第一層 tag event listener
const addTagListener = () => {
  const tagParentAll = document.querySelectorAll(".parent > a");
  for (let i = 0; i < tagParentAll.length; i++) {
    tagParentAll[i].addEventListener("click", async (e) => {
      loading.show();
      const tagKey = e.target.attributes["data-key"].value;
      routerQueryPush(`tag=${tagKey}`);
      tagParentAll.forEach((item) => item.classList.remove("active"));
      e.target.classList.add("active");
      routerQueryRemove("child"); // 每次切換先移除第二層的 tag 選取
      await tagChildRender(); // 第二層渲染
      await fetchProductsRender(); // 抓產品資料以及渲染
      addTagChildListener(); // 第二層 event listener
      loading.hidden();
    });
  }
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
