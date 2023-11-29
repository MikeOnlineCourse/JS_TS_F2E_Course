const getElements = () => {
  const avatar = document.querySelector(".avatar") as HTMLImageElement;
  const titleName = document.querySelector(".title_name") as HTMLHeadingElement;
  const titleInput = document.querySelector(".title_input") as HTMLInputElement;
  const editPenBtn = document.querySelector(".edit_pen_btn") as HTMLAnchorElement;
  const editBoxBtn = document.querySelector(".edit_box_btn") as HTMLAnchorElement;
  const searchBtn = document.querySelector(".search_btn") as HTMLAnchorElement;
  const closeBtn = document.querySelector(".close_btn") as HTMLAnchorElement;
  const cardBox = document.querySelector(".card_box") as HTMLUListElement;
  const loading = document.querySelector(".loading") as HTMLDivElement;
  return {
    avatar,
    titleName,
    titleInput,
    editPenBtn,
    editBoxBtn,
    searchBtn,
    closeBtn,
    cardBox,
    loading,
  };
};

export const useUiManager = () => {

  const { loading, avatar, titleName, titleInput, editPenBtn, editBoxBtn, searchBtn, closeBtn, cardBox } = getElements();

  const createUserInfo = () => {

    const userInfo: TfetchUserDataType = {
      userName: "",
      avatarUrl: "",
      updatedAt: "",
      publicRepos: 0,
      allPage: 0,
    };

    let html = "";

    const handleRef = {
      serTitleName() {
        titleName.innerText = userInfo.userName;
      },
      setAvatar() {
        avatar.src = userInfo.avatarUrl;
      },
      setTitleInput() {
        titleInput.value = userInfo.userName;
      },
      renderCard(reopsList: TApiReopsRes[]) {
        for (const item of reopsList) {
          html += `
          <li>
            <h1 class="title">${item.name}</h1>
            <h2 class="description">${item.description}</h2>
            <a class="url" href="${item.html_url}" target="_blank"> ${item.html_url} </a>
            <div class="star_box">
              <img class="star_icon" src="../assets/star.svg" alt="" />
              ${item.stargazers_count}
            </div>
          </li>
          `;
        }
        cardBox.innerHTML = html;
      },
      toggleTitle() {
        titleName.classList.toggle("hide");
      },
      toggleEdit() {
        titleInput.classList.toggle("hide");
        this.setTitleInput();
      },
      toggleEditIcon() {
        editPenBtn.classList.toggle("hide");
        editBoxBtn.classList.toggle("hide");
      },
      hideLoading() {
        loading.classList.add("hide");
      },
      showLoading() {
        loading.classList.remove("hide");
      },
      toggleUserSearchState() {
        this.toggleTitle();
        this.toggleEdit();
        this.toggleEditIcon();
      },
      resetReopsList() {
        html = "";
        cardBox.innerHTML = "";
        userInfo.userName = "";
        userInfo.avatarUrl = "";
        this.serTitleName();
        this.setAvatar();
        this.showLoading();
      },
    };

    return { userInfo, handleRef };
  };

  return {
    elRef: {
      avatar,
      titleName,
      titleInput,
      editPenBtn,
      editBoxBtn,
      searchBtn,
      closeBtn,
      cardBox,
      loading,
    },
    createUserInfo,
  };
};
