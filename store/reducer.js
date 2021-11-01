import { combineReducers } from 'redux'
import themeReducer from './theme/reducer'

const rootReducer = combineReducers({
    darkMode: themeReducer
})

export default rootReducer
