import actions from './actions';

const INITIAL_STATE = false;

export default function darkMode(state, action) {

    if (typeof state === 'undefined') {
        return INITIAL_STATE;
    }

    switch (action.type) {
        case actions.DARK:
            return actions.DARK;
        case actions.LIGHT:
            return actions.LIGHT;
        default:
            return state;
    }
}
