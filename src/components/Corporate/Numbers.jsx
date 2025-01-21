import React from 'react';

function Numbers({ paddingTop }) {
  return (
    <section className={`numbers section-padding ${paddingTop ? '' : 'pt-0'}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="item md-mb50">
              <h2 className="fw-800 stroke">10</h2>
              <h6>Years of Experience</h6>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex justify-content-around">
            <div className="item md-mb50">
              <h2 className="fw-800">40<span className="fz-80 fw-600"></span></h2>
              <h6>Projects Complated</h6>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex justify-content-around">
            <div className="item sm-mb50">
              <h2 className="fw-800 stroke">1<span className="fz-80 fw-600">k</span></h2>
              <h6>Users Worldwide (BoardPAC)</h6>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex">
            <div className="item ml-auto">
              <h2 className="fw-800">15+</h2>
              <h6>Government Partnerships</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Numbers