import React from "react";
import "../Style.css";

const Navbar = () => {
    return (
        <>
            <div className="top-header">
                <div className="container-fluid px-lg-4 px-3">
                    <div className="d-flex justify-content-between align-items-center flex-wrap">

                        <p className="shipping-text mb-0">
                            FREE SHIPPING FOR ALL ORDERS OF $1200
                        </p>

                        <div className="top-links">
                            <a href="/">Blog</a>
                            <a href="/">About Us</a>
                            <a href="/">Contact Us</a>
                            <a href="/">FAQs</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-navbar">
                <div className="container-fluid px-lg-4 px-3">
                    <div className="navbar-wrapper">

                        <div className="logo-section">
                            <div className="logo-box">Q</div>
                            <h1 className="logo-text">
                                woodmart<span>.</span>
                            </h1>
                        </div>

                        <button className="category-btn">
                            <i className="fa-solid fa-border-all"></i>
                            Categories
                            <i className="fa-solid fa-chevron-down"></i>
                        </button>

                        <div className="search-box">
                            <input
                                type="text"
                                placeholder="Search for products"
                            />

                            <button className="search-btn">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>

                        <button className="discount-btn">
                            Discounts
                        </button>

                        <div className="nav-icons">

                            <div className="icon-circle">
                                <i className="fa-regular fa-user"></i>
                            </div>

                            <div className="icon-circle position-relative">
                                <i className="fa-solid fa-scale-balanced"></i>
                                <span className="count-badge">0</span>
                            </div>

                            <div className="icon-circle position-relative">
                                <i className="fa-regular fa-heart"></i>
                                <span className="count-badge">0</span>
                            </div>

                            <div className="icon-circle dark-cart position-relative">
                                <i className="fa-solid fa-cart-shopping"></i>
                                <span className="count-badge">0</span>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;