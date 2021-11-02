import React from "react";
import {connect} from "react-redux";

const Stack = () => {
    const stack = [
        {title: "HTML", src: "/html5.svg"},
        {title: "Javascript", src: "/javascript.svg"},
        {title: "CSS", src: "/css.svg"},
        {title: "Docker", src: "/docker.svg"},
        {title: "Git", src: "/git.svg"},
        {title: "MySQL", src: "/mysql.svg"},
        {title: "PHP", src: "/php.svg"},
        {title: "React", src: "/react.svg"},
        {title: "Tailwind CSS", src: "/tailwindcss.svg"},
        {title: "Vue.js", src: "/vuejs.svg"},
    ]
    return (
        <>
            <div className="flex flex-wrap justify-center py-4 lg:pt-4 pt-8">
                {stack.map((image, key) =>
                    <img key={key} width={64} className="mr-4 p-3" src={image.src} alt={image.title}/>
                )}
            </div>
        </>
    )
}

export default connect(state => state)(Stack);