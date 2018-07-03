const TimeLineCards = ({org, type, extInf, dur}) =>
    <div className="ui card">
        <div className="content">
            <div className="header">{org}</div>
        </div>
        <div className="content">
            <h4 className="ui sub header">{type}</h4>
            <p>{extInf}</p>
        </div>
        <div className="extra content">
            <a>{dur}</a>
        </div>
    </div>


export default TimeLineCards