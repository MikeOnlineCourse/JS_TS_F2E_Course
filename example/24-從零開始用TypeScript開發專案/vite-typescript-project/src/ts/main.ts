import "../assets/css/style.css";
import { fetchUserData, fetchRepos } from "../composables/useFetchData";
import { useUiManager } from "../composables/useUiManager";

let editNameText = "MikeCheng1208";

let page = 0;

const { elRef, createUserInfo } = useUiManager();

const { handleRef, userInfo } = createUserInfo();

elRef.titleInput.addEventListener("input", (e) => {
  if (!e.target) return;
  editNameText = (e.target as HTMLInputElement).value;
});

// 切換搜尋名字
elRef.editPenBtn.addEventListener("click", () => {
  handleRef.toggleUserSearchState();
});

// 送出搜尋
elRef.searchBtn.addEventListener("click", () => {
  handleRef.toggleUserSearchState();
  page = 0;
  handleRef.resetReopsList();
  init(editNameText);
});

// 取消搜尋
elRef.closeBtn.addEventListener("click", () => {
  handleRef.toggleUserSearchState();
});

const fetchReposList = async (name: string) => {
  if (page >= userInfo.allPage) {
    handleRef.hideLoading();
    return;
  }
  page += 1;
  const resReopsArr = await fetchRepos({ name, page });
  handleRef.renderCard(resReopsArr);
  if (resReopsArr.length < 10) {
    handleRef.hideLoading();
  }
};

// 監測 loading 元件是否出現在可視範圍中
const intersectionObserver = new IntersectionObserver((entries) => {
  if (entries[0].intersectionRatio <= 0) return;
  fetchReposList(editNameText);
});
// 監聽 loading 元件
intersectionObserver.observe(elRef.loading);

// 初始化
const init = async (name: string) => {
  try {
    const res = await fetchUserData(name);
    userInfo.userName = res.userName as string;
    userInfo.avatarUrl = res.avatarUrl as string;
    userInfo.updatedAt = res.updatedAt as string;
    userInfo.publicRepos = res.publicRepos as number;
    userInfo.allPage = res.allPage as number;
    handleRef.serTitleName();
    handleRef.setAvatar();

    // 取得 Repo 列表
    fetchReposList(name);
  } catch (error) {
    if (typeof error === "object") {
      const err = error as Partial<TfetchUserDataType>;
      userInfo.userName = err.userName as string;
      userInfo.avatarUrl = err.avatarUrl as string;
    }
    console.error("ERROR", error);
  }
};

init(editNameText);
