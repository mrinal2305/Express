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

export function VerifyForm(props) {
    var [count, setCount] = useState(0);

    var obj = {
        name : props.value.name,
        phone : props.value.phone,
        id   : props.value.id,
    }

    var handleChange = (event)=>{
        var key = event.target.name;
        var value = event.target.value;
        obj[key] = value;
        props.onClick(obj,props.status,props.image);
    }

    var handleClick = () => {
        Data.userUpdate(props.value.id).update(props.value).then(()=>{
            setCount(count + 1);
        })
        console.log(props);
    }

    var changeCount = () => {
        setCount(count - 1);
    }

    return (
        <div>
          <input type="text" name="name"  value={props.value.name}  onChange={handleChange}/>
          <input type="text" name="phone" value={props.value.phone} onChange={handleChange} />
          <button onClick={handleClick}>Submit</button>
          <Message value={count} onChange={changeCount}/>
        </div>
    )
}