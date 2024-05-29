import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Home(){
    return(
        <div>
            <p>Home Page</p>
            <Carousel >
                <div>
                    <img src="assets/slider1.jpg" />
                    <p className="legend">Offer 1</p>
                </div>
                <div>
                    <img src="assets/slider2.jpg" />
                    <p className="legend">Offer 2</p>
                </div>
                <div>
                    <img src="assets/slider1.jpg" />
                    <p className="legend">Offer 3</p>
                </div>
            </Carousel>
        </div>
    )
}

export default Home;