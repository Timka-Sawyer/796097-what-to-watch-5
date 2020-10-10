
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Settings = {FILM_NAME: `Фильм`, GENRE: `Сюреализм`, FILM_DATE: `32.14.3020`};

ReactDOM.render(
    <App
      filmName = {Settings.FILM_NAME}
      filmGenre = {Settings.GENRE}
      filmDate = {Settings.FILM_DATE}
    />,
    document.querySelector(`#root`)
);
