/**
 * API https://vue-lessons-api.vercel.app/auth/registered
 *  username
 *  password
 *  email
 *  sex
 *  age
 *  terms
 */

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
