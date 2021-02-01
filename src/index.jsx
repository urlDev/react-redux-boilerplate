import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('root'));

// This line is for faster development.
// After changing something in project, it will only re-render that part
// Instead of refreshing whole page
module.hot.accept();
