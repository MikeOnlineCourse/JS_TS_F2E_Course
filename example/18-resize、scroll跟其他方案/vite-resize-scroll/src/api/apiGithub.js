import axios from "axios";

const gitHubRequest = axios.create({
  baseURL: "https://api.github.com/",
});

export const apiGetUserData = (name = "MikeCheng1208") => gitHubRequest.get(`/users/${name}`);

export const apiGetRepos = (name = "MikeCheng1208", page = 1, perPage = 10) =>
  gitHubRequest.get(`/users/${name}/repos?page=${page}&per_page=${perPage}&sort=pushed`);
