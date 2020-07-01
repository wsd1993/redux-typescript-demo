import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

import { chatReducer } from './chat/reducer'
import { systemReducer } from './system/reducer'

const rootReducer = combineReducers({
    chatReducer,
    systemReducer
})

export type AppState = ReturnType<typeof rootReducer>

export const configureStore = () => {
    const middlewares = [thunkMiddleware]
    const middlewareEnhancers = applyMiddleware(...middlewares)
    const store = createStore(
        rootReducer,
        composeWithDevTools(middlewareEnhancers)
    )
    return store
}