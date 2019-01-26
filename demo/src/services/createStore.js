import {applyMiddleware, createStore} from 'redux'
import {createLogger} from 'redux-logger'
import dispatch from './dispatch'

const logger = createLogger({
    stateTransformer: state => state.toJS()
})

export default (initialState) => createStore(
    dispatch,
    initialState,
    applyMiddleware(logger)
)