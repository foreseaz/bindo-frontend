import React from 'react';
import '../css/index.scss';

import $ from 'jquery';
import _ from 'lodash';

import DetailArea from './DetailArea';

export default class Presenter extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      detail_person: "",
    }

    _.bindAll(this, ['handleClickRow']);
  }

  componentDidMount() {
    const { data } = this.props
    this.setState({
      detail_person: data[0]
    });
  }

  handleClickRow(p) {
    const { data } = this.props
    let id = p.id
    this.setState({
      detail_person: data[id]
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
    let chosen_person = this.state.detail_person;

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

        <DetailArea chosenPerson={chosen_person}/>

      </div>
    );
  }
}
