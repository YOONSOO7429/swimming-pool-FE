import type * as myInterface from "../assets/interfaces";
import instance from "./instance";

interface Message {
  message: string;
}

export const user = {
  signUp: async (payload: myInterface.User) => {
    const { data } = await instance.post("/api/user/signUp");
    return data;
  },

  signIn: async () => {
    const { data } = await instance.post("/api/user/signIn");
    return data;
  },
};
