import {createStore, applyMiddleware} from 'redux'
// import initState from 'someFilePath'
// import {someReducer} from './reducers' //Import Reducers

const saveToLocal = store => next => action => {

    next(action)
    localStorage['redux-store'] = JSON.stringify(store.getState())
}

// const storeFactory = (state = initState) =>
//     applyMiddleware(saveToLocal)(createStore)(
//         someReducer,
//         localStorage['redux-store'] ? JSON.parse(localStorage['redux-store']) : state
//     )
//
// export default storeFactory