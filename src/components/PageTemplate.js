import Navigator from './Navigator'
import Face from './Face'
import ShortInfo from './ShortInfo'
import MyJourney from './MyJourney'
import MyWork from './MyWork'

const PageTemplate = ({children}) =>
    <div>
        <Navigator/>
        {children}
    </div>

export const PageMe = () =>
    <PageTemplate>
        <Face/>
        <ShortInfo/>
    </PageTemplate>

const styles = {

    margin: '10px'
}

export const PageAbout = () =>
    <PageTemplate>
        <div className={`ui three column doubling stackable grid container`} style={styles}>
            <div className={`column`}>
                <MyJourney/>
            </div>
            <div className={`column`}>
                <MyWork/>
            </div>
        </div>
    </PageTemplate>

