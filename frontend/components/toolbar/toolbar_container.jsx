
import { connect } from "react-redux";
import Toolbar from './toolbar';
import { openSide } from '../../actions/side_actions';


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
        openSide: (side) => dispatch(openSide(side)),
    }
);

export default connect(mSTP, mDTP)(Toolbar);
