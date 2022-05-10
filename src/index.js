import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import './index.css';

import Article from './article';
import Footer from './footer';
import SectionVerh from './sectionVerh';

ReactDOM.render(
  <SectionVerh />,
  document.querySelector('sectionVerh')
);
ReactDOM.render(
  <Header />,
  document.querySelector('header')
);

ReactDOM.render(
  <Article />,
  document.querySelector('article')
);

ReactDOM.render(
  <Footer />,
  document.querySelector('footer')
);
