import React, { useState } from 'react'
import Badges from './badges'

const Item = (props) => {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <div
                key={props.index}
                className={
                    props.index % 2 === 0
                        ? 'timeline-grid'
                        : 'timeline-grid timeline-grid-right'
                }
            >
                <span
                    className={
                        props.index % 2 === 0
                            ? 'timeline-before'
                            : 'timeline-before left-0'
                    }
                />
                <div
                    className={
                        props.index % 2 === 0
                            ? 'timeline-post-marker'
                            : 'timeline-post-marker -left-2'
                    }
                />
                <div
                    className={
                        (props.project.cancelled ? 'timeline-cancelled ' : '') +
                        'timeline-card'
                    }
                >
                    <span className="timeline-date">{props.project.date}</span>

                    <span
                        className="float-right cursor-pointer"
                        onClick={() => setOpen((isOpen) => !isOpen)}
                    >
                        <div className="absolute w-4 h-4 bg-blue-300 animate-ping-slow opacity-50" />
                        <svg
                            className="fill-current text-gray-400"
                            width="16"
                            height="16"
                            viewBox="0 0 512 512"
                        >
                            <g>
                                <path d="M31.5,34.5v443h449v-443H31.5z M57.5,61.5h399v316.478l-57.26-99.177L323,146.747l-76.24,132.053l-23.813,41.246 l-0.706-1.223L179.5,244.795l-42.741,74.029L98.264,385.5H57.5V61.5z" />
                                <circle cx="139" cy="133" r="40.5" />
                            </g>
                        </svg>
                    </span>

                    <p className="timeline-title">{props.project.title}</p>
                    <p className="timeline-description">
                        {props.project.description}
                    </p>
                    <Badges types={props.project.types} />
                </div>
                <div
                    className={`timeline-modal transform scale-0 transition-transform duration-300 ${
                        isOpen ? 'scale-100' : ''
                    }`}
                >
                    <div className="timeline-modal-card">
                        <p className="timeline-modal-image">
                            <img
                                className="max-h-full py-5"
                                src={props.project.image}
                                alt={props.project.title}
                            />
                        </p>
                        <button
                            onClick={() => setOpen((isOpen) => !isOpen)}
                            className="timeline-modal-close"
                        >
                            <svg
                                className="h-6 w-6 dark:text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item
