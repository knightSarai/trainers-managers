import React, { Component } from 'react'
import Header from './Header.jsx';
import Alert from './Alert.jsx'
export default class layout extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="layout">
                <Header />
                <Alert/>
                {this.props.children}
            </div>
        )
    }
}
