import React, { Component } from 'react';
import { Button, NewButton } from '../Components/Button';
export default class DemoJSS extends Component {
    render() {
        return (
            <div>
                <Button className='button-style'>Hello</Button>
                <NewButton>Hello Quan</NewButton>
            </div>
        )
    }
}
