// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <div class="site-mobile-menu site-navbar-target">
		<div class="site-mobile-menu-header">
			<div class="site-mobile-menu-close">
				<span class="icofont-close js-menu-toggle"></span>
			</div>
		</div>
		<div class="site-mobile-menu-body"><ul class="site-nav-wrap">
    <li className="active"><Link to="/">Home</Link></li>
            {/* <li className="has-children">
              <a href="#">Dropdown</a>
              <ul className="dropdown">
                <li><a href="elements.html">Elements</a></li>
                <li><a href="#">Menu One</a></li>
                <li className="has-children">
                  <a href="#">Menu Two</a>
                  <ul className="dropdown">
                    <li><a href="#">Sub Menu One</a></li>
                    <li><a href="#">Sub Menu Two</a></li>
                    <li><a href="#">Sub Menu Three</a></li>
                  </ul>
                </li>
                <li><a href="#">Menu Three</a></li>
              </ul>
            </li> */}
            <li><Link to='/tours'>Tours</Link></li>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/faq'>FAQ</Link></li>
        </ul>
        </div>
	</div>
      <nav className="site-nav">
      <div className="container">
        <div className="site-navigation">
          <a href="index.html" className="logo m-0">Tour <span className="text-primary">.</span></a>
          <ul className="js-clone-nav d-none d-lg-inline-block text-left site-menu float-right">
            <li className="active"><Link to="/">Home</Link></li>
            {/* <li className="has-children">
              <a href="#">Dropdown</a>
              <ul className="dropdown">
                <li><a href="elements.html">Elements</a></li>
                <li><a href="#">Menu One</a></li>
                <li className="has-children">
                  <a href="#">Menu Two</a>
                  <ul className="dropdown">
                    <li><a href="#">Sub Menu One</a></li>
                    <li><a href="#">Sub Menu Two</a></li>
                    <li><a href="#">Sub Menu Three</a></li>
                  </ul>
                </li>
                <li><a href="#">Menu Three</a></li>
              </ul>
            </li> */}
            <li><Link to='/tours'>Tours</Link></li>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/faq'>FAQ</Link></li>
          </ul>
          <a href="#" className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none light" data-toggle="collapse" data-target="#main-navbar">
            <span></span>
          </a>
        </div>
      </div>
    </nav>
    </>

  );
};

export default Header;
