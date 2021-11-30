import React from 'react';
import {connect} from 'react-redux';
//import movieDetails from './movieDetails';
import {selectMovie} from './action';
const movieList=({movies,selectMovie})=>{
    const listItems = movies.map((movie)=>{
        return(
            <div key={movie.title}>
               <span>{movie.title}</span>
               <button onClick={()=>selectMovie()}>Details</button>
            </div>
        )
    })
    return(
        <div id='list-component'>
          <h2>Movie List</h2>
          <ul>
              {listItems}
          </ul>
        </div>
    )

}
const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

const mapDispatchToProps = {
    selectMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(movieList)