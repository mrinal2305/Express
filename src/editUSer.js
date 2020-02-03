import React from 'react';
import { TitleBar } from './titleBar';
import Data from './dbUser';

export class EditUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: null,
            value: null
        }

        Data.userData("2oVlZuynejcC4i1nrZGJip8e6Om1").on('value', snapshot => {
            this.setState({
                key: snapshot.key,
                value: snapshot.val()
            })
        })
        
    }

    render() {
        return (
            <div>
                <TitleBar />
                <h4>EditUser Layout</h4>
                <h1>{this.state.key}</h1>
            </div>
        )
    }
}