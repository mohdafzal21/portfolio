import style from '../stylesheets/navigator.css'

const Navigator = () =>
    <div className={`${style.navDiv} ui container`}>
        <div className="ui secondary pointing menu">
            <a className="active item">
                Me
            </a>
            <a className="item">
                About
            </a>
            <a className="item">
                Work
            </a>
            <a className="item right floated">
                Contact
            </a>
        </div>
    </div>

export default Navigator