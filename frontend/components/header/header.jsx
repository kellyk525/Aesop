import React from "react";

const Header = (props) => {
    const welcomeMessage = props.currentUser ? (
        <div>
            <h3> Hi, { props.currentUser.first_name } </h3>
        </div>) : (
            <div>
                <h3>Hello New User,
                </h3>
                <div>
                    <button onClick={() => props.openModal("login")}>Sign In</button>
                    <div>or</div>
                    <button onClick={() => props.openModal("signup")}>Register</button>
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
                {console.log(props)}
                {welcomeMessage}
                {dropdown}
            </div>
        </div>
    );
}

export default Header;