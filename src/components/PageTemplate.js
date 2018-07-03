import Navigator from './Navigator'
import Face from './home/Face'
import ShortInfo from './home/ShortInfo'
import MyJourney from './home/journey/MyJourney'
import MyWork from './about/myWork/MyWork'
import GitHubFeed from "./about/github/GitHubFeed"
import Competitions from './home/competition/Competitions'
import styleHome from '../stylesheets/home.css'
import Contact from './contact/Contact'

export const PageMe = () =>
    <div className={styleHome.home}>
        <div className={`ui three column doubling stackable grid container`}>
            <div className={`column`}>
                <Face/>
                <ShortInfo/>
            </div>
            <div className={`column`}>
                <MyJourney/>
            </div>
            <div className={`column`}>
                <Competitions/>
            </div>
        </div>
    </div>


const styles = {

    margin: '10px'
}

export const PageMyStuff = () =>
    <div className={`ui three column doubling stackable grid container`} style={styles}>
        <div className={`column`}>
            <GitHubFeed/>
        </div>
        <div className={`column`}>
            <MyWork/>
        </div>
    </div>

export const PageContact = () =>
    <Contact/>