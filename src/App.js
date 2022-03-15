import React, {useState} from 'react';
import './App.css';
import {Switch, Route, NavLink} from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogAll from "./pages/BlogAll";
import BlogPost from "./pages/BlogPost";
import Login from "./pages/Login";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [loggedIn, toggleLoggedIn] = useState(false);

    const handleToggleLoggedIn = () => toggleLoggedIn(!loggedIn);

    return (
        <div className={"container"}>
            <div className={"main-nav"}>
                <ul>
                    <li>
                        <NavLink activeClassName={"active"} to="/">Home</NavLink>
                    </li>
                    <li>
                        {loggedIn && <NavLink activeClassName={"active"} to="/blogposts">Blogposts</NavLink>}
                    </li>
                    <li>
                        {(loggedIn) ? <button type={"button"} onClick={handleToggleLoggedIn}>Uitloggen</button> :  <NavLink activeClassName={"active"} to={"/login"}>Login</NavLink>}
                    </li>
                </ul>
            </div>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <PrivateRoute exact path={"/blogposts"} loggedIn={loggedIn}>
                    <BlogAll />
                </PrivateRoute>
                <PrivateRoute exact path={"/blogposts/:id"} loggedIn={loggedIn}>
                    <BlogPost/>
                </PrivateRoute>
                {/*<Route exact path={"/blogposts"}>*/}
                {/*    <BlogAll />*/}
                {/*</Route>*/}
                {/*<Route exact path={"/blogposts/:id"}>*/}
                {/*    <BlogPost/>*/}
                {/*</Route>*/}
                <Route path={"/login"}>
                    <Login isLoggedIn = {loggedIn} />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
