import TechCards from './TechCards'

const styles = {

    margin: '10px'
}

const dimIt = appName => $(`.${appName}.ui.dimmer`).dimmer('show')
const WorkCards = ({smallImg, appName, bigImg, appDesc, tech}) =>
    <div className={`column`}>
        <div className="ui card">
            <div className="content">
                <div className="right floated meta"/>
                <img className="ui avatar image" src={`../../data/${smallImg}`}/> {appName}
            </div>
            <div className="image">
                <img src={`../../data/${bigImg}`}/>
            </div>
            <div className="content">
                <p>{appDesc}</p>
            </div>
            <div className="extra content container ui">
                <button className="ui secondary button dim-but" onClick={() => dimIt(appName.replace(/\s/g, ''))}>
                    View Tech
                </button>
                <button className="ui secondary button">
                    Go To App
                </button>
            </div>
        </div>
        <div className={`${appName.replace(/\s/g, '')} ui dimmer`}>
            {tech.map((item, ind) => <div key={ind} className={`content`} style={styles}><TechCards tech={item}/></div>)}
        </div>
    </div>

export default WorkCards