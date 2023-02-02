import axios from "axios";

export const api = axios.create({
  baseURL: "https://gogoanime2.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Key": "3071a7bb37mshe1bfe89a863be35p147318jsn61abe39a29e5",
    "X-RapidAPI-Host": "gogoanime2.p.rapidapi.com",
  },
});
