import Navigator from './Navigator'
import Face from './Face'
import ShortInfo from './ShortInfo'
import MyJourney from './MyJourney'
import MyWork from './MyWork'
import GitHubFeed from "./GitHubFeed"
import Competitions from './Competitions'
import styleHome from '../stylesheets/home.css'

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

export const PageAbout = () =>
    <div className={`ui three column doubling stackable grid container`} style={styles}>
        <div className={`column`}>
            <GitHubFeed/>
        </div>
        <div className={`column`}>
            <MyWork/>
        </div>
    </div>


