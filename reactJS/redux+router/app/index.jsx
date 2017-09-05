import React from 'react';
import { render } from 'react-dom';
import { hashHistory } from 'react-router';
import RouterMap from './router/RouterMap';
import {createStore} from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux';

import './static/css/common.less'

const store = createStore(allReducers);

render(
    <Provider store={store}>
        <RouterMap history={hashHistory}/>
    </Provider>,
    document.getElementById('root')
);
