const CompCards = ({name, place, date, desc}) =>
    <div className="ui card">
        <div className="content">
            <div className="header">{name}</div>
            <div className="meta">
                <span>{place}</span>
                <a>{date}</a>
            </div>
            <p>{desc}</p>
        </div>
    </div>

export default CompCards