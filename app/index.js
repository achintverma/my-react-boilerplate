import React from 'react';
import ReactDOM from 'react-dom';
import routes from './config/routes';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

require('./css/app.scss');  

ReactDOM.render(routes, document.getElementById('app'));