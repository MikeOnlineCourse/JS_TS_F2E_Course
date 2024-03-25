// 非同步(Asynchronous)函式
import axios from "axios";

async function apiRequest(url) {
  const response = await fetch(url);
  const data = await response.json();
  return {
    status: response.status,
    data
  }
}

apiRequest("https://vue-lessons-api.vercel.app/photo/list").then((res) => {
  console.log("API then=>", res);
});

const res = await apiRequest("https://vue-lessons-api.vercel.app/photo/list")
console.log("API await=>", res);


axios.get("https://vue-lessons-api.vercel.app/photo/list").then((res) => {
  console.log("axios=>", res);
});

function apiGetPhotoList() {
  return axios.get("https://vue-lessons-api.vercel.app/photo/list");
}

const resPhoto = await apiGetPhotoList();
console.log("photo list=>", resPhoto);
