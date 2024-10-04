const initialState = {
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    movieDetails: {},
    loading: false,
  };
  
  export default function movieReducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_POPULAR_MOVIES':
        return { ...state, popularMovies: action.payload, loading: false };
      case 'FETCH_TOP_RATED_MOVIES':
        return { ...state, topRatedMovies: action.payload, loading: false };
      case 'FETCH_UPCOMING_MOVIES':
        return { ...state, upcomingMovies: action.payload, loading: false };
      case 'FETCH_MOVIE_DETAILS':
        return { ...state, movieDetails: action.payload, loading: false };
      case 'SET_LOADING':
        return { ...state, loading: true };
      default:
        return state;
    }
  }
  