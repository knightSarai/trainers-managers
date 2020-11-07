import React from "react";
import ReactDOM from 'react-dom';
/**Redux */
import {Provider as ReduxProvider} from 'react-redux';
import {store} from './redux/store';
/**Components */
import App from './components/App.jsx';


ReactDOM.render(
    <ReduxProvider store={store}>
        <App/>
    </ReduxProvider>
    ,document.getElementById('app')
);