import React from 'react';

class SignupForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            title: ''
        };
    }

    componentWillUnmount() {
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
            this.props.signup(user).then(this.props.closeModal);
        };
    }


    handleEnableInput(e) {

        return (e) => {
            e.preventDefault();
            let email = this.state.email;
            let password = this.state.password;

            if (email && password) {
                document.getElementById("login-user").removeAttribute("disabled")
            }
        };

    }

    render() {
        let { email, password, firstName , lastName } = this.state;
        let error = this.props.errors.map((error, i) => <div key={i} className="signin-error">{error}</div>);

        return (
            <div className="modal-child-signup" onClick={e => e.stopPropagation()} >
                <form onSubmit={this.handleSubmit()} className="signup-form" onChange={this.handleEnableInput()}  >
                    <div className="modal-headingWrap">
                        <div className="modal-title" >It seems you are new to us. Welcome to Aesop</div>
                        <div className="modal-subtitle" >To create an account, please enter your details below</div>
                    </div>
                    { error }
                    <div className="formText">
                        <label>
                            <input type="text" value={email} onChange={ this.update("email") } placeholder="Email address" />
                        </label>
                    </div>
                    <div className="formText">
                        <label>
                            <input type="password" value={password} onChange={ this.update("password") } placeholder="Password" />
                        </label>
                    </div>

                    <div className="formText">
                        <label>
                            <input type="text" value={firstName} onChange={this.update("first_name")} placeholder="First Name" />
                        </label>
                    </div>
                    <div className="formText">
                        <label>
                            <input type="text" value={lastName} onChange={this.update("last_name")} placeholder="Last Name" />
                        </label>
                    </div>
    
                    <input type="submit" value="Register" className="formText-submit" id="login-user" disabled  />
                </form>
            </div>
        )
    }
}


export default SignupForm;