import axios from "axios";

const request = axios.create({
  baseURL: "https://vue-lessons-api.vercel.app/",
});

export const apiPostRegistered = (req) => request.post("/auth/registered", req);
