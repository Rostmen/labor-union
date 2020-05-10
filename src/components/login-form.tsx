import React, { Component }  from 'react';
type LoginFormState = { phone: string, password: string }
class LoginForm extends React.Component<{}, LoginFormState> {
    constructor(props: any) {
        super(props);
        this.state = {
            phone: '',
            password: ''
        };

        this.handlePhoneDidChanged = this.handlePhoneDidChanged.bind(this);
        this.handlePasswordDidChanged = this.handlePasswordDidChanged.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handlePhoneDidChanged(event: any) {
        this.setState({phone: event.target.value})
    }

    handlePasswordDidChanged(event: any) {
        this.setState({password: event.target.value})
    }

    handleSubmit(event: any) {
        alert('A phone: ' + this.state.phone + ' and password: ' + this.state.password);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Phone:
                    <input type="text" value={this.state.phone} onChange={this.handlePhoneDidChanged} />
                </label>
                <label>
                    Password:
                    <input type="password" value={this.state.password} onChange={this.handlePasswordDidChanged} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default LoginForm