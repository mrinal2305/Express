import './verifyForm.css';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React from 'react';

function Message(props) {
    if (props.count > 0) {

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

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
    button: {
        backgroundColor: '#f03a26',
        marginBottom: '2em',
        marginTop: '1em'
    },
    h1: {
        color: 'black'
    },
    
}));


export function Verify(props) {
    const classes = useStyles();
    var goto = () => {
        window.open('https://firebasestorage.googleapis.com/v0/b/express-b0920.appspot.com/o/empty.jpg?alt=media&token=fbec18e4-fc60-4fc3-8d96-b8691fa8a367', '_blank');
    }

    return (
        <div>
            <div className="Image">
                <div className='row'>
                    <div className='col'>
                        <CardActionArea>
                            <img src="https://firebasestorage.googleapis.com/v0/b/express-b0920.appspot.com/o/empty.jpg?alt=media&token=fbec18e4-fc60-4fc3-8d96-b8691fa8a367" alt='' />
                        </CardActionArea>
                    </div>
                    <div className='col'>
                        <CardActionArea>
                            <img src="https://firebasestorage.googleapis.com/v0/b/express-b0920.appspot.com/o/empty.jpg?alt=media&token=fbec18e4-fc60-4fc3-8d96-b8691fa8a367" alt='' />
                        </CardActionArea>
                    </div>
                    <div className='col'>
                        <CardActionArea>
                            <img src="https://firebasestorage.googleapis.com/v0/b/express-b0920.appspot.com/o/empty.jpg?alt=media&token=fbec18e4-fc60-4fc3-8d96-b8691fa8a367" alt='' />
                        </CardActionArea>                    
                        </div>
                    <div className='col'>
                        <CardActionArea>
                            <img src="https://firebasestorage.googleapis.com/v0/b/express-b0920.appspot.com/o/empty.jpg?alt=media&token=fbec18e4-fc60-4fc3-8d96-b8691fa8a367" alt='' />
                        </CardActionArea>
                    </div>
                    <div className='col'>
                        <CardActionArea>
                            <img src="https://firebasestorage.googleapis.com/v0/b/express-b0920.appspot.com/o/empty.jpg?alt=media&token=fbec18e4-fc60-4fc3-8d96-b8691fa8a367" alt='' />
                        </CardActionArea>
                    </div>
                </div>
            </div>

            <div>
                <div className='row'>
                    <div className='col-2'>
                        <div className="profileImage">
                            <div className='row' >
                                <div className='col'>
                                    <CardActionArea>
                                        <img onClick={goto} src="https://firebasestorage.googleapis.com/v0/b/express-b0920.appspot.com/o/empty.jpg?alt=media&token=fbec18e4-fc60-4fc3-8d96-b8691fa8a367" alt='' />
                                    </CardActionArea>
                                </div>
                            </div>
                            Profile Photo
                        </div>
                    </div>
                    <div className='col-10'>
                        <div className="detail">
                            <h1 className={classes.h1}>Driver Detail</h1>
                            <div className='row'>
                                <div className='col-4'>
                                    <TextField
                                        id="outlined-helperText"
                                        name="name"
                                        value={props.value.name}
                                        onChange={props.onChange}
                                        helperText="Name"
                                        variant="outlined"
                                    />
                                </div>
                                <div className='col-4'>
                                    <TextField
                                        id="outlined-helperText"
                                        value={props.value.active}
                                        name="active"
                                        onChange={props.onChange}
                                        helperText="Active"
                                        variant="outlined"
                                    />
                                </div>
                                <div className='col-4'>
                                    <TextField
                                        id="outlined-helperText"
                                        value={props.value.cancellations}
                                        name="cancellations"
                                        onChange={props.onChange}
                                        helperText="Cancellations"
                                        variant="outlined"
                                    />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-4'>
                                    <TextField
                                        id="outlined-helperText"
                                        value={props.value.dateJoined}
                                        name="dateJoined"
                                        onChange={props.onChange}
                                        helperText="Date Joined"
                                        variant="outlined"
                                    />
                                </div>
                                <div className='col-4'>
                                    <TextField
                                        id="outlined-helperText"
                                        value={props.value.deleteAllowed}
                                        name="deleteAllowed"
                                        onChange={props.onChange}
                                        helperText="Delete Allowed"
                                        variant="outlined"
                                    />
                                </div>
                                <div className='col-4'>
                                    <TextField
                                        id="outlined-helperText"
                                        value={props.value.driverAadharBack}
                                        name="driverAadharBack"
                                        onChange={props.onChange}
                                        helperText="Driver Adhar Card Back"
                                        variant="outlined"
                                    />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-4'>
                                    <TextField
                                        id="outlined-helperText"
                                        value={props.value.driverAadharFront}
                                        name="driverAadharFront"
                                        onChange={props.onChange}
                                        helperText="Driver Adhar Card Front"
                                        variant="outlined"
                                    />
                                </div>
                                <div className='col-4'>
                                    <TextField
                                        id="outlined-helperText"
                                        value={props.value.drivingLicense}
                                        name="drivingLicense"
                                        onChange={props.onChange}
                                        helperText="Driving License"
                                        variant="outlined"
                                    />
                                </div>
                                <div className='col-4'>
                                    <TextField
                                        id="outlined-helperText"
                                        value={props.value.email}
                                        name="email"
                                        onChange={props.onChange}
                                        helperText="Email"
                                        variant="outlined"
                                    />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-4'>
                                    <TextField
                                        id="outlined-helperText"
                                        value={props.value.status}
                                        name="status"
                                        onChange={props.onChange}
                                        helperText="Status"
                                        variant="outlined"
                                    />
                                </div>
                                <div className='col-4'>
                                    <TextField
                                        id="outlined-helperText"
                                        value={props.value.id}
                                        name="id"
                                        onChange={props.onChange}
                                        helperText="ID"
                                        variant="outlined"
                                    />
                                </div>
                                <div className='col-4'>
                                    <TextField
                                        id="outlined-helperText"
                                        value={props.value.lastTripTime}
                                        name="lastTripTime"
                                        onChange={props.onChange}
                                        helperText="Last Trip Time"
                                        variant="outlined"
                                    />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-4'>
                                    <TextField
                                        id="outlined-helperText"
                                        value={props.value.numberOfRides}
                                        name="numberOfRides"
                                        onChange={props.onChange}
                                        helperText="No of Rides"
                                        variant="outlined"
                                    />
                                </div>
                                <div className='col-4'>
                                    <TextField
                                        id="outlined-helperText"
                                        value={props.value.ownerAadharBack}
                                        name="ownerAadharBack"
                                        onChange={props.onChange}
                                        helperText="Owner Adhar Card Back"
                                        variant="outlined"
                                    />
                                </div>
                                <div className='col-4'>
                                    <TextField
                                        id="outlined-helperText"
                                        value={props.value.ownerAadharFront}
                                        name="ownerAadharFront"
                                        onChange={props.onChange}
                                        helperText="Owner Adhar Card Front"
                                        variant="outlined"
                                    />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-4'>
                                    <TextField
                                        id="outlined-helperText"
                                        value={props.value.permitted}
                                        name="permitted"
                                        onChange={props.onChange}
                                        helperText="Permitted"
                                        variant="outlined"
                                    />
                                </div>
                                <div className='col-4'>
                                    <TextField
                                        id="outlined-helperText"
                                        value={props.value.phone}
                                        name="phone"
                                        onChange={props.onChange}
                                        helperText="Phone"
                                        variant="outlined"
                                    />
                                </div>
                                <div className='col-4'>
                                    <TextField
                                        id="outlined-helperText"
                                        value={props.value.vehicleRC}
                                        name="vehicleRC"
                                        onChange={props.onChange}
                                        helperText="Vechile RC"
                                        variant="outlined"
                                    />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-4'>
                                    <TextField
                                        id="outlined-helperText"
                                        value={props.value.vehicleType}
                                        name="vehicleType"
                                        onChange={props.onChange}
                                        helperText="Vechile Type"
                                        variant="outlined"
                                    />
                                </div>
                                <div className='col-4'>
                                    <TextField
                                        id="outlined-helperText"
                                        value={props.value.vehicleInsurance}
                                        name="vehicleInsurance"
                                        onChange={props.onChange}
                                        helperText="Vechile Insurance"
                                        variant="outlined"
                                    />
                                </div>
                                <div className='col-4'>
                                    <TextField
                                        id="outlined-helperText"
                                        value={props.value.verified}
                                        name="verified"
                                        onChange={props.onChange}
                                        helperText="Verified"
                                        variant="outlined"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className='col'>
                                    <TextField
                                        id="outlined-helperText"
                                        value={props.value.walletBalance}
                                        name="walletBalance"
                                        onChange={props.onChange}
                                        helperText="Wallet Balance"
                                        variant="outlined"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className='col'>
                                    <Button variant="contained" color="primary"  onClick={props.onClick} className={classes.button}>
                                        Submit
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <input type="text" name="name" value={props.value.name} onChange={props.onChange} />
            <input type="text" name="phone" value={props.value.phone} onChange={props.onChange} />
            <button onClick={props.onClick}>Submit</button>
            <Message count={props.count} onChange={props.changeCount}/> */}
        </div>
    )
}