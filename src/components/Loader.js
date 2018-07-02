const loader = {

    width: '345px',
    height: '50px'
}

const Loader = () =>
    <div style={loader}>
        <div className="ui active inverted dimmer">
            <div className="ui text loader">Loading</div>
        </div>
        <p></p>
    </div>

export default Loader