import React, { Component } from 'react'
import './Login.css';
import { connect } from 'react-redux';
import { login } from '../../actions';
import { Redirect } from 'react-router-dom'

class Login extends Component {
    constructor() {
        super();
        this.nameRef = React.createRef();
        this.passwordRef = React.createRef();
    }

    onSubmit = (e) => {
        e.preventDefault();

        const userDetails = {
            username: this.nameRef.current.value,
           password: this.passwordRef.current.value
        }
        this.props.login( userDetails )
    }

    render() {

        return (

           <React.Fragment>
               {this.props.isLoggedIn && <Redirect to="/friends" />}
               <form onSubmit={this.onSubmit}>
                <h2>LOGIN</h2>
                <div className='login-field'>
                    <div className='input-group'>
                        <label htmlFor='name'>Name</label>
                        <input type='text' name='name' ref={this.nameRef} />
                    </div>
                    <div className='input-group'>
                        <label htmlFor='password'>password</label>
                        <input type='password' name='password' ref={this.passwordRef} />
                    </div>
                    <button className='btn'>Login</button>
                </div>
            </form>
           </React.Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        isLoggedIn: localStorage.getItem('token') || null
    }
}

export default connect(mapStateToProps, {login})(Login)