import React from 'react'
import './Login.css';
import { loginUrl } from './spotify';
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Link, BrowserRouter as Router, BrowserRouter } from 'react-router-dom';

const ColorButton = withStyles((theme) => ({
    root: {
      color: "#fff",
      backgroundColor: 'rgba(27, 217, 84, 1)',
      borderRadius: '99px',
      fontWeight: '800',
      padding: '20px',
      '&:hover': {
        backgroundColor: "rgba(27, 217, 84, 0.5)",
        textDecoration: "none",
      },
    },
  }))(Button);

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));
  
function Login() {

    const classes = useStyles();

    return (
        <BrowserRouter>
            <div className="login">
                <img 
                  src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
                  alt="Spotify Logo" 
                />
                {/* Spotify Authenticate Btn */}
               <a href={loginUrl}>
                 <ColorButton variant="contained" color={ColorButton.v} className={classes.margin}>
                    LOGIN WITH SPOTIFY
                  </ColorButton>
               </a>
            </div>
        </BrowserRouter>         
    )
}

export default Login
