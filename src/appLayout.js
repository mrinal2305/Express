import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link } from 'react-router-dom';

import { TitleBar } from './titleBar';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  Link: {
    marginLeft: '20px',
    marginRight: '20px'
  }
});

export const AppLayout = props => {
  const classes = useStyles();
  return (
    <div>
      <TitleBar />

      <div className="container">
        <div className="row box">
          <div className="col">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="User Vector Image"
                  height="140"
                  image="https://firebasestorage.googleapis.com/v0/b/express-b0920.appspot.com/o/12-512.png?alt=media&token=060941b9-97d2-4973-ac53-91a9e28b5a31"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    User
          </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    See and Edit User Information
          </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to={`/home/user`} className={classes.Link}>Go to User</Link>
              </CardActions>
            </Card>
          </div>
          <div className="col">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Driver Vector Image"
                  height="140"
                  image="https://firebasestorage.googleapis.com/v0/b/express-b0920.appspot.com/o/images.jpeg?alt=media&token=5f5c163f-31dc-43c5-9be5-769f121baaec"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Driver
          </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Verify and Recharge Driver Information
          </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to={`/home/driver`} className={classes.Link}>Go to Driver</Link>

              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
