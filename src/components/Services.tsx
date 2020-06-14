import React from 'react'


export const Services = () => {
    return (
        <>
        <div className="alert alert-success" role="alert">
    <strong>Added to Favourites</strong> You can check your favourite items here <a href="#" className="alert-link">Favourite Items</a>.
    <a href="#"  className="close-alert"><i className="la la-close" /></a>
  </div>
  <section className="explore-feature hp_s1 section-padding">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-6">
          <div className="section-heading">
            <span>Explore Features</span>
            <h3>Service You Need</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-4 col-sm-6 col-md-6 col-lg-4">
          <a href="#" >
            <div className="card">
              <div className="card-body">
                <i className="icon-home" />
                <h3>Perfect Tools</h3>
                <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit conseat ipsum, nec sagittis sem nibh.</p>
              </div>
            </div>{/*card end*/}
          </a>
        </div>
        <div className="col-xl-4 col-sm-6 col-md-6 col-lg-4">
          <a href="#">
            <div className="card">
              <div className="card-body">
                <i className="icon-cursor" />
                <h3>Search in Click</h3>
                <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit conseat ipsum, nec sagittis sem nibh.</p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-xl-4 col-sm-6 col-md-6 col-lg-4">
          <a href="#" >
            <div className="card">
              <div className="card-body">
                <i className="icon-lock" />
                <h3>User Control</h3>
                <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit conseat ipsum, nec sagittis sem nibh.</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
  </>
    )
}