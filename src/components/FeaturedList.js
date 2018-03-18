import React , { Component } from 'react';
import Poster from './Poster';
import {Link} from 'react-router';
import { Grid, Row, Col,Button} from 'react-bootstrap';

export default class MovieList extends Component{
removeToFevorite(movie){
    this.props.removeToFevorite(movie)
    alert("Succesfully deleted to fevorite")

   } 
  render() {
  const style={
	display: 'flex',
	flexWrap: 'wrap'
  }

       let featuredMiovies =    this.props.featuredsMovies.map( (movie) => {
        return(
            <Col xs={6} sm={4} md={2} key={movie.id} style={{"padding":"2px"}}>
              <Link to={'/movie/'+movie.id} >

            <Poster 
            info 
            id={movie.id} 
           	 path={movie.poster_path}
             title={movie.title} 
             voteAverage={movie.vote_average}
             release_date={movie.release_date} responsive />
             </Link>
             <Col xs={6} sm={4} md={2}  style={{"padding":"5px"}}>
             <Button 
             onClick={this.removeToFevorite.bind(this,movie.id)}
             bsStyle="danger" bsSize="large" 
             >Remove from Fevorite</Button>
             </Col>
                       </Col>
        );
    });

    return(
      <Grid fluid={false}>
        <Row style={style}>
          {featuredMiovies}
        </Row>
      </Grid>
    );
  }
}
