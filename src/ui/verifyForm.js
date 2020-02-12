import './verifyForm.css';

import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import React from 'react';

// Update And Show Message
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: false,
            spinner: false,
        }
    }

    componentDidMount() {
        this.setState({
            spinner: true
        });

        setTimeout(() => {
            // solve 1
            this.setState({
                value: this.props.value,
                spinner: false
            })
        }, 7000)
    }

    handleChange = (event) => {
        this.setState({
            value: !this.state.value
        })
        this.props.onChange(event);
    }

    render() {
        if (this.state.spinner) {
            return (
                <div>
                    <CircularProgress />
                </div>
            )
        }
        else {
            return (
                <div>
                    <Switch
                        checked={this.state.value}
                        name={this.props.name}
                        onChange={this.handleChange}
                        value={!this.state.value}
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                </div>
            )
        }
    }
}

function Message(props) {
    if (props.count > 0) {

        setTimeout(() => { props.onChange() }, 2000)

        return (
            <div>
                <div class="alert alert-success" role="alert">
                    Success !
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


function ProfilePhoto(props) {
    if (props.url !== '') {

        return (
            <div>
                <CardActionArea>
                    <img onClick={e => props.goto(props.url)} src={props.url} alt='' />
                </CardActionArea>
            </div>
        )
    }
    else {
        return (
            <div>
                <CardActionArea>
                    <img onClick={e => { props.goto('https://firebasestorage.googleapis.com/v0/b/express-b0920.appspot.com/o/empty.jpg?alt=media&token=fbec18e4-fc60-4fc3-8d96-b8691fa8a367') }} src="https://firebasestorage.googleapis.com/v0/b/express-b0920.appspot.com/o/empty.jpg?alt=media&token=fbec18e4-fc60-4fc3-8d96-b8691fa8a367" alt='' />
                </CardActionArea>
            </div>
        )
    }

}

function DocumentPhoto(props) {
    if (props.url !== '') {
        return (
            <div>
                <CardActionArea>
                    <img src={props.url} onClick={e => props.goto(props.url)} />
                </CardActionArea>
            </div>
        )
    }
    else {
        return (
            <div>
                <CardActionArea>
                    <img onClick={e => { props.goto('https://firebasestorage.googleapis.com/v0/b/express-b0920.appspot.com/o/empty.jpg?alt=media&token=fbec18e4-fc60-4fc3-8d96-b8691fa8a367') }} src="https://firebasestorage.googleapis.com/v0/b/express-b0920.appspot.com/o/empty.jpg?alt=media&token=fbec18e4-fc60-4fc3-8d96-b8691fa8a367" alt='' />
                </CardActionArea>
            </div>
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
    var goto = (url) => {
        window.open(url, '_blank');
    }

    return (
        <div>
            {/* hello
            <Toggle value={props.value.active} onChange={props.onChange} name="active" /> Great Toggle logic */}
            <div className="Image">
                <div className='row'>
                    <div className='col'>
                        <DocumentPhoto goto={goto} url={props.val.driverAadharBack} />
                        <CardContent>Driver Aadhar Card Back</CardContent>
                    </div>
                    <div className='col'>
                        <DocumentPhoto goto={goto} url={props.val.driverAadharFront} />
                        <CardContent>Driver Aadhar Card Front</CardContent>
                    </div>
                    <div className='col'>
                        <DocumentPhoto goto={goto} url={props.val.ownerAadharBack} />
                        <CardContent>Owner Aadhar Card Back</CardContent>
                    </div>
                    <div className='col'>
                        <DocumentPhoto goto={goto} url={props.val.ownerAadharFront} />
                        <CardContent>Owner Aadhar Card Front</CardContent>
                    </div>
                    <div className='col'>
                        <DocumentPhoto goto={goto} url={props.val.insurance} />
                        <CardContent>Vechile Insurance First Page</CardContent>
                    </div>
                </div>
            </div>

            <div>
                <div className='row'>
                    <div className='col-2'>
                        <div className="profileImage">
                            <div className='row' >
                                <div className='col'>
                                    <ProfilePhoto goto={goto} url={props.val.profilePhoto} />
                                </div>
                            </div>
                            <CardContent>ProfilePhoto</CardContent>
                        </div>
                    </div>
                    <div className='col-10'>
                        <div className="detail">

                            <h1 className={classes.h1}>Driver Detail</h1>
                            <Message count={props.count} onChange={props.changeCount} />
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
                                    <div className='col'>Active</div>
                                    <div className='col'>
                                        <Toggle value={props.value.active} onChange={props.onChange} name="active" />
                                    </div>
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
                                    <div className='col'>Delete Allowed</div>
                                    <div className='col'>
                                        <Toggle value={props.value.deleteAllowed} onChange={props.onChange} name="deleteAllowed" />
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className='col'>Driver Aadhar Back</div>
                                    <div className='col'>
                                        <Toggle value={props.value.driverAadharBack} onChange={props.onChange} name="driverAadharBack" />
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-4'>
                                    <div className='col'>Driver Aadhar Front</div>
                                    <div className='col'>
                                        <Toggle value={props.value.driverAadharFront} onChange={props.onChange} name="driverAadharFront" />
                                    </div>
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
                                    <div className='col'>Owner Aadhar Back</div>
                                    <div className='col'>
                                        <Toggle value={props.value.ownerAadharBack} onChange={props.onChange} name="ownerAadharBack" />
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className='col'>Owner Aadhar Front</div>
                                    <div className='col'>
                                        <Toggle value={props.value.ownerAadharFront} onChange={props.onChange} name="ownerAadharFront" />
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-4'>
                                    <div className='col'>Permitted</div>
                                    <div className='col'>
                                        <Toggle value={props.value.permitted} onChange={props.onChange} name="permitted" />
                                    </div>
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
                                    <div className='col'>Vehicle Insurance</div>
                                    <div className='col'>
                                        <Toggle value={props.value.vehicleInsurance} onChange={props.onChange} name="vehicleInsurance" />
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className='col'>Verified</div>
                                    <div className='col'>
                                        <Toggle value={props.value.verified} onChange={props.onChange} name="verified" />
                                    </div>
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
                                    <Button variant="contained" color="primary" onClick={props.onClick} className={classes.button}>
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
            <button onClick={props.onClick}>Submit</button>*/}

        </div>
    )
}