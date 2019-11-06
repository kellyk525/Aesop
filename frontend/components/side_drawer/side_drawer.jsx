
import React from 'react';

const sideDrawer = props => {
    
    let drawerClasses = ["side-drawer"];
    
    if (props.show) {
        drawerClasses = ["side-drawer open"]
    }

    return (
        <nav className={ drawerClasses }>
            <ul>
                <li><a href="/">Skin</a></li>
                <li><a href="/">Hair</a></li>
                <li><a href="/">Body Hand</a></li>
                <li><a href="/">Fragrance</a></li>
                <li><a href="/">Home</a></li>
                <li><a href="/">Kits Travel</a></li>
                <li><a href="/">Gifts</a></li>
            </ul>
        </nav>
    )
}

export default sideDrawer;