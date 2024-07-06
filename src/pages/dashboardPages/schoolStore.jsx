import { Link } from "react-router-dom";
import { DashFrame } from "../../component/dashFrame";
import "../../css/dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import pic from '../../img/pexels-andrea-piacquadio-762041 (2).jpg';
import { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import CircularProgress from '@mui/material/CircularProgress';
import { Alert } from "@mui/material";

export const SchoolStore = () => {
  const { authTokens } = useContext(AuthContext);
  const [itemAmount, setItemAmount] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemDatas, setItemDatas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedItemID, setSelectedItemID] = useState(null);
  const [alerts, setAlerts] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("");
  const [disableButtons, setDisableButtons] = useState({});
  const [loaders, setLoaders] = useState({});

  const getAllItem = async () => {
    let response = await fetch("https://bdmos.onrender.com/api/items/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authTokens.access}`
      },
    });

    const data = await response.json();

    if (response.ok) {
      const sortedData = data.sort((a, b) => b.id - a.id);
      setItemDatas(sortedData);
    } else {
      console.error("Failed to fetch items", response.statusText);
    }
  };

  const filterSchoolItems = async () => {
    let url;
    if (itemAmount.length !== 0) {
      url = `https://bdmos.onrender.com/api/items/?search=${itemAmount}`;
    } else if (itemName.length !== 0) {
      url = `https://bdmos.onrender.com/api/items/?search=${itemName}`;
    } else {
      getAllItem();
      return;
    }

    let response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authTokens.access}`
      }
    });

    const data = await response.json();

    if (response.ok) {
      setItemDatas(data);
    } else {
      console.error("Failed to fetch items");
    }
  };

  useEffect(() => {
    if (!itemAmount && !itemName) {
      getAllItem();
    } else if (itemAmount) {
      filterSchoolItems();
    } else if (itemName) {
      filterSchoolItems();
    } else {
      getAllItem();
    }
  }, [itemDatas]);

  const addToCart = async (itemId, quantity = 1) => {
    setDisableButtons((prev) => ({ ...prev, [itemId]: true }));
    setLoaders((prev) => ({ ...prev, [itemId]: true }));
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
        const errorMessage = errorData.error;
        setShowAlert(true);
        setAlerts('There is an error processing your data');
        setAlertSeverity("error");
        console.log(errorMessage);
        setDisableButtons((prev) => ({ ...prev, [itemId]: false }));
        setLoaders((prev) => ({ ...prev, [itemId]: false }));
        return;
      }

      if (response.ok) {
        const data = await response.json();
        console.log('Item added to cart:', data.message);
        setShowAlert(true);
        setAlerts("Item added to cart Successfully");
        setAlertSeverity("success");
        setDisableButtons((prev) => ({ ...prev, [itemId]: false }));
        setLoaders((prev) => ({ ...prev, [itemId]: false }));
      }

    } catch (error) {
      console.error('Error adding item to cart:', error);
      setDisableButtons((prev) => ({ ...prev, [itemId]: false }));
      setLoaders((prev) => ({ ...prev, [itemId]: false }));
    }
  };

  return (
    <div>
      <div className="position-sticky">
        <DashFrame />
      </div>

      <div className="main-content">
        <section className="container-lg">
          <div className="row my-3 pb-4">
            <div className="col-md-7 col-sm-6 col-6">
              <h5>School Store</h5>
              <p>Purchase School Items Here! </p>
            </div>
            <div className="col-md-5 col-sm-6 col-6 d-flex justify-content-end">
              <Link to="/schoolStore/cartPage" className="light-navyblue-background p-3 border-radius"><FontAwesomeIcon icon={faUser} className="px-2" />View Cart</Link>
            </div>
          </div>
        </section>
        <section className="container-lg">
          <form>
            <div className="row add-student g-3">
              <div className="col-sm-4 mb-4">
                <input type="text" className="p-2 form-dark border-radius view-student-input" placeholder="Search by name..." value={itemName} onChange={(e) => setItemName(e.target.value)} />
              </div>

              <div className="col-sm-4 mb-4">
                <input type="text" className="p-2 form-dark border-radius view-student-input" placeholder="Search by Amount..." value={itemAmount} onChange={(e) => setItemAmount(e.target.value)} />
              </div>
            </div>
          </form>
        </section>

        <div className="container-lg">
          <div className="school-store-container">
            <div className="row mx-3">
              <div className="col-xxl-12">
                <div className="row my-3 g-3">
                  {itemDatas.map((itemData) => (
                    <div className="col-sm-6 col-lg-4" key={itemData.id}>
                      <div className="school-store-box">
                        <div>
                          <img src={itemData.image} alt="" width="100%" height='250px' />
                        </div>

                        <div className="mt-3 p-2">
                          <div className="d-flex my-2">
                            <FontAwesomeIcon className="gold-text" icon={faStar} />
                            <FontAwesomeIcon className="gold-text" icon={faStar} />
                            <FontAwesomeIcon className="gold-text" icon={faStar} />
                            <FontAwesomeIcon className="gold-text" icon={faStar} />
                            <FontAwesomeIcon className="gold-text" icon={faStar} />
                          </div>
                          <h6>{itemData.title}</h6>

                          <h4> {itemData.price}</h4>

                          <div className="my-4">
                            <div className="alert-container">
                              <div className="alert-position">
                                {showAlert && (
                                  <Alert
                                    severity={alertSeverity}
                                    onClose={() => setShowAlert(false)}
                                  >
                                    {alerts}
                                  </Alert>
                                )}
                              </div>
                            </div>
                            <button
                              disabled={disableButtons[itemData.id] || false}
                              className="school-store-cart-btn me-3 mb-3"
                              onClick={() => addToCart(itemData.id)}
                            >
                              {loaders[itemData.id] ? <CircularProgress color="inherit" /> : "ADD TO CART"}
                            </button>
                            <button className="school-store-buy-btn">BUY NOW</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
