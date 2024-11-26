import React from 'react';
import '../assets/style/homepage.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import imgehome from '../assets/images/slider-dec.png'

const Home = () => {
  return (
    <>

      {/* main-banner ======================= */}
      <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 align-self-center">
                  <div
                    className="left-content show-up header-text wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay="1s"
                  >
                    <div className="row">

                      <div className="col-lg-12 text-center bg-gradient-to-r">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
                          Capture Moments, Book the Best Photographers
                        </h2>
                        <p className="text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
                          Find and book professional photographers for any occasion in just a few clicks. Create memories that last a lifetime with our easy-to-use platform.
                        </p>
                      </div>



                      <div className="col-lg-12">
                        <div className="white-button first-button scroll-to-section">
                          <a href="#contact">
                            Free Quote <i className="fab fa-apple"></i>
                          </a>
                        </div>
                        <div className="white-button scroll-to-section">
                          <a href="#contact">
                            Free Quote <i className="fab fa-google-play"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="right-image fadeInRight flex justify-end"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    <img src={imgehome} alt="Slider Decoration" />

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Service ===== */}
      <div id="services" className="services section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div
                className="section-heading wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <h4>
                  Amazing <em>Services &amp; Features</em> for you
                </h4>
                <img src="assets/images/heading-line-dec.png" alt="Heading Line Decoration" />
                <p>
                  If you need the greatest collection of HTML templates for your business, please
                  visit{" "}
                  <a
                    rel="nofollow"
                    href="https://www.toocss.com/"
                    target="_blank"

                  >
                    TooCSS
                  </a>{" "}
                  Blog. If you need to have a contact form PHP script, go to{" "}
                  <a href="https://templatemo.com/contact" target="_parent" rel="noreferrer">
                    our contact page
                  </a>{" "}
                  for more information.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="container mx-auto px-4">
          <div class="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

            <div class="service-item bg-white p-6 rounded-lg shadow-md first-service">
              <div class="icon mb-4"></div>
              <h4 class="text-lg font-semibold mb-2">App Maintenance</h4>
              <p class="text-gray-600 text-sm mb-4">
                You are not allowed to redistribute this template ZIP file on any other website.
              </p>
              <div class="text-button">
                <a href="#" class="text-blue-500 hover:underline flex items-center">
                  Read More <i class="fa fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>


            <div class="service-item bg-white p-6 rounded-lg shadow-md second-service">
              <div class="icon mb-4"></div>
              <h4 class="text-lg font-semibold mb-2">Rocket Speed of App</h4>
              <p class="text-gray-600 text-sm mb-4">
                You are allowed to use the Chain App Dev HTML template. Feel free to modify or edit
                this layout.
              </p>
              <div class="text-button">
                <a href="#" class="text-blue-500 hover:underline flex items-center">
                  Read More <i class="fa fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>

            <div class="service-item bg-white p-6 rounded-lg shadow-md third-service">
              <div class="icon mb-4"></div>
              <h4 class="text-lg font-semibold mb-2">Multi Workflow Idea</h4>
              <p class="text-gray-600 text-sm mb-4">
                If this template is beneficial for your work, please support us
                <a
                  rel="nofollow"
                  href="https://paypal.me/templatemo"
                  target="_blank"
                  class="text-blue-500 hover:underline"
                >
                  a little via PayPal
                </a>.
                Thank you.
              </p>
              <div class="text-button">
                <a href="#" class="text-blue-500 hover:underline flex items-center">
                  Read More <i class="fa fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>


            <div class="service-item bg-white p-6 rounded-lg shadow-md fourth-service">
              <div class="icon mb-4"></div>
              <h4 class="text-lg font-semibold mb-2">24/7 Help &amp; Support</h4>
              <p class="text-gray-600 text-sm mb-4">
                Lorem ipsum dolor consectetur adipiscing elit sedder williamsburg photo booth
                quinoa and fashion axe.
              </p>
              <div class="text-button">
                <a href="#" class="text-blue-500 hover:underline flex items-center">
                  Read More <i class="fa fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>




      </div>

      {/* about ==== */}
      {/* clients ====== */}


      {/* pricing ==== */}
      

      {/* foooter === */}

      <footer id="newsletter">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-heading">
                <h4>Join our mailing list to receive the news &amp; latest trends</h4>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-3">
              <form id="search" action="#" method="GET">
                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <fieldset>
                      <input
                        type="email"
                        name="address"
                        className="email"
                        placeholder="Email Address..."
                        autoComplete="on"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <fieldset>
                      <button type="submit" className="main-button">
                        Subscribe Now <i className="fa fa-angle-right"></i>
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="row">
            {/* Contact Us Section */}
            <div className="col-lg-3">
              <div className="footer-widget">
                <h4>Contact Us</h4>
                <p>Rio de Janeiro - RJ, 22795-008, Brazil</p>
                <p>
                  <a href="tel:010-020-0340">010-020-0340</a>
                </p>
                <p>
                  <a href="mailto:info@company.co">info@company.co</a>
                </p>
              </div>
            </div>

            {/* About Us Section */}
            <div className="col-lg-3">
              <div className="footer-widget">
                <h4>About Us</h4>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Testimonials</a></li>
                  <li><a href="#">Pricing</a></li>
                </ul>
                <ul>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Testimonials</a></li>
                  <li><a href="#">Pricing</a></li>
                </ul>
              </div>
            </div>

            {/* Useful Links Section */}
            <div className="col-lg-3">
              <div className="footer-widget">
                <h4>Useful Links</h4>
                <ul>
                  <li><a href="#">Free Apps</a></li>
                  <li><a href="#">App Engine</a></li>
                  <li><a href="#">Programming</a></li>
                  <li><a href="#">Development</a></li>
                  <li><a href="#">App News</a></li>
                </ul>
                <ul>
                  <li><a href="#">App Dev Team</a></li>
                  <li><a href="#">Digital Web</a></li>
                  <li><a href="#">Normal Apps</a></li>
                </ul>
              </div>
            </div>

            {/* About Our Company Section */}
            <div className="col-lg-3">
              <div className="footer-widget">
                <h4>About Our Company</h4>
                <div className="logo">
                  <img src="assets/images/white-logo.png" alt="Company Logo" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="col-lg-12">
            <div className="copyright-text">
              <p>
                Copyright © 2022 Chain App Dev Company. All Rights Reserved.
                <br />
                Design: <a href="https://templatemo.com/" target="_blank" rel="noopener noreferrer" title="css templates">TemplateMo</a>
                <br />
                Distributed By: <a href="https://themewagon.com/" target="_blank" rel="noopener noreferrer" title="Bootstrap Template World">ThemeWagon</a>
              </p>
            </div>
          </div>
        </div>

      </footer>





    </>
  );
}

export default Home;
