import {createStore} from 'redux';
import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import rootReducer from './reducer';

// create a makeStore function
const makeStore = context => createStore(rootReducer);

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: false});
