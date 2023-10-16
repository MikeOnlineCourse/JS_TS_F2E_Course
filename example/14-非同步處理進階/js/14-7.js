const username = document.querySelector("#username");
const password = document.querySelector("#password");
const email = document.querySelector("#email");
const age = document.querySelector("#age");
const usernameError = document.querySelector(".username-error");
const passwordError = document.querySelector(".password-error");
const emailError = document.querySelector(".email-error");
const sex = document.querySelectorAll("input[name='sex']");
const terms = document.querySelector("#terms");
const btn = document.querySelector(".btn");
const loginPage = document.querySelector("#login-page");
const successPage = document.querySelector("#success-page");

let isrRgistered = false;

const info = {
  username: {
    value: "",
    error: "",
  },
  password: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  sex: {
    value: "",
    error: "",
  },
  age: {
    value: "",
    error: "",
  },
  terms: {
    value: "",
    error: "",
  },
};

const inputUpdate = (e) => {
  // 很基本的寫法
  // let type = e.target.id;
  // if (["boy", "girl"].includes(e.target.id)) {
  //   type = "sex";
  // }

  // 比較簡短的寫法
  const type = ["boy", "girl"].includes(e.target.id) ? "sex" : e.target.id;
  info[type].value = e.target.value;
};

username.addEventListener("input", inputUpdate);
password.addEventListener("input", inputUpdate);
email.addEventListener("input", inputUpdate);
age.addEventListener("input", inputUpdate);
sex[0].addEventListener("input", inputUpdate);
sex[1].addEventListener("input", inputUpdate);
terms.addEventListener("input", inputUpdate);

const errorMessageShow = () => {
  isrRgistered = false;
  if (info.username.error) {
    usernameError.classList.remove("hidden");
    usernameError.textContent = info.username.error;
  }
  if (info.password.error) {
    passwordError.classList.remove("hidden");
    passwordError.textContent = info.password.error;
  }
  if (info.email.error) {
    emailError.classList.remove("hidden");
    emailError.textContent = info.email.error;
  }
};

btn.addEventListener("click", () => {
  if (isrRgistered) return;
  isrRgistered = true;

  const req = {
    username: info.username.value,
    password: info.password.value,
    sex: info.sex.value,
    email: info.email.value,
    age: info.age.value,
    terms: info.terms.value === "on",
  };

  axios
    .post("https://vue-lessons-api.vercel.app/auth/registered", req)
    .then((res) => {
      loginPage.classList.add("hidden");
      successPage.classList.remove("hidden");
    })
    .catch((err) => {
      const errorRes = err.response.data.error_message;
      Object.keys(errorRes).forEach((key) => (info[key].error = errorRes[key]));
      errorMessageShow();
    });
});
