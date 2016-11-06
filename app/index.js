import React from 'react';
import ReactDOM from 'react-dom';

import Container from './component/Container';
import people_data from './data/people.json';

ReactDOM.render(
  <Container data={people_data} />,
  document.getElementById('root')
);
