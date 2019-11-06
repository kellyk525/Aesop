import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { login, clearErrors } from '../../actions/session_actions';
import LoginForm from './login_form';

// const mSTP = state => ({
//     errors: state.errors.session,
//     formType: 'Login',
//     navLink: <Link to="/signup">Register instead</Link>
// });

// const mDTP = dispatch => ({
//     processForm: (user) => dispatch(login(user))
// });

// export default connect(mSTP, mDTP)(LoginForm)

const mSTP = ({ errors }) => {
    return ({
        errors: errors.session,
        formType: 'login',
    });
};

const mDTP = dispatch => {
    return ({
        login: (user) => dispatch(login(user)),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors())
    });
};

export default connect(mSTP, mDTP)(LoginForm);