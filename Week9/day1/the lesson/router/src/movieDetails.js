import React from 'react';
import {connect} from 'react-redux';
const movieDetails = ({selectedMovie})=>{
    if(!selectedMovie){
        return(
            <div id='detail-container'>
                <h1>Movie</h1>
                <div id='propert'>
                    <p>Select Movie</p>
                </div>
            </div>
        )
    }else{
        return(
            <div id='detail-container'>
                <h2>Movie</h2>
                <div id='propert'>
                    <p>Title:{selectedMovie.title}</p>
                    <p>Release data:{selectedMovie.releaseDate}</p>
                    <p>Rating:{selectedMovie.rating}</p>

                </div>

            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        selectedMovie:state.selectedMovie
    }
}
export default connect(mapStateToProps)(movieDetails);