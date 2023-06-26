import { set } from 'lodash';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addUserAction, updateUserAction } from '../redux/actions/UserFormAction';
class FormDangKy extends Component {
    constructor(props) {
        super(props)
        this.state = {
            values: {
                userName: '',
                fullName: '',
                password: '',
                email: '',
                phone: '',
                type: ''
            },
            errors: {
                userName: '',
                fullName: '',
                password: '',
                email: '',
                phone: '',
                type: ''
            },
            isValid: true
        }
    }
    getInputValue = (e) => {
        let { value, name } = e.target;
        let errorMess = '';
        let valid = true;
        if (value.trim() === '' || value.length === 0) {
            errorMess = name + ' không hợp lệ !'
        }
        for (let key in this.state.errors) {
            if (this.state.errors[key] === '') {
                valid = false;
            }
        }
        this.setState({
            values: { ...this.state.values, [name]: value },
            errors: { ...this.state.errors, [name]: errorMess },
            isValid: valid
        })
    }
    render() {
        return (
            <div className="card my-5">
                <div className="card-header bg-dark">
                    <h4 className='text-white'>Form đăng ký</h4>
                </div>
                <div className="card-body">
                    <form action="#">
                        <div className="form-group row">
                            <div className="col-6">
                                <label htmlFor="">Tài khoản</label>
                                <input type="text" value={this.state.values.userName} name='userName' onChange={(e) => this.getInputValue(e)} className="form-control" />
                                <p className='text-danger'>{this.state.errors.userName}</p>
                            </div>
                            <div className="col-6">
                                <label htmlFor="">Họ tên</label>
                                <input type="text" value={this.state.values.fullName} name='fullName' onChange={(e) => this.getInputValue(e)} className="form-control" />
                                <p className='text-danger'>{this.state.errors.fullName}</p>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-6">
                                <label htmlFor="">Mật khẩu</label>
                                <input type="password" value={this.state.values.password} name='password' onChange={(e) => this.getInputValue(e)} className="form-control" />
                                <p className='text-danger'>{this.state.errors.password}</p>
                            </div>
                            <div className="col-6">
                                <label htmlFor="">Số điện thoại</label>
                                <input type="text" name='phone' value={this.state.values.phone} onChange={(e) => this.getInputValue(e)} className="form-control" />
                                <p className='text-danger'>{this.state.errors.phone}</p>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-6">
                                <label htmlFor="">Email</label>
                                <input type="email" name='email' value={this.state.values.email} onChange={(e) => this.getInputValue(e)} className="form-control" />
                                <p className='text-danger'>{this.state.errors.email}</p>
                            </div>
                            <div className="col-6">
                                <label>Mã loại người dùng</label>
                                <select name='type' value={this.state.values.type} onChange={(e) => this.getInputValue(e)} className='form-control'>
                                    <option value="Khách hàng">Khách hàng</option>
                                    <option value="Nhân viên">Nhân viên</option>
                                </select>
                                <p className='text-danger'>{this.state.errors.type}</p>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-12">
                                <button className='btn btn-success' onClick={(e) => {
                                    e.preventDefault();
                                    this.props.addNewUser(this.state.values, this.state.isValid)
                                }}>Đăng ký</button>
                                {this.props.disabled ?
                                    <button className='btn btn-primary mx-2' disabled onClick={(e) => {
                                        e.preventDefault();
                                        this.props.updateUser(this.state.values);
                                    }}>Cập nhật</button> :
                                    <button className='btn btn-primary mx-2' onClick={(e) => {
                                        e.preventDefault();
                                        this.props.updateUser(this.state.values);
                                    }}>Cập nhật</button>}

                            </div>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.userEdit.id !== this.props.userEdit.id) {
            this.setState({
                values: this.props.userEdit
            })
        }
    }
}
const mapStateToProps = (state) => {
    return {
        userEdit: state.UserReducer.userEdit,
        disabled: state.UserReducer.disabled,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addNewUser: (user, isValid) => {
            let newUser = {
                id: Date.now(),
                userName: user.userName,
                fullName: user.fullName,
                password: user.password,
                email: user.email,
                phone: user.phone,
                type: user.type
            }
            dispatch(addUserAction(newUser, isValid))
        },
        updateUser: (updateUser) => {
            dispatch(updateUserAction(updateUser))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormDangKy)