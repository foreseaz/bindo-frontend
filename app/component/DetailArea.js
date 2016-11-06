import React from 'react';
import '../css/index.scss';

import $ from 'jquery';
import _ from 'lodash';

export default class DetailArea extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { chosenPerson } = this.props
    if (_.isEmpty(chosenPerson)) {
      return(
        <div className="col-md-8 details-wrapper">
          <div className="alert alert-warning">
            <strong>Warning!</strong> There are no such person
          </div>
        </div>
      )
    } else {
      let avatar_url = './img/' + chosenPerson.image + '.jpg'
      return (
        <div className="col-md-8 details-wrapper">
          <div className="row text-center">
            <div className="avatar">
              <img className="medium circular" src={avatar_url} />
            </div>
          </div>
          <div className="row">
            <div className="text-center">
              <h3>{chosenPerson.name}</h3>
            </div>
            <div className="details">
              <div className="attr">
                <span>Age:</span>
                {chosenPerson.age}
              </div>
              <div className="attr">
                <span>Phone:</span>
                {chosenPerson.phone}
              </div>
              <div className="attr">
                <span>Phrase:</span>
                <blockquote>
                  {chosenPerson.phrase}
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}
