import style from '../stylesheets/navigator.css'

const tabsL = ['Me', 'My Stuff', 'Blogs']
const tabsR = ['Contact']

const Navigator = ({changeTab, active}) =>
    <div className={`${style.navDiv} ui container`}>
        <div className="ui secondary pointing menu">
            {tabsL.map((item, ind) => <a key={ind} onClick={() => changeTab(item.toLowerCase())} className={`item ` + (active === item.toLowerCase() ? 'active' : '')}>{item}</a>)}
            {tabsR.map((item, ind) => <a key={ind} onClick={() => changeTab(item.toLowerCase())} className={`item right floated ` + (active === item.toLowerCase() ? 'active' : '')}>{item}</a>)}
        </div>
    </div>

export default Navigator