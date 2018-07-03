import style from '../stylesheets/navigator.css'
import {NavLink} from 'react-router-dom'

const tabHome = {

        type: 'Me',
        route: '/'
    }


const tabsL = [
    {
        type: 'My Stuff',
        route: '/mystuff'
    }
]
const tabsLRedirect = [
    {
        type: 'Blog'
    }
]
const tabsR = [
    {
        type: 'Contact',
        route: '/contact'
    }
]

const Navigator = () =>
    <div className={`${style.navDiv} ui container`}>
        <div className="ui secondary pointing menu">
            <NavLink exact to={tabHome.route} className={`item`}>{tabHome.type}</NavLink>
            {tabsL.map((item, ind) => <NavLink to={item.route} key={ind}
                className={`item`}>{item.type}</NavLink>)}
            {tabsLRedirect.map((item, ind) => <a key={ind} href={`https://medium.com/@umangpahwa`}
                                                 className={`item`}>{item.type}</a>)}
            {tabsR.map((item, ind) => <NavLink to={item.route} key={ind}
                className={`item right floated`}>{item.type}</NavLink>)}
        </div>
    </div>

export default Navigator