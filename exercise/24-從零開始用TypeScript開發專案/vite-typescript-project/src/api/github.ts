import axios, { AxiosResponse } from "axios";

const gitHubRequest = axios.create({
  baseURL: "https://api.github.com/",
});

export const apiGetUserData = (
  name: string
): Promise<AxiosResponse<TApiUserDataRes>> => {
  return gitHubRequest.get(`/users/${name}`);
};

export const apiGetRepos = (
  name: string,
  page: number,
  per_page: number
): Promise<AxiosResponse<TApiReopsRes[]>> => {
  return gitHubRequest.get(
    `/users/${name}/repos?page=${page}&per_page=${per_page}&sort=pushed`
  );
};
