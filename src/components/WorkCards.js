const WorkCards = ({smallImg, appName, bigImg, appDesc}) =>
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
                <button className="ui secondary button">
                    View Tech
                </button>
                <button className="ui secondary button">
                    Go To App
                </button>
            </div>
        </div>
    </div>

export default WorkCards