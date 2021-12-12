import React from 'react'

import './About.css'

export default function About() {
    return (
        <div className="about-container">
            <h1 className="about-heading">About Us</h1>
            <div className="about-main">
                <p className="about-content">
                </p>
                <div className="developer-info">
                    <h4></h4>
                    <p className="about-content">
                        We are a group of Undergraduate Students at Birla Institute of Technology and Science, Pilani.
                        We did this project of correctly classifying the yoga postures under the guidance of Prof. Vinay Chamola in the course Internet of Things.
                        It was a part of the assignment and was aimed for a raspberry pi device with a webcam.
                        After further exploration, we decided to make it a web application which would be cross-platform.   
                    </p>
                    <h4></h4>
                    <p className="about-content">Amartya Pandey: 2018B2A80689P</p>
                    <p  className="about-content">Mayank Vishnoi: 2019A7PS0098P</p>
                    <p  className="about-content">Divyank Vyas: 2019A7PS0092P</p>
                </div>
            </div>
        </div>
    )
}
