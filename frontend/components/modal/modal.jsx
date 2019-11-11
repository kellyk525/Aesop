import React from 'react';
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';

class Modal extends React.Component {
    constructor(props) {
        super(props);

    }

    render () {
        const { modal, closeModal } = this.props
        if (!modal) {
            return null;
        }
        let component;
        switch (modal) {
            case 'login':
                component = <LoginFormContainer />;
                break;
            case 'signup':
                component = <SignupFormContainer />;
                break;
            default:
                return null;
        }

        return (
            <div className="outsideModal" onClick={closeModal}>
                {component}
            </div>
        );
    }

}

const mSTP = (state) => {
    return ({
        modal: state.ui.modal
    });
};

const mDTP = (dispatch) => {
    return ({
        closeModal: () => dispatch(closeModal())
    });
};

export default connect(mSTP, mDTP)(Modal);