import React, {useEffect, useState} from "react";
import "../App.css";
import {useHistory} from "react-router-dom";

const Login = ({loggedIn: parentLoggedIn = false}) => {

    const [loggedIn, toggleLoggedIn] = useState(parentLoggedIn);

    const history = useHistory();

    const MyRedirect = () => {
        const path = "/";
        history.push(path);
    }

    const handleToggleLoggedIn = () => {
        toggleLoggedIn(!loggedIn);
        MyRedirect();
    }

    useEffect(() => {
        toggleLoggedIn(parentLoggedIn);
    }, [parentLoggedIn]);

    return (
        loggedIn,
        <div className={"content"}>
            <h1>Login pagina</h1>
            <p>Druk op de knop om je in te loggen!</p>
            <button onClick={handleToggleLoggedIn}>Login</button>
        </div>
    )
}

export default Login;