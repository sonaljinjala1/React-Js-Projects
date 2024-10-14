import React from 'react';
import './banner.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';




const Banner = () => {
    return (
        <div>

            <section className='section1'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="banner">
                                <h5><span>100%</span> Organic Fruits</h5>
                                <h1>Explore fresh & <br></br>juicy fruits.</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis
                                    beatae consequuntur.</p>
                                <div class="button">
                                    <a href="#" class="cr-button">
                                        shop now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="img">
                    <img src="src/img/2.png" alt="" width={"50px"} height={"50px"} />
                </div>
                <div className="img1">
                    <img src="src/img/4.png" alt="" width={"60px"} height={"60px"} />
                </div>
                <div className="img2">
                    <img src="src/img/5.png" alt="" width={"100px"} height={"100px"} />
                </div>
                <div className="img3">
                    <img src="src/img/3.png" alt="" width={"100px"} height={"100px"} />
                </div>
            </section>
        </div>
    )
}

export default Banner;


