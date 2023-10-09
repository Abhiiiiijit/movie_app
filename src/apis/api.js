import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

// OR
// const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGQxMjVjODUxMzM5ODI0ODNjZmFiMjNkMTIzYTdkNSIsInN1YiI6IjY1MGFkNjI5ODFjN2JlMDEzYWYxNzEwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EEE-utAFP4U_5_TKaWaCGOp14k3xUy0suSiyYTIqRXIz";

// Check on tmdb Website
const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};
//tmdb API Calling to get the data of Movies and TV Shows
export const fetchDataFromApi = async (url, params) => {
  try {
    // Getting Result and Configuration like headers and parameter
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
