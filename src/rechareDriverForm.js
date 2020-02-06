import React from 'react';
import { useState } from 'react';
import Data from './dbDriver';

function Message(props){
    if(props.value > 0){
        setTimeout(()=>{props.onChange()},2000)

        return(
            <div>
                 <h1>Success</h1>
            </div>
        )
       
    }
    else {
        return(
            <div></div>
        )
    }
}

function Check(props){
    if(props.value === 3){
    return(
        <div>walletBalance must be between 0 and 2000</div>
    )
    }
    else{
        return(<div></div>)
    }
}

function Button(props){
    if(props.age === 3){
        return(
            <button disabled onClick={props.onClick}>Submit</button>
        )
    }
    else {
        return(
            <button onClick={props.onClick}>Submit</button>
        )
    }
}

export function RechargeForm(props) {

    var [count, setCount] = useState(0);
    var [age, setAge] = useState(0);

    var obj = {
        name : props.value.name,
        phone : props.value.phone,
        walletBalance : props.value.walletBalance,
        vehicleType   : props.value.vehicleType,
        id            : props.value.id
    }

    var handleChange = (event) => {
        var key = event.target.name;
        var value = event.target.value;
        if(value>0 && value<2000) setAge(0)
        else setAge(3)
        obj[key] = value;
        props.onChange(obj);
    }

    var handleClick  = () => {
       if(age === 0){
        Data.userUpdate(props.value.id).update(props.value)
        .then(()=>{
            setCount(count + 1);
        });
    }
    }

    var changeCount = () => {
        setCount(count - 1);
    }
    
    return (
        <div>
            {props.value.name}
            {props.value.phone}
            <input type="number" name="walletBalance" value={props.value.walletBalance} onChange={handleChange} placeholder="Wallet Balance"/><br/>
            <Check value={age} />
            {props.value.vehicleType}
            <Button age={age} onClick={handleClick}/>
            {/* <button disabled onClick={handleClick}>Submit</button> */}
            <Message value={count} onChange={changeCount}/>
     </div>
    )
}