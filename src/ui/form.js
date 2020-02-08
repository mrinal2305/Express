import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import './form.css';

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


const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
    button : {
        backgroundColor : '#f03a26',
        marginBottom    : '2em',
        marginTop       : '1em'
    }
}));

// <Toggle value={props.value.shopkeeper} found={props.value.found} onChange={props.onChange} name="shopkeeper"/> // Great Logic to Toggle

export function FormUI(props) {

    const classes = useStyles();
    return (
        <div>
            <div className='form container'>
                <h1 className="h1">Edit Form</h1>
                <div className='row'>
                    <div className='col-6 text'>
                        Name
                    </div>
                    <div className='col-6'>
                        <TextField id="outlined-basic" label="Name" variant="outlined" onChange={props.onChange} name="name" value={props.value.name} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6 text'>
                        Phone
                    </div>
                    <div className='col-6'>
                        <TextField id="outlined-basic" label="Phone" variant="outlined" onChange={props.onChange} name="phone" value={props.value.phone} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6 text'>
                        Email
                    </div>
                    <div className='col-6'>
                        <TextField id="outlined-basic" label="Email" onChange={props.onChange} name="email" value={props.value.email} variant="outlined" />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6 text'>
                        Cancellations
                    </div>
                    <div className='col-6'>
                        <TextField id="outlined-basic" label="Cancellations" onChange={props.onChange} name="cancellations" value={props.value.cancellations} variant="outlined" />
                    </div>
                </div>

                <div className='row'>
                    <div className='col-6 text'>
                        Has Picture
                    </div>
                    <div className='col-6'>
                        <Toggle value={props.value.hasPicture} found={props.value.found} onChange={props.onChange} name="hasPicture" />
                    </div>
                </div>

                <div className='row'>
                    <div className='col-6 text'>
                        Permitted
                    </div>
                    <div className='col-6'>
                        <Toggle value={props.value.permitted} found={props.value.found} onChange={props.onChange} name="permitted" />
                    </div>
                </div>

                <div className='row'>
                    <div className='col-6 text'>
                        Shop Keeper
                    </div>
                    <div className='col-6'>
                        <Toggle value={props.value.shopkeeper} found={props.value.found} onChange={props.onChange} name="shopkeeper" />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6 text'>
                        ID
                    </div>
                    <div className='col-6'>
                        <TextField id="outlined-basic" label="id" onChange={props.onChange} name="id" value={props.value.id} variant="outlined" />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6 text'>
                        Shop Adress
                    </div>
                    <div className='col-6'>
                        <TextField id="outlined-basic" onChange={props.onChange} name="shopAddress" value={props.value.shopAddress} label="Shop Adress" variant="outlined" />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6 text'>
                        Last Trip
                    </div>
                    <div className='col-6'>
                        <TextField id="outlined-basic" onChange={props.onChange} name="lastTrip" value={props.value.lastTrip} label="Shop Adress" variant="outlined" />
                    </div>
                </div>
                <Button variant="contained" color="primary" href="#contained-buttons" onClick={props.onClick} className={classes.button}> 
                    Submit
                </Button>
            </div>
        </div>
    )
}