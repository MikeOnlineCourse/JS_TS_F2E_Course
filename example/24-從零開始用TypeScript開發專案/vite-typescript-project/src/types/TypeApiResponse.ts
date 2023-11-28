type TApiUserDataRes = {
  login: string;
  avatar_url: string;
  public_repos: number;
  updated_at: string;
};

type TfetchUserDataType = {
  userName: string;
  avatarUrl: string;
  updatedAt: string;
  publicRepos: number;
  allPage: number;
};

type TApiReopsRes = {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
};
