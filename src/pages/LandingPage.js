import React, { Component } from 'react'


import "../styles/landing-page.css";
const BG_IMG_URL = '%PUBLIC_URL%/bg_main.png'
export default class LandingPage extends Component {
    render() {
        return (
            <div className="landing-page">
                {/* <img style={{ alignContent: 'center' }} className="landing-page-img" src={BG_IMG_URL} alt="img" ></img> */}
            </div>
        )
    }
}
