import React from 'react';
import { useState } from 'react';
import Data from './dbDriver';
import './index.css';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    button : {
        backgroundColor : '#f03a26',
        '&:hover' :{
            color : 'white'
        }
    }
}));

function Message(props) {
    if (props.value > 0) {
        setTimeout(() => { props.onChange() }, 2000)

        return (
            <div>
                <h3><div class="alert alert-success" role="alert">
                    Success
</div></h3>
            </div>
        )

    }
    else {
        return (
            <div></div>
        )
    }
}

function Check(props) {
    if (props.value === 3) {
        return (
            <div>
                <div class="alert alert-danger" role="alert">
                    Wallet Balance must be less than 2000
</div>
            </div>
        )
    }
    else {
        return (<div></div>)
    }
}

function Buton(props) {
    if (props.age === 3) {
        return (
            <div>
                <Button variant="contained" disabled onClick={props.onClick} color="primary" href="#contained-buttons" className={props.classes.button}>
                    Submit
      </Button>
            </div>
            // <button disabled onClick={props.onClick}>Submit</button>
        )
    }
    else {
        return (
            <div>
                <Button variant="contained" onClick={props.onClick} color="primary" href="#contained-buttons" className={props.classes.button}>
                    Submit
  </Button>
            </div>
            // <button onClick={props.onClick}>Submit</button>
        )
    }
}

export function RechargeForm(props) {
    const classes = useStyles();
    var [count, setCount] = useState(0);
    var [age, setAge] = useState(0);

    var obj = {
        name: props.value.name,
        phone: props.value.phone,
        walletBalance: props.value.walletBalance,
        vehicleType: props.value.vehicleType,
        id: props.value.id
    }

    var handleChange = (event) => {
        var key = event.target.name;
        var value = event.target.value;
        if (value < 2000) setAge(0)
        else setAge(3)
        obj[key] = value;
        props.onChange(obj);
    }

    var handleClick = () => {
        if (age === 0) {
            Data.userUpdate(props.value.id).update(props.value)
                .then(() => {
                    setCount(count + 1);
                });
        }
    }

    var changeCount = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <div className="container recharge">
                <h3><b>Name :</b>{props.value.name}</h3>
                <h3><b>Phone :</b>{props.value.phone}</h3>
                <h3><b>vehicleType :</b>{props.value.vehicleType}</h3>
                <div className="row">
                    <div className="col"><h3><b>Amount</b></h3></div>
                    <div className="col">
       
                        <OutlinedInput
                            name="walletBalance" value={props.value.walletBalance} onChange={handleChange} placeholder="Wallet Balance"
                            id="outlined-adornment-amount"
                            startAdornment={<InputAdornment position="start">
                            </InputAdornment>}
                            labelWidth={60}
                        />
                    </div>
                </div>
                <Check value={age} />
                <Buton age={age} onClick={handleClick} classes={classes} />
                <Message value={count} onChange={changeCount} />
            </div>
        </div>
    )
}