import axios from "axios";

const request = axios.create({
  baseURL: "https://vue-lessons-api.vercel.app/",
});

export const apiGetCityList = () => request.get("/city/list");
