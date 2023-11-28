import { isAxiosError } from "axios";
import { apiGetUserData, apiGetRepos } from "../api";
import notFoundJpg from "../assets/notFound.jpg";

const limit = 10;
let repoList: TApiReopsRes[] = [];

// 取得user資料
export const fetchUserData = async (name: string): Promise<Partial<TfetchUserDataType>> => {
  try {
    const ud = await apiGetUserData(name);
    const { login, avatar_url, public_repos, updated_at } = ud.data;
    return {
      userName: login,
      avatarUrl: avatar_url,
      updatedAt: updated_at,
      publicRepos: public_repos,
      allPage: Math.ceil(public_repos / limit),
    };
  } catch (error) {
    if (!isAxiosError(error)) return {};
    if (error.response && error.response.status === 404) {
      return {
        avatarUrl: notFoundJpg,
        userName: "This user is not found!",
      };
    }
    return {};
  }
};

// 取得Repo列表
export const fetchRepos = async ({ name, page }: { name: string; page: number }): Promise<TApiReopsRes[]> => {
  if (page === 1) repoList = [];
  const repos = await apiGetRepos(name, page, limit);
  repoList = [...repoList, ...repos.data];
  return repoList;
};
