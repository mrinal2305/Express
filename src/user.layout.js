import 'firebase/firebase-database';
import 'firebase/firebase-storage';
import { Search } from './ui/userUI';
import React from 'react';
import { Link } from 'react-router-dom';

import { App } from './base';
import Data from './dbUser';
import { TitleBar } from './titleBar';
import './index.css';

function Edit(props) {
    if (props.value) {
        return (
            <div>
            <button type="button" className="btn btn-light">
                <Link to={`/home/user/${props.value}`}>Edit</Link>
            </button>
            </div>
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
                key: '',
                val: ''
            },
            profilePhoto: null,
            status: null,
            found: true,
            spinner: false,
            shopPhoto: null,
            shopPhotoStatus: null
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
        this.setState({
            spinner: true
        })

        Data.userMatch(phone).on("child_added", snapshot => {
            Data.userShopkeeper(snapshot.key + '.jpg')
                .then(url => {
                    this.setState({
                        shopPhoto: url,
                        shopPhotoStatus: 'Found'
                    })
                })
                .catch(err => {
                    this.setState({
                        snapshoto: null,
                        shopPhotoStatus: err.message
                    })
                }
                )

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
                        spinner: false
                    })
                })
                .catch(err => {
                    this.setState({
                        user: user,
                        profilePhoto: null,
                        status: err.message,
                        val: '+91',
                        spinner: false
                    })
                }); //get download url    
        })

        setTimeout(() => {
            this.setState({
                val: '+91',
                found: true,

            })

            if (this.state.user.key == null) {
                var user = {
                    key: null,
                    val: null
                }
                this.setState({
                    user: user,
                    found: false,
                    spinner: false
                })
            }

            //Make state null and prompt not found messsage
        }, 12000)
    }

    render() {
        if (this.state.found) {
            return (
                <div>
                    <TitleBar />
                    {/* User Layout */}
                    <Search value={this.state} onChange={this.handleInput} onClick={this.handleSubmit} user={this.state.user.val} />
                    <Edit value={this.state.user.key} />
                </div>
            )
        }
        else {
            return (
                <div>
                    <TitleBar />
                    {/* User Layout */}
                    <Search value={this.state} onChange={this.handleInput} onClick={this.handleSubmit} />
                    {/* <input type='text' placeholder="Add User Phone no" onChange={this.handleInput} value={this.state.val} /> */}
                    {/* Show false */}
                    <div className="container alert alert-danger" role="alert">
                        Not Found</div>
                </div>
            )
        }
    }
}