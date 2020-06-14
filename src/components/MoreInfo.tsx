import React from 'react'
import {Map} from './Map'
export const MoreInfo = () => {
    return(
        <>
          <section id="map-container" className="fullwidth-home-map">
            <h3 className="vis-hid">Visible Heading</h3>
            
              <Map />
            
        </section>
        <a href="#" >
    <section className="cta section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="cta-text">
              <h2>Discover a home you'll love to stay</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  </a>
  <section className="bottom section-padding">
    <div className="container">
      <div className="row">
        <div className="col-xl-4 col-sm-6 col-md-4">
          <div className="bottom-logo">
            <img src="assets/images/logosapir.png" alt='' className="img-fluid" />
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-md-3">
          <div className="bottom-list">
            <h3>Helpful Links</h3>
            <ul>
              <li>
                <a href="18_Half_Map.html" >Half Map</a>
              </li>
              <li>
                <a href="#" >Register</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Add Listing</a>
              </li>
            </ul>
          </div>{/*bottom-list end*/}
        </div>
        <div className="col-xl-5 col-sm-12 col-md-5 pl-0">
          <div className="bottom-desc">
            <h3>Aditional Information</h3>
            <p>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
    )
}