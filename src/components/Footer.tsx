import React from 'react'

export const Footer = () => {
    return (
        <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="footer-content">
            <div className="row justify-content-between">
              <div className="col-xl-6 col-md-6">
                <div className="copyright">
                  <p><a target="_blank" href="https://www.templateshub.net">Sapir</a></p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="footer-social">
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
    )
}