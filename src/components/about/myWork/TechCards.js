const TechCards = ({tech}) =>
    <div className="ui circular segment">
        <h2 className="ui header">
            {tech.type}
            <img src={`../../../../data/${tech.img}`} />
        </h2>
    </div>

export default TechCards
