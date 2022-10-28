import heroImg from '../images/hero-img.png';

import React from "react";

const Home = () => {
    return ( 
    <div className="home">
        {/* <header> */}
        <div className="hero-container">
            <div className="hero-content">
                <div className="hero-title">
                    <h2>Improving Education Through Technology solutions</h2>
                </div>
                <div className="sub-title">
                    <p>Providing the best school administration, teaching and learning experience to educators, students and parents through innovative software and technology. 
</p>
                </div>
                <button className='btn-blue'>Learn More</button>
            </div>
            <div className="hero-img">
                <img src={heroImg} alt="" />
            </div>
        </div>
    {/* </header> */}
    </div>


     );
}
 
export default Home;