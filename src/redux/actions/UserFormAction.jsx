import { add_user, delete_user, edit_user, update_user } from "../types/UserForm";

export const addUserAction = (newUser, isValid) => ({
    type: add_user,
    newUser,
    isValid
})
export const deleteUserAction = (id) => ({
    type: delete_user,
    id
})
export const editUserAction = (id) => ({
    type: edit_user,
    id
})
export const updateUserAction = (updateUser) => ({
    type: update_user,
    updateUser
})

