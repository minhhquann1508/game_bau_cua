import { add_task, change_theme, delete_task, done_task, edit_task, update_task } from "../types/ToDoListType";

export const addNewTask = (newTask) => ({
    type: add_task,
    newTask
})
export const changeTheme = (value) => ({
    type: change_theme,
    value
})
export const doneTask = (taskId) => ({
    type: done_task,
    taskId
})
export const deleteTask = (taskId) => ({
    type: delete_task,
    taskId
})
export const editTask = (updateTask) => ({
    type: edit_task,
    updateTask
})
export const updateTask = (taskNameUpdate) => ({
    type: update_task,
    taskNameUpdate
})




