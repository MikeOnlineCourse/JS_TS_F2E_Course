// 非同步(Asynchronous)函式
import axios, { AxiosResponse } from "axios";

type ApiResponse<T> = {
  status: number;
  data: T;
}; // 如果使用 Axios 就不需要自己定義，因為 Axios 已經定義好了，AxiosResponse<T> 就是一個泛型

type TPhotoList = {
  url: string;
};

async function apiRequest<T>(url: string): Promise<ApiResponse<T>> {
  const response = await fetch(url);
  const data = await response.json() as T;
  return {status: response.status, data}
}

apiRequest<TPhotoList[]>("https://vue-lessons-api.vercel.app/photo/list").then((res) => {
  console.log("API then=>", res.data);
});

const res = await apiRequest<TPhotoList[]>("https://vue-lessons-api.vercel.app/photo/list")
console.log("API await=>", res.data);


axios.get<TPhotoList[]>("https://vue-lessons-api.vercel.app/photo/list").then((res: AxiosResponse<TPhotoList[]>) => {
  console.log("axios=>", res.data);
});

function apiGetPhotoList(): Promise<AxiosResponse<TPhotoList[]>> {
  return axios.get("https://vue-lessons-api.vercel.app/photo/list");
}

const resPhoto = await apiGetPhotoList();
console.log("photo list=>", resPhoto.data);
