import React from 'react'
import {Button, Icon} from 'semantic-ui-react'
import style from '../stylesheets/connectButton.css'

const connectButtons = ['facebook', 'twitter', 'google plus', 'linkedin', 'instagram']

const ConnectButtonList = () => (
    <div>
        {connectButtons.map((item, ind) =>
            <Button key={ind} color={item}>
                <Icon name={item}/> {item}
            </Button>
        )}
        <a className="github-button gitBut" href="https://github.com/ntkme" data-size="large" aria-label="Follow @ntkme on GitHub">Follow @ntkme</a>
    </div>
)

export default ConnectButtonList