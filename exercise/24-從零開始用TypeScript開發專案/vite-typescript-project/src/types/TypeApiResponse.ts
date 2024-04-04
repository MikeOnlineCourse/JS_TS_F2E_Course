// api 回傳的使用者資料類型
type TApiUserDataRes = {
  login: string;
  avatar_url: string;
  public_repos: number;
  updated_at: string;
};

// 自己定義的使用者資料類型
type TfetchUserDataType = {
  userName: string;
  avatarUrl: string;
  updatedAt: string;
  publicRepos: number;
  allPage: number;
};

// Repos列表資料類型
type TApiReopsRes = {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
};
