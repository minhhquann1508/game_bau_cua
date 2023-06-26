import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
const darkTheme = {
    backgroundColor: '#000',
    color: '#fff'
}
const lightTheme = {
    backgroundColor: '#fff',
    color: '#000'
}
const DiveStyle = styled.div`
    display:flex;
    align-item:center;
    background-color:${props => props.theme.backgroundColor};
    color:${props => props.theme.color};
    padding:16px 8px;
    box-shadow:0 1px 4px rgba(0,0,0,0.5)
`
export default class DemoTheme extends Component {
    changeTheme = (e) => {
        let value = e.target.value;
        if (value === '1') {
            this.setState({
                currentTheme: lightTheme
            })
        }
        else {
            this.setState({
                currentTheme: darkTheme
            })
        }
    }
    state = {
        currentTheme: lightTheme
    }
    render() {

        return (
            <ThemeProvider theme={this.state.currentTheme}>
                <DiveStyle className='container'>
                    Đây là nội dung
                    <select className='ml-auto d-block' onChange={this.changeTheme}>
                        <option value="1">LightMode</option>
                        <option value="2">DarkMode</option>
                    </select>
                </DiveStyle>
            </ThemeProvider>
        )
    }
}
