import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { ToDoListDarkTheme } from '../../Theme/DarkTheme';
import { ToDoListPrimaryTheme } from '../../Theme/PrimaryTheme';
import { ToDoListLightTheme } from '../../Theme/LightTheme';
import { Container } from '../../ComponentsToDoList/Container';
import { Dropdown } from '../../ComponentsToDoList/Dropdown';
import { Heading1, Heading2, Heading3, Heading4, Heading5 } from '../../ComponentsToDoList/Heading';
import { TextField } from '../../ComponentsToDoList/TextField';
import { Button } from '../../ComponentsToDoList/Button';
import { Table, Thead, Tbody, Tr, Td, Th } from '../../ComponentsToDoList/Table';
import { connect } from 'react-redux';
import { addNewTask, changeTheme, deleteTask, doneTask, editTask, updateTask } from '../../../redux/actions/ToDoListAction';
import { themeList } from '../../Theme/ThemeManager';
class ToDoList extends Component {
    state = {
        taskName: '',
        disabled: true,
    }
    renderTaskToDo = () => {
        return this.props.taskList.filter((task) => !task.done).map((task, index) => {
            return (
                <Tr key={index}>
                    <Th>{task.taskName}</Th>
                    <Th className='text-right'>
                        <Button onClick={() => {
                            this.setState({
                                disabled: false
                            }, () => {
                                this.props.dispatchEditTask(task)
                            })
                        }}>
                            <i className="fa fa-edit"></i>
                        </Button>
                        <Button className='ml-2' onClick={() => this.props.dispatchDoneTask(task.id)}>
                            <i className="fa fa-check"></i>
                        </Button>
                        <Button className='ml-2' onClick={() => this.props.dispatchDeletedTask(task.id)}>
                            <i className="fa fa-trash"></i>
                        </Button>
                    </Th>
                </Tr>
            )
        })
    }
    renderTaskComplete = () => {
        return this.props.taskList.filter((task) => task.done).map((task, index) => {
            return (
                <Tr key={index}>
                    <Th>{task.taskName}</Th>
                    <Th className='text-right'>
                        <Button onClick={() => this.props.dispatchDeletedTask(task.id)}>
                            <i className="fa fa-trash"></i>
                        </Button>
                    </Th>
                </Tr>
            )
        })
    }
    renderTheme = () => {
        return themeList.map((theme, index) => {
            return (
                <option value={theme.id} key={index}>{theme.name}</option>
            )
        })
    }
    // componentWillReceiveProps(newProps) {
    //     this.setState({
    //         taskName: newProps.taskEdit.taskName
    //     })
    // }
    render() {
        return (
            <ThemeProvider theme={this.props.themeToDoList}>
                <Container className='w-50'>
                    <Dropdown onChange={(e) => this.props.dispatchChangeTheme(e.target.value)}>
                        {this.renderTheme()}
                    </Dropdown>
                    <Heading3>
                        To do list
                    </Heading3>
                    <TextField value={this.state.taskName} className="w-50" onChange={(e) => {
                        this.setState({
                            taskName: e.target.value
                        })
                    }} name="taskName" label={'Task name'} />
                    <Button className='ml-2' onClick={() => this.props.dispatchAddNewTask(this.state.taskName)}>
                        <i className="fa fa-plus" aria-hidden="true"></i>
                        Add task
                    </Button>
                    {
                        this.state.disabled ?
                            <Button className='ml-2' disabled onClick={() => this.props.dispatchUpdateTask(this.state.taskName)}>
                                <i className="fa fa-gear" aria-hidden="true"></i>
                                Update task
                            </Button> :
                            <Button className='ml-2' onClick={() => {
                                let { taskName } = this.state;
                                this.setState({
                                    disabled: true,
                                    taskName: ''
                                }, () => {
                                    this.props.dispatchUpdateTask(taskName)
                                })
                            }}>
                                <i className="fa fa-gear" aria-hidden="true"></i>
                                Update task
                            </Button>
                    }
                    <Heading4 className='my-2'>
                        Task to do
                    </Heading4>
                    <Table>
                        <Thead>
                            {this.renderTaskToDo()}
                        </Thead>
                    </Table>
                    <Heading4 className='my-2'>
                        Task completed
                    </Heading4>
                    <Table>
                        <Thead>
                            {this.renderTaskComplete()}
                        </Thead>
                    </Table>
                </Container>
            </ThemeProvider >
        )
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.taskEdit.id != this.props.taskEdit.id) {
            this.setState({
                taskName: this.props.taskEdit.taskName
            })
        }
    }
}
const mapStateToProps = (state) => {
    return {
        themeToDoList: state.ToDoListReducer.themeToDoList,
        taskList: state.ToDoListReducer.taskList,
        taskEdit: state.ToDoListReducer.taskEdit
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatchAddNewTask: (taskName) => {
            let newTask = {
                id: Date.now(),
                taskName: taskName,
                done: false
            }
            dispatch(addNewTask(newTask))
        },
        dispatchChangeTheme: (value) => {
            dispatch(changeTheme(value))
        },
        dispatchDoneTask: (taskId) => {
            dispatch(doneTask(taskId))
        },
        dispatchDeletedTask: (taskId) => {
            dispatch(deleteTask(taskId))
        },
        dispatchEditTask: (updateTask) => {
            dispatch(editTask(updateTask))
        },
        dispatchUpdateTask: (taskNameUpdate) => {
            dispatch(updateTask(taskNameUpdate))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)