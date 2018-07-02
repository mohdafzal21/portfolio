import React, {Component} from 'react'
import styles from '../stylesheets/aboutMe.css'
import axios from 'axios'
import Loader from './Loader'
import RepoComponent from './RepoComponent'

export default class GitHubFeed extends Component {

    state = {

        repoData: null
    }

    repoData = [];

    componentDidMount() {

        axios.get('https://api.github.com/users/umaniax/repos')
            .then(response => {

                response.data.forEach(item => {

                    let {name, html_url, updated_at, language} = item
                    this.repoData.push({name, html_url, updated_at, language})
                })

                this.setState({repoData: this.repoData})
            })
    }

    render() {

        return (
            <div>
                <div className={`ui raised text segment container ${styles.gitHub}`}>
                    <a className={`ui header inverted`}><img src='../../data/github-logo.png'/> GitHub Repos</a>
                </div>
                <div className={`ui raised text very padded segment container ${styles.belowTitle}`}>
                    {!this.state.repoData ?
                        <Loader/> :
                        this.state.repoData.map((item, ind) => <RepoComponent key={ind} {...item}/>)}
                </div>
            </div>
        )
    }
}