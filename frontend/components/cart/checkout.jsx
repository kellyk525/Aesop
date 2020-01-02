
import React from 'react';

class Checkout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="checkout-form" onClick={e => e.stopPropagation()}>

                <h1>
                    Thank You For Your Purchase
                </h1>
                <p>
                    Please Visit My Other Projects
                </p>
                <div>
                    <a href="https://github.com/kellyk525/Aesop" target="_blank"><i id="footer-icon" className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/kelly-ku-642b49130/" target="_blank"><i id="footer-icon" className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/kellyk525/Aesop" target="_blank"><i id="footer-icon" className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/kelly-ku-642b49130/" target="_blank"><i id="footer-icon" className="fab fa-linkedin"></i></a>
                </div>

            </div>
        )
    }
}

export default Checkout;