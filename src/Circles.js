import React from 'react';

const Circles = (props) => {
    const innerCircleClass = props.currLayout[props.index];

    return (
        <div className="outer-circle">
            {props.name}
            <div className={innerCircleClass}></div>
        </div>
    )
}

export default Circles;