import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import bar from 'foo/bar'; // doesn't work
import './index.css';

console.log(bar)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
