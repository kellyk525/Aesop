import { connect } from "react-redux";
import Header from './header';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';


// const mSTP = ({ session, entities: { users } }) => {
//     return (
//         {
//             currentUser: users[session.id]
//         }
//     )
// };

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mDTP = (dispatch) => (
    {
        logout: () => dispatch(logout()),
        openModal: (modal) => dispatch(openModal(modal))
    }
);

export default connect(mSTP, mDTP)(Header);





// import { connect } from 'react-redux';
// import { logout } from '../../actions/session_actions';
// import { openModal } from '../../actions/modal_actions';
// import Greeting from './greeting';

// const mSTP = state => ({
//     currentUser: state.entities.users[state.session.id]
// });

// // const mSTP = ({ session, entities: { users } }) => (
// //     {
// //         currentUser: users[session.id]
// //     }
// // );

// const mDTP = dispatch => ({
//     logout: () => dispatch(logout()),
//     openModal: modal => dispatch(openModal(modal))
// });

// export default connect(mSTP, mDTP)(Greeting)