import React from 'react';
import Link from 'next/link';

function About({ lightMode }) {
  return (
    <section className="intro-corp section-padding sub-bg">
      <div className="container">
        <div className="row lg-marg">
          <div className="col-lg-6 md-mb50">
            <div className="imgs mb-80">
              <div className="img1 main-color3">
                <img src="/dark/assets/imgs/about/CCTV.jpg" alt="" />
              </div>
              <div className="img2">
                <img src="/dark/assets/imgs/about/coding.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="cont">
              <h6 className="sub-title mb-15">About Company</h6>
              <h3 className="mb-15">
              Innovating Your Business, <span className="stroke fw-700 opacity-7">Securing Your Future</span>.
              </h3>
              <p>COLMI Enterprises, is a proudly Zambian-owned company, delivering innovative products and services across various industries. We provide high-quality installations, maintenance, and technical consultations to institutions such as banks, schools, hospitals, financial organizations, airports, and government buildings.</p>
              <div className="mt-50 pt-30 bord-thin-top">
                <div className="row">
                  <div className="col-md-6">
                    <ul className="rest list-arrow">
                      <li className="mt-20">
                        <span className="icon">
                          <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill={lightMode ? '#000' : '#fff'}></path>
                          </svg>
                        </span>
                        <span>CCTV Installation</span>
                      </li>
                      <li className="mt-20">
                        <span className="icon">
                          <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill={lightMode ? '#000' : '#fff'}></path>
                          </svg>
                        </span>
                        <span>Biometric System Installation</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="rest list-arrow">
                      <li className="mt-20">
                        <span className="icon">
                          <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill={lightMode ? '#000' : '#fff'}></path>
                          </svg>
                        </span>
                        <span>Commercial Construction</span>
                      </li>
                      <li className="mt-20">
                        <span className="icon">
                          <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill={lightMode ? '#000' : '#fff'}></path>
                          </svg>
                        </span>
                        <span>Solar Installation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <Link href="/dark/page-about" className="butn butn-md butn-bord radius-30 mt-50">
                <span>Explore More</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About