import axios from "axios";

const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";
const baseUrl = "https://api.themoviedb.org/3";
const apiKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjFkMWYxYTM1OTQ4MGVlYTYxYzM2OWNiNzdjOTQ0MyIsIm5iZiI6MTQ2MzY3MDU3My42MTUsInN1YiI6IjU3M2RkNzJkOTI1MTQxM2RmYzAwMDRmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rLvJjEoALLAmZiFh98KMlqNICSsZEv-ph83gcelX9uA";
const headers = {
  accept: "application/json",
  Authorization: `Bearer ${apiKey}`,
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`${baseUrl}/trending/movie/day`, {
    headers,
  });
  return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`${baseUrl}/movie/${movieId}`, {
    headers,
  });
  return response.data;
};

export const fetchMovieCast = async (movieId) => {
  const response = await axios.get(`${baseUrl}/movie/${movieId}/credits`, {
    headers,
  });
  return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await axios.get(`${baseUrl}/movie/${movieId}/reviews`, {
    headers,
  });
  return response.data.results;
};

export const fetchMovieVideos = async (movieId) => {
  const response = await axios.get(`${baseUrl}/movie/${movieId}/videos`, {
    headers,
  });
  return response.data.results;
};

export const fetchMovieImages = async (movieId) => {
  const response = await axios.get(`${baseUrl}/movie/${movieId}/images`, {
    headers,
  });
  return response.data.backdrops;
};

export const fetchMovieCredits = async (movieId) => {
  const response = await axios.get(`${baseUrl}/movie/${movieId}/credits`, {
    headers,
  });
  return response.data.cast;
};

export const fetchMovieSimilar = async (movieId) => {
  const response = await axios.get(`${baseUrl}/movie/${movieId}/similar`, {
    headers,
  });
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await axios.get(`${baseUrl}/search/movie`, {
    headers,
    params: {
      query,
    },
  });
  return response.data.results;
};

export const getImageUrl = (path) => {
  return path
    ? `${imageBaseUrl}${path}`
    : "<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>";
};
