import 'firebase/firebase-database';
import 'firebase/firebase-storage';

import React from 'react';
import { Link } from 'react-router-dom';

import { App } from './base';
import Data from './dbUser';
import { TitleBar } from './titleBar';

function Edit(props) {
    if (props.value) {
        return (
            <Link to={`/home/user/${props.value}`}>Edit</Link>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}

// Add UIs
export class User extends React.Component {
    constructor(props) {
        super(props);
        this.storage = App.storage('gs://express-b0920.appspot.com/');

        this.state = {
            val: '+91',
            user: {
                key: null,
                val: null
            },
            profilePhoto: null,
            status: null,
            found: true,
        }
    }

    handleInput = (event) => {
        var val = event.target.value;
        this.setState({
            val: val,
            found: true
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // Search from db and show info and click edit button to go to home page
        var phone = this.state.val;

        Data.userMatch(phone).on("child_added", snapshot => {
            // CHECK USER NOT FOUND -- PRIYANSHU NAYAN
            var user = {
                key: snapshot.key,
                val: snapshot.val()
            }

            var key = user.key + '.jpg';

            Data.userPhoto(key)
                .then(url => {
                    this.setState({
                        user: user,
                        profilePhoto: url,
                        status: 'Picture found',
                        val: '+91',
                    })
                })
                .catch(err => {
                    this.setState({
                        user: user,
                        profilePhoto: null,
                        status: err.message,
                        val: '+91',
                    })
                }); //get download url    

        })

        setTimeout(() => {
            this.setState({
                val: '+91',
                found: true
            })

            if (this.state.user.key == null) {
                var user = {
                    key: null,
                    val: null
                }
                this.setState({
                    user: user,
                    found: false
                })
            }
            //Make state null and prompt not found messsage
        }, 8000)
    }

    render() {
        if (this.state.found) {
            return (
                <div>
                    <TitleBar />
                    {/* User Layout */}
                    <input type='text' placeholder="Add User Phone no" onChange={this.handleInput} value={this.state.val} />
                    <button onClick={this.handleSubmit}>Submit</button>
                    {/* Show Data and add show some message if not found*/}
                    <h3>{this.state.user.key}</h3>
                    <h3>{this.state.profilePhoto}</h3>
                    <h3>{this.state.status}</h3>
                    <Edit value={this.state.user.key} />
                </div>
            )
        }
        else {
            return (
                <div>
                    <TitleBar />
                    {/* User Layout */}
                    <input type='text' placeholder="Add User Phone no" onChange={this.handleInput} value={this.state.val} />
                    <button onClick={this.handleSubmit}>Submit</button>
                    {/* Show false */}
                    <h3>Not found</h3>
                </div>
            )
        }
    }
}