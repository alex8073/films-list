import React from "react";
import Preloader from "../common/Preloader/Preloader";
import List from "./components/List";

const Films = (props) => {
    if (props.isFetching) {
        return <Preloader />;
    }

    return (
        <>
            <ul className="collection">
                <List list={props.films} deleteItem={props.deleteFilm} />
                <List list={props.newFilms} deleteItem={props.deleteNewFilm} />
            </ul>
            <div>
                <input
                    onChange={props.onNewFilmNameBodyChange}
                    value={props.newFilmNameBody}
                    placeholder="Введите название фильма"
                />
                <button
                    onClick={() => {
                        props.addNewFilm();
                    }}
                    className={`waves-effect waves-light btn-small ${
                        !props.newFilmNameBody ? "disabled" : ""
                    }`}
                >
                    Добавить фильм
                </button>
            </div>
        </>
    );
};

export default Films;
