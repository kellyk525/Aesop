

import React from "react";

const Header = (props) => {
    const welcomeMessage = props.currentUser ? (
        <p className="first-text" >
            {props.currentUser.first_name + " " + props.currentUser.last_name}
        </p>) : (
            <div className="header-user" >
                <div className="header-user-auth" >
                    <button onClick={() => props.openModal("login")} className="signin-button">Login</button>
                    <p>or</p>
                    <button onClick={() => props.openModal("signup")} className="register-button" >Register</button>
                </div>
            </div>
        );

    const signout = props.currentUser ? (
        <div>
            <button onClick={props.logout} className="register-button" >Logout</button>
        </div>
    ) : (
            null
        )

    const dropdown = (
        <div>
            {signout}
        </div>
    )

    return (
        <div className="header">
            <div className="logout" >
                {welcomeMessage}
                {dropdown}
            </div>
        </div>
    );
}

export default Header;
