import { rootReducer } from './reducers/index';
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'


const initialState:any = {}


export const store = createStore<unknown, any, unknown, unknown>(
    // @ts-ignore
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
)