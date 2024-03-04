import React from "react";
import { Facebook, Twitter, Instagram } from "react-feather";

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <footer className="footer">
          <div className="top-footer">
            <div className="row">
              <div className="col-sm-3">
                <div className="footer-logo">
                  <a href="/" title="Mercury">
                    <img
                      src="https://uploads.codesandbox.io/uploads/user/394a073e-ac76-4500-88bf-59a13ae9a863/5U6A-mercury-logo.png"
                      width="72"
                      alt="Mercury-Logo"
                      className="img-fluid"
                    />
                    Mercury.
                  </a>
                  <p className="tagline">A product of SCC Online.</p>
                </div>
              </div>
              <div className="col-sm-9">
                <div className="row">
                  <div className="col-lg-3 col-sm-6">
                    <h4>Sitemap</h4>
                    <ul className="footer-link">
                      <li>
                        <a href="/home" title="Home">
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="/workspace" title="Workspace">
                          Workspace
                        </a>
                      </li>
                      <li>
                        <a href="/display-board" title="Display Board">
                          Display Board
                        </a>
                      </li>
                      <li>
                        <a href="/calendar" title="Calendar">
                          Calendar
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <h4>Billing</h4>
                    <ul className="footer-link">
                      <li>
                        <a href="#" title="Monthly Pricing">
                          Monthly Pricing
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Yearly Pricing">
                          Yearly Pricing
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <h4>About</h4>
                    <ul className="footer-link">
                      <li>
                        <a href="#" title="Company">
                          Author
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Why Mercury">
                          Why Mercury
                        </a>
                      </li>
                      <li>
                        <a href="#" title="SCC Online">
                          Quiz Online
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <h4>Contact Us</h4>
                    <ul className="footer-link">
                      <li>
                        <a href="mail-to:contact@scconline.com" title="Contact">
                          thuhuong002008@gmail.com
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Call Us">
                          +91 98111 98111
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Facebook" className="social-icons">
                          <Facebook />
                        </a>
                        <a href="#" title="Twitter" className="social-icons">
                          <Twitter />
                        </a>
                        <a href="#" title="Instagram" className="social-icons">
                          <Instagram />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-footer">
            <div className="row">
              <div className="col-sm-3">
                <div className="scc-footer-logo">
                  <a href="/" title="SCC Online">
                    <img
                      src="https://uploads.codesandbox.io/uploads/user/394a073e-ac76-4500-88bf-59a13ae9a863/tg9E-SCC-Logo.png"
                      width="103"
                      alt="SCC-Logo"
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
              <div className="col-sm-9">
                <div className="row">
                  <div className="col-lg-3 col-sm-6">
                    <ul className="footer-link pt-3">
                      <li>
                        <a href="/privacy-policy" title="Privacy-Policy">
                          Privacy-Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <ul className="footer-link pt-3">
                      <li>
                        <a href="#" title="Monthly Pricing">
                          Terms
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <p className="copyright pt-3">
                      &copy; Eastern Book Company Pvt. Ltd. All Right Reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
