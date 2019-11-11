
import React from 'react';

const drawerToggleButton = props => (
    <div>
        <button className="toggle-button" onClick={props.click} >
            <div className="toggle-button-line" />
            <div className="toggle-button-line" />
            <div className="toggle-button-line" />
        </button>
    </div>
);

export default drawerToggleButton;