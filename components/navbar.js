import React from "react";
import {DarkModeSwitch} from 'react-toggle-dark-mode';
import {connect} from "react-redux";

const Navbar = (state) => {

    return (
        <div className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between">
            <div className="container p-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="flex flex-grow justify-end">
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        <li className="flex items-center">
                            <DarkModeSwitch
                                style={{marginBottom: '2rem'}}
                                sunColor={'white'}
                                checked={state.darkMode}
                                onChange={() => state.dispatch({ type: !state.darkMode})}
                                size={20}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default connect(state => state)(Navbar);
