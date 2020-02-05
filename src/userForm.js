import React from 'react';
import { useState } from 'react';
import Data from './dbUser';

function Status(props) {
   if(props.count > 0){
       setTimeout(()=>{props.onChange()},2000)
       return(
           <div>
               <h4>Successfully Updated</h4>
           </div>
       )
   }
   else{
       return(
           <div>
              
           </div>
       )
   }
}

export function Form(props) {
    var [count, setCount] = useState(0);

    var value = {                           //Good Logic for making value global
        name: props.value.name,
        phone: props.value.phone,
        id: props.value.id
    }


    const handleChange = (event) => {
        var keey = event.target.name;
        var val = event.target.value;
        value[keey] = val;
        value.id = props.value.id;          // Storing Key logic
        props.onChange(value);
    }

    const handleEdit = () => {
        // Firebase update logic
        Data.userUpdate(props.value.id).update(props.value)
            .then(() => {
                console.log("Successs");  //Prompt this with a beautiful css
                setCount(count + 1);
            })
            .catch(err => {
                console.log(err);
            });

    }

    var onChange = ()=>{
        setCount(count - 1);
    }

    return (
        <div>
            <input type="text" onChange={handleChange} name="name" value={value.name} />
            <input type="text" onChange={handleChange} name="phone" value={value.phone} />
            <button onClick={handleEdit}>Edit</button>
            <Status count={count} onChange={onChange}/>
            <button>Delete</button>
        </div>
    )
}