import React from 'react';
import { render } from 'react-dom';
import {hashHistory} from 'react-router';
import RouterMap from './router/index';
import { Provider } from 'react-redux';
import configStore from './store/configStore';

import './static/css/common.css'

// create Object 'store' of redux
const store = configStore();

render(
    <Provider store={store}>
        <RouterMap history={hashHistory}/>
    </Provider>,
    document.getElementById('root')
);
