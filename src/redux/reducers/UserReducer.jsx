import { add_user, delete_user, edit_user, update_user } from "../types/UserForm"
const initialState = {
    userList: [
        { id: 1, userName: 'quan1508', fullName: 'Nguyễn Minh Quân', password: '123', email: 'quan1508@gmail.com', phone: '0383138897', type: 'Khách hàng' },
        { id: 2, userName: 'ngoc1210', fullName: 'Nguyễn Hữu Viết Ngọc', password: '223', email: 'ngoc1210@gmail.com', phone: '0383138852', type: 'Nhân viên' },
    ],
    userEdit: { id: 0, userName: '', fullName: '', password: '', email: '', phone: '', type: '' },
    disabled: true,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case add_user: {
            if (action.isValid) {
                let updateUserList = [...state.userList, action.newUser];
                state.userList = updateUserList;
                state.disabled = true;
            }
            return { ...state };
        }
        case delete_user: {
            let newUserList = state.userList.filter((user) => user.id !== action.id);
            if (newUserList) {
                state.userList = newUserList;
            }
            return { ...state };
        }
        case edit_user: {
            let findingUser = state.userList.find((user) => user.id === action.id);
            if (findingUser) {
                state.userEdit = findingUser;
                state.disabled = false;
            }
            return { ...state };
        }
        case update_user: {
            let index = state.userList.findIndex((user) => user.id === action.updateUser.id);
            if (index != -1) {
                let updateListUser = [...state.userList];
                updateListUser[index] = action.updateUser;
                state.userList = updateListUser;
            }
            return { ...state };
        }
        default: {
            return { ...state };
        }
    }
}
