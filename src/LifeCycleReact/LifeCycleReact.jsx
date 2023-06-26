import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class LifeCycleReact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1
        }
        console.log('contructor');
    }
    //Được gọi khi component này được render ra giao diện / được sử dụng trong DOM trong thẻ App
    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps');
        return null;
    }
    //Được gọi khi setState hoặc thay đổi props
    shouldComponentUpdate(newProps, currentState) {
        //return true thì chạy tiếp các life cycle còn lại,false thì sẽ dừng lại
        return true;
    }
    render() {
        return (
            <div>
                <h1>Parrent component</h1>
                <span>Number: {this.state.number}</span>
                <button onClick={() => this.setState({
                    number: this.state.number + 1
                })}>click</button>
            </div>
        )
    }
    //Được sử dụng khi đã render hoàn tất dữ các component 1 lần duy nhất
    componentDidMount() {
        console.log('componentDidUpdate');
    }
    //Được gọi khi chỉnh sửa setState hoặc thay đổi props sau lần đầu componentDidMount
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
}
