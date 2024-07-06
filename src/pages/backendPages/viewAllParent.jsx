import { AdminDashFrame } from "../../component/adminDashFRame";
import { Link } from "react-router-dom";
import { faPenToSquare, faTrashCan, faUser, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import Alert from '@mui/material/Alert';
import React from 'react';
import { useForm } from "react-hook-form";
import CircularProgress from '@mui/material/CircularProgress';
import AuthContext from "../../context/AuthContext";


export const ViewAllParent = () => {

  const [parentName, setParentName] = useState('');

  const { authTokens, details } = useContext(AuthContext);

  const [datas, setdatas] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [selectedParentID, setSelectedParentID] = useState(null);
  
  const [parentDetails, setParentDetails] = useState([]);
  const [showParentEditModal, setShowParentEditModal] = useState(false);

  // Parent Edit Modal //

  const [parentInputName, setParentInputName] = useState("");
  const [parentInputChildren, setParentInputChildren] = useState("");
  const [parentInputAddress, setParentInputAddress] = useState("");
  const [parentInputNumber, setParentInputNumber] = useState("");
  const [parentInputEmail, setParentInputEmail] = useState("");

  useEffect(() => {
    if (parentDetails.length > 0) {
      setParentInputName(parentDetails[0].name);
      setParentInputChildren(parentDetails[0].children);
      setParentInputAddress(parentDetails[0].address);
      setParentInputNumber(parentDetails[0].number);
      setParentInputEmail(parentDetails[0].email);
    }
  }, [parentDetails]);

  console.log(parentDetails);


  //   //

  const [alerts, setAlerts] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("");
  const [loader, setLoader] = useState("");
  const { handleSubmit, register, formState: { errors, isValid } } = useForm();
  const [disablebutton, setdisablebutton] = useState(false);


  const filterAllParent = async () => {
    let url;
    if (parentName.length !== 0) {
      url = `https://bdmos.onrender.com/api/parents/?search=${parentName}`;
    } else {
      getParents();
      return;
    }

    let response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();

    if (response.ok) {
      setdatas(data);
    } else {
      console.error("Failed to fetch students");
    }
  };

  const getParents = async () => {
    let response = await fetch("https://bdmos.onrender.com/api/parents/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authTokens.access}`
      },
    });

    const data = await response.json();

    if (response.ok) {
      const sortedData = data.sort((a, b) => b.id - a.id);
      setdatas(sortedData);
    } else {
      console.error("Failed to fetch students", response.statusText);
    }
  };
  
  const showDeleteModal = (id) => {
    setSelectedParentID(id);
    setShowModal(true);
  };

  const hideDeleteModal = () => {
    setShowModal(false);
    setSelectedParentID(null);
  };
  const closeModal = () => {
    setShowParentEditModal(false)
  }

  const parentContext = (id, name, children, address, number, email) => {
    setParentDetails([{ id, name, children, address, number, email }]); // Corrected to set an array with a single object
    console.log([{ id, name, children, address, number, email }]); // Log the new state object
    setShowParentEditModal(true); // Show the email modal
    setSelectedParentID(id);
  };

  const deleteParent = async () => {
    setdisablebutton(true);

    if (loader) {
      setLoader(false);
    } else {
      setLoader(true);
    }
    let response = await fetch(`https://bdmos.onrender.com/api/parents/${selectedParentID}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authTokens.access}`
      }
    });

    if (response.ok) {
      setShowAlert(true);
      setAlerts("Parent details deleted Sucessfully");
      setAlertSeverity('success');
      setLoader(false);
      setdisablebutton(false);
      console.log('sucess');
      setdatas(datas.filter(dat => dat.id !== selectedParentID));
      setShowModal(false);
    } else {
      let errorData = await response.json();
      const errorMessage = errorData.error;
      setShowAlert(true);
      setAlerts('There is an error in processing your data');
      setAlertSeverity('error');
      setLoader(false);
      setdisablebutton(false);
      console.log(errorMessage);
    }
  };

  const onSubmit = (data, e) => {
    e.preventDefault();
    setdisablebutton(true);
    if (isValid) {
      console.log(data);
      updateParent(e);
    } else {
      console.log('error');
      setdisablebutton(false);
    }
  };

  const updateParent = async (e) => {
    e.preventDefault();
    if (loader) {
      setLoader(false);
    } else {
      setLoader(true);
    }

    const formData = new FormData();
    formData.append("name", parentInputName);
    formData.append("phone_number", parentInputNumber);
    formData.append("email", parentInputEmail);
    formData.append("address", parentInputAddress);
    formData.append("children_name", parentInputChildren);

    console.log(formData);

    try {
      const response = await fetch(`https://bdmos.onrender.com/api/parents/${selectedParentID}/`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${authTokens.access}`
        },
        body: formData
      });
      if (response.status === 200 || response.status === 200) {
        setShowAlert(true);
        setAlerts("Parents Updated Successfully");
        console.log('sucess');
        setAlertSeverity("success");
        setLoader(false);
        setdisablebutton(false);
      } else {
        const errorData = await response.json();
        const errorMessage = errorData.error;
        setShowAlert(true);
        setAlerts('There an error in processing your data');
        setAlertSeverity("error");
        console.log(errorMessage);
        setLoader(false);
        setdisablebutton(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!parentName) {
      getParents();
    } else if (parentName) {
      filterAllParent();
    } else {
      getParents();
    }
  }, [datas]);

  return (
    <div>
      <div className="position-sticky">
        <AdminDashFrame />
      </div>
      <section>
        <div className="main-content">

          {showParentEditModal && 
            <section className="overlay-background">
              <div className="admin-allPayment-modal-conatiner">
                <div className="admin-allPayment-modal-content">
                  {parentDetails.length > 0 && (
                    <div>
                      <div className="d-flex justify-content-end">
                        <FontAwesomeIcon onClick={closeModal} className="cursor-pointer" icon={faX}/>
                      </div>
                      <div>
                        <h5>Edit Parent Details</h5>
                      </div>

                      <div className="light-background2">

                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div className="row">
                            <div className="xxl-12">
                              <div className="row g-3 p-2">
                                <div className="col-6">
                                  <div>
                                    <label htmlFor="" className="form-label">Name:</label>
                                    <input type="text"  className={`form-control  view-parent-input`}  value={parentInputName} onChange={(e) => setParentInputName(e.target.value)}/>
                                  </div>
                                  
                                </div>

                                <div className="col-6">
                                  <div>
                                    <label htmlFor="" className="form-label">Children:</label>
                                    <input type="text"  className={`form-control view-parent-input`}  value={parentInputChildren} onChange={(e) => setParentInputChildren(e.target.value)}/>
                                    
                                  </div>
                                </div>

                                <div className="col-6">
                                  <div>
                                    <label htmlFor="" className="form-label">Address:</label>
                                    <input type="text"  className={`form-control view-parent-input`}  value={parentInputAddress} onChange={(e) => setParentInputAddress(e.target.value)}/>
                                    
                                  </div>
                                </div>

                                <div className="col-6">
                                  <div>
                                    <label htmlFor="" className="form-label">Phone Number:</label>
                                    <input type="number"  className={`form-control view-parent-input`} {...register('phone')} value={parentInputNumber} onChange={(e) => setParentInputNumber(e.target.value)}/>
                                    
                                  </div>
                                </div>

                                <div className="col-6">
                                  <div>
                                    <label htmlFor="" className="form-label">Email:</label>
                                    <input type="email"  className={`form-control`}  value={parentInputEmail} onChange={(e) => setParentInputEmail(e.target.value)}/>
                                    
                                  </div>
                                </div>
                              </div>

                              <div className="my-5 ms-2">
                                <button className="admin-btn py-2 px-5 " type="submit" disabled={disablebutton}>{loader ? <CircularProgress color="inherit"/> : "Update"}</button>
                              </div>

                            
                            </div>
                          </div>
                        </form>




                      </div>

                    </div>
                  )}
                </div>
              </div>
            </section>
          
          
          }
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
                  <h5>Delete Parent Details?</h5>
                  <hr />
                  <p>This will delete the Parent Details.</p>
                  <div className="d-flex justify-content-between py-3">
                    <div></div>
                    <div>
                      <button className="admin-modal-close mx-3"  onClick={hideDeleteModal}>Cancel</button>
                      <button className="admin-modal-delete" disabled={disablebutton} onClick={deleteParent}>{loader ? <CircularProgress size="100%" color="inherit"/> : "Delete"}</button>

                    </div>
                  </div>
                </div>
              </div>
            </section>
          }
          <div className="container-lg">
            <div className="row my-3 pb-4">
              <div className="col-md-8 col-sm-6 col-6">
                <h5>View Parents</h5>
                <p>List Off All Parents</p>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
							  <Link to="/admin/addParent" className="light-navyblue-background p-3 border-radius"><FontAwesomeIcon icon={faUser} className="px-2"/>Add Parent</Link>
						  </div>
            </div>

            <form>
              <div className="row add-student">
                <div className="col-sm-4 mb-4">
                  <input type="text" className=" p-2 form-dark border-radius admin-input " placeholder="Search by Parent Name" value={parentName} onChange={(e) => setParentName(e.target.value)}/>
                </div>
              </div>            
            </form> 



            <section className="container-lg navyblue-blackground-dash">
              <div className="view-content-height scroll-bar">
                <div className="scroll-bar">
                  <p className=" ps-3 py-2">Parent Upload</p>
                  <table className="table1 ">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Parent Name</th>
                        <th>Children</th>
                        <th>Home Address</th>
                        <th>Phone Number</th>
                        <th>Email Address</th>
                        <th>Action</th>

                      </tr>
                    </thead>
                    

                    <tbody className="admin-home-table view-schoolitems-table ">
                        {datas.map((data) =>(
                          <tr>
                            <td>{data.id}</td>
                            <td><img src={data.image} alt="" /></td>
                            <td>{data.name}</td>
                            <td>{data.children_name}</td>
                            <td>{data.address}</td>
                            <td>{data.phone_number}</td>
                            <td>{data.email}</td>
                            <td><FontAwesomeIcon onClick={() => showDeleteModal(data.id)}  className="text-center cursor-pointer" icon={faTrashCan} /><FontAwesomeIcon onClick={() => parentContext(data.id, data.name, data.children_name, data.address, data.phone_number, data.email)} className="ps-2 cursor-pointer" icon={faPenToSquare}/></td>
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
  );
};
