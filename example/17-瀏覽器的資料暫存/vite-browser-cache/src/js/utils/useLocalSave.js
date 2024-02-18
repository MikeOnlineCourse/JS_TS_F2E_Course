import Cookies from "js-cookie";

const localstorage = {
  set: (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  },
  get: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },
  remove: (key) => {
    if (key === "all") {
      localStorage.clear();
      return;
    }
    localStorage.removeItem(key);
  },
};

const cookie = {
  set: (key, data) => {
    Cookies.set(key, JSON.stringify(data));
  },
  get: (key) => {
    if (key === "all") {
      return Cookies.get();
    }
    if (!Cookies.get(key)) return {};
    return JSON.parse(Cookies.get(key));
  },
  remove: (key) => {
    if (key === "all") {
      const NodeList = Object.keys(Cookies.get());
      NodeList.forEach((el) => Cookies.remove(el));
      window.location.replace("/");
      return;
    }
    Cookies.remove(key);
  },
};

export { localstorage, cookie };
