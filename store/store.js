import { createStore } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import rootReducer from './reducer'

// create a makeStore function
const makeStore = () => createStore(rootReducer)

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: false })
