import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Style.css";

const Navbar = () => {
    const navigate = useNavigate();
    let user = null;
    try {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            user = JSON.parse(storedUser);
        }
    } catch (e) {
        console.error("Failed to parse user from localStorage", e);
        localStorage.removeItem("user");
    }

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate("/login");
    };
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

                            {user ? (
                                <div className="icon-circle dropdown">
                                    <Link to="#" className="text-dark" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fa-regular fa-user"></i>
                                    </Link>
                                    <ul className="dropdown-menu dropdown-menu-end shadow">
                                        <li><span className="dropdown-item-text fw-bold">Hello, {user.name}</span></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
                                    </ul>
                                </div>
                            ) : (
                                <div className="icon-circle" onClick={() => navigate('/signup')} style={{ cursor: 'pointer' }}>
                                    <i className="fa-regular fa-user text-dark"></i>
                                </div>
                            )}

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