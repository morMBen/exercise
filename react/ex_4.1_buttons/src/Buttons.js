import React from 'react';

const Buttons = (props) => {
    console.log(props);
    return (
        <button className="button" style={{ fontWeight: props.fontWeight }}>{props.button}</button>
    )
}

export default Buttons;