import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import A from "./App.js";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<A />, document.getElementById('root'));

serviceWorker.unregister();
