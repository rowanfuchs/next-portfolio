import React from "react";
import {connect} from "react-redux";
import Portfolio from '../public/portfolio';

const Timeline = () => {

    return (
        <div className="timeline mt-6">
            {Portfolio && Portfolio.map((project, index) => (
                <div key={index} className={index % 2 === 0 ? "relative mt-8" : "relative mt-20 flex flex-row-reverse"}>
                    <span className={index % 2 === 0 ? "timeline-before" : "timeline-before left-0"}/>
                    <div className={index % 2 === 0 ? "timeline-post-marker" : "timeline-post-marker -left-2"}/>
                    <div
                        className={(project.cancelled ? "border-l-4 border-red-400" : "") + " bg-white w-10/12 float-left shadow-md rounded-lg px-6 py-4"}>
                    <span
                        className=" py-1 text-xs font-bold leading-none text-gray-300">
                        {project.date}
                    </span>
                        <p className="mb-3 text-l font-semibold tracking-tight text-gray-600">
                            {project.title}
                        </p>
                        <p className="leading-normal text-sm text-gray-600">
                            {project.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default connect(state => state)(Timeline);
