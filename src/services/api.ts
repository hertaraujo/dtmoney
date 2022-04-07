import axios from "axios";

let URL = "http://localhost:3000/api";
if (process.env.NODE_ENV === "production")
  URL = "http://dtm-finance.netlify.app/api";

export const api = axios.create({
  baseURL: URL,
  // headers: {}
});
