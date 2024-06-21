// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <div className="site-footer">
      <div className="inner first">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="widget">
                <h3 className="heading">About Tour</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
              <div className="widget">
                <ul className="list-unstyled social">
                  <li><a href="#"><span className="icon-twitter"></span></a></li>
                  <li><a href="#"><span className="icon-instagram"></span></a></li>
                  <li><a href="#"><span className="icon-facebook"></span></a></li>
                  <li><a href="#"><span className="icon-linkedin"></span></a></li>
                  <li><a href="#"><span className="icon-dribbble"></span></a></li>
                  <li><a href="#"><span className="icon-pinterest"></span></a></li>
                  <li><a href="#"><span className="icon-apple"></span></a></li>
                  <li><a href="#"><span className="icon-google"></span></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 pl-lg-5">
              <div className="widget">
                <h3 className="heading">Pages</h3>
                <ul className="links list-unstyled">
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="widget">
                <h3 className="heading">Resources</h3>
                <ul className="links list-unstyled">
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Services</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="widget">
                <h3 className="heading">Contact</h3>
                <ul className="list-unstyled quick-info">
                  <li><a href="tel://11234567890"><span className="icon-phone"></span> +1 123 456 7890</a></li>
                  <li><a href="mailto:info@yourdomain.com"><span className="icon-envelope"></span> info@yourdomain.com</a></li>
                  <li><span className="icon-map-marker"></span> 34 Street Name, City Name Here, United States</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
