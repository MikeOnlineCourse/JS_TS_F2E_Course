import axios from "axios";

const request = axios.create({
  baseURL: "https://vue-lessons-api.vercel.app/",
});

export const apiGetTagsList = () => request.get("/nav/tags");

export const apiGetTagsProduct = (params) =>
  request.get("/nav/tags/product", {
    params,
  });
