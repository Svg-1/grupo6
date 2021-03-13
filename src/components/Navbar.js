import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from "../assets/logo6.jpg";
import { ShoppingCart } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import {useStateValue} from "../StateProvider";
import { auth } from '../firebase';
import { actionTypes } from '../reducer';
import {useHistory} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: "7rem",
    },
    appBar: {
      backgroundColor: "pink",
      boxShadow: "none",
    },
    grow: {
      flexGrow: 1,
    },
    button: {
      marginLeft: theme.spacing(2),
    },
    image: {
      marginRight: "10px",
      height: "4rem",
    },
  }));

//revisaar export default Navbar
const Navbar=() =>{
  const classes = useStyles();
  const [{basket, user}, dispatch] = useStateValue();
  const history = useHistory();

  const handleAuth = ()=> {
    if (user){
      auth.signOut();
      dispatch({
        type: actionTypes.EMPTY_BASKET,
        basket: [],
      });
      history.push("/")
    }
  }

  

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Link to="/"> 
          <IconButton> 
            <img src={logo} className={classes.image}
            alt="Commerce.js"
            height='25px'
             /> 
          </IconButton>
          </Link>          

          <div className={classes.button}>          
              <Button variant="outlined">                               
              <strong> Home </strong>
              </Button>    
          </div>

          <div className={classes.button}>
              <Button variant="outlined">                               
              <strong> Damas </strong>
              </Button>          
          </div>

          <div className={classes.button}>
              <Button variant="outlined">                               
              <strong> Varones </strong>
              </Button>          
          </div>

          <div className={classes.button}>
              <Button variant="outlined">                               
              <strong> Niños </strong>
              </Button>          
          </div>

          <div className={classes.button}>
              <Button variant="outlined">                               
              <strong> Accesorios </strong>
              </Button>          
          </div>

          <div className={classes.button}>
              <Button variant="outlined" >                               
              <strong> Calzado </strong>
              </Button>          
          </div>

          <div className={classes.grow} /> {/*que toda la parte del medio separe contenido de los extremos*/}

          <Typography variant="h6" color="textPrimary" component="p" >
            Bienvenidos {user? user.email: "Guest"}
          </Typography>

          <div className={classes.button}>
          <Link to="/Signin">
            <Button variant="outlined" onClick={handleAuth}>                               
              <strong> {user? "Sign Out" : "Sign In"}  </strong>
            </Button>      
          </Link>
         
          <Link to="checkout-page">
              <IconButton aria-label="show cart items" color="inherit">
                  <Badge badgeContent={basket?.length} color="secondary">
              <ShoppingCart fontSize="large" color="primary" />
              </Badge>
              </IconButton>
              </Link>

          </div>
        </Toolbar>

      </AppBar>
    </div>
  );
}

export default Navbar;