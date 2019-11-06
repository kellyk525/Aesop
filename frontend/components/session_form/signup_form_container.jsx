
import { connect } from 'react-redux';
import React from 'react';
import { signup, clearErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SignupForm from './signup_form';


// const mSTP = state => ({
//     errors: state.errors.session,
//     formType: 'Register',
//     navLink: <Link to="/login">log in instead</Link>
// });

// const mDTP = dispatch => ({
//     processForm: (user) => dispatch(signup(user))
// });

// export default connect(mSTP, mDTP)(SignupForm)

const mSTP = ({ errors }) => {
    return ({
        errors: errors.session,
        formType: 'signup',
    });
};

const mDTP = dispatch => {
    return ({
        signup: (user) => dispatch(signup(user)),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors())
    });
};

export default connect(mSTP, mDTP)(SignupForm);


