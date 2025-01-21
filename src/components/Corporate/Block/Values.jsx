import React, { useEffect } from 'react';
//= Scripts
import isInView from '@/common/isInView';

function Values() {
  useEffect(() => {
    window.addEventListener('scroll', handleShowProgressValues);
    return () => window.removeEventListener('scroll', handleShowProgressValues);
  }, []);

  function handleShowProgressValues() {
    isInView({
      selector: ".skill-progress .progres",
      isElements: true,
      callback: (element) => {
        element.style.width = element.getAttribute('data-value');
      }
    });
  }

  return (
    <div className="row lg-marg mt-80">
      <div className="col-lg-6 valign">
        <div className="md-mb50">
          <div className="item-flex d-flex align-items-center mb-50">
            <div>
              <div className="icon-img-60">
                <img src="/dark/assets/imgs/serv-icons/0.png" alt="" />
              </div>
            </div>
            <div className="cont ml-50">
              <h6>Comprehensive Solutions</h6>
              <p className="fz-15">From IT systems to solar energy, we provide a wide range of services to meet the diverse needs of our clients.
              </p>
            </div>
          </div>
          <div className="item-flex d-flex align-items-center">
            <div>
              <div className="icon-img-60">
                <img src="/dark/assets/imgs/serv-icons/1.png" alt="" />
              </div>
            </div>
            <div className="cont ml-50">
              <h6>Ease of Communication</h6>
              <p className="fz-15">We maintain clear, open, and professional communication to understand your needs and provide tailored solutions effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="cont">
          <h6 className="sub-title mb-15">Our Value</h6>
          <h3 className="mb-15">Empowering businesses with <span className="stroke fw-700 opacity-7">world-class technology</span> and expertise .</h3>
          <div className="skills mt-50">
            <div className="skills-box">
              <div className="skill-item mb-40">
                <h5 className="fz-14 mb-15">IT Management Systems</h5>
                <div className="skill-progress">
                  <div className="progres" data-value="90%"></div>
                </div>
              </div>
              <div className="skill-item">
                <h5 className="fz-14 mb-15">Access Control & Security Systems</h5>
                <div className="skill-progress">
                  <div className="progres" data-value="80%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Values