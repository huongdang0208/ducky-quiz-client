import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div id="body">
        <div className="home-section1">
          <div className="bg" />
          <div className="content">
            <div className="row">
              <div className="col-sm-8">
                <div className="section-heading">HEARING ASSIST</div>
                <div className="section-text">
                  <p>Sign Language Prediction</p>
                  <h5>Make you smarter</h5>
                </div>
                <div className="getting-started">
                  <a className="btn" href="#">
                    Getting started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
