import React from 'react';
import '../css/index.scss';

import logo from '../img/logo.png';
import jobs from '../img/jobs.jpg';

class Container extends React.Component {
  render() {
    return (
      <div className="container-fluid wrapper">
        <div className="text-center title"><h1>Bindo Labs Frontend Test</h1></div>
        <div className="container">
          <div className="row tool-bar">
            <div className="col-md-4 search-box">
              <input type="text" placeholder="Search Person" className="form-control" />
            </div>
            <div className="col-md-offset-4 col-md-4 sort-btns">
              <button type="button" className="btn btn-default">
                <span className="glyphicon glyphicon glyphicon-sort-by-alphabet" aria-hidden="true"></span> Sort By Name
              </button>
              <button type="button" className="btn btn-default">
                <span className="glyphicon glyphicon glyphicon-sort-by-attributes" aria-hidden="true"></span> Sort By Age
              </button>
            </div>
          </div>

          <div className="row content-wrapper">
            <div className="col-md-4">
              <table className="table table-hover table-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Age</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Steve Jobs</td>
                    <td>55</td>
                  </tr>
                  <tr>
                    <td>Bill Gates</td>
                    <td>62</td>
                  </tr>
                  <tr>
                    <td>Johny Ive</td>
                    <td>49</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-8 details-wrapper">
              <div className="row text-center">
                <div className="avatar">
                  <img className="medium circular" src={jobs} />
                </div>
              </div>
              <div className="row">
                <div className="text-center">
                  <h3>Steve Jobs</h3>
                </div>
                <div className="details">
                  <div className="attr">
                    <span>Age:</span>
                    55
                  </div>
                  <div className="attr">
                    <span>Phone:</span>
                    (629) 653-9041
                  </div>
                  <div className="attr">
                    <span>Phrase:</span>
                    <blockquote>
                      Owmeco jen be tezpoksim vojuz...
                    </blockquote>
                  </div>
                </div>
                <table class="table">
                  <tbody>
                    <tr>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="src-code">
          <img src={logo} />
          <a href="https://github.com/foreseaz/bindo-frontend">Source Code</a>
        </div>
      </div>
    );
  }
}

export default Container;
