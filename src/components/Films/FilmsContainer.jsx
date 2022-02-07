import React from "react";
import Films from "./Films";
import { connect } from "react-redux";
import {
    addNewFilm,
    deleteFilm,
    deleteNewFilm,
    getFilms,
    updateNewFilmNameBody,
} from "../../redux/filmsReducer";

class FilmsContainer extends React.Component {
    componentDidMount() {
        this.props.getFilms();
    }

    onNewFilmNameBodyChange = (e) => {
        this.props.updateNewFilmNameBody(e.target.value);
    };

    render() {
        return <Films {...this.props} onNewFilmNameBodyChange={this.onNewFilmNameBodyChange} />;
    }
}

const mapStateToProps = (state) => ({
    films: state.filmsPage.films,
    isFetching: state.filmsPage.isFetching,
    newFilms: state.filmsPage.newFilms,
    newFilmNameBody: state.filmsPage.newFilmNameBody,
});

export default connect(mapStateToProps, {
    getFilms: getFilms,
    updateNewFilmNameBody: updateNewFilmNameBody,
    addNewFilm: addNewFilm,
    deleteNewFilm: deleteNewFilm,
    deleteFilm: deleteFilm,
})(FilmsContainer);
