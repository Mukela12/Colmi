import React, { useEffect } from 'react';
import Link from 'next/link';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

function Pricing() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className="pricing section-padding sub-bg">
      <div className="container">
        <div className="sec-lg-head mb-80">
          <div className="row">
            <div className="col-lg-8">
              <div className="position-re">
                <h6 className="dot-titl colorbg-3 mb-10">Services Pricing</h6>
                <h2 className="fz-60 fw-700">Installation Rates</h2>
              </div>
            </div>
            <div className="col-lg-4 d-flex align-items-center">
              <div className="text">
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <div className="row md-marg">
          <div className="col-lg-4">
            <div className="item main-bg position-re o-hidden md-mb50">
              <div className="info-box pb-30 bord-thin-bottom mb-30">
                <h6 className="sub-title mb-15">Basic Plan</h6>
                <div className="amount">
                  <div><span className="main-color3 num-font fw-600 fz-50">ZMW 150</span> <span
                    className="fz-14 fw-400">/ Hour</span></div>
                </div>
              </div>
              <ul className="rest">
                <li>Alarm System Installation (Customer provides equipment)</li>
                <li>Basic CCTV Setup (Up to 4 cameras)</li>
                <li>Access Control System Configuration</li>
                <li>Technical Consultations</li>
              </ul>
              <Link href="/dark/page-contact" className="butn butn-md butn-bord mt-30">
                <span>Get Started</span>
                <i className="ml-5"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                    fill="currentColor"></path>
                </svg></i>
              </Link>
              <div className="bg-pattern bg-img opacity-1" data-background="/dark/assets/imgs/patterns/1.svg"></div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item main-bg position-re o-hidden md-mb50">
              <div className="info-box pb-30 bord-thin-bottom mb-30">
                <h6 className="sub-title mb-15">Standard Plan</h6>
                <div className="amount">
                  <div><span className="main-color3 num-font fw-600 fz-50">ZMW 250</span> <span
                    className="fz-14 fw-400">/ Hour</span></div>
                </div>
              </div>
              <ul className="rest">
                <li>Advanced CCTV Installation (Up to 8 cameras)</li>
                <li>Biometric Access Control Setup</li>
                <li>Fire Alarm System Installation</li>
                <li>Networking Services (LAN Setup & Configuration)</li>
              </ul>
              <Link href="/dark/page-contact" className="butn butn-md butn-bg main-colorbg3 text-dark mt-30">
                <span>Get Started</span>
                <i className="ml-5"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                    fill="currentColor"></path>
                </svg></i>
              </Link>
              <div className="bg-pattern bg-img opacity-3"
                data-background="/dark/assets/imgs/patterns/abstact-BG.png"></div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item main-bg position-re o-hidden">
              <div className="info-box pb-30 bord-thin-bottom mb-30">
                <h6 className="sub-title mb-15">Premium Plan</h6>
                <div className="amount">
                  <div><span className="main-color3 num-font fw-600 fz-50">ZMW 400</span> <span
                    className="fz-14 fw-400">/ Hour</span></div>
                </div>
              </div>
              <ul className="rest">
                <li>Full Home or Office Security System</li>
                <li>Electric Fencing & Automated Gate Setup</li>
                <li>Solar System Installation (Panels & Inverters)</li>
                <li>Asset Tracking Systems Configuration</li>
              </ul>
              <Link href="/dark/page-contact" className="butn butn-md butn-bord mt-30">
                <span>Get Started</span>
                <i className="ml-5"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                    fill="currentColor"></path>
                </svg></i>
              </Link>
              <div className="bg-pattern bg-img opacity-1" data-background="/dark/assets/imgs/patterns/1.svg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing