import React from "react";
import {connect} from "react-redux";
import Portfolio from '../public/portfolio';

const Timeline = () => {

    return (
        <div className="antialiased text-gray-500 mt-10 dark:bg-gray-800">
            <div className="container relative flex flex-col px-6 mx-auto">
                <div className="z-10 inset-0 w-5 h-5 transform rotate-45 bg-gray-200 mx-auto hidden md:block"/>
                <div className="absolute inset-0 z-0 w-2 h-full bg-gray-200 shadow-md left-17 md:mx-auto md:right-0 md:left-0 dark:bg-gray-900"/>
                {Portfolio && Portfolio.map((project, index) => (
                    <div className="relative z-10 py-8" key={index}>
                        <img src={project.image} alt={project.title} className="timeline-img"/>
                        <div
                            className={`${index % 2 === 0 ? "timeline-container" : "timeline-container timeline-container-left"}`}>
                            <div
                                className={`${index % 2 === 0 ? "timeline-pointer" : "timeline-pointer timeline-pointer-left"}`}
                                aria-hidden="true"/>
                            <div className="p-3 text-left text-sm bg-gray-200 rounded-md shadow-md dark:bg-gray-900">
                                {project.cancelled &&
                                <span className="float-right font-bold text-gray-300 dark:text-gray-800">cancelled</span>
                                }
                                {project.date &&
                                    <p className="text-l font-bold text-purple-400 py-1 dark:text-purple-800">{project.date}</p>
                                }
                                <p className="text-xl text-gray-700 pb-2">{project.title}</p>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="z-10 inset-0 w-5 h-5 transform rotate-45 bg-gray-200 mx-auto hidden md:block"/>
            </div>
        </div>
    )
}

export default connect(state => state)(Timeline);
