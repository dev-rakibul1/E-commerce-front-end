export const setToLocalStorage = (key, token) => {
  //   console.log(token);
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.setItem(key, token);
};

export const getFromLocalStorage = (key) => {
  //   console.log(token);
  if (!key || typeof window === "undefined") {
    return "";
  }

  return localStorage.getItem(key);
};
