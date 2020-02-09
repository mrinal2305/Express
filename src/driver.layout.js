import React from 'react';
import Data from './dbDriver';
import { TitleBar } from './titleBar';
import { Link } from 'react-router-dom';
import {UI} from './ui/driverUI';

export class Driver extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: '+91',
            spinner: false,
            value: '',
            found : false
        }
    }

    changeHandler = (event) => {
        this.setState({
            val: event.target.value
        })
    }

    handleClick = () => {
      
        this.setState({
            spinner: true
        })
        Data.userMatch(this.state.val).on('child_added', snaphot => {
            this.setState({
                val: '+91',
                value: snaphot.val(),
                spinner: false,
                found : true
            })
        })
    }

    render() {
        return (
            <div>
                <TitleBar />
                <UI onChange={this.changeHandler} value={this.state.val} state={this.state} onClick={this.handleClick}/>
            </div>
        )
    }   
}