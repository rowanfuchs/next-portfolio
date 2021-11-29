import React from "react";
import Portfolio from '../public/portfolio';
import Item from "./timeline/item";

const Timeline = () => {
    return (
        <div className="timeline mt-6">
            {Portfolio && Portfolio.map((project, index) => (
                <Item key={index} project={project}/>
            ))}
        </div>
    )
}

export default Timeline;
