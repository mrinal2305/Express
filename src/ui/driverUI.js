import React from 'react';
import { Link } from 'react-router-dom';

function Goto(props) {
    if (props.found) {
        return (
            <div>
                <Link to={`/home/driver/verify/${props.id}`}>Verify</Link>
                <Link to={`/home/driver/recharge/${props.id}`}>Recharge</Link>
            </div>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}

export function UI(props) {
    return (
        <div>
            <div className="search container">
                <input type="text" name="Search" placeholder="Search" onChange={props.onChange} value={props.value} />
                <button onClick={props.onClick}>Search</button>
            </div>
            <h1>{props.state.spinner}</h1>
            <h1>{props.state.value.name}</h1>
            <Goto found={props.state.found} id={props.state.value.id} />
        </div>
    )
}