import React, {useEffect} from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products"; //revisar este punto.
import CheckoutPage from "./components/CheckoutPage";
//import CheckoutCard from "./components/CheckoutCard";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
import { auth } from "./firebase";
import { actionTypes } from "./reducer";
import {useStateValue} from "./StateProvider";
import Checkout from "./components/CheckoutForm/checkout";



function App() {

  const [{user}, dispatch] = useStateValue();
  useEffect (()=>{
    auth.onAuthStateChanged( (authUser)=>{
      console.log(authUser);
      if (authUser){
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        })
      }
    })
  },[])

  
  return (
    <Router>
  <div className="App">
      <Navbar/>
      <Switch>
      <Route path="/signup">
          <SignUp/>        
      </Route>
      <Route path="/signin">
          <SignIn/>        
      </Route>
      <Route path="/checkout-page">
          <CheckoutPage/>        
      </Route>
      <Route path="/checkout"> {/*este checkout es de plantilla pagar*/}
          <Checkout/>        
      </Route>
      <Route path="/">
      <Products/>      
      </Route> 
      </Switch>      
        </div>
    </Router>
  );
}

export default App;
