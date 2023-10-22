import { setStoredJwt, createUrl, post, get, isStoredJwt } from "./api-client";

export const signUp = async (username: string, password: string) => {
  try {
    const result = await post(createUrl("/api/signup"), {
      username,
      password,
      firstName: "Demo",
      lastName: "Amazon",
    });
    if (!result) {
      return alert("Could not sign up!");
    }
    setStoredJwt(result.data.accessToken);
    return me();
  } catch (error) {
    console.log(error);
  }
};

export const me = async () => {
  return isStoredJwt() ? await (await get(createUrl("/api/me")))?.data : null;
};

export const login = async (username: string, password: string) => {
  try {
    const result = await post(createUrl("/api/login"), {
      username,
      password,
    });
    if (!result) {
      return alert("Could not login!");
    }
    setStoredJwt(result.data.accessToken);
    return me();
  } catch (error) {
    console.log(error);
  }
};
