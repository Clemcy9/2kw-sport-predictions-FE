// src/utils/auth.js
export const hasAccount = () =>
  localStorage.getItem("hasAccount") === "true";

export const isLoggedIn = () =>
  localStorage.getItem("isLoggedIn") === "true";
