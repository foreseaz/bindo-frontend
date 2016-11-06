import React from 'react';
import '../css/index.scss';

import $ from 'jquery';
import _ from 'lodash';

import Presenter from './Presenter';
import logo from '../img/logo.png';

export default class Container extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      searchText: "",
      name_sorter: "",
      age_sorter: "",
      filtered_data: this.props.data
    }

    _.bindAll(this, ['handleSearchChange',
                     'handleNameSort',
                     'handleAgeSort',
                     'sortData']);
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

  sortData(data, order, type) {
    switch (order) {
      case "asc":
        if(type === "name") {
          return _.sortBy(data, [function(o) { return o.name; }])
        } else {
          return _.sortBy(data, [function(o) { return o.age; }])
        }
        break;
      case "desc":
        if(type === "name") {
          return _.sortBy(data, [function(o) { return o.name; }]).reverse()
        } else {
          return _.sortBy(data, [function(o) { return o.age; }]).reverse()
        }
        break;
      default:
        return _.sortBy(data, [function(o) { return o.id; }]);
    }
  }

  handleSearchChange(e) {
    let searchText = e.target.value;
    this.setState({searchText: searchText});
    // Filter by text
    let data = this.props.data.reduce((result, p) => {
      if(p.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1) {
        result.push(p)
      }
      return result
    }, [])

    // Sort by sorter
    if (this.state.name_sorter !== "") {
      data = this.sortData(data, this.state.name_sorter, "name")
    } else if (this.state.age_sorter !== "") {
      data = this.sortData(data, this.state.age_sorter, "age")
    }

    this.setState({filtered_data: data});
  }

  handleNameSort() {
    let name_sorter = this.state.name_sorter
    let sorted_data = this.state.filtered_data
    switch (name_sorter) {
      case "":
        sorted_data = this.sortData(sorted_data, "asc", "name")
        this.setState({
          name_sorter: "asc",
          age_sorter: "",
          filtered_data: sorted_data
        })
        break;
      case "asc":
        sorted_data = this.sortData(sorted_data, "desc", "name")
        this.setState({
          name_sorter: "desc",
          age_sorter: "",
          filtered_data: sorted_data
        })
        break;
      case "desc":
        sorted_data = this.sortData(sorted_data, "", "name")
        this.setState({
          name_sorter: "",
          age_sorter: "",
          filtered_data: sorted_data
        })
        break;
      default:
        this.setState({name_sorter: ""})
    }
  }

  handleAgeSort() {
    console.log("age btn clicked")
    let age_sorter = this.state.age_sorter
    let sorted_data = this.state.filtered_data
    switch (age_sorter) {
      case "":
        sorted_data = this.sortData(sorted_data, "asc", "age")
        this.setState({
          name_sorter: "",
          age_sorter: "asc",
          filtered_data: sorted_data
        })
        break;
      case "asc":
        sorted_data = this.sortData(sorted_data, "desc", "age")
        this.setState({
          name_sorter: "",
          age_sorter: "desc",
          filtered_data: sorted_data
        })
        break;
      case "desc":
        sorted_data = this.sortData(sorted_data, "", "age")
        this.setState({
          name_sorter: "",
          age_sorter: "",
          filtered_data: sorted_data
        })
        break;
      default:
        this.setState({name_sorter: ""})
    }
  }

  render() {
    let name_sorter_icon, age_sorter_icon = ""
    if(this.state.name_sorter !== "") {
      name_sorter_icon = this.state.name_sorter === 'asc' ?
        (<span className="glyphicon glyphicon glyphicon-sort-by-alphabet" aria-hidden="true"></span>) :
        (<span className="glyphicon glyphicon glyphicon-sort-by-alphabet-alt" aria-hidden="true"></span>)
    }
    if(this.state.age_sorter !== "") {
      age_sorter_icon = this.state.age_sorter === 'asc' ?
        (<span className="glyphicon glyphicon glyphicon-sort-by-order" aria-hidden="true"></span>) :
        (<span className="glyphicon glyphicon glyphicon-sort-by-order-alt" aria-hidden="true"></span>)
    }

    return (
      <div className="container-fluid wrapper">
        <div className="text-center title"><h1>Bindo Labs Frontend Test</h1></div>
        <div className="container">
          <div className="row tool-bar">
            <div className="col-md-4 search-box">
              <input type="text" placeholder="Search Person Name" className="form-control"
                value={this.state.searchText} onChange={this.handleSearchChange.bind(this)} />
            </div>
            <div className="col-md-offset-4 col-md-4 sort-btns">
              <button type="button" onClick={this.handleNameSort}
                className={this.state.name_sorter === "" ? "btn btn-default" : "btn btn-default active"}>
                {name_sorter_icon}
                Sort By Name
              </button>
              <button type="button" onClick={this.handleAgeSort}
                className={this.state.age_sorter === "" ? "btn btn-default" : "btn btn-default active"}>
                {age_sorter_icon}
                Sort By Age
              </button>
            </div>
          </div>

          <Presenter data={this.state.filtered_data} />

        </div>
        <div className="src-code">
          <img src={logo} />
          <a href="https://github.com/foreseaz/bindo-frontend">Source Code</a>
        </div>
      </div>
    );
  }
}
