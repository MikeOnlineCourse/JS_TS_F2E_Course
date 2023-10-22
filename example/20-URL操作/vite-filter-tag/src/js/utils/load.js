const loadingRef = document.querySelector(".loading");
const contentRef = document.querySelector(".content");

const loading = {
  show: () => {
    contentRef.innerHTML = "";
    loadingRef.classList.remove("hidden");
  },
  hidden: () => {
    loadingRef.classList.add("hidden");
  },
};

export default loading;
