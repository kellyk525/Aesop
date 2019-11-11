
import React from 'react';
import { Link } from 'react-router-dom';

const nextSideDrawer = props => {

    let nextDrawerClasses = ["next-side-drawer"];

    if (props.show) {
        nextDrawerClasses = ["next-side-drawer open"]
    }
    
    return (
        
        <nav className={nextDrawerClasses}>
            <ul>
                <Link to="/" className="link" onClick={props.nextClick} >Kelly</Link>
                <Link to="/" className="link" onClick={props.nextClick} >Kelly</Link>
                <Link to="/" className="link" onClick={props.nextClick} >Kelly</Link>
                <Link to="/" className="link" onClick={props.nextClick} >Kelly</Link>
            </ul>
        </nav>
    )
}

export default nextSideDrawer;

