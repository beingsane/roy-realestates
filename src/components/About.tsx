import React from 'react'


export const About = () => {
    return (
        <section className="intro section-padding">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-6 pl-0">
          <div className="intro-content">
            <h3>Homes around the world</h3>
            <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
            </p>
            <a href="#" className="btn btn-outline-primary view-btn">
              <i className="icon-arrow-right-circle" />View for rent</a>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 pr-0">
          <div className="intro-img">
            <img src="assets/images/intro/1.jpg"  className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="intro-thumb-row">
        <a href="#" className="intro-thumb">
          <img src="assets/images/intro/thumb1.jpg" alt='' />
          <h6>Homes</h6>
        </a>
        <a href="#" className="intro-thumb">
          <img src="assets/images/intro/thumb2.jpg" alt=''/>
          <h6>Appartments</h6>
        </a>
        <a href="#" className="intro-thumb">
          <img src="assets/images/intro/thumb3.jpg" alt='' />
          <h6>Garages</h6>
        </a>
      </div>
    </div>
  </section>
    )
}