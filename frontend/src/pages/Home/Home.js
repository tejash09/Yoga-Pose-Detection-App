import React from 'react'
import { Link } from 'react-router-dom'

import './Home.css'

export default function Home() {

    return (
        <div className='home-container'>
            <div className='home-header'>

                <h1 className='home-heading'><img src="bits-logo.png" height="50 pt"/>      Internet of Things Project</h1>
                <Link to='/about'>
                    <button
                        className="btn btn-secondary"
                        id="about-btn"
                    >
                        About Us
                    </button>
                </Link>
            </div>
            <h1 className="description">Yoga Posture Detection</h1>
            <div className="home-main">
                <div className="btn-section">
                    <Link to='/start'>
                        <button
                            className="btn start-btn"
                        >Let's Start</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}
