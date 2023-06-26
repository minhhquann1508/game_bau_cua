import { ToDoListDarkTheme } from "../../JSS Components/Theme/DarkTheme"
import { themeList } from "../../JSS Components/Theme/ThemeManager";
import { add_task, change_theme, delete_task, done_task, edit_task, update_task } from "../types/ToDoListType"
const initialState = {
    themeToDoList: ToDoListDarkTheme,
    taskList: [
        { id: 'task-1', taskName: 'task 1 ', done: true },
        { id: 'task-2', taskName: 'task 2 ', done: false },
        { id: 'task-3', taskName: 'task 3 ', done: true },
        { id: 'task-4', taskName: 'task 4 ', done: false },
    ],
    taskEdit: { id: '0', taskName: '', done: false },
}

export default (state = initialState, action) => {
    switch (action.type) {
        case add_task: {
            if (action.newTask.taskName.trim() === '') {
                alert('Điền việc cần làm đuy');
                return { ...state };
            }
            else {
                let index = state.taskList.findIndex((task) => task.taskName === action.newTask.taskName);
                if (index !== -1) {
                    alert('Task này đã tồn tại rồi');
                    return { ...state };
                }
                let updateTaskList = [...state.taskList];
                updateTaskList.push(action.newTask);
                state.taskList = updateTaskList;
                return { ...state };
            }
        }
        case change_theme: {
            let choosenTheme = themeList.find((theme) => theme.id == action.value);
            if (choosenTheme) {
                state.themeToDoList = { ...choosenTheme.theme };
            }
            return { ...state };
        }
        case done_task: {
            let updateTaskList = [...state.taskList];
            let findingTask = updateTaskList.find((task) => task.id == action.taskId);
            if (findingTask) {
                findingTask.done = true;
            }
            return { ...state, taskList: updateTaskList };
        }
        case delete_task: {
            let updateTaskList = [...state.taskList];
            let index = updateTaskList.findIndex((task) => task.id == action.taskId);
            if (index !== -1) {
                updateTaskList.splice(index, 1);
            }
            return { ...state, taskList: updateTaskList };
        }
        case edit_task: {
            return { ...state, taskEdit: action.updateTask };
        }
        case update_task: {
            state.taskEdit = { ...state.taskEdit, taskName: action.taskNameUpdate };
            let taskListUpdate = [...state.taskList];
            let index = taskListUpdate.findIndex((task) => task.id === state.taskEdit.id);
            if (index != -1) {
                taskListUpdate[index] = state.taskEdit;
            }
            state.taskList = taskListUpdate;
            state.taskEdit = { id: '-1', taskName: '', done: false };
            return { ...state };
        }
        default: {
            return { ...state };
        }
    }
}
