import React from 'react'
import MainLayout from '../layout/MainLayout';

const Gallery = () => {
    return (
        <div>
            <div className="container">
                <MainLayout></MainLayout>       
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <br/>
                        <h4 align="center"><u>Photo Gallery</u></h4>
                        <br/>
                       <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                        <img src="https://sbce.ac.in/wp-content/uploads/2018/07/008.jpg" class="img-fluid" alt="..."/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                        <img src="https://sbce.ac.in/wp-content/uploads/2018/07/0016.jpg" class="img-fluid" alt="..."/>
                        </div>
                        <div className="col col-6 col-sm-6 col-md-4 col-lg-13 col-xl-3 col-xxl-3">
                        <img src="https://sbce.ac.in/wp-content/gallery/sbce/thumbs/thumbs_334A9153.jpg" class="img-fluid" alt="..."/>
                        </div>
                        <div className="col col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <img src="https://sbce.ac.in/wp-content/gallery/sbce/thumbs/thumbs_334A9213.jpg" class="img-fluid" alt="..."/>
                        </div>
                        <div className="col col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <img src="https://sbce.ac.in/wp-content/gallery/sbce/thumbs/thumbs_334A8405-copy.jpg" class="img-fluid" alt="..."/>
                        </div>
                        <div className="col col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <img src="https://sbce.ac.in/wp-content/gallery/sbce/thumbs/thumbs_334A9332.jpg" class="img-fluid" alt="..."/>
                        </div>
                        <div className="col col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <img src="https://sbce.ac.in/wp-content/gallery/sbce/thumbs/thumbs_334A8233.jpg" class="img-fluid" alt="..."/>
                        </div>
                        <div className="col col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <img src="https://sbce.ac.in/wp-content/gallery/sbce/thumbs/thumbs_334A9286.jpg" class="img-fluid" alt="..."/>
                        </div>
                        <div className="col col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <img src="https://sbce.ac.in/wp-content/gallery/sbce/thumbs/thumbs_334A8536.jpg" class="img-fluid" alt="..."/>
                        </div>
                        <div className="col col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <img src="https://sbce.ac.in/wp-content/gallery/sbce/thumbs/thumbs_334A8522.jpg" class="img-fluid" alt="..."/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <img src="https://sbce.ac.in/wp-content/uploads/2024/04/electra24-scaled.jpeg" class="img-fluid" alt="..."/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                        <img src="https://sbce.ac.in/wp-content/uploads/2024/05/Collage.jpg" class="img-fluid" alt="..."/> 
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                        <img src="https://sbce.ac.in/wp-content/uploads/2024/04/ECN.jpg" class="img-fluid" alt="..."/>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery
