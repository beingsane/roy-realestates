import React from 'react'

export const PopularCities = () => {
    return (
        <>
        <section className="popular-cities hp_s1 section-padding">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-6">
          <div className="section-heading">
            <span>Popular Cities</span>
            <h3>Find Perfect Place</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-4 col-md-6">
          <a href="#">
            <div className="card">
              <div className="overlay" />
              <img src="assets/images/cities/1.jpg" alt='' className="img-fluid" />
              <div className="card-body">
                <h4>New York</h4>
                <p>5 Listings</p>
                <i className="fa fa-angle-right" />
              </div>
            </div>
          </a>
        </div>
        <div className="col-xl-4 col-md-6">
          <a href="#">
            <div className="card">
              <div className="overlay" />
              <img src="assets/images/cities/2.jpg" alt='' className="img-fluid" />
              <div className="card-body">
                <h4>London</h4>
                <p>10 Listings</p>
                <i className="fa fa-angle-right" />
              </div>
            </div>
          </a>
        </div>
        <div className="col-xl-4 col-md-6">
          <a href="#">
            <div className="card">
              <div className="overlay" />
              <img src="assets/images/cities/3.jpg" alt='' className="img-fluid" />
              <div className="card-body">
                <h4>Melbrone</h4>
                <p>7 Listings</p>
                <i className="fa fa-angle-right" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
  <section id="map-container" className="fullwidth-home-map">
    <h3 className="vis-hid">Visible Heading</h3>
    <div id="map" data-map-zoom={9} />
  </section>
  </>
    )
}