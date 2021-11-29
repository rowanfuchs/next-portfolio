import React from "react";

const Badge = (props) => {
    const types = {
        'all': 'text-gray-700 bg-gray-100 border-gray-300',
        'lumen': 'text-yellow-700 bg-yellow-100 border-yellow-300 dark:text-yellow-100 dark:bg-yellow-700 dark:border-yellow-900',
        'laravel': 'text-red-700 bg-red-100 border-red-300 dark:text-red-100 dark:bg-red-700 dark:border-red-900',
        'docker': 'text-indigo-700 bg-indigo-100 border-indigo-300 dark:text-indigo-100 dark:bg-indigo-700 dark:border-indigo-900',
        'tailwind': 'text-blue-700 bg-blue-100 border-blue-300 dark:text-blue-100 dark:bg-blue-700 dark:border-blue-900',
        'vue': 'text-green-700 bg-green-100 border-green-300 dark:text-green-100 dark:bg-green-700 dark:border-green-900',
        'nuxt': 'text-green-700 bg-green-100 border-green-300 dark:text-green-100 dark:bg-green-700 dark:border-green-900',
        'next': 'text-gray-700 bg-gray-100 border-gray-300 dark:text-gray-100 dark:bg-gray-700 dark:border-gray-900',
        'react': 'text-blue-700 bg-blue-100 border-blue-300 dark:text-blue-100 dark:bg-blue-700 dark:border-blue-900',
        'capacitor': 'text-blue-700 bg-blue-100 border-blue-300 dark:text-blue-100 dark:bg-blue-700 dark:border-blue-900',
        'quasar': 'text-blue-700 bg-blue-100 border-blue-300 dark:text-blue-100 dark:bg-blue-700 dark:border-blue-900',
        'elasticsearch': 'text-blue-700 bg-blue-100 border-blue-300 dark:text-blue-100 dark:bg-blue-700 dark:border-blue-900',
        'node': 'text-green-700 bg-green-100 border-green-300 dark:text-green-100 dark:bg-green-700 dark:border-green-900',
        'jquery': 'text-blue-700 bg-blue-100 border-blue-300 dark:text-blue-100 dark:bg-blue-700 dark:border-blue-900',
        'codeigniter': 'text-red-700 bg-red-100 border-red-300 dark:text-red-100 dark:bg-red-700 dark:border-red-900',
    }

    function badgeColor(type) {
        return types[type];
    }


    return (
        <>
            <span className={`timeline-badge ${badgeColor(props.type)}`}>
             <span className="timeline-badge-text">{props.type}</span>
           </span>
        </>

    )
}

export default Badge
