import React from "react";
import {connect} from "react-redux";
import Portfolio from '../public/portfolio';

const Timeline = (state) => {

    return (
        <div className="antialiased text-gray-500 dark:bg-gray-800">
            <div className="container relative flex flex-col px-6 mx-auto">
                <div className="absolute inset-0 z-0 w-2 h-full bg-gray-200 shadow-md left-17 md:mx-auto md:right-0 md:left-0"/>
                {Portfolio && Portfolio.map((project, index) => (
                    <div className="relative z-10 py-8" key={index}>
                        <img src={project.image} alt={project.title} className="timeline-img"/>
                        <div
                            className={`${index % 2 === 0 ? "timeline-container" : "timeline-container timeline-container-left"}`}>
                            <div
                                className={`${index % 2 === 0 ? "timeline-pointer" : "timeline-pointer timeline-pointer-left"}`}
                                aria-hidden="true"/>
                            <div className="p-3 text-left text-sm bg-gray-200 rounded-md shadow-md">
                                {project.date &&
                                    <p className="text-l font-bold text-purple-400 py-1">{project.date}</p>
                                }
                                <p className="text-xl text-gray-700 pb-2">{project.title}</p>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default connect(state => state)(Timeline);
