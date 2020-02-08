import './userUI.css';
import 'bootstrap/dist/css/bootstrap.css';

import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';

function Spin(props) {
    if (props.value) {
        return (
            <div>
                <CircularProgress />
            </div>
        )
    }
    else return (
        <div>

        </div>
    )
}

function ImgProfile(props) {
    if (props.value) {
        return (
            <div>
                <img src={props.value} alt="Empty Image  "></img>
                <CardContent>
                    Profile Photo
            </CardContent>
            </div>

        )
    }
    else {
        return (
            <div>
                <img src="https://firebasestorage.googleapis.com/v0/b/express-b0920.appspot.com/o/empty.jpg?alt=media&token=fbec18e4-fc60-4fc3-8d96-b8691fa8a367" alt="Empty Image  "></img>
                <CardContent>
                    No Profile Photo
            </CardContent>
            </div>
        )
    }
}

function ImgShop(props) {
    if (props.value) {
        return (
            <div>
                <img src={props.value} alt="Empty Image  "></img>
                <CardContent>
                    No Shop Photo
            </CardContent>
            </div>
        )
    }
    else {
        return (
            <div>
                <img src="https://firebasestorage.googleapis.com/v0/b/express-b0920.appspot.com/o/empty.jpg?alt=media&token=fbec18e4-fc60-4fc3-8d96-b8691fa8a367" alt="Empty Image  "></img>
                <CardContent>
                    No Shop Photo
            </CardContent>
            </div>
        )
    }
}

function Permitted(props){
    if(props.value){
        return(
            <div>
                 <p><b>Permitted   :</b>true</p>
            </div>
        )
    }
    else{
        return(
            <p><b>Permitted   :</b>false</p>
        )
    }
}

function ShopKeeper(props){
    if(props.value){
        return(
            <div>
                <p><b>ShopKeeper   :</b>true</p>
            </div>
        )
    }
    else{
        return(
            <p><b>ShopKeeper   :</b>false</p>
            )
    }
}

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
            width: 200,
        },
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
    button: {
        backgroundColor: '#f05a26',
        marginLeft: '9px'
    },
    text: {
        backgroundColor: 'white'
    }
}));

export function Search(props) {
    const classes = useStyles();
    return (
        <div>
            <div className="container">
                <div className="row search">
                    <div className="col"></div>
                    <div className="col">
                        <TextField id="outlined-basic" className={classes.text} label="Phone No" variant="outlined" onChange={props.onChange} value={props.value.val} />
                        <Button variant="contained" color="primary" onClick={props.onClick} className={classes.button}>
                            Submit
                </Button>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
            <Spin value={props.value.spinner} className={classes.spin} />
            <div className="info container">
                <div className="row">
                    <div className='col-2'></div>
                    <div className='col-4 div'>  <ImgProfile value={props.value.profilePhoto} /></div>
                    <div className='col-4 div'>  <ImgShop value={props.value.shopPhoto} /></div>
                    <div className='col-2'></div>
                </div>
            </div>

            <div className='detail container'>
                <div className='row'>
                   
                    <div className='col text'>
                        <p><b>Name          :</b>{props.user.name}</p>
                        <p><b>Phone         :</b>{props.user.phone}</p>
                        <p><b>Email         :</b>{props.user.email}</p>
                        <p><b>Cancellations :</b>{props.user.cancellations}</p>
                        <p><b>Last Trip     :</b>{props.user.lastTrip}</p>
                        <Permitted value={props.user.permitted} />
                        <p><b>ShopAdress    : </b>{props.user.shopAddress}</p>
                        <ShopKeeper value={props.user.shopkeeper} />
                    </div>
                  
                </div>
            </div>
        </div>
    )
}