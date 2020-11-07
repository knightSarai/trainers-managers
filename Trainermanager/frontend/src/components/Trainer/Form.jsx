import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addTrainer} from '../../redux/trainers/trainers.actions';

class Form extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    }
    onChange = evt => this.setState({
        [evt.target.name]: evt.target.value
    })

    onSubmit = e => {
        e.preventDefault();
        const {name, email, message} = this.state;
        this.props.addTrainer({name, email, message});
        this.setState({
            name: '',
            email: '',
            message: ''
        })
    }

    render() {
        const {name, email, message} = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>add Trainer</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            className="form-control" 
                            type="text"
                            name="name"
                            onChange={this.onChange}
                            value={name}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            className="form-control" 
                            type="email"
                            name="email"
                            onChange={this.onChange}
                            value={email}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <input
                            className="form-control" 
                            type="message"
                            name="message"
                            onChange={this.onChange}
                            value={message}
                        />
                    </div>
                    <button className="btn btn-primary btn-md">Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {addTrainer})(Form)
