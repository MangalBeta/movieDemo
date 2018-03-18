import {URL_LIST,URL_SEARCH, URL_DETAIL, API_KEY, API_KEY_ALT} from '../const';
// action types
export const SEARCH_MOVIE = 'SEARCH_MOVIE';
export const SEARCH_MOVIE_SUCCESS = 'SEARCH_MOVIE_SUCCESS';
export const SEARCH_MOVIE_FAILURE = 'SEARCH_MOVIE_FAILURE';
export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';
export const RESET_MOVIES = 'RESET_MOVIES';
export const FETCH_MOVIE = 'FETCH_MOVIE';
export const ENTER_SEARCH_TEXT = "ENTER_SEARCH_TEXT";
export const FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS';
export const FETCH_MOVIE_FAILURE = 'FETCH_MOVIE_FAILURE';
export const ADD_FEVORITE_SUCCESS = 'ADD_FEVORITE_SUCCESS';
export const GET_FEVORITE_LIST_SUCCESS ="GET_FEVORITE_LIST_SUCCESS";
export const REMOVE_FEVORITE_SUCCESS = "REMOVE_FEVORITE_SUCCESS"
function searchMovie(searchText) {
  return {
    type: SEARCH_MOVIE,
    searchText
  };
}

function searchMovieSuccess(data, keyword) {
  return {
    type: SEARCH_MOVIE_SUCCESS,
    data,
    keyword
  };
}

function searchMovieFail(error) {
  return {
    type: SEARCH_MOVIE_FAILURE,
    error
  };
}

function fetchMovies() {
  return {
    type: FETCH_MOVIES
  };
}

function fetchMoviesSuccess(data) {
  return {
    type: FETCH_MOVIES_SUCCESS,
    data
  };
}

function fetchMoviesFail(error) {
  return {
    type: FETCH_MOVIES_FAILURE,
    error
  };
}

function fetchMovie() {
  return {
    type: FETCH_MOVIE
  };
}

function fetchMovieSuccess(data) {
  return {
    type: FETCH_MOVIE_SUCCESS,
    data
  };
}

function fetchMovieFail(error) {
  return {
    type: FETCH_MOVIE_FAILURE,
    error
  };
}

function addToFevoriteSuccess (movie) {
  return {
     type: ADD_FEVORITE_SUCCESS,
    movie
  }
}
function removeToFevoriteSuccess (movie) {
   return {
     type: REMOVE_FEVORITE_SUCCESS,
    movie
  }
}
function getFeaturedListSuccess () {
  return {
     type: GET_FEVORITE_LIST_SUCCESS,
  }
}


export function searchMovieList(keyword){
  let url = URL_SEARCH + keyword + API_KEY_ALT;
  return function(dispatch){
    dispatch(searchMovie())
    return fetch(url)
      .then(response => response.json())
      .then(json => json.results)
      .then(data => dispatch(searchMovieSuccess(data,keyword)))
      .catch(error => dispatch(searchMovieFail(error)))
  }
}

export function fetchMovieList(option){
  let url;
  if(option) url = URL_LIST + API_KEY + '&with_cast=' + option;
  else url = URL_LIST + API_KEY;
  return function(dispatch){
    dispatch(fetchMovies());
    return fetch(url)
      .then(response => response.json())
      .then(json => json.results)
      .then(data => dispatch(fetchMoviesSuccess(data)))
      .catch(error => dispatch(fetchMoviesFail(error)))
  }
}

export function fetchMovieDetail(id){
  const url_movie = URL_DETAIL + id + API_KEY;
  return function(dispatch){
    dispatch(fetchMovie())
    return fetch(url_movie)
      .then(response => response.json())
      .then(data => dispatch(fetchMovieSuccess(data)))
      .catch(error => dispatch(fetchMovieFail(error)))
  }
}

export function addToFevorite(movie){
  return function(dispatch){
    dispatch(addToFevoriteSuccess(movie))
  }
}
export function removeToFevorite(movie){
  return function(dispatch){
    dispatch(removeToFevoriteSuccess(movie))
  }
}
export function getFeaturedList(){
  return function(dispatch){
    dispatch(getFeaturedListSuccess())
  }
}