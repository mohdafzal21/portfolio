import {workinfo} from "../../data/aboutData";
import styles from '../stylesheets/aboutMe.css'
import WorkCards from './WorkCards'

const MyWork = () =>
    <div className={`ui raised very padded text segment container`}>
        <h2 className="ui header">My Stuff</h2>
        <div className={`ui two column doubling stackable grid`}>
            {workinfo.map((item, ind) => <WorkCards key={ind} {...item}/>)}
        </div>
    </div>

export default MyWork