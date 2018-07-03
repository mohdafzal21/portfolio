import {competitions} from '../../../../data/aboutData'
import styles from '../../../stylesheets/aboutMe.css'
import CompCards from './CompCards'

const Competitions = () =>
    <div className={`ui raised very padded text segment ${styles.segmentWidth}`}>
        <h2 className="ui header">Competitions</h2>
        {competitions.map((item, ind) => <CompCards key={ind} {...item}/>)}
    </div>

export default Competitions