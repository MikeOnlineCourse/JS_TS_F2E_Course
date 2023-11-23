const loadingRef = document.querySelector(".loading") as HTMLElement;
const contentRef = document.querySelector(".content") as HTMLElement;

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
