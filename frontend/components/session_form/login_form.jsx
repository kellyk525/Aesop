

import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    componentWillUnmount () {
        this.props.clearErrors();
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }



    handleSubmit(e) {
        return (e) => {
            e.preventDefault();
            let user = Object.assign({}, this.state);
            this.props.login(user).then(this.props.closeModal);
        };
    }

    handleDemoLogin(email, password) {
        if (email.length > 0) {
            this.setState({ email: this.state.email += email.shift() },
                () => setTimeout(() => this.handleDemoLogin(email, password), 50 )
            )
        } else if (password.length > 0) {
            this.setState({ password: this.state.password += password.shift() },
                () => setTimeout(() => this.handleDemoLogin(email, password), 50 )
            )
        } else {
            this.props.login(this.state).then(this.props.closeModal);
        }
    }

    handleDemoUser(e) {
        return (e) => {
            e.preventDefault();
            let email = 'demo@aesop.com'.split("");
            let password = 'password'.split("");
            this.handleDemoLogin(email, password)
            // let user = { email: 'demo@aesop.com', password: 'password' };
            // this.props.login(user).then(this.props.closeModal);
        };
    }

    render() {

        const { email, password } = this.state;
        let error = this.props.errors.map((error, i) => <div key={i} className="signin-error">{error}</div>);

        return (
            <div className="modal-child-login" onClick={e => e.stopPropagation()} >
                    <form onSubmit={this.handleSubmit()} className="login-form" >
                        <div className="modal-headingWrap">
                            <div className="modal-title">Welcome Back to Aesop.</ div>
                            <div className="modal-subtitle">Please confirm your password</div>
                        </div>
                        { error }
                        <div className="formText">
                            <label>
                                <input type="text" value={email} onChange={this.update("email")} placeholder="Email address" />
                            </label>
                        </div>
                        <div className="formText">
                            <label>
                                <input type="password" value={password} onChange={ this.update("password") } placeholder="Password" />
                            </label>
                        </div>
                        <input className="formText-submit" type="submit" value="Login" />
                        <button className="formText-submit" onClick={this.handleDemoUser()} >Demo Sign In</button>
                    </form>
                </div>
        )
    }
}

export default LoginForm;

// onChange listener -- checking if all input values are filed in
// remove Attribute -- "disabled" 
// handleEnableInput -- document.getElementById("login-user").setAttribute("disabled")





