import React from "react";
import "../Footer.css";
import paymentImg from "../assets/footer-payment.webp"; 

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container-fluid px-lg-5 px-3">
        <div className="row gy-4">

          <div className="col-lg-4 col-md-6">
            <div className="footer-logo">
              <span className="logo-icon">Q</span>
              <h2>woodmart<span>.</span></h2>
            </div>

            <div className="footer-info">
              <h5>Address:</h5>
              <a href="/">
                1060 Cudahy Pl, San Diego, CA 92110
              </a>

              <h5 className="mt-4">Contact:</h5>

              <a href="tel:+16864921041">
                (686) 492-1041
              </a>

              <a href="mailto:xtemos.mail@mail.com">
                xtemos.mail@mail.com
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 col-6">
            <h4 className="footer-title">Useful Links</h4>

            <ul className="footer-links">
              <li><a href="/">About Us</a></li>
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">Blog</a></li>
              <li><a href="/">FAQs</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 col-6">
            <h4 className="footer-title">Popular Categories</h4>

            <ul className="footer-links">
              <li><a href="/">Smartphones</a></li>
              <li><a href="/">Gaming</a></li>
              <li><a href="/">Appliances</a></li>
              <li><a href="/">Home & Outdoor</a></li>
              <li><a href="/">PC Components</a></li>
              <li><a href="/">Cameras</a></li>
            </ul>
          </div>

          <div className="col-lg-4">
            <div className="newsletter-box">
              <h2>Join Our Mailing List</h2>

              <p>
                Receive any latest updates and promotions.
              </p>

              <div className="newsletter-input">
                <input
                  type="email"
                  placeholder="Your email address"
                />

                <button>Sign Up</button>
              </div>

              <small>
                Will be used in accordance with our{" "}
                <a href="/">Privacy Policy.</a>
              </small>
            </div>
          </div>
        </div>

        <div className="footer-bottom">

          <div className="bottom-content">
            <p>
              WoodMart theme © 2026 WooCommerce Themes.
            </p>

            <img
              src={paymentImg}
              alt="payments"
              className="payment-img"
            />
          </div>
        </div>
      </div>

      <div className="scroll-top">
        <i className="fa-solid fa-chevron-up"></i>
      </div>
    </footer>
  );
};

export default Footer;