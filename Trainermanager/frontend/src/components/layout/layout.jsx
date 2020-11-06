import React, { Component } from 'react'
import Header from './Header.jsx';

export default class layout extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="layout">
                <Header />
                {this.props.children}
            </div>
        )
    }
}
