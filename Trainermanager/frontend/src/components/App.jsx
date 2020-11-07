import React, { Component } from 'react'
import Layout from '../components/layout';
import Dashboard from './Trainer';
/**React Alerts */
import {positions, Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
/**Alert Options */
const alertOptions = {
    timeout: 3000,
    position: 'top center'
}

export default class App extends Component {
    render() {
        return (
            <AlertProvider template={AlertTemplate} {...alertOptions}>
                <Layout>
                    <div className="container">
                        <Dashboard />
                    </div>
                </Layout>
            </AlertProvider>
        )
    }
}
