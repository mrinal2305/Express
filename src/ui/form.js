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
                        name="hasPicture"
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
}));

export function FormUI(props) {

    const classes = useStyles();
    return (
        <div>
            <div className='form container'>
                <Toggle value={props.value.hasPicture} found={props.value.found} onChange={props.onChange} />
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

                    </div>
                </div>

                <div className='row'>
                    <div className='col-6 text'>
                        Permitted
                    </div>
                    <div className='col-6'>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-6 text'>
                        Shop Keeper
                    </div>
                    <div className='col-6'>
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
                <Button variant="contained" color="primary" href="#contained-buttons" onClick={props.onClick}>
                    Submit
                </Button>
            </div>
        </div>
    )
}