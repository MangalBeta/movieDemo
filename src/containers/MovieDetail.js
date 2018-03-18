import React, { Component } from 'react';
import { MoviePoster} from '../components';
import { Grid, Row, Col} from 'react-bootstrap/lib';
import { MovieInfo, Poster } from '../components';
import { connect } from 'react-redux';
import { fetchMovieDetail} from '../actions';

class MovieDetail extends Component {

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchMovieDetail(this.props.params.id));
  }

  componentWillReceiveProps(nextProps) {
     const {dispatch} = this.props;
     if(nextProps.params.id && this.props.params.id !== nextProps.params.id) {
         dispatch(fetchMovieDetail(nextProps.params.id));
      }
  }



  render() {
    const {movie, isFetcing_movie} = this.props;

    if(isFetcing_movie) {
      return <p>loading...</p>
    }
    if(movie.hasOwnProperty('id')) {
      return(
        <Grid fluid={false}>
          <Row>
            <Col xs={12} sm={6} md={3} style={{'padding':'2px'}}>
              <Poster id={movie.id} path={movie.poster_path} responsive />
            </Col>
            <Col xs={12} sm={6} md={8}>
              <MovieInfo movie={movie}/>
            </Col>
          </Row>
        </Grid>
      );
    } else
      return null;

  }
}

function mapStateToProps(state){
  const {movieDetail} = state;
  const {isFetcing_movie, item: movie, error_movie} = movieDetail;

  return {isFetcing_movie, movie, error_movie}
}

export default connect(mapStateToProps)(MovieDetail);
