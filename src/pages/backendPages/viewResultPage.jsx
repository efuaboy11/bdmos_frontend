import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link, useNavigate } from "react-router-dom"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useEffect, useState } from "react"
import Alert from '@mui/material/Alert';
import React from 'react'
import { useForm } from "react-hook-form"
import CircularProgress from '@mui/material/CircularProgress';
import AuthContext from "../../context/AuthContext"
import pic from "../../img/pexels-andrea-piacquadio-762041 (2).jpg"
import { LoadingSpiner } from "../../component/spin"



export const ViewResultPage = () =>{

  const {allResults, authTokens} = useContext(AuthContext)
  console.log(allResults)

  const [showModal, setShowModal] = useState(false)

  const navigate = useNavigate()

  const handleEdit = () =>{
    navigate("/admin/editResultPage")
  }

  const deleteResult = async (e) => {
    console.log("clicked")
    e.preventDefault();
    if(loader){
      setLoader(false)
    }else{
      setLoader(true)
    }

    try {
      let response = await fetch(`https://bdmos.onrender.com/api/result/${allResults[0].id}/`, {
        method: "DELETE",
        headers: {
          Authorization:`Bearer ${authTokens.access}`
        }
      });

      if (response.ok) {
        setShowAlert(true)
        setAlerts("Student deleted Sucessfully")
        setAlertSeverity('success')
        setLoader(false)
        setdisablebutton(false)
        console.log('sucess')
        setShowModal(true)
      } else {
        let errorData = await response.json();
        const errorMessage = errorData.error
        setShowAlert(true)
        setAlerts('There is an error in processing your data')
        setAlertSeverity('error')
        setLoader(false)
        setdisablebutton(false)
        console.log(errorMessage)
      }
    }catch (error) {
      console.error("Error occurred while deleting user:", error);
      alert("An error occurred while trying to delete the user. Please try again.");
    }
 };


  const [alerts, setAlerts] = useState("")
  const [showAlert, setShowAlert] = useState(false)
  const [alertSeverity, setAlertSeverity] = useState("")
  const {handleSubmit, register, formState:{errors, isValid}} = useForm()
  const [loader, setLoader] = useState("")
  const [disablebutton, setdisablebutton] = useState(false)



  return(
    <div>
      <div className="position-sticky">
        <AdminDashFrame />
      </div>
      <section id="view-result-page">
        <div className="main-content">
          {loader &&
            < LoadingSpiner/>
          }
          {showModal &&
            <section className="overlay-background">
              <div className="admin-modal-container">
                <div className="admin-modal-content">
                  <h5 className="sucessfull-text">Sucess</h5>
                  <hr />
                  <p>Result  successfully deleted.</p>
                  <div className="d-flex justify-content-between py-3">
                    <div></div>
                    <div>
                      <Link to="/admin/ViewStudentResult" className="admin-modal-close mx-3">Done</Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          }
          <div className="container-xxl">
            <section>
              <div className="text-center py-5 mt-5">
                <h4>BDOMS RESULT SHIT</h4>
                <p>Please fill the details</p>
              </div>
            </section>

            <section>
              <div className="view-result-page-header-bg p-3">
                <div>
                  <div className="row ">
                    <p className="col-lg-2 col-sm-3">ID: {allResults[0].student}</p>
                    <p className="col-lg-4 col-md-6 col-sm-8 ">Name: {`${allResults[0].student_name.first_name} ${allResults[0].student_name.last_name}`}</p>
                    <p className="col-lg-2 col-sm-3">Class: {allResults[0].class_name.name}</p>
                    <p className="col-lg-2 col-sm-3">Sex: {allResults[0].sex}</p>   
                    <p className="col-lg-2 col-md-3 col-sm-5">Session: {allResults[0].session_name.name}</p>
                    <p className="col-lg-2 col-sm-3">term: {allResults[0].term_name.name}</p>
                    <p className="col-lg-2 col-md-3 col-sm-5">Total Mark Obtain: {allResults[0].total_marks_obtain}</p>
                    <p className="col-lg-2 col-sm-4">Student Average: {allResults[0].student_average}%</p>
                    <p className="col-lg-2 col-sm-4">class Average: {allResults[0].class_average}%</p>
                    <p className="col-lg-2 col-sm-3">Student: {allResults[0].students}</p>
                    <p className="col-lg-2 col-sm-3">Position: {allResults[0].position}</p>
                    <p className="col-lg-2 col-sm-3">Decison: {allResults[0].decision} </p>

                  </div>
                </div>
              </div>


              <div className="">
                <div className="pt-5 pb-1">
                  <div className=" row">
                    <div className="col-xxl-12">
                      <div className="row g-2">
                        <div className="col-lg-9">
                          <div className="scroll-bar view-result-page-table view-result-page-content-table  non-wrap-text ">
                            <table className="width-100">
                              <thead >
                                <tr>
                                  <th>SUBJECT</th>
                                  <th>TOTAL C.A <br />(40%)</th>
                                  <th>EXAM<br />(60%)</th>
                                  <th>TOTAL<br />(100%)</th>
                                  <th>GRADE</th>
                                  <th>POSITION</th>
                                </tr>
                              </thead>
                              <tbody>
                                {allResults[0].subject_results.map((result) =>(
                                  <tr>
                                    <td>{result.subject}</td>
                                    <td>{result.total_ca}</td>
                                    <td>{result.exam}</td>
                                    <td>{result.total}</td>
                                    <td>{result.grade}</td>
                                    <td>{result.position}</td>
                                  </tr>
                                ))}


                              

                              </tbody>


                            </table>
                          </div>

                          <div className="row mt-2 mb-4">
                            <div className="col-xxl-12">
                              <div className="row g-2">
                                <div className="col-lg-5">
                                  <div className=" result-remark-table scroll-bar grade-rate">
                                    <div className="">
                                      <table className=" width-100">
                                        <thead >
                                          <tr>
                                            <th>GRADE</th>
                                            <th>INTERPRETATION</th>                          
                                          </tr>
                                        </thead>

                                        <tbody>
                                          <tr>
                                            <td>A1 = 80 - 100</td>
                                            <td>EXCELLENT</td>
                                          </tr>

                                          <tr>
                                            <td>B2 = 70 - 79</td>
                                            <td>VERY GOOD</td>
                                          </tr>

                                          <tr>
                                            <td>B2 = 65 - 69</td>
                                            <td>GOOD</td>
                                          </tr>

                                          <tr>
                                            <td>C4 = G9 - 64</td>
                                            <td>CREDIT</td>
                                          </tr>

                                          <tr>
                                            <td>C5 = 55 - 59</td>
                                            <td>CREDIT</td>
                                          </tr>

                                          <tr>
                                            <td>C6 = 59 - 54</td>
                                            <td>CREDIT</td>
                                          </tr>

                                          <tr>
                                            <td> D7 = 45 - 49</td>
                                            <td>PASS</td>
                                          </tr>

                                          <tr>
                                            <td>E8 = 40 -44</td>
                                            <td>PASS</td>
                                          </tr>

                                          <tr>
                                            <td>F9 = 1 -39</td>
                                            <td>FAIL</td>
                                          </tr>
                                        </tbody>

                                      </table>
                                    </div>
                                </div>

                                </div>
                              </div>
                            </div>
                          </div>


                        </div>


                        <div className="col-lg-3">
                          <div className="row">
                            <div className="col-xxl-12">
                              <div className="row g-1">
                                <div className=" result-remark-table scroll-bar affective-trait col-sm-6 col-lg-12 mb-4">
                                  <div className="">
                                    <table className=" width-100 ">
                                      <thead className="py-3">
                                        <tr>
                                          <th>AFFFECTIVE TRAIT</th>
                                          <th>SCALE</th>                          
                                        </tr>
                                      </thead>

                                      <tbody>
                                        <tr>
                                          <td>AGILITY</td>
                                        <td>{allResults[0].agility}</td>
                                        </tr>

                                        <tr>
                                          <td>CARING</td>
                                        <td>{allResults[0].caring}</td>
                                        </tr>

                                        <tr>
                                          <td>COMMUNiCATION</td>
                                        <td>{allResults[0].communication}</td>
                                        </tr>

                                        <tr>
                                          <td>LOVING</td>
                                        <td>{allResults[0].loving}</td>
                                        </tr>


                                        <tr>
                                          <td>PUNTUALITY</td>
                                        <td>{allResults[0].puntuality}</td>
                                        </tr>

                                        <tr>
                                          <td>SERIOUSNESS</td>
                                          <td>{allResults[0].seriousness}</td>
                                        </tr>

                                        <tr>
                                          <td>SOCAILIZATION</td>
                                          <td>{allResults[0].socialization}</td>
                                        </tr>
                                      </tbody>

                                    </table>
                                  </div>
                                </div>

                                <div className=" result-remark-table scroll-bar psych-trait col-sm-6 col-lg-12 mb-4">
                                  <div className="">
                                    <table className=" width-100 ">
                                      <thead className="py-3">
                                        <tr>
                                          <th>PSYCHOMOTOR TRAIT</th>
                                          <th>SCALE</th>                          
                                        </tr>
                                      </thead>

                                      <tbody>
                                        <tr>
                                          <td>ATTENTIVENESS</td>
                                          <td>{allResults[0].attentiveness}</td>
                                        </tr>

                                        <tr>
                                          <td>HANGLING OFF TOOOLS</td>
                                          <td>{allResults[0].handling_of_tools}</td>
                                        </tr>

                                        <tr>
                                          <td>HONESTY</td>
                                          <td>{allResults[0].honesty}</td>
                                        </tr>

                                        <tr>
                                          <td>LEADERSHIP</td>
                                          <td>{allResults[0].leadership}</td>
                                        </tr>

                                        <tr>
                                          <td>MUSIC</td>
                                          <td>{allResults[0].music}</td>
                                        </tr>

                                        <tr>
                                          <td>NEATNESS</td>
                                          <td>{allResults[0].neatness}</td>
                                        </tr>

                                        <tr>
                                          <td>PERSERVERANCE</td>
                                          <td>{allResults[0].perserverance}</td>
                                        </tr>

                                        <tr>
                                          <td>POLITENESS</td>
                                          <td>{allResults[0].politeness}</td>
                                        </tr>

                                        <tr>
                                          <td>TOOLS</td>
                                          <td>{allResults[0].tools}</td>
                                        </tr>
                                      </tbody>

                                    </table>
                                  </div>
                                </div>
                          
                              </div>
                            </div>
                          </div>








                          <div className="me-2 mb-4">
                            <div className="trait-scale width-100 mt-2 py-2 ps-3">
                              <p>TRAIT SCALE</p>
                              <div className="flex">
                                <div>
                                  <p>A = EXCELLENT</p>
                                </div>

                                <div>
                                  <p>B = VERY GOOD</p>
                                </div>

                                <div>
                                  <p>C = GOOD</p>
                                </div>
                                
                                <div>
                                  <p>D = FAIR</p>
                                </div>

                                <div>
                                  <p>E = POOR</p>
                                </div>
                                
                              </div>
                            
                            </div>
                          </div>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="i mb-1 me-2 scroll-bar">
              <div className="py-2 ">
                <div className="d-flex non-wrap-text px-3 pb-3">
                  <p className="pe-3">TEACHER COMMENT</p>
                  <p>{allResults[0].teacher_comment}</p>
                </div>

                <div className="d-flex non-wrap-text px-3 pb-3">
                  <p className="pe-3">PRINCIPAL COMMENT</p>
                  <p>{allResults[0].principal_comment}</p>
                </div>

                <div className="d-flex non-wrap-text px-3 pb-3">
                  <p className="pe-3">NEXT TERM BEGINS</p>
                  <p>{allResults[0].next_term_begins}</p>
                </div>

                <div className="d-flex non-wrap-text px-3 pb-3">
                  <p className="pe-3">NEXT TERM SCHOOL FEES</p>
                  <p>{allResults[0].next_term_school_fees}</p>
                </div>
              </div>
            </div>


            <div className="d-flex">
             <button onClick={deleteResult}  disabled={disablebutton} className="view-result-delete-btn"> Delete</button>
             <button onClick={handleEdit} className="view-result-edit-btn">Edit</button>
            </div>



          </div>

        </div>

      </section>
    </div>
      )
  }