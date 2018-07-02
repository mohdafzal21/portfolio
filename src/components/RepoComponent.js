import styles from '../stylesheets/aboutMe.css'

const RepoComponent = ({name, html_url, updated_at, language}) =>
    <div className="ui segment">
        <h3>{name}</h3>
        <div className={styles.inLine}>
            <div className={styles.gitCircle}/>
            <div className={`column`}>{language}</div>
            <div className={`column ${styles.updated}`}>{updated_at}</div>
        </div>
    </div>

export default RepoComponent