import React, { Component } from 'react'
import './UserProfile.css';
import Swal from 'sweetalert2';
export default class UserProfile extends Component {
    state = {
        values: {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: '',
            passwordConfirm: '',
        },
        errors: {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: '',
            passwordConfirm: '',
        }

    }
    renderInput = (e) => {
        let { value, name, type } = e.target;
        let newValue = { ...this.state.values, [name]: value };
        let newError = { ...this.state.errors };
        if (value.trim() === '') {
            newError[name] = 'Không để trống trường này';
        }
        else {
            newError[name] = '';
        }
        if (type === 'email') {
            let regex = /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/;
            if (!regex.test(value)) {
                newError[name] = 'Email không đúng định dạng';
            }
            else {
                newError[name] = '';
            }
        }
        if (name === 'passwordConfirm') {
            if (value === newValue['password']) {
                newError[name] = '';
            }
            else {
                newError[name] = 'Mật khẩu không khớp';
            }
        }
        this.setState({
            values: newValue,
            errors: newError,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;
        let profileContent = '';
        let { values, errors } = this.state;
        for (let key in values) {
            if (values[key] === '') {
                valid = false;
            }
            else {
                profileContent += `<p><b>${key}</b>:${values[key]}</p>`
            }
        }
        for (let key in errors) {
            if (errors[key] !== '') {
                valid = false;
            }
        }
        if (!valid) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Đăng nhập thất bại'
            })
            return;
        }
        Swal.fire({
            icon: 'success',
            title: 'Đăng nhập thành công',
            html: profileContent
        })
    }
    render() {
        return (
            <div className="container-fluid" style={{ background: '#ccc', display: 'flex', justifyContent: 'center' }}>
                <form onSubmit={this.handleSubmit} className='bg-white w-30 p-5 m-5'>
                    <h3 className='text-center'>User Profile</h3>
                    <div className="row mt-5">
                        <div className="col-6">
                            <div className="group">
                                <input value={this.state.values.firstName} type="text" name='firstName' required onChange={(e) => this.renderInput(e)} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>firstName</label>
                                <span className='text-danger'>{this.state.errors.firstName}</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="group">
                                <input value={this.state.values.lastName} type="text" name='lastName' required onChange={(e) => this.renderInput(e)} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>lastName</label>
                                <span className='text-danger'>{this.state.errors.lastName}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12">
                            <div className="group">
                                <input value={this.state.values.userName} type="text" name='userName' required onChange={(e) => this.renderInput(e)} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>userName</label>
                                <span className='text-danger'>{this.state.errors.userName}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12">
                            <div className="group">
                                <input value={this.state.values.email} type="email" name='email' required onChange={(e) => this.renderInput(e)} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>email</label>
                                <span className='text-danger'>{this.state.errors.email}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-6">
                            <div className="group">
                                <input value={this.state.values.password} type="password" name='password' required onChange={(e) => this.renderInput(e)} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>password</label>
                                <span className='text-danger'>{this.state.errors.password}</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="group">
                                <input value={this.state.values.passwordConfirm} type="password" required onChange={(e) => this.renderInput(e)} name='passwordConfirm' />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>passwordConfirm</label>
                                <span className='text-danger'>{this.state.errors.passwordConfirm}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 ">
                            <button type='submit' className='btn bg-dark w-100 text-center text-white p-2'>SUBMIT</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
