import React from 'react'
import MainLayout from '../layout/MainLayout'

const AboutFacilities = () => {
    return (
        <div>
            <div className="container">
                <MainLayout></MainLayout>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <br/>
                        <h4 align="center"><u>Facilities</u></h4>
                        <div id="carouselExampleDark" class="carousel carousel-dark slide">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://sbce.ac.in/wp-content/gallery/sbce/334A9153.jpg" class="rounded mx-auto d-block w-75" alt="..."/>
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5>Central Library</h5>
                                            <br/><br/>
                                        </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="https://sbce.ac.in/wp-content/gallery/sbce/334A9208-copy.jpg" class="rounded mx-auto d-block w-75" alt="..."/>
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5>Conference hall</h5>
                                            <br/>
                                        </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="https://sbce.ac.in/wp-content/uploads/2017/05/1436334306_Computer_Center.jpg" class="rounded mx-auto d-block w-75" alt="..."/>
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5>Internet Lab</h5>
                                        </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="https://sbce.ac.in/wp-content/uploads/2017/07/hostel.jpg" class="rounded mx-auto d-block w-75" alt="..."/>
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5>Hostel : boys and girls</h5>
                                            <br/>
                                        </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="https://sbce.ac.in/wp-content/uploads/2018/12/canteen-3.jpg" class="rounded mx-auto d-block w-75" alt="..."/>
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5>Canteen</h5>
                                        </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
    )
}

export default AboutFacilities
