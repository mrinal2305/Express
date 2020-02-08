import React from 'react';
import { useState } from 'react';
import { FormUI } from './ui/form';
import Data from './dbUser';
function Status(props) {
    if (props.count > 0) {
        setTimeout(() => { props.onChange() }, 2000)
        return (
            <div>
                <h4>Successfully Updated</h4>
            </div>
        )
    }
    else {
        return (
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
        id: props.value.id,
        cancellations: props.value.cancellations,
        email: props.value.email,
        hasPicture: props.value.hasPicture,
        lastTrip: props.value.lastTrip,
        permitted: props.value.permitted,
        shopAddress: props.value.shopAddress,
        shopkeeper: props.value.shopkeeper,
        found: props.value.found
    }

    const handleChange = (event) => {
        var key = event.target.name;
        var val = event.target.value;
        if(val === 'true' || val === 'false'){ //solve 1
            var isTrue = (val === 'true')
            value[key] = isTrue;
            return ;
        }
       
            value[key] = val;
      
      
        props.onChange(value);
    }

    const handleEdit = () => {
        if(value.shopAddress == undefined){
           value.shopAddress = '';
        }

        if(value.lastTrip == undefined){
            value.lastTrip = '';
        }

        //Firebase update logic
        Data.userUpdate(props.value.id).update(value)
            .then(() => {
                setCount(count + 1);
            })
            .catch(err => {
                console.log(err);
            });
       // solved 2
    }

    var onChange = () => {
        setCount(count - 1);
    }

    var permitted = (data) => {
        value[permitted] = data;
    }

    return (
        <div>
            <FormUI onChange={handleChange} value={value} onClick={handleEdit} permisson={permitted} />
            <Status count={count} onChange={onChange} />
            <button>Delete</button>
        </div>
    )
}