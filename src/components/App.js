import {PageMe, PageMyStuff, PageContact} from "./PageTemplate"
import Navigator from './Navigator'
import {Component} from 'react'
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom'

class App extends Component {

    PageArr = [
        {
            page: PageMyStuff,
            route: '/mystuff'
        },
        {
            page: PageContact,
            route: '/contact'
        }
    ]

    // state = {
    //
    //     activeNav: 'me'
    // }

    // pages = {
    //
    //     me: <PageMe/>,
    //     'my stuff': <PageAbout/>,
    //     contact: <PageContact/>
    // }

    // changeTab = tab => this.setState(tab)

    componentWillMount() {

        localStorage['repo-data'] = ''
    }

    render() {

        return (
            <HashRouter>
                <div>
                    <Navigator/>
                    <Switch>
                        <Route exact path='/' component={PageMe}/>
                        {this.PageArr.map((item, ind) => <Route key={ind} path={item.route} component={item.page}/>)}
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}

export default App