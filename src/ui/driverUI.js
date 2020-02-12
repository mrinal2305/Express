import React from 'react';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import './driverUI.css';

function Spinner(props) {
    if (props.value) {
        return (
            <div>  <CircularProgress /></div>
        )
    }
    else {
        return (
            <div>

            </div>
        )
    }
}

function Goto(props) {
    if (props.found) {
        return (
            <div className="container row">
                <div className='col'>
                    <Button variant="contained" color="primary" href="#contained-buttons" className={props.classes.button}>
                        <Link className={props.classes.link} to={`/home/driver/verify/${props.id}`}>Verify</Link>
                    </Button>

                </div>
                <div className='col'>
                    <Button variant="contained" color="primary" href="#contained-buttons" className={props.classes.button}>
                        <Link className={props.classes.link} to={`/home/driver/recharge/${props.id}`}>Recharge</Link>
                    </Button>
                </div>
            </div>
        )
    }
    else {
        return (
            <div></div>
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
        marginLeft: '9px',
        marginBottom : '1em'
    },
    text: {
        backgroundColor: 'white'
    },
    link : {
        color : 'white',
        '&:hover' : {
            color : 'white'
        }
    }
}));


export function UI(props) {
    const classes = useStyles();

    return (
        <div>
            <div className="container">
                <div className="row search">
                    <div className="col"></div>
                    <div className="col">
                        <TextField id="outlined-basic" name="Search" placeholder="Search" className={classes.text} label="Phone No" variant="outlined" onChange={props.onChange} value={props.value} />
                        <Button variant="contained" color="primary" onClick={props.onClick} className={classes.button}>
                            Submit
                </Button>
                    </div>
                    <div className="col"></div>
                </div>
            </div>

            <Spinner value={props.state.spinner} />

            <div className='container detailDriver '>
             

                    <div className='col textSize'>
                        <p><b>Name          :</b>{props.state.value.name}</p>
                        <p><b>Phone         :</b>{props.state.value.phone}</p>
                        <p><b>Vechile Type  :</b>{props.state.value.vehicleType}</p>
              
                </div>
                
                    <Goto found={props.state.found} id={props.state.value.id} classes={classes}/>
              
            </div>



            {/* <h1>{props.state.spinner}</h1>
            <h1>{props.state.value.name}</h1>
            <Goto found={props.state.found} id={props.state.value.id} /> */}
        </div>
    )
}