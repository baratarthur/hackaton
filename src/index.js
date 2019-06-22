import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'mobx-react'
import UserStore from './Stores/UserStore'

const Root = (
    <Provider UserStore={UserStore} >
        <App />
    </Provider>
)

ReactDOM.render(Root , document.getElementById('root'));
