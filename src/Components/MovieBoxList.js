import React, { Component, Fragment } from 'react'
import MovieListItem from './MovieListItem'

class MovieBoxList extends Component {

    render() {
        const movieComponents = this.props.movies.map(moviesData => {
            return (
                <MovieListItem name={moviesData.name} url={moviesData.url}></MovieListItem>
            )
        })

        return (
            <Fragment>
                {movieComponents}
            </Fragment>
        )
    }
}

export default MovieBoxList