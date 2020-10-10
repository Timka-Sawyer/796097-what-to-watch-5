import React from "react";
import Main from "../main/main";
import PropTypes from "prop-types";


const App = (props) => {
  return (
    <Main
      filmName = {props.filmName}
      filmGenre = {props.filmGenre}
      filmDate = {props.filmDate}
    />
  );
};

App.propTypes = {
  filmName: PropTypes.string.isRequired,
  filmGenre: PropTypes.string.isRequired,
  filmDate: PropTypes.string.isRequired,
};

export default App;
