import Layout from '../components/layout';
import {useSelector} from 'react-redux';
import Timeline from "../components/timeline";


export default function Index() {
    const {darkMode} = useSelector(state => state)

    const open = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener, noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <>
            <section className="relative block h-120">
                <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{
                    backgroundImage: "url('/credits-pexels-photo-3801463.jpeg')",
                }}>
                    <span className={darkMode ? 'w-full h-full absolute opacity-50 bg-black' : ''}/>
                </div>
                <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-96">
                    <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg"
                         preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                        <polygon className="text-gray-300 dark:text-gray-900 fill-current" points="2560 0 2560 100 0 100"/>
                    </svg>
                </div>
            </section>
            <section className="relative py-16">
                <div className="container mx-auto px-4">
                    <div
                        className="bg-white w-full mb-6 shadow-xl rounded-lg -mt-64 dark:bg-gray-800">
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                    <div className="relative">
                                        <img alt="An image of Rowan Fuchs"
                                             src={"/portfolio.9940b5e4.png"}
                                             width="150px"
                                             height="150px"
                                             className={(darkMode ? 'filter grayscale ' : '') +
                                             'shadow-xl rounded-full align-middle border-none -mt-16 max-w-150-px'}/>
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                    <div className="py-6 px-3 mt-32 sm:mt-0">
                                        <button
                                            className="bg-blue-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                            type="button" onClick={() => open('https://linkedin.com/in/rowanfuchs/')}>
                                            Connect
                                        </button>
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                        <div className="mr-4 p-3 text-center">
                                    <span
                                        className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">22</span><span
                                            className="text-sm text-blueGray-400">Friends</span>
                                        </div>
                                        <div className="mr-4 p-3 text-center">
                                    <span
                                        className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">10</span><span
                                            className="text-sm text-blueGray-400">Photos</span>
                                        </div>
                                        <div className="lg:mr-4 p-3 text-center">
                                    <span
                                        className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">89</span><span
                                            className="text-sm text-blueGray-400">Comments</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-12">
                                <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-700 dark:text-gray-200 mb-2">
                                    Rowan Ryuichi Fuchs
                                </h3>
                                <div className="text-sm leading-normal mt-0 mb-2 text-gray-400 font-bold uppercase">
                                    Almere, The Netherlands
                                </div>
                                <div className="mb-2 text-gray-600 dark:text-gray-300 mt-10">
                                    Full Stack Web Developer
                                </div>
                            </div>
                            <div className="mt-10 py-10 border-t border-gray-300 dark:border-gray-700 text-center">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-9/12 px-4">
                                        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
                                            I am an enthusiastic, creative and ambitious person who is always willing to
                                            learn and broaden my experience.
                                            I'm always looking for a challenge and adapt easily to new environments.
                                            I enjoy working independently while also thrive when working in a team.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="bg-white w-full mb-6 shadow-xl rounded-lg dark:bg-gray-800">
                        <div className="mt-10 py-10 border-t border-gray-300 dark:border-gray-700 text-center">
                            <div className="text-center">
                                <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-700 dark:text-gray-200 mb-2">
                                    Portfolio
                                </h3>
                            </div>
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-10/12 px-4">
                                    <Timeline/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


Index.getLayout = function getLayout(page) {
    return (
        <>
            <Layout>
                {page}
            </Layout>
        </>
    )
}
