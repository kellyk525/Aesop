
import React from 'react';
import { Link } from 'react-router-dom'

const nextDrawerToggle = props => (
    <div>
        <Link to="/" className="link" onClick={ () => props.nextClick() } >Skin</Link>
        <Link to="/" className="link" onClick={props.nextClick} >Hair</Link>
        <Link to="/" className="link" onClick={props.nextClick} >Body Hand</Link>

    </div>
);

export default nextDrawerToggle;

// <Link to="/" className="link" onClick={props.click} >Fragrance</Link>
//     <Link to="/products/skin" className="link" onClick={props.click} >Home</Link>
//     <Link to="/products/skin" className="link" onClick={props.click} >Kits Travel</Link>
//     <Link to="/products/skin" className="link" onClick={props.click} >Gifts</Link>