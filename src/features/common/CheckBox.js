import React from 'react';

import './CheckBox.scss';

const CheckBox = (props) => {
    return (
        <label className="container">
            <input type="checkbox" checked={props.checked} onChange={(e) => props.onChange(e)} data-testid='todo-li-chbx' />
            <span className={`checkmark`}></span>
        </label>
    );
}

export default CheckBox;