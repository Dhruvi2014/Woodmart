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

import pc1 from "../assets/pc1.jpg";
import pc2 from "../assets/pc2.jpg";
import pc3 from "../assets/pc3.jpg";
import pc4 from "../assets/pc4.jpg";
import pc5 from "../assets/pc5.jpg";
import pc6 from "../assets/pc6.jpg";

import appliance1 from "../assets/appliance1.jpg";
import appliance2 from "../assets/appliance2.jpg";
import appliance3 from "../assets/appliance3.jpg";
import appliance4 from "../assets/appliance4.jpg";
import appliance5 from "../assets/appliance5.jpg";
import appliance6 from "../assets/appliance6.jpg";

import gaming1 from "../assets/gaming1.webp";
import gaming2 from "../assets/gaming2.webp";
import gaming3 from "../assets/gaming3.webp";
import gaming4 from "../assets/gaming4.webp";
import gaming5 from "../assets/gaming5.webp";
import gaming6 from "../assets/gaming6.webp";

import airpods from "../assets/airpods1.jpg";

import article1 from "../assets/gamingpc.jpg";
import article2 from "../assets/ps5.webp";
import article3 from "../assets/cleaner.jpg";
import article4 from "../assets/airtag.jpg";
import author from "../assets/author.jpg";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [gamingProducts, setGamingProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("Smartphones");

    const categoryTabs = ["Smartphones", "PC & Components", "Appliances"];

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
        "pc1.jpg": pc1,
        "pc2.jpg": pc2,
        "pc3.jpg": pc3,
        "pc4.jpg": pc4,
        "pc5.jpg": pc5,
        "pc6.jpg": pc6,
        "appliance1.jpg": appliance1,
        "appliance2.jpg": appliance2,
        "appliance3.jpg": appliance3,
        "appliance4.jpg": appliance4,
        "appliance5.jpg": appliance5,
        "appliance6.jpg": appliance6,
        "gaming1.webp": gaming1,
        "gaming2.webp": gaming2,
        "gaming3.webp": gaming3,
        "gaming4.webp": gaming4,
        "gaming5.webp": gaming5,
        "gaming6.webp": gaming6,
    };

    useEffect(() => {
        fetchProducts(selectedCategory);
    }, [selectedCategory]);

    useEffect(() => {
        fetchGamingProducts();
    }, []);

    const fetchProducts = async (category = "Smartphones") => {
        try {
            const url = `http://localhost:5000/api/products?category=${encodeURIComponent(category)}`;
            const res = await axios.get(url);
            setProducts(res.data.products);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchGamingProducts = async () => {
        try {
            const url = `http://localhost:5000/api/products?category=${encodeURIComponent("Gaming")}`;
            const res = await axios.get(url);
            setGamingProducts(res.data.products);
        } catch (error) {
            console.log(error);
        }
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const products1 = [
        {
            id: 1,
            name: "Baseus Privity Ring Bracket",
            price: "$12.00",
            image: pc1,
        },

        {
            id: 2,
            name: "Belkin Blue Light UltraGlass 2",
            price: "$44.99",
            image: appliance1,
        },

        {
            id: 3,
            name: "Nokia G60 5G",
            price: "$378.00",
            image: phone11,
        },

        {
            id: 4,
            name: "OtterBox Figura Series Case",
            price: "$49.95",
            image: pc5,
        },

        {
            id: 5,
            name: "Poco Honor X9b",
            price: "$350.00",
            image: phone10,
        },

        {
            id: 6,
            name: "SanDisk MAX ENDURANCE",
            price: "$32.00",
            image: appliance2,
        },
    ];

    const articles = [
        {
            id: 1,
            image: article1,
            day: "17",
            month: "JUL",
            category: "REVIEWS",
            title: "Review of the new MacBook Pro on the powerful M3 chip series",
        },
        {
            id: 2,
            image: article2,
            day: "10",
            month: "JUL",
            category: "NOVELTY",
            title: "What’s New in PlayStation 5 Slim and Release Date",
        },
        {
            id: 3,
            image: article3,
            day: "03",
            month: "JUL",
            category: "REVIEWS",
            title: "Top 5 Most Powerful Vertical Vacuum Cleaners",
        },
        {
            id: 4,
            image: article4,
            day: "27",
            month: "JUN",
            category: "ADVICES",
            title: "How Do I Share Apple AirTag With Other Users?",
        },
    ];


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
                            {categoryTabs.map((category) => (
                                <button
                                    key={category}
                                    className={
                                        category === selectedCategory
                                            ? "active-tab"
                                            : ""
                                    }
                                    onClick={() => handleCategoryClick(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                    </div>

                    <div className="row g-4">

                        {products.map((item) => (

                            <div
                                className="col-xxl-2 col-xl-3 col-lg-4 col-md-6"
                                key={item.id}
                            >

                                <div className="product-card">


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


                                    <div className="product-image">

                                        <img
                                            src={imageMap[item.image]}
                                            alt={item.name}
                                        />

                                    </div>

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


                                        <div className="color-wrapper">
                                            {[item.color1, item.color2, item.color3, item.color4]
                                                .filter(Boolean)
                                                .map((color, index) => (
                                                    <span
                                                        key={index}
                                                        className="color-circle"
                                                        style={{ background: color }}
                                                    ></span>
                                                ))}
                                        </div>


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

            <section className="gaming-section py-5">
                <div className="container-fluid">
                    <div className="top-header">
                        <h1>
                            <span>Gaming</span> Essentials
                        </h1>
                        <p className="gaming-description">
                            Top gaming picks from the backend API, with hover actions for quick preview, wishlist, and compare.
                        </p>
                    </div>
                    <div className="row g-4">
                        {gamingProducts.map((item) => (
                            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6" key={item.id}>
                                <div className="product-card">
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
                                    <div className="product-image">
                                        <img src={imageMap[item.image]} alt={item.name} />
                                    </div>
                                    <div className="product-content">
                                        <div className="product-top">
                                            <span>{item.category}</span>
                                            <div className="rating">
                                                {item.rating}
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                        </div>
                                        <h3>{item.name}</h3>
                                        <div className="color-wrapper">
                                            {[item.color1, item.color2, item.color3, item.color4]
                                                .filter(Boolean)
                                                .map((color, index) => (
                                                    <span
                                                        key={index}
                                                        className="color-circle"
                                                        style={{ background: color }}
                                                    ></span>
                                                ))}
                                        </div>
                                    </div>
                                    <div className="product-bottom">
                                        <h2>${Number(item.price).toFixed(2)}</h2>
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

            <section className="limited-offer-section">

                <div className="container-fluid">

                    <div className="offer-top-box">

                        <div>

                            <h2>
                                <span>Limited</span> Offers!
                            </h2>

                            <p>
                                Hurry Up To Buy These Products With Discount.
                            </p>

                        </div>


                        <div className="timer-wrapper">

                            <div className="time-box">
                                <h3>231</h3>
                                <span>Days</span>
                            </div>

                            <div className="time-box">
                                <h3>17</h3>
                                <span>Hr</span>
                            </div>

                            <div className="time-box">
                                <h3>26</h3>
                                <span>Min</span>
                            </div>

                            <div className="time-box">
                                <h3>30</h3>
                                <span>Sc</span>
                            </div>

                        </div>

                    </div>


                    <div className="row g-4">

                        <div className="col-lg-6">

                            <div className="airpods-card">

                                <h5>Mi Cordless Screwdriver</h5>

                                <h1>AirPods Pro 3</h1>

                                <button>
                                    Shop Now
                                </button>

                                <div className="airpods-image">

                                    <img
                                        src={airpods}
                                        alt=""
                                    />

                                </div>

                            </div>

                        </div>

                        <div className="col-lg-6">

                            <div className="row g-4">

                                {products1.map((item) => (

                                    <div
                                        className="col-md-6"
                                        key={item.id}
                                    >

                                        <div className="small-product-card">

                                            <div className="small-product-image">

                                                <img
                                                    src={item.image}
                                                    alt=""
                                                />

                                            </div>

                                            <div className="small-product-content">

                                                <h4>
                                                    {item.name}
                                                </h4>

                                                <div className="stars">

                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>

                                                </div>

                                                <h5>
                                                    {item.price}
                                                </h5>

                                            </div>

                                        </div>

                                    </div>

                                ))}

                            </div>


                            <div className="offer-text">

                                <p>
                                    *Number of products is limited!
                                </p>

                                <p>
                                    **Promotional products cannot be combined with promotional codes.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section className="useful-articles-section">
                <div className="container-fluid px-lg-4 px-3">

                    <div className="articles-header">
                        <h2>Useful Articles</h2>

                        <button className="all-articles-btn">
                            All Articles
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>

                    <div className="row g-4">
                        {articles.map((article) => (
                            <div
                                className="col-xl-3 col-lg-6 col-md-6"
                                key={article.id}
                            >
                                <div className="article-card">

                                    <div className="article-image-wrapper">
                                        <img
                                            src={article.image}
                                            alt="article"
                                            className="article-image"
                                        />

                                        <div className="date-badge">
                                            <h5>{article.day}</h5>
                                            <span>{article.month}</span>
                                        </div>

                                        <div className="category-badge">
                                            {article.category}
                                        </div>
                                    </div>

                                    <div className="article-content">
                                        <h3>{article.title}</h3>

                                        <div className="article-meta">

                                            <div className="author-info">
                                                <span>Posted by</span>

                                                <img src={author} alt="author" />

                                                <p>Mr. Mackay</p>
                                            </div>

                                            <div className="article-icons">

                                                <i className="fa-solid fa-share-nodes"></i>

                                                <div className="comment-box">
                                                    <i className="fa-regular fa-comment"></i>
                                                    <span>0</span>
                                                </div>

                                            </div>

                                        </div>

                                        <a href="/" className="read-more">
                                            Continue Reading
                                        </a>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <section className="store-content-section">
                <div className="container-fluid px-lg-4 px-3">

                    <div className="store-content-wrapper">

                        <h2 className="main-heading">
                            Online store of household appliances and electronics
                        </h2>

                        <p className="content-text">
                            Then the question arises: where’s the content? Not there yet?
                            That’s not so bad, there’s some dummy copy to the rescue. But
                            worse, what if the fish doesn’t fit in the can, the foot’s too
                            big for the boot? Or too small? To short sentences, to many
                            headings, images too large for the proposed design, or too
                            small, or they fit in but it looks iffy for reasons.
                        </p>

                        <h3 className="sub-heading">
                            Online shopping that really is convenient
                        </h3>

                        <p className="content-text">
                            A client that’s unhappy for a reason is a problem, a client
                            that’s unhappy though he or her can’t quite put a finger on it
                            is worse. Chances are there wasn’t collaboration,
                            communication, and checkpoints, there wasn’t a process agreed
                            upon or specified with the granularity required. It’s content
                            strategy gone awry right from the start. If that’s what you
                            think how bout the other way around? How can you evaluate
                            content without design? No typography, no colors, no layout,
                            no styles, all those things that convey the important signals
                            that go beyond the mere textual, hierarchies of information,
                            weight, emphasis, oblique stresses, priorities, all those
                            subtle cues that also have visual and emotional appeal to the
                            reader.
                        </p>

                    </div>

                </div>
            </section>
        </>
    );
};

export default Home;