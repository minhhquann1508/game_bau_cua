import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deleteUserAction, editUserAction } from '../redux/actions/UserFormAction';
class TableDanhSachNguoiDung extends Component {
    renderTable = () => {
        return this.props.userList.map((user, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.userName}</td>
                    <td>{user.fullName}</td>
                    <td>{user.password}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.type}</td>
                    <td>
                        <button onClick={() => this.props.editUser(user.id)}>
                            <i className="fa fa-edit"></i>
                        </button>
                        <button className='mx-1' onClick={() => this.props.deleteUser(user.id)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }
    render() {
        return (
            <div className="card">
                <div className="card-header bg-dark">
                    <h5 className='text-white'>Danh sách người dùng</h5>
                </div>
                <div className="card-body p-0">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tài khoản</th>
                                <th>Họ tên</th>
                                <th>Mật khẩu</th>
                                <th>Email</th>
                                <th>Số điện thoại</th>
                                <th>Loại người dùng</th>
                                <th>
                                    <i className="fa fa-gear"></i>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTable()}
                        </tbody>
                    </table>

                </div>
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        userList: state.UserReducer.userList,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser: (id) => {
            dispatch(deleteUserAction(id))
        },
        editUser: (id) => {
            dispatch(editUserAction(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TableDanhSachNguoiDung);