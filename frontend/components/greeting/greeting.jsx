import React from 'react';

// Do it again!!

const Greeting = ({ currentUser, logout, openModal }) => {

    const sessionLinks = () => (
        <nav>
            <button onClick={() => openModal('login')}>Login</button>
            &nbsp;or&nbsp;
      <button onClick={() => openModal('signup')}>Signup</button>
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return (
        currentUser ?
            personalGreeting(currentUser, logout) :
            sessionLinks()
    );
};

export default Greeting;








// const Greeting = ({ currentUser, logout }) => {
//     const sessionLinks = () => (
//         <nav>
//             <Link to="/login">Login</Link>
//             &nbsp;or&nbsp;
//       <Link to="/signup">Sign up!</Link>
//         </nav>
//     );
//     const personalGreeting = () => (
//         <hgroup className="header-group">
//             <h2 className="header-name">Hi, {currentUser.email}!</h2>
//             <button className="header-button" onClick={logout}>Log Out</button>
//         </hgroup>
//     );

//     return currentUser ? personalGreeting() : sessionLinks();
// };


// export default Greeting;
// class Greeting extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {

//         const { currentUser } = this.props
//         return (
//             <div>
//                 This is greeting!!
//                 <p>{currentUser.email}</p>
//             </div>
//         )
//     }
// }

// export default Greeting;

