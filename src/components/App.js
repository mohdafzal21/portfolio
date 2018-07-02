import {PageMe, PageAbout} from "./PageTemplate";
import {Component} from 'react'
import PropTypes from 'prop-types'
import GitHubFeed from './GitHubFeed'

class App extends Component {

    // getChildContext() {
    //     return {
    //         store: this.props.store
    //     }
    // }

    render(){

        return(
            <GitHubFeed/>
        )
    }
}

// App.childContextTypes = {
//
//     store: PropTypes.object.isRequired
// }

export default App