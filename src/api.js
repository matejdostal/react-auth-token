const getToken = async (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "a" && password === "b") {
        const token = new Date().getTime().toString();
        resolve(token);
      } else {
        const error = new Error("Invalid username or password");
        reject(error);
      }
    }, 100);
  });
};

export { getToken };
