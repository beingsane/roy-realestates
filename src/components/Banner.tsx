import React from 'react'

export const Banner = () => {
    return (
        <section className="banner">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="banner-content">
            <h1>Discover best properties in one place</h1>
          </div>
          <form action="#" className="row banner-search">
            <div className="form_field addres">
              <input type="text" className="form-control" placeholder="Enter Address, City or State" />
            </div>
            <div className="form_field tpmax">
              <div className="form-group">
                <div className="drop-menu">
                  <div className="select">
                    <span>Any type</span>
                    <i className="fa fa-angle-down" />
                  </div>
                  <input type="hidden" name="gender" />
                  <ul className="dropeddown">
                    <li>For Sale</li>
                    <li>For Rent</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="form_field tpmax">
              <div className="form-group">
                <div className="drop-menu">
                  <div className="select">
                    <span>Min Price</span>
                    <i className="fa fa-angle-down" />
                  </div>
                  <input type="hidden" name="gender" />
                  <ul className="dropeddown">
                    <li>300$</li>
                    <li>400$</li>
                    <li>500$</li>
                    <li>200$</li>
                    <li>600$</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="form_field tpmax">
              <div className="form-group">
                <div className="drop-menu">
                  <div className="select">
                    <span>Max Price</span>
                    <i className="fa fa-angle-down" />
                  </div>
                  <input type="hidden" name="gender" />
                  <ul className="dropeddown">
                    <li>2000</li>
                    <li>3000</li>
                    <li>4000</li>
                    <li>5000</li>
                    <li>6000</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="form_field srch-btn">
              <a href="#" className="btn btn-outline-primary ">
                <i className="la la-search" />
                <span>Search</span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
    )
}