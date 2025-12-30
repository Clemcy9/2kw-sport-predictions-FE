// src/utils/auth.js
export const hasAccount = () =>
  localStorage.getItem("hasAccount") === "true";

export const isLoggedIn = () =>
  localStorage.getItem("isLoggedIn") === "true";

export const justLoggedIn = () => 
   sessionStorage.getItem("justLoggedIn");

export const logInEmail = () => 
   localStorage.getItem(("userEmail"));

export const userToken = () => 
   localStorage.getItem("authToken");

