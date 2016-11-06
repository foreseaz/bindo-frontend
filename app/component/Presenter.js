import React from 'react';
import '../css/index.scss';

import $ from 'jquery';
import _ from 'lodash';

import DetailArea from './DetailArea';

export default class Presenter extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      detail_person: this.props.data[0],
      data: this.props.data
    }

    _.bindAll(this, ['handleClickRow']);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      detail_person: nextProps.data[0],
      data: nextProps.data
    });
  }

  handleClickRow(p) {
    let data = this.state.data
    let id = p.id
    let person = _.find(data, function(o) { return o.id === id; });
    this.setState({
      detail_person: person
    });
  }

  render() {
    const { data } = this.props
    let rows = data.map((p) => {
      return(<tr className="table-row" key={p.id} onClick={this.handleClickRow.bind(this, p)}>
               <td>{p.name}</td>
               <td>{p.age}</td>
             </tr>);
    });

    return(
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
              {rows}
            </tbody>
          </table>
        </div>

        <DetailArea chosenPerson={this.state.detail_person}/>

      </div>
    );
  }
}
