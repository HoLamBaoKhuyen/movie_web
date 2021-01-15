import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import CinemaDetail from "./pages/CinemaDetail";
import MovieDetail from "./pages/MovieDetail";
import AccountDetail from "./pages/AccountDetail";
import Admin from "./pages/Admin";
import SignIn from "./pages/SignInPage";
import SignUp from "./pages/SignUpPage";
import Page404 from "./pages/Page404";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/booking" component={Booking} />
        <Route exact path="/cinemaDetail" component={CinemaDetail} />
        <Route exact path="/movieDetail/:id" component={MovieDetail} />
        <Route exact path="/accountDetail" component={AccountDetail} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route path="*" component={Page404} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
