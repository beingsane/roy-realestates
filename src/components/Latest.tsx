import React from 'react'
import data from '../data'
export const LatestListings = () => {
    return (
        <section className="popular-listing section-padding">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-6">
          <div className="section-heading">
            <span>Discover</span>
            <h3>Popular Listing</h3>
          </div>
        </div>
      </div>
      <div className="row">
        {
          data.listings.map((item: any) =>{
            return(
              <div className="col-lg-4 col-md-6">
          <div className="card">
            <a href="24_Property_Single.html" >
              <div className="img-block">
                <div className="overlay" />
                <img src="/assets/images/listing/1.jpg" alt='' className="img-fluid" />
                <div className="rate-info">
                  <h5>${item.price}</h5>
                  <span>{item.status}</span>
                </div>
              </div>
            </a>
            <div className="card-body">
              <a href="24_Property_Single.html">
                <h3>{item.category}</h3>
                <p> <i className="la la-map-marker" />{item.location}</p>
              </a>
              <ul>
                <li>{item.bathrooms}</li>
                <li>{item.bedrooms}</li>
                <li>{item.area}</li>
              </ul>
            </div>
            <div className="card-footer">
              <a href="#" className="pull-left">
                <i className="la la-heart-o" />
              </a>
              <a href="#" className="pull-right">
                <i className="la la-calendar-check-o" />{item.uploaded}</a>
            </div>
            <a href="24_Property_Single.html" className="ext-link" />
          </div>
        </div>
            )
          })
        }
        
        
      </div>
    </div>
  </section>
    )
}