import { Link } from "react-router-dom";
import { DashFrame } from "../../component/dashFrame";
import "../../css/dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

export const CartPage = () => {
  const { authTokens } = useContext(AuthContext);
  const [cart, setCart] = useState([]);
  const [cartData, setCartData] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("");
  const [alert, setAlert] = useState("");

  const fetchCart = async () => {
    try {
      const response = await fetch('https://bdmos.onrender.com/api/cart/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authTokens.access}`
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error fetching cart:', errorData);
        return;
      }

      const data = await response.json();
      setCartData(data);
      setCart(data.items || []);
    } catch (error) {
      console.error('Error fetching cart:', error);
      setCart([]);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const updateCartLoadingState = (itemId, loadingType, isLoading) => {
    const updatedCart = cart.map(item => {
      if (item.item === itemId) {
        return { ...item, [loadingType]: isLoading };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const addToCart = async (itemId, quantity = 1) => {
    updateCartLoadingState(itemId, 'incrementLoading', true);
    try {
      const response = await fetch('https://bdmos.onrender.com/api/cart/add/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authTokens.access}`
        },
        body: JSON.stringify({ item: itemId, quantity })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error adding item to cart:', errorData);
        setShowAlert(true);
        setAlert('There is an error processing your data');
        setAlertSeverity("error");
      } else {
        const data = await response.json();
        setShowAlert(true);
        setAlert("Item has been updated Successfully");
        setAlertSeverity("success");
        fetchCart(); // Fetch updated cart after adding item
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
    } finally {
      updateCartLoadingState(itemId, 'incrementLoading', false);
    }
  };

  const reduceCart = async (itemId, quantity = 1) => {
    updateCartLoadingState(itemId, 'decrementLoading', true);
    try {
      const response = await fetch('https://bdmos.onrender.com/api/cart/reduce/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authTokens.access}`
        },
        body: JSON.stringify({ item: itemId, quantity })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error reducing item in cart:', errorData);
        setShowAlert(true);
        setAlert('There is an error processing your data');
        setAlertSeverity("error");
      } else {
        const data = await response.json();
        setShowAlert(true);
        setAlert("Item has been updated Successfully");
        setAlertSeverity("success");
        fetchCart(); // Fetch updated cart after reducing item
      }
    } catch (error) {
      console.error('Error reducing item in cart:', error);
    } finally {
      updateCartLoadingState(itemId, 'decrementLoading', false);
    }
  };

  const deleteCart = async (itemId) => {
    updateCartLoadingState(itemId, 'deleteLoading', true);
    try {
      const response = await fetch('https://bdmos.onrender.com/api/cart/remove/', {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authTokens.access}`
        },
        body: JSON.stringify({ item: itemId })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error removing item from cart:', errorData);
        setShowAlert(true);
        setAlert('There is an error processing your data');
        setAlertSeverity("error");
      } else {
        const data = await response.json();
        setShowAlert(true);
        setAlert("Item removed from cart Successfully");
        setAlertSeverity("success");
        fetchCart(); // Fetch updated cart after deleting item
      }
    } catch (error) {
      console.error('Error removing item from cart:', error);
    } finally {
      updateCartLoadingState(itemId, 'deleteLoading', false);
    }
  };

  return (
    <div>
      <div className="position-sticky">
        <DashFrame />
      </div>

      <div className="main-content">
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
        <section className="container-lg">
          <div className="row my-3 pb-4">
            <div className="col-md-8 col-sm-6 col-6">
              <h2>Shopping Cart</h2>
            </div>
            <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
              <Link to="/schoolStore" className="light-navyblue-background p-3 border-radius">
                <FontAwesomeIcon icon={faUser} className="px-2" /> Back
              </Link>
            </div>
          </div>
        </section>

        <section className="container-lg">
          <div className="cart-page-container scroll-bar-y">
            <div className="row">
              <div className="xxl-12">
                <div className="row ms-1 mt-3">
                  <div className="col-md-8">
                    {cart.map((item) => (
                      <div className="row mb-4" key={item.id}>
                        <div className="col-5 col-sm-2">
                          <img src={item.item_data.image} alt="" width="100%" />
                        </div>
                        <div className="col-7">
                          <h5>{item.item_data.title}</h5>

                          <p>Price: ₦ {item.item_data.price}</p>
                          <p>Quantity: {item.quantity}</p>
                          <div className="d-block d-sm-none">
                            <p>Total: ₦ {item.item_data.price * item.quantity}</p>
                          </div>
                          <div className="d-flex my-2">
                            <FontAwesomeIcon className="gold-text" icon={faStar} />
                            <FontAwesomeIcon className="gold-text" icon={faStar} />
                            <FontAwesomeIcon className="gold-text" icon={faStar} />
                            <FontAwesomeIcon className="gold-text" icon={faStar} />
                            <FontAwesomeIcon className="gold-text" icon={faStar} />
                          </div>
                          <div className="d-sm-flex">
                            <div className="mt-2 me-4 mb-2">
                              <button disabled={item.decrementLoading} className="cart-btn-increase" onClick={() => reduceCart(item.item)}>
                                {item.decrementLoading ? <CircularProgress size="20px" color="inherit" /> : "-"}
                              </button>
                              <input className="cart-btn-input" type="number" value={item.quantity} readOnly />
                              <button disabled={item.incrementLoading} className="cart-btn-increase me-3 " onClick={() => addToCart(item.item)}>
                                {item.incrementLoading ? <CircularProgress size="20px" color="inherit" /> : "+"}
                              </button>
                              <button disabled={item.deleteLoading} className="cart-remove-btn mt-2" onClick={() => deleteCart(item.item)}>
                                {item.deleteLoading ? <CircularProgress size="20px" color="inherit" /> : "Remove"}
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-3 d-none d-sm-block">
                          <h4>₦ {item.item_data.price * item.quantity}</h4>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="col-md-4">
                    <p className="light-text">Total:</p>
                    <h3>₦ {cartData?.total_price}</h3>
                    <div className="me-5 pe-3 mb-5">
                      <button className="cart-btn-checkout">Checkout</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
