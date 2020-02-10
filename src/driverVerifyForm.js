import React from 'react';
import { useState } from 'react';
import Data from './dbDriver';
import { Verify } from './ui/verifyForm';

function Message(props) {
    if (props.value > 0) {
        setTimeout(() => { props.onChange() }, 2000)

        return (
            <div>
                <h1>Success</h1>
            </div>
        )

    }
    else {
        return (
            <div></div>
        )
    }
}

export function VerifyForm(props) {
    var [count, setCount] = useState(0);

    var obj = {
        name: props.value.val.name,
        phone: props.value.val.phone,
        id: props.value.val.id,
        active : props.value.val.active,
        cancellations: props.value.val.cancellations,
        dateJoined: props.value.val.dateJoined,
        deleteAllowed: props.value.val.deleteAllowed,
        driverAadharBack: props.value.val.valdriverAadharBack,
        driverAadharBack: props.value.val.driverAadharBack,
        driverAadharFront: props.value.val.driverAadharFront,
        drivingLicense: props.value.val.drivingLicense,
        email: props.value.val.email,
        lastTripTime: props.value.val.lastTripTime,
        numberOfRides: props.value.val.numberOfRides,
        ownerAadharBack: props.value.val.ownerAadharBack,
        ownerAadharFront: props.value.val.ownerAadharFront,
        permitted: props.value.val.permitted,
        status: props.value.val.status,
        vehicleInsurance: props.value.val.vehicleInsurance,
        vehicleRC: props.value.val.vehicleRC,
        vehicleType : props.value.val.vehicleType,
        verified    : props.value.val.verified,
        walletBalance : props.value.val.walletBalance
    }

    var handleChange = (event) => {
        var key = event.target.name;
        var value = event.target.value;
        obj[key] = value;
        props.onClick(obj);
    }

    var handleClick = () => {
        // Data.userUpdate(props.value.id).update(props.value).then(()=>{
        //     setCount(count + 1);
        // })
      
        console.log(props.value.val);
    }

    var changeCount = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <Verify value={props.value.val} onChange={handleChange} onClick={handleClick} count={count} changeCount={changeCount} />
        </div>
    )
}