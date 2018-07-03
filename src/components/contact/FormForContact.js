import React, {Component} from 'react'
import styles from '../../stylesheets/contact.css'
import axios from 'axios'
import {keys} from '../../keys'

export default class FormForContact extends Component {

    state = {
        status: 'static'
    }

    submit = e => {

        e.preventDefault()

        const subject = "Contact Via Portfolio"
        const mailTo = "umangpahwaoff@gmail.com"
        const accessKey = keys.customAPIReq

        let {_mailFrom, _content} = this.refs
        let mailFrom = _mailFrom.value,
            content = _content.value

        let postData = {mailTo, mailFrom, content, subject, accessKey}

        axios.post('https://mycustomapi.herokuapp.com/sendMail', JSON.stringify(postData))
            .then(response => {

                if (response.data === 'Job Done')
                    this.setState({status: 'done'})

                else
                    console.log(response.data)
            })
            .catch(error => console.log('We have a situation: ' + error))

        _mailFrom.value = ''
        _content.value = ''
        _mailFrom.focus()
        this.setState({status: 'loading'})
    }

    successMessage = () =>
        <div className="ui success message">
            <div className="header">Done</div>
            <p>I'll get in touch ASAP</p>
        </div>

    render() {

        return (
            <div className={`ui two column grid container centered`}>
                <div className={`column ${styles.segmentForm}`}>
                    <div
                        className={`ui form success segment ${this.state.status !== 'loading' ? '' : 'loading'} ${styles.fieldLength}`}>
                        <form onSubmit={this.submit}>
                            <div className="field">
                                <label>Mail to</label>
                                <input type={`email`} placeholder={`umangpahwaoff@gmail.com`} readOnly/>
                            </div>
                            <div className={`field`}>
                                <label>Mail by</label>
                                <input type="email" placeholder="JohnDoe@example.com" ref='_mailFrom' required/>
                            </div>
                            <div className="field">
                                <label>Let's get in touch</label>
                                <textarea ref='_content' required/>
                            </div>
                            {this.state.status === 'done' ? this.successMessage() : <p/>}
                            <button className="ui button teal">Contact Me!</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}