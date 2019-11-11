import React from 'react';

const backdrop = props => {

    return (
    <div>
        <div className="backdrop-next" onClick={ props.nextClick } />
        <div className="backdrop" onClick={ props.click } />
    </div>
    )

};


export default backdrop;