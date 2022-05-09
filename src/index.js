import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import './index.css';

import Article from './article';

ReactDOM.render(
  <Header />,
  document.querySelector('header')
);

ReactDOM.render(
  <Article/>,
  document.querySelector('article')
);
