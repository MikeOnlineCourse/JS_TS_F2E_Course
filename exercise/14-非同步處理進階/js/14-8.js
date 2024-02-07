/**
 * API https://vue-lessons-api.vercel.app/auth/registered
 *  username
 *  password
 *  email
 *  sex
 *  age
 *  terms
 */

// input
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const email = document.querySelector("#email");
const age = document.querySelector("#age");
const sex = document.querySelectorAll("input[name='sex']");
const terms = document.querySelector("#terms");

// error message
const usernameError = document.querySelector(".username-error");
const passwordError = document.querySelector(".password-error");
const emailError = document.querySelector(".email-error");

// 送出按鈕
const btn = document.querySelector(".btn");
// 註冊的頁面
const loginPage = document.querySelector("#login-page");
// 註冊完成頁面
const successPage = document.querySelector("#success-page");
