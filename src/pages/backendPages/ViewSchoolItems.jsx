import { AdminDashFrame } from "../../component/adminDashFRame"
import { Link, useNavigate } from "react-router-dom"
import { faCartShopping, faPenToSquare, faTrashCan, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useEffect, useContext } from "react"
import AuthContext from "../../context/AuthContext"
import CircularProgress from '@mui/material/CircularProgress';
import { Alert } from "@mui/material"
import { LoadingSpiner } from "../../component/spin"

export const ViewStudentItems = () => {

  const { authTokens, setDetails } = useContext(AuthContext)
  const navigate = useNavigate()

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

  const showDeleteModal = (id) => {
    setSelectedItemID(id)
    setShowModal(true)
  }

  const hideDeleteModal = () => {
    setShowModal(false)
    setSelectedItemID(null)
  }

  const handleEdit = (id) => {
    editPage(id)
  }

  const deleteItem = async () => {
    setDisableButton(true)
    setLoader(true)

    let response = await fetch(`https://bdmos.onrender.com/api/items/${selectedItemID}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authTokens.access}`
      }
    })

    if (response.ok) {
      setShowAlert(true)
      setAlerts("Item deleted Successfully")
      setAlertSeverity('success')
      setLoader(false)
      setDisableButton(false)
      setItemDatas(itemDatas.filter(dat => dat.id !== selectedItemID))
      setShowModal(false)
    } else {
      let errorData = await response.json();
      const errorMessage = errorData.error
      setShowAlert(true)
      setAlerts('There is an error in processing your data')
      setAlertSeverity('error')
      setLoader(false)
      setDisableButton(false)
      console.log(errorMessage)
    }
  }

  const editPage = async (id) => {
    setLoader(true)

    let response = await fetch(`https://bdmos.onrender.com/api/items/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authTokens.access}`
      }
    })

    const data = await response.json()
    localStorage.setItem("schoolItemsEditData", JSON.stringify(data));


    if (response.ok) {
      setLoader(false)
      setDisableButton(false)
      setDetails(data)
      navigate(`/admin/editSchoolItem/${data.id}`)
    } else {
      setLoader(false)
      setDisableButton(false)
      setShowAlert(true)
      setAlerts('There is an error in processing your data')
      setAlertSeverity('error')
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

  return (
    <div>
      <div className="position-sticky">
        <AdminDashFrame />
      </div>
      <section>
       {loader &&
          < LoadingSpiner/>
        }

        <div className="main-content">
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

          {showModal &&
            <section className="overlay-background">
              <div className="admin-modal-container">
                <div className="admin-modal-content">
                  <h5>Delete Item?</h5>
                  <hr />
                  <p>This will delete the Item.</p>
                  <div className="d-flex justify-content-between py-3">
                    <div></div>
                    <div>
                      <button className="admin-modal-close mx-3" onClick={hideDeleteModal}>Cancel</button>
                      <button className="admin-modal-delete" disabled={disableButton} onClick={deleteItem}>{loader ? <CircularProgress color="inherit" /> : "Delete"}</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          }
          <div className="container-lg">
            <div className="row my-3 pb-4">
              <div className="col-md-8 col-sm-6 col-6">
                <h5>School Items</h5>
                <p>List School Items for Sale</p>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
                <Link to="/admin/uploadSchoolItems" className="light-navyblue-background p-3 border-radius"><FontAwesomeIcon icon={faCartShopping} className="px-2" />Upload Item</Link>
              </div>
            </div>

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

            <section className="container-lg navyblue-blackground-dash">
              <div className="view-content-height scroll-bar">
                <div className="non-wrap-text">
                  <p className="ps-3 py-2">View All Items</p>
                  <table className="table1 ">
                    <thead>
                      <tr>
                        <th>img</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody className="admin-home-table view-schoolitems-table ">
                      {itemDatas.map((itemData) => (
                        <tr key={itemData.id}>
                          <td><img src={itemData.image} alt={itemData.title} /></td>
                          <td>{itemData.id}</td>
                          <td>{itemData.title}</td>
                          <td>{itemData.price}</td>
                          <td>
                            <FontAwesomeIcon onClick={() => handleEdit(itemData.id)} className="pe-3 cursor-pointer" icon={faPenToSquare} />
                            <FontAwesomeIcon className="cursor-pointer" icon={faTrashCan} onClick={() => showDeleteModal(itemData.id)} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}
