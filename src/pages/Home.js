import heroImg from '../images/hero-img.png';
import imgProd1 from "../images/hero2.png";
import Product1 from '../images/srms.svg';
import Product2 from '../images/srms.svg';
import Product3 from '../images/Safsims.svg';


import React from "react";

const Home = () => {
    return ( 
    <div className='home'>
        <header>
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
    </header>
    <section className='section'>
        <div className="section--wrapper">
            <div className="img-pro">
                <img className='img-prod' src={imgProd1} alt="" />
            </div>
            <article >
                <div className="product-headline">
                <h2>Our Products Are Designed to Simplify School Activities</h2>
            </div>
            <div>
                <p className='product--subheadline'>FlexiSAF is on a mission to provide the best administration, teaching and learning experience to educators, parents and students through innovative software and technology.</p>
                </div>

            <div className='red'>
            <div className="product-grid">
                <div className="product-box">
                    <img src={Product1} alt="" />
                </div>
                <div className="product-box">
                    <img src={Product2} alt="" />
                </div>
                <div className="product-box">
                    <img src={Product3} alt="" />
                </div>
                <div className="product-box">
                    <img src={Product1} alt="" />
                </div>
                <div className="product-box">
                    <img src={Product1} alt="" />
                </div>

            </div>
            </div>
            </article>

        </div>

    </section>
    </div>


     );
}
 
export default Home;