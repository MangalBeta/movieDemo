import {combineReducers} from 'redux'
import { routerReducer } from 'react-router-redux'
import {FETCH_MOVIES, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE,
  FETCH_MOVIE, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_FAILURE,
  SEARCH_MOVIE, SEARCH_MOVIE_SUCCESS, SEARCH_MOVIE_FAILURE,
  ENTER_SEARCH_TEXT,ADD_FEVORITE_SUCCESS,REMOVE_FEVORITE_SUCCESS} from '../actions'

const defaultStateList = {
  isFetching: false,
  items:[],
  error:{}
};

//movie list reducer
const movieList = (state = defaultStateList, action) => {
  switch (action.type){
    case FETCH_MOVIES:
    case SEARCH_MOVIE:
      return {...state, isFetching:true};
    case FETCH_MOVIES_SUCCESS:
    case SEARCH_MOVIE_SUCCESS:
      return {...state, isFetching:false, items:action.data};
    case FETCH_MOVIES_FAILURE:
    case SEARCH_MOVIE_FAILURE:
      return {...state, isFetching:false, error:action.data};
    default:
      return state;
  }
};


//Movie details reducer
const defaultState = {
  isFetching: false,
  item:{},
  error:{}
};

const movieDetail = (state = defaultState, action) => {
  switch (action.type){
    case FETCH_MOVIE:
      return Object.assign({}, state, {
        isFetching:true
      });
    case FETCH_MOVIE_SUCCESS:
      return Object.assign({}, state, {
        isFetching:false,
        item:action.data
      });
    case FETCH_MOVIE_FAILURE:
      return Object.assign({}, state, {
        isFetching:false,
        error:action.data
      });
    default:
      return state;
  }
};
//Featred Movie 
const defaultFeaturedState = {
  isFetching: false,
  featuredList:[],
  error:{}
};
const featuredMovies = (state = defaultFeaturedState, action) => {
  switch (action.type){
    
    case ADD_FEVORITE_SUCCESS:
      return {...state, featuredList: [...state.featuredList, action.movie]}
     case REMOVE_FEVORITE_SUCCESS:
      let newFeaturedList = state.featuredList.filter((movie,index) => {
        return movie.id != action.movie
      })
      
      return {...state, featuredList: newFeaturedList}
    
    default:
      return state;
  }
};


// Search Bar reducer
const input = (state = '', action) => {
  switch (action.type){
    case ENTER_SEARCH_TEXT:
      return Object.assign({}, state, {
        isFetching:true
      });
    default:
      return state;
  }
};

const movieApp = combineReducers({
  movieList,
  movieDetail,
  featuredMovies,
  input,
  routing: routerReducer
});

export default movieApp;
