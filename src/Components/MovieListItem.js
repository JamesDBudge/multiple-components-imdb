import React, { Component } from "react";

class MovieListItem extends Component {
    render() {
        return(
        <div className="filmLink">
            <a href={this.props.url}>{this.props.name}</a>
            </div>
        )
    }
}

export default MovieListItem