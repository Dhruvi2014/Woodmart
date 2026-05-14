import React, { useEffect, useState } from "react";
import "../Style.css";
import axios from "axios";

import Carousel from "react-bootstrap/Carousel";

import slide1 from "../assets/home1.png";
import slide2 from "../assets/home2.png";
import slide3 from "../assets/home3.png";
import hotdeal from "../assets/home4.png";

import iphone15 from "../assets/phone1.webp";
import iphone15plus from "../assets/phone2.webp";
import iphone15pro from "../assets/phone3.webp";
import iphone15promax from "../assets/phone4.jpg";
import iphone17 from "../assets/phone5.webp";
import iphone17pro from "../assets/phone6.webp";

import phone7 from "../assets/phone7.webp";
import phone8 from "../assets/phone8.webp";
import phone9 from "../assets/phone9.webp";
import phone10 from "../assets/phone10.webp";
import phone11 from "../assets/phone11.jpg";
import phone12 from "../assets/phone12.jpg";

const Home = () => {
     const [products, setProducts] = useState([]);


  const imageMap = {
    "phone1.webp": iphone15,
    "phone2.webp": iphone15plus,
    "phone3.webp": iphone15pro,
    "phone4.jpg": iphone15promax,
    "phone5.webp": iphone17,
    "phone6.webp": iphone17pro,
    "phone7.webp": phone7,
    "phone8.webp": phone8,
    "phone9.webp": phone9,  
    "phone10.webp": phone10,
    "phone11.jpg": phone11,
    "phone12.jpg": phone12,
  };



  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {

      const res = await axios.get(
        "http://localhost:5000/api/products"
      );

      setProducts(res.data.products);

    } catch (error) {
      console.log(error);
    }
  };
    return (
        <>
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


        <section className="bestseller-section">

      <div className="container-fluid">


        <div className="top-header">

          <h1>
            <span>Bestsellers</span> in Category
          </h1>

          <div className="category-tabs">

            <button className="active-tab">
              Smartphones
            </button>

            <button>
              PC & Components
            </button>

            <button>
              Appliances
            </button>

          </div>

        </div>

        {/* PRODUCTS */}

        <div className="row g-4">

          {products.map((item) => (

            <div
              className="col-xxl-2 col-xl-3 col-lg-4 col-md-6"
              key={item.id}
            >

              <div className="product-card">

                {/* HOVER ICONS */}

                <div className="hover-icons">

                  <div className="icon-box">
                    <i className="fa-solid fa-scale-balanced"></i>
                  </div>

                  <div className="icon-box">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>

                  <div className="icon-box">
                    <i className="fa-regular fa-heart"></i>
                  </div>

                </div>

                {/* IMAGE */}

                <div className="product-image">

                  <img
                    src={imageMap[item.image]}
                    alt={item.name}
                  />

                </div>

                {/* CONTENT */}

                <div className="product-content">

                  <div className="product-top">

                    <span>
                      {item.category}
                    </span>

                    <div className="rating">

                      {item.rating}

                      <i className="fa-solid fa-star"></i>

                    </div>

                  </div>

                  <h3>
                    {item.name}
                  </h3>

                  {/* COLORS */}

                  <div className="color-wrapper">

                    <span
                      className="color-circle"
                      style={{
                        background: item.color1
                      }}
                    ></span>

                    <span
                      className="color-circle"
                      style={{
                        background: item.color2
                      }}
                    ></span>

                    <span
                      className="color-circle"
                      style={{
                        background: item.color3
                      }}
                    ></span>

                    <span
                      className="color-circle"
                      style={{
                        background: item.color4
                      }}
                    ></span>

                  </div>

                  {/* STORAGE */}

                  <div className="storage-wrapper">

                    {item.storage1 && (
                      <button>
                        {item.storage1}
                      </button>
                    )}

                    {item.storage2 && (
                      <button>
                        {item.storage2}
                      </button>
                    )}

                  </div>

                </div>

                {/* BOTTOM */}

                <div className="product-bottom">

                  <h2>
                    ${item.price}.00
                  </h2>

                  <div className="cart-icon">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
        </>
    );
};

export default Home;