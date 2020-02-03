import React from 'react';
import ReactDOM from 'react-dom';
import { TitleBar } from './titleBar';

export class Driver extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <div>
                <TitleBar />
                <h4>Driver Layout</h4>
            </div>
        )
    }
}