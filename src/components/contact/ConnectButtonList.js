import React from 'react'
const connectButtons = [
    {
        type: 'facebook',
        link: 'https://www.facebook.com/umang.pahwa'
    },
    {
        type: 'linkedin',
        link: 'https://www.linkedin.com/in/umang-pahwa-ab4b5b122/'
    },
    {
        type: 'instagram',
        link: 'https://www.instagram.com/uma_pah/'
    }
]

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
            <a key={ind} href={item.link}><button className={`ui button ${item.type}`}>
                <i className={`${item.type} icon`}/> {item.type}
            </button></a>
        )}
        <a href={`https://github.com/umaniax`}><button style={style} className="ui button inverted" data-size="large" aria-label="Follow @umaniax on GitHub"><img style={imgStyle} src={`../../data/github-logo.png`}/> Follow @umaniax</button></a>
    </div>
)

export default ConnectButtonList