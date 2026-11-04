import axios from "axios";

const MovieInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export { MovieInstance };


// https://api.themoviedb.org/3/trending/all/week?api_key=95e60f6649058f7e6f8b475156801f12
