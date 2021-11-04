import React from "react";
import {connect} from "react-redux";
import Portfolio from '../public/portfolio';

const Timeline = () => {

    return (
        <div className="timeline mt-6">
            {Portfolio && Portfolio.map((project, index) => (
                <div key={index} className={index % 2 === 0 ? "timeline-grid" : "timeline-grid timeline-grid-right"}>
                    <span className={index % 2 === 0 ? "timeline-before" : "timeline-before left-0"}/>
                    <div className={index % 2 === 0 ? "timeline-post-marker" : "timeline-post-marker -left-2"}/>
                    <div
                        className={(project.cancelled ? "timeline-cancelled" : "") + " timeline-card"}>
                    <span
                        className="timeline-date">
                        {project.date}
                    </span>
                        <p className="timeline-title">
                            {project.title}
                        </p>
                        <p className="timeline-description">
                            {project.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default connect(state => state)(Timeline);
