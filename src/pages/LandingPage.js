import React, { Component } from 'react'

import "../styles/landing-page.sass";



const BG_IMG_URL = 'https://img.youtube.com/vi/l171rOOGB9M/maxresdefault.jpg'
export default class LandingPage extends Component {
    render() {
        return (
            <div id="home" className="landing-page">
                <img style={{ alignContent: 'center' }} className="landing-page-img" src={BG_IMG_URL} alt="img" ></img>
            </div>
        )
    }
}
