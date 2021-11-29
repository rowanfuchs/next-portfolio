import React from "react";
import Portfolio from '../public/portfolio';
import Modal from "./modal";

const Timeline = () => {
    return (
        <div className="timeline mt-6">
            {Portfolio && Portfolio.map((project, index) => (
                <Modal key={index} project={project}/>
            ))}
        </div>
    )
}

export default Timeline;
