
import { connect } from "react-redux";
import Toolbar from './toolbar';
import { openSide } from '../../actions/side_actions';
import { fetchCartItems } from '../../actions/cart_actions';


// const mSTP = ({ session, entities: { users } }) => {
//     return (
//         {
//             currentUser: users[session.id]
//         }
//     )
// };

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    cartItems: Object.values(state.entities.cartItems)
});


const mDTP = (dispatch) => (
    {
        openSide: (side) => dispatch(openSide(side)),
        fetchCartItems: () => dispatch(fetchCartItems())
    }
);

export default connect(mSTP, mDTP)(Toolbar);
