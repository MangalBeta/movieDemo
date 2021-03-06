import React, { Component } from 'react';
import { MovieList, DisplayMsg} from '../components';
import { connect } from 'react-redux';
import { fetchMovieList, searchMovieList,addToFevorite } from '../actions';

class MovieContainer extends Component {

  componentDidMount() {
     if(!this.props.params.keyword){
      const {dispatch} = this.props;
      dispatch(fetchMovieList());
     }
  }

  componentWillReceiveProps(nextProps) {
     const {dispatch} = this.props;
       if(nextProps.params.keyword && this.props.params.keyword !== nextProps.params.keyword) {
           dispatch(searchMovieList(nextProps.params.keyword));
        }
  }


  shouldComponentUpdate(nextProps, nextState){
      if(this.props.movies !== nextProps.movies) {
        return true;
      }
      return false;
  }
addToFevorite(movie){
      const {dispatch} = this.props;
      dispatch(addToFevorite(movie));
}
  render() {

    const {movies} = this.props;
    if(movies.length > 0) {
      return(
            <MovieList 
            addToFevorite={this.addToFevorite.bind(this)}
            movies={movies} />
      );
    } else {
      return (<DisplayMsg />);
    }
  }
}

function mapStateToProps(state, ownProps){
  const {movieList} = state;
  const {isFetcing_movieList, items: movies, error_movieList} = movieList;

  const keyword = ownProps.params.keyword;
  return {movies, keyword}
}

export default connect(mapStateToProps)(MovieContainer);
