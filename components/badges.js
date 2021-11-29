import React from "react";
import Badge from './badge';

const Badges = (props) => {
    return (
        <>
            <p className="timeline-badges">
                {props.types.map((type, index) => (
                    <Badge key={index} type={[type]}/>
                ))}
            </p>
        </>

    )
}

export default Badges
