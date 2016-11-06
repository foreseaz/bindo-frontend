import React from 'react';
import '../css/index.scss';

import $ from 'jquery';

import Presenter from './Presenter';
import logo from '../img/logo.png';

export default class Container extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  getInitialState() {
    return {
      // people: people_data
    };
  }

  componentWillMount() {
    // $.ajax({
    //   // url: "http://localhost:8000/people.json",
    //   // dataType: 'json',
    //   dataType: 'jsonp',
    //   cache: false,
    //   success: function(data) {
    //     console.dir(data);
    //     // this.setState({
    //     //   people: data,
    //     // });
    //   }.bind(this),
    //   error: function(xhr, status, err) {
    //     console.error('People Data Loading Failed', status, err.toString());
    //   }.bind(this)
    // });
  }

  render() {
    let { data } = this.props
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

          <Presenter data={data} />

        </div>
        <div className="src-code">
          <img src={logo} />
          <a href="https://github.com/foreseaz/bindo-frontend">Source Code</a>
        </div>
      </div>
    );
  }
}
