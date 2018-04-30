import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {rootReducer} from "./reducers/root.reducer";
import {createStore} from 'redux'
import {Provider} from "react-redux";
import App from "./components/app/app";

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
