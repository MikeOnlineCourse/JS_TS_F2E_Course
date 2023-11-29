import axios from "axios";

const gitHubRequest = axios.create({
  baseURL: "https://api.github.com/",
});

export const apiGetUserData = (name: string)=> {
  return gitHubRequest.get(`/users/${name}`);
};

export const apiGetRepos = (name: string, page: number, per_page: number) => {
  return gitHubRequest.get(`/users/${name}/repos?page=${page}&per_page=${per_page}&sort=pushed`);
};
