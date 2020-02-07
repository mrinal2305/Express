import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import auth from "./auth";
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        paddingLeft: '100px'
    },
    bar: {
        backgroundColor: '#b62500  ',
        height: '100%'
    },
    anchorLeft: {
        color: 'white',
        fontSize: '22px'
    },
    anchorRight: {
        color: 'white',
        fontSize: '22px',
        paddingRight: '28px'
    },
    button: {
        color: 'white',
        fontSize: '21px',
        paddingTop: '9px'
    },
    icon : {
        marginRight : '6px'
    }
}));

export function TitleBar(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.bar}>
                <Toolbar>
                    <HomeIcon className={classes.icon} />
                    <Link to='/home' class={classes.anchorLeft}>Home</Link>
                        <Typography variant="h3" className={classes.title}>
                        Admin Panel Express
          </Typography>
                    <PersonIcon className={classes.icon} />
                    <Link to='/home/user' class={classes.anchorRight}>User</Link>
                    <DriveEtaIcon className={classes.icon} />
                    <Link to='/home/driver' class={classes.anchorRight}>Driver</Link>
                    <ExitToAppIcon />
                    <Button href="#text-buttons" color="primary" className={classes.button}
                        onClick={() => {
                            auth.logout();
                        }} >
                        LogOut
</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
