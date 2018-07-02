import styles from '../stylesheets/aboutMe.css'

const randomColor = () => '#' + [...Array(6)].map(() => parseInt(Math.random() * 16).toString(16)).join('')

const RepoComponent = ({name, html_url, updated_at, language}) => {

    const updateDate = new Date(updated_at)

    const gitCircle = {

        background: randomColor(),
        width: '10px',
        height: '10px',
        borderRadius: '50%'
    }

    return (
        <div className="ui segment">
            <h3>{name}</h3>
            <div className={styles.inLine}>
                <div style={gitCircle}/>
                <div className={`column`}>{language}</div>
                <div className={`column ${styles.updated}`}>{updateDate.toLocaleDateString()}</div>
            </div>
        </div>
    )
}

export default RepoComponent