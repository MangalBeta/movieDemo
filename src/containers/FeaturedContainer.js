import React, { Component } from 'react';
import { FeaturedList, DisplayMsg} from '../components';
import { connect } from 'react-redux';
import { fetchMovieList, searchMovieList ,getFeaturedList,removeToFevorite} from '../actions';

class FeaturedContainer extends Component {

  componentWillMount() {
     if(!this.props.params.keyword){
      const {dispatch} = this.props;
      dispatch(getFeaturedList());
     }
  }

  componentWillReceiveProps(nextProps) {
    
  }

removeToFevorite(movie){
      const {dispatch} = this.props;
      dispatch(removeToFevorite(movie));
}
  render() {
console.log("Dddd",this.props.featuredMovies)
    const {featuredList} = this.props.featuredMovies;
    if(featuredList && featuredList.length > 0) {
      return(
            <FeaturedList featuredsMovies={featuredList} 
				removeToFevorite={this.removeToFevorite.bind(this)}
            />
      );
    } else {
      return (<DisplayMsg />);
    }
  }
}

function mapStateToProps(state, ownProps){
  const {featuredMovies} = state;
  const {featuredList} = featuredMovies;

  const keyword = ownProps.params.keyword;
  return {featuredMovies, keyword}
}

export default connect(mapStateToProps)(FeaturedContainer);
