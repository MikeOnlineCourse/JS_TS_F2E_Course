const useGetRef = () => {
  const username = document.querySelector("#username");
  const password = document.querySelector("#password");
  const usernameError = document.querySelector(".username-error");
  const passwordError = document.querySelector(".password-error");
  const terms = document.querySelector("#terms");
  const btn = document.querySelector(".btn");
  const loginPage = document.querySelector("#login-page");
  const successPage = document.querySelector("#success-page");
  const logup = document.querySelector("#logup");

  return {
    username,
    password,
    usernameError,
    passwordError,
    terms,
    btn,
    loginPage,
    successPage,
    logup,
  };
};

export { useGetRef };
