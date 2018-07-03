import React from 'react'
const connectButtons = ['facebook', 'twitter', 'google plus', 'linkedin', 'instagram']

const style = {

    backgroundColor: 'black',
    height: '40px'
}

const marginStyle = {

    marginTop: '20px'
}

const imgStyle = {

    height: '12px'
}

const ConnectButtonList = () => (
    <div className={`ui container`} align="center" style={marginStyle}>
        {connectButtons.map((item, ind) =>
            <button key={ind} className={`ui button ${item}`}>
                <i className={`${item} icon`}/> {item}
            </button>
        )}
        <a href={`https://github.com/umaniax`}><button style={style} className="ui button inverted" data-size="large" aria-label="Follow @umaniax on GitHub"><img style={imgStyle} src={`../../data/github-logo.png`}/> Follow @umaniax</button></a>
    </div>
)

export default ConnectButtonList