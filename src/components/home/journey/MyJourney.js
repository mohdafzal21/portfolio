import TimeLineCards from './TimeLineCards'
import {timelineInfo} from '../../../../data/aboutData'
import styles from '../../../stylesheets/aboutMe.css'

const MyJourney = () =>
    <div className={`ui raised very padded text segment ${styles.segmentWidth}`}>
        <h2 className="ui header">My Journey</h2>
        {timelineInfo.map((item, ind) => <TimeLineCards key={ind} {...item}/>)}
    </div>

export default MyJourney