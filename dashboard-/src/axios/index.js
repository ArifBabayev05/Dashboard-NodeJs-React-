import axios from "axios";

const HTTP = axios.create({
  baseURL: "http://localhost:2006",
});

export const login = async (formData) =>
  await HTTP.post("/user/signin", formData);

export const register = async (formData) =>
  await HTTP.post("/user/signup", formData);