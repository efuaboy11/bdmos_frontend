import { Link } from "react-router-dom"
import { DashFrame } from "../../component/dashFrame"
import "../../css/dashboard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faUser } from "@fortawesome/free-solid-svg-icons"
import pic from '../../img/pexels-andrea-piacquadio-762041 (2).jpg'
import { useState, useEffect, useContext } from "react"
import AuthContext from "../../context/AuthContext"
import CircularProgress from '@mui/material/CircularProgress';
import { Alert } from "@mui/material"

export const SchoolStore = () =>{

  const { authTokens, setDetails } = useContext(AuthContext)

  const [itemAmount, setItemAmount] = useState("")
  const [itemName, setItemName] = useState("")
  const [itemDatas, setItemDatas] = useState([])

  const [showModal, setShowModal] = useState(false)
  const [selectedItemID, setSelectedItemID] = useState(null)

  const [alerts, setAlerts] = useState("")
  const [showAlert, setShowAlert] = useState(false)
  const [alertSeverity, setAlertSeverity] = useState("")
  const [loader, setLoader] = useState(false)
  const [disableButton, setDisableButton] = useState(false)

  const getAllItem = async () => {
    let response = await fetch("https://bdmos.onrender.com/api/items/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authTokens.access}`
      },
    });

    const data = await response.json()

    if (response.ok) {
      const sortedData = data.sort((a, b) => b.id - a.id);
      setItemDatas(sortedData)
    } else {
      console.error("Failed to fetch students", response.statusText)
    }



  
  }

  const filterSchoolItems = async() => {
    let url;
    if (itemAmount.length !== 0) {
      url = `https://bdmos.onrender.com/api/items/?search=${itemAmount}`;
    } else if (itemName.length !== 0) {
      url = `https://bdmos.onrender.com/api/items/?search=${itemName}`;
    } else {
      getAllItem();
      return;
    }

    let response = await fetch(url,{
      method: "GET",
      headers: {
        "Content-Type":"application/json",
        Authorization: `Bearer ${authTokens.access}`
      }
    })

    const data = await response.json()

    if(response.ok){
      setItemDatas(data)
    }else{
      console.error("Failed to fetch students")
    }
  }


  useEffect(() => {
    if(!itemAmount && !itemName){
      getAllItem()
    }else if(itemAmount){
      filterSchoolItems()
    }else if(itemName){
      filterSchoolItems()
    }else{
      getAllItem()
    }

  }, [itemDatas])
  return(
    <div>
      <div  className="position-sticky">
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
							  <Link to="/schoolStore/cartPage" className="light-navyblue-background p-3 border-radius"><FontAwesomeIcon icon={faUser} className="px-2"/>View Cart</Link>
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

                  {itemDatas.map((itemData) =>(
                    <div className="col-sm-6 col-lg-4">
                    <div className="school-store-box">
                      <div>
                        <img src={itemData.image} alt="" width="100%" height='250px'/>
                      </div>

                      <div className="mt-3 p-2">
                        <div className="d-flex my-2">
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                        </div>
                        <h6>{itemData.title}</h6>

                        <h4> {itemData.price}</h4>

                        <div className="my-4">
                          <button className="school-store-cart-btn me-3 mb-3">ADD TO CART</button>
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
  ) 
}