import React from 'react'
import MainLayout from '../layout/MainLayout';

const HomePage = () => {
    return (
     <div>
      <div className="container">
        <MainLayout></MainLayout>
         <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <img src="https://lh3.googleusercontent.com/p/AF1QipNqO3NyWsFqQy6pPRcKp3S_ECH5A5GDFBp1udPT=s1360-w1360-h1020" class="img-fluid" alt="..."/>
                            </div>
                        </div>

                        <br />
                        <h3 align="center"><u><i>WELCOME TO SREEBUDDHA COLLEGE OF ENGINEERING</i></u></h3>
                        <br />

                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <img src="https://sbce.ac.in/wp-content/themes/sbce/images/buddha.jpg" class="img-thumbnail" alt="..." />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <p>Sree Buddha College of Engineering, affiliated to APJ Abdul Kalam Technological University, has been par excellence in technical education. The sermons of Lord Buddha gave us a lead to be the flowers of exaltation. The primary objective is to promote education and research in the field of technology and to replenish the skills that get lurked in the budding technocrats. All the members of SBCE push themselves to set the institution as an example to the world. The institution is now accredited by National Board of Accreditation for 4 Undergraduate Programmes and re-accredited with NAAC with effect from Nov 2019. Also the college has been conferred Autonomy by the UGC from 2024-25 Academic Year onwards</p>
                               <a href="/AboutProfile"><button className="btn btn-primary">View More</button></a>
                            </div>                   
                        </div>
                    </div>
                </div>
         </div>
      </div>
    )
}

export default HomePage
