import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
// import storeFactory from './store/index'

// const store = storeFactory()

window.React = React
// window.store = store

const render = () =>
    ReactDOM.render(
        <App/>, /*store={store}/>,*/
        document.getElementById('mainDiv')
    )

// store.subscribe(render)
render()