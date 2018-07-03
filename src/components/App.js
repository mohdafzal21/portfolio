import {PageMe, PageAbout, PageContact} from "./PageTemplate"
import Navigator from './Navigator'
import {Component} from 'react'

class App extends Component {

    state = {

        activeNav: 'me'
    }

    pages = {

        me: <PageMe/>,
        'my stuff': <PageAbout/>,
        contact: <PageContact/>
    }

    changeTab = tab => this.setState(tab)

    componentWillMount(){

        localStorage['repo-data'] = ''
    }

    render() {

        return (

            <div>
                <Navigator changeTab={tab => this.changeTab({activeNav: tab})} active={this.state.activeNav}/>
                {this.pages[this.state.activeNav]}
            </div>
        )
    }
}

export default App