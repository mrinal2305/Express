import React from 'react';
import ReactDOM from 'react-dom';
import { TitleBar } from './titleBar';
import { App } from './base';
import "firebase/firebase-database";

// Add UIs
export class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val : 'null'
        }
    }
    
    handleInput = (event)=>{
        var val = event.target.value;
        this.setState({
            val : val
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // Search from db and show info and click edit button to go to home page
       
    }

    render() {
        return(
            <div>
                <TitleBar />
                {/* User Layout */}
                <input type='text' placeholder="Add User Phone no" onChange={this.handleInput}/>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}