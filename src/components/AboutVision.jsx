import React from 'react'
import MainLayout from '../layout/MainLayout'

const AboutVision = () => {
  return (
    <div>
      <div className="container">
        <MainLayout></MainLayout>
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <br/>
            <h4><u>Vision and Mission</u></h4>
                   <br/>
                    <h6><u>Our Vision</u></h6>
                    <br />
                    <p>To create professionally competent Engineers with human values and social commitment.</p>
                    <br/>
                    <h6><u>Our Mission</u></h6>
                    <br/>
                    <p>*Offer well balanced curriculum with student-centric approach.</p>
                    <p>*Encourage students to participate in innovation, lifelong learning and research.</p>
                    <p>*Impart ethical and human values focusing on rural needs and sustainability.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutVision
