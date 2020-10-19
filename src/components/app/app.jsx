import React from "react";
import Main from "../main/main";
import LoginScreen from "../login-screen/login-screen";
import MyListScreen from "../my-list-screen/my-list-screen.jsx";
import FilmScreen from "../film-screen/film-screen";
import AddReviewScreen from "../add-review/add-reviwe";
import PlayerScreen from "../player-screen/player-screen";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
            filmName = {props.filmName}
            filmGenre = {props.filmGenre}
            filmDate = {props.filmDate} />
        </Route>
        <Route exact path="/login" >
          <LoginScreen />
        </Route>
        <Route exact path="/mylist">
          <MyListScreen />
        </Route>
        <Route exact path="/films/:id">
          <FilmScreen />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReviewScreen />
        </Route>
        <Route exaxt path="/player/:id">
          <PlayerScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  filmName: PropTypes.string.isRequired,
  filmGenre: PropTypes.string.isRequired,
  filmDate: PropTypes.string.isRequired,
};

export default App;
