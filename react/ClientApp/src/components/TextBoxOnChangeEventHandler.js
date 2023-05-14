import React, { Component } from 'react';

class TextBoxOnChangeEventHandler extends Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            password: "",
        };
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleUserChange(e) {
        this.setState({userName: e.target.value,})
    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value, })
    }
    render() {
        return (<>
            <input type="text" placeholder="id" onChange={this.handleUserChange} />
            <input type="text" placeholder="password" onChange={this.handlePasswordChange } />
            <hr />
            id: {this.state.userName}, password: {this.state.password}
        </>)
    }
}

export default TextBoxOnChangeEventHandler