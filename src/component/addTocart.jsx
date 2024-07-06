import React from 'react';
import AuthContext from "../context/AuthContext";
import { useContext, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
const AddToCartButton = ({ itemId, quantity = 1 }) => {
  const { authTokens } = useContext(AuthContext);
  const [alert, setAlert] = useState("")
  const [showAlert, setShowAlert] = useState(false)
  const [alertSeverity, setAlertSeverity] = useState("")
  const [loader, setLoader] = useState("")

  const [disablebutton, setdisablebutton] = useState(false)

  
  const addToCart = async () => {
    setdisablebutton(true)
    setLoader(true)
    try {
      const response = await fetch('https://bdmos.onrender.com/api/cart/add/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authTokens.access}`
        },
        body: JSON.stringify({ item: itemId, quantity: quantity })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error adding item to cart:', errorData);
        const errorMessage = errorData.error
        setShowAlert(true)
        setAlert('There is an error processing your data')
        setAlertSeverity("error")
        console.log(errorMessage)
        return;
      }
      if(response.ok){
        setdisablebutton(false)
        const data = await response.json();
        console.log('Item added to cart:', data.message);
        setLoader(false)
        setShowAlert(true)
        setAlert("Item added to cart Successfully")
        console.log('sucess')
        setAlertSeverity("success")
      }
  

    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  }

  return (
    <div>
      <div className="alert-container">
        <div className="alert-position">
          {showAlert && (
            <Alert
              severity={alertSeverity}
              onClose={() => setShowAlert(false)}
            >
              {alert}
            </Alert>
          )}
        </div>
      </div>
      <button disabled={disablebutton} className="school-store-cart-btn me-3 mb-3" onClick={addToCart}>
      {loader ? <CircularProgress color="inherit"/> : "ADD TO CART"}
      </button>

      <button className="school-store-buy-btn">BUY NOW</button>
    </div>
  );
};

export default AddToCartButton;
