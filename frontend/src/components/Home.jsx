import React from "react";
import "../Style.css";

import Carousel from "react-bootstrap/Carousel";

import slide1 from "../assets/home1.png";
import slide2 from "../assets/home2.png";
import slide3 from "../assets/home3.png";
import hotdeal from "../assets/home4.png";

const Home = () => {
    return (
        <div className="hero-section container-fluid">

            <div className="row g-4">

                <div className="col-lg-3">

                    <div className="left-sidebar">

                        <div className="category-item">
                            <i className="fa-solid fa-mobile-screen-button"></i>
                            <span>Smartphones</span>
                        </div>

                        <div className="category-item">
                            <i className="fa-solid fa-laptop"></i>
                            <span>Laptops, Tablets & PCs</span>
                        </div>

                        <div className="category-item">
                            <i className="fa-solid fa-memory"></i>
                            <span>PC Components</span>
                        </div>

                        <div className="category-item">
                            <i className="fa-solid fa-gamepad"></i>
                            <span>Gaming</span>
                        </div>

                        <div className="category-item">
                            <i className="fa-solid fa-blender"></i>
                            <span>Appliances</span>
                        </div>

                        <div className="category-item">
                            <i className="fa-solid fa-tv"></i>
                            <span>TV & Audio</span>
                        </div>

                        <div className="category-item">
                            <i className="fa-solid fa-house"></i>
                            <span>Home & Outdoor</span>
                        </div>

                        <div className="category-item">
                            <i className="fa-solid fa-camera"></i>
                            <span>Cameras</span>
                        </div>

                        <button className="buy-btn">
                            <i className="fa-solid fa-bolt"></i>
                            Buy WoodMart
                        </button>

                    </div>

                </div>


                <div className="col-lg-6">

                    <div className="slider-wrapper">

                        <Carousel
                            fade
                            indicators={false}
                            interval={3000}
                            prevIcon={
                                <span className="custom-arrow">
                                    <i className="fa-solid fa-chevron-left"></i>
                                </span>
                            }
                            nextIcon={
                                <span className="custom-arrow">
                                    <i className="fa-solid fa-chevron-right"></i>
                                </span>
                            }
                        >


                            <Carousel.Item>

                                <div className="slide-content">

                                    <img src={slide1} alt="" />

                                </div>

                            </Carousel.Item>


                            <Carousel.Item>

                                <div className="slide-content">


                                    <img src={slide2} alt="" />


                                </div>

                            </Carousel.Item>


                            <Carousel.Item>

                                <div className="slide-content">
                                    <img src={slide3} alt="" />

                                </div>

                            </Carousel.Item>

                        </Carousel>

                    </div>

                </div>

                <div className="col-lg-3">

                    <div className="hot-deal-card">

                        <div className="deal-header">

                            <div className="deal-title">
                                <span className="dot"></span>
                                <h3>Hot Deals</h3>
                            </div>

                            <div className="timer">
                                232 : 18 : 37 : 36
                            </div>

                        </div>

                        <div className="deal-image">

                            <img src={hotdeal} alt="" />

                        </div>

                        <div className="product-info">

                            <div className="small-images">
                                <img src={hotdeal} alt="" />
                                <img src={hotdeal} alt="" />
                            </div>

                            <h4>Audioengine A2+BT</h4>

                            <div className="stars">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>

                            <h5>$300.00</h5>

                        </div>

                    </div>

                </div>

            </div>

            <div className="brands-section">

                <div className="brand-box">acer</div>
                <div className="brand-box">ALOGIC</div>
                <div className="brand-box">AOC</div>
                <div className="brand-box"></div>
                <div className="brand-box">ASUS</div>
                <div className="brand-box">BenQ</div>
                <div className="brand-box">BOSE</div>

            </div>

        </div>
    );
};

export default Home;