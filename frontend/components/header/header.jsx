import React from "react";

const Header = (props) => {
    const welcomeMessage = props.currentUser ? (
        <div>
            <h3> {props.currentUser.first_name + " " +props.currentUser.last_name  } </h3>
        </div>) : (
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
            <div />
            <button onClick={props.logout}>Logout</button>
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
            <div>
                {welcomeMessage}
                {dropdown}
            </div>
        </div>
    );
}

export default Header;