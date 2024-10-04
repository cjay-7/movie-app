import axios from "axios";

const API_KEY = "c45a857c193f6302f2b5061c3b85e743";

export const fetchPopularMovies = () => async (dispatch) => {
  dispatch({ type: "SET_LOADING" });
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
  dispatch({ type: "FETCH_POPULAR_MOVIES", payload: res.data.results });
};

export const fetchTopRatedMovies = () => async (dispatch) => {
  dispatch({ type: "SET_LOADING" });
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  );
  dispatch({ type: "FETCH_TOP_RATED_MOVIES", payload: res.data.results });
};

export const fetchUpcomingMovies = () => async (dispatch) => {
  dispatch({ type: "SET_LOADING" });
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
  );
  dispatch({ type: "FETCH_UPCOMING_MOVIES", payload: res.data.results });
};

export const fetchMovieDetails = (movie_id) => async (dispatch) => {
  dispatch({ type: "SET_LOADING" });
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
  );
  dispatch({ type: "FETCH_MOVIE_DETAILS", payload: res.data });
};

export const fetchSearchResults = (query) => async (dispatch) => {
  dispatch({ type: "SET_LOADING" });
  const res = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`
  );
  dispatch({ type: "FETCH_POPULAR_MOVIES", payload: res.data.results });
};
