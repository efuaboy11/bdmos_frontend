import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link } from "react-router-dom"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
  import pic from "../../img/pexels-andrea-piacquadio-762041 (2).jpg"
import AuthContext from "../../context/AuthContext"
import { useContext, useEffect, useState } from "react"

export const ResultPage = () => {
  const {authTokens,
    className,
    setClassName,
    term,
    setTerm,
    session,
    setSession,
    classe,
    setClasse,
    terms,
    setTerms,
    sessions,
    setSessions,
    resultStudent,
    setResultStudent,
    studentID,} = useContext(AuthContext)

  const [classname, setClassname] = useState("")

  console.log('className IDs:', className.map(cls => cls.id));
  console.log('classe:', classe);
  console.log('class', classname);


  useEffect(() => {
    const fetchStudent = async () => {
      const response = await fetch(`https://bdmos.onrender.com/api/students/${studentID}/`,{
        method:"GET",
        headers: {
          "Content-Type":"application/json",
          Authorization: `Bearer ${authTokens.access}`
        }
      })
      const data = await response.json()
      setResultStudent(data)
    }

    const classname = className.find(classn => classn.id === classe);
    setClassname(classname)

    fetchStudent()
  }, [])

	return(
    <div>
      <div className="position-sticky">
        <AdminDashFrame />
      </div>
      <section className="main-content">
        <div className="container-lg">
          <div className="row py-5">
            <div className="col-xxl-12">
              <div className="row align-items-center">
                <div className="col-3 d-none d-md-block">
                  <img className="result-page-img" src={pic} alt="" />
                </div>

                <div className="col-6 text-md-center  pt-3">
                  <h4>BDOMS RESULT SHIT</h4>
                  <p>Please fill the details</p>
                </div>

                <div className="col-md-3 col-6 d-flex justify-content-end">
                  <img className="result-page-img" src={pic} alt="" />
                </div>


              </div>
            </div>
          </div>


          <div className="boxing-shadow p-3">
            <div className="row">
              <div className="col-xxl-12">
                <div className="row g-2">
                  <div className="col-md-3 col-sm-6">
                    <label htmlFor="" className="form-label">ID</label>
                    <input type="text" className="admin-input compulsory form-dark" disabled value={resultStudent?.id}/>
                  </div>

                  <div className="col-lg-3 col-md-3 col-sm-6">
                    <label htmlFor="" className="form-label">Name</label>
                    <input type="text" className="admin-input compulsory form-dark" disabled value={`${resultStudent?.first_name} ${resultStudent?.middle_name} ${resultStudent?.last_name}`}/>
                  </div>

                  <div className="col-lg-3 col-md-2 col-sm-5 col-6">
                    <label htmlFor="" className="form-label">Class</label>
                    <input type="text" className="admin-input compulsory form-dark" value={classname ? classname?.name : ""}/>
                  </div>

                  <div className="col-md-2 col-sm-4 col-6">
                    <label htmlFor="" className="form-label">sex</label>
                    <input type="text" className="admin-input compulsory form-dark" disabled value={resultStudent?.sex}/>
                  </div>

                  <div className="col-md-2 col-lg-1 col-sm-3 col-6">
                    <label htmlFor="" className="form-label">session</label>
                    <input type="text" className="admin-input compulsory form-dark"/>
                  </div>

                  <div className="col-md-2 col-sm-6 col-6">
                    <label htmlFor="" className="form-label">Term</label>
                    <input type="text" className="admin-input compulsory form-dark"/>
                  </div>

                  <div className="col-lg-2 col-md-3 col-sm-3 col-6">
                    <label htmlFor="" className="form-label non-wrap-text">Total Marks Obtain</label>
                    <input type="text" className="admin-input compulsory form-dark"/>
                  </div>

                  <div className="col-md-2 col-sm-3 col-6">
                    <label htmlFor="" className="form-label non-wrap-text">Student Average</label>
                    <input type="text" className="admin-input compulsory form-dark"/>
                  </div>

                  <div className="col-md-2 col-sm-4 col-6">
                    <label htmlFor="" className="form-label">Class Average</label>
                    <input type="text" className="admin-input compulsory form-dark"/>
                  </div>

                  <div className="col-md-1 col-sm-4 col-6">
                    <label htmlFor="" className="form-label non-wrap-text">Students</label>
                    <input type="text" className="admin-input compulsory form-dark"/>
                  </div>

                  <div className="col-lg-1 col-md-2 col-sm-4 col-6">
                    <label htmlFor="" className="form-label">Postion</label>
                    <input type="text" className="admin-input compulsory form-dark"/>
                  </div>

                  <div className="col-md-2 col-6">
                    <label htmlFor="" className="form-label">Decision</label>
                    <input type="text" className="admin-input compulsory form-dark"/>
                  </div>
                </div>
              </div>
            </div>

            
            <div>
              <div className="pt-5 pb-1">
                <div className=" row">
                  <div className="col-xxl-12">
                    <div className="row g-2">
                      <div className="col-lg-9">
                        <div className="scroll-bar  non-wrap-text result-page-table">
                          <table className="border">
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
                              <tr>
                                <td>MATH</td>
                                <td><input className="admin-input form-dark" type="text" /></td>
                                <td><input className="admin-input form-dark" type="text" /></td>
                                <td><input className="admin-input form-dark" type="text" /></td>
                                <td><input className="admin-input form-dark" type="text" /></td>
                                <td><input className="admin-input form-dark" type="text" /></td>
                              </tr>

                              <tr>
                                <td>MATH</td>
                                <td><input className="admin-input form-dark" type="text" /></td>
                                <td><input className="admin-input form-dark" type="text" /></td>
                                <td><input className="admin-input form-dark" type="text" /></td>
                                <td><input className="admin-input form-dark" type="text" /></td>
                                <td><input className="admin-input form-dark" type="text" /></td>
                              </tr>
                              <tr>
                                <td>MATH</td>
                                <td><input className="admin-input form-dark" type="text" /></td>
                                <td><input className="admin-input form-dark" type="text" /></td>
                                <td><input className="admin-input form-dark" type="text" /></td>
                                <td><input className="admin-input form-dark" type="text" /></td>
                                <td><input className="admin-input form-dark" type="text" /></td>
                              </tr>
                              <tr>
                                <td>MATH</td>
                                <td><input className="admin-input form-dark" type="text" /></td>
                                <td><input className="admin-input form-dark" type="text" /></td>
                                <td><input className="admin-input form-dark" type="text" /></td>
                                <td><input className="admin-input form-dark" type="text" /></td>
                                <td><input className="admin-input form-dark" type="text" /></td>
                              </tr>
                              <tr>
                                <td>MATH</td>
                                <td><input className="admin-input form-dark" type="text" /></td>
                                <td><input className="admin-input form-dark" type="text" /></td>
                                <td><input className="admin-input form-dark" type="text" /></td>
                                <td><input className="admin-input form-dark" type="text" /></td>
                                <td><input className="admin-input form-dark" type="text" /></td>
                              </tr>
                              <tr>
                                <td>MATH</td>
                                <td><input className="admin-input form-dark" type="text" /></td>
                                <td><input className="admin-input form-dark" type="text" /></td>
                                <td><input className="admin-input form-dark" type="text" /></td>
                                <td><input className="admin-input form-dark" type="text" /></td>
                                <td><input className="admin-input form-dark" type="text" /></td>
                              </tr>
                              <tr>
                                <td>MATH</td>
                                <td><input className="admin-input form-dark" type="text" /></td>
                                <td><input className="admin-input form-dark" type="text" /></td>
                                <td><input className="admin-input form-dark" type="text" /></td>
                                <td><input className="admin-input form-dark" type="text" /></td>
                                <td><input className="admin-input form-dark" type="text" /></td>
                              </tr>
                              <tr>
                                <td>MATH</td>
                                <td><input className="admin-input form-dark" type="text" /></td>
                                <td><input className="admin-input form-dark" type="text" /></td>
                                <td><input className="admin-input form-dark" type="text" /></td>
                                <td><input className="admin-input form-dark" type="text" /></td>
                                <td><input className="admin-input form-dark" type="text" /></td>
                              </tr>
                              
                            </tbody>

                          </table>
                        </div>

                        <div className="row mt-2 mb-4">
                          <div className="col-xxl-12">
                            <div className="row g-2">
                              <div className="col-lg-5">
                                <div className=" result-remark-table scroll-bar">
                                  <div className="">
                                    <table className="border width-100">
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


                      <div className="col-lg-3 ">
                        <div className="row">
                          <div className="col-xxl-12">
                            <div className="row">
                              <div className=" result-remark-table scroll-bar col-sm-6 col-lg-12 mb-4">
                                <div className="">
                                  <table className="border width-100">
                                    <thead >
                                      <tr>
                                        <th>AFFFECTIVE TRAIT</th>
                                        <th>SCALE</th>                          
                                      </tr>
                                    </thead>

                                    <tbody>
                                      <tr>
                                        <td>AGILITY</td>
                                        <td><input className="admin-input form-dark" type="text" /></td>
                                      </tr>

                                      <tr>
                                        <td>CARING</td>
                                        <td><input className="admin-input form-dark" type="text" /></td>
                                      </tr>

                                      <tr>
                                        <td>COMMUNiCATION</td>
                                        <td><input className="admin-input form-dark" type="text" /></td>
                                      </tr>

                                      <tr>
                                        <td>LOVING</td>
                                        <td><input className="admin-input form-dark" type="text" /></td>
                                      </tr>

                                      <tr>
                                        <td>AGILITY</td>
                                        <td><input className="admin-input form-dark" type="text" /></td>
                                      </tr>

                                      <tr>
                                        <td>PUNTUALITY</td>
                                        <td><input className="admin-input form-dark" type="text" /></td>
                                      </tr>

                                      <tr>
                                        <td>SERIOUSNESS</td>
                                        <td><input className="admin-input form-dark" type="text" /></td>
                                      </tr>

                                      <tr>
                                        <td>SOCAILIZATION</td>
                                        <td><input className="admin-input form-dark" type="text" /></td>
                                      </tr>
                                    </tbody>

                                  </table>
                                </div>
                              </div>

                              <div className="result-remark-table scroll-bar col-sm-6 col-lg-12 mt-">
                                <table className="border width-100">
                                  <thead >
                                    <tr>
                                      <th>PSYCHOMOTOR  TRAIT</th>
                                      <th>SCALE</th>                          
                                    </tr>
                                  </thead>

                                  <tbody>
                                    <tr>
                                      <td>ATTENTIVENESS</td>
                                      <td><input className="admin-input form-dark" type="text" /></td>
                                    </tr>

                                    <tr>
                                      <td>HANDLING OF TOOLS</td>
                                      <td><input className="admin-input form-dark" type="text" /></td>
                                    </tr>

                                    <tr>
                                      <td>HONESTY</td>
                                      <td><input className="admin-input form-dark" type="text" /></td>
                                    </tr>

                                    <tr>
                                      <td>LEARDERSHIP</td>
                                      <td><input className="admin-input form-dark" type="text" /></td>
                                    </tr>

                                    <tr>
                                      <td>MUSIC</td>
                                      <td><input className="admin-input form-dark" type="text" /></td>
                                    </tr>

                                    <tr>
                                      <td>NEATNESS</td>
                                      <td><input className="admin-input form-dark" type="text" /></td>
                                    </tr>

                                    <tr>
                                      <td>PERSERVERANCE</td>
                                      <td><input className="admin-input form-dark" type="text" /></td>
                                    </tr>

                                    <tr>
                                      <td>POLITENESS</td>
                                      <td><input className="admin-input form-dark" type="text" /></td>
                                    </tr>

                                    <tr>
                                      <td>PUNTUALITY</td>
                                      <td><input className="admin-input form-dark" type="text" /></td>
                                    </tr>

                                    <tr>
                                      <td>TOOLS</td>
                                      <td><input className="admin-input form-dark" type="text" /></td>
                                    </tr>
                                  </tbody>

                                </table>
                              </div>
                        
                            </div>
                          </div>
                        </div>








                        <div className="me-2 mb-4">
                          <div className="border mt-4 py-2 ps-3">
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

            <div className="border mb-1 me-2">
              <div className="py-2">
                <div className="d-flex non-wrap-text px-3 pb-3">
                  <p className="pe-3">TEACHER COMMENT</p>
                  <input type="text" className="admin-input form-dark"/>
                </div>

                <div className="d-flex non-wrap-text px-3 pb-3">
                  <p className="pe-3">PRINCIPAL COMMENT</p>
                  <input type="text" className="admin-input form-dark"/>
                </div>

                <div className="d-flex non-wrap-text px-3 pb-3">
                  <p className="pe-3">NEXT TERM BEGINS</p>
                  <input type="text" className="admin-input form-dark"/>
                </div>

                <div className="d-flex non-wrap-text px-3 pb-3">
                  <p className="pe-3">NEXT TERM SCHOOL FEES</p>
                  <input type="text" className="admin-input form-dark"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
	)
}