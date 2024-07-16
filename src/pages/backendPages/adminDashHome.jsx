import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AdminDashFrame, DashFrame } from "../../component/adminDashFRame"
import {BarchartFrame, PieChartFrame} from "../../component/chatFrame"
import { faBookOpenReader, faBuildingColumns, faCartShopping, faChalkboardTeacher, faChartLine, faDollarSign, faNewspaper, faPeopleGroup, faPlus, faSchool, faTrash, faUser, faUserGraduate, faUserGroup, faUserPlus, faUsers, faX } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { faBell } from "@fortawesome/free-regular-svg-icons"
import { Pie } from "react-chartjs-2"
import picture from "../../img/Untitled__1_-removebg-preview.png"
import pic from "../../img/pic1.jpg"
import { useEffect, useState, useContext } from "react"
import AuthContext from "../../context/AuthContext"

export const AdminDashHome = () =>{
  const {authTokens, details} = useContext(AuthContext)

  const [students, setStudents] = useState([]);
  const [totalStudent, setTotalStudent] = useState(0);

  const [teachers, setTeachers] = useState([])
  const [totalTeachers, setTotalTeachers] = useState(0);

  const [parents, setParents] = useState([])
  const [totalParents, setTotalParents] = useState(0);

  const [classe, setClasse] = useState([])
  const [totalClass, setTotalClass] = useState(0);

  const [schoolItems, setSchoolItems] = useState([])

  const [emails, setEmails] = useState([])

  const [paymentHistory, setPaymentHistory] = useState([])

  const [showReciptModal, setShowReciptModal] = useState(false)
  const [paymentDetails, setPaymentDetails] = useState([])


  const recieptContext =(status, studentID, reason, amount, session, term, createdDate, updatedDate) =>{
    setPaymentDetails([{status, studentID, reason, amount, session, term, createdDate, updatedDate}])
    setShowReciptModal(true)
  }

  const closeModal = () => {
    setShowReciptModal(false)
  }




  const getAllStundent = async() => {
    let response = await fetch("https://bdmos.onrender.com/api/students/",{
      method: "GET",
      headers: {
        "Content-Type":"application/json"
      },
    });

    const data = await response.json()
    const Length = data.length
    setTotalStudent(Length)

    if(response.ok){
      const sortedData = data.sort((a, b) => new Date(b.date_joined) - new Date(a.date_joined));
      // Get the 5 most recent entries
      const recentData = sortedData.slice(0, 5);
      setStudents(recentData)
    }else{
      console.error("Failed to fetch students", response.statusText)
    }
  }

  const getAllTeacher = async() =>{
    let response = await fetch('https://bdmos.onrender.com/api/teachers/', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    const data = await response.json()
    const Length = data.length
    setTotalTeachers(Length)

    if(response.ok){
      const sortedData = data.sort((a, b) => new Date(b.date_joined) - new Date(a.date_joined));
      // Get the 5 most recent entries
      const recentData = sortedData.slice(0, 5);
      setTeachers(recentData)
    }else{
      console.error("Failed to fetch students", response.statusText)
    }
  }

  const getAllPayment = async () => {
    try {
      let response = await fetch("https://bdmos.onrender.com/api/all_payments/", {
        method: "GET",
        headers: {
          "Content-Type":"application",
          Authorization: `Bearer ${authTokens.access}`
        }
      })
  
      const data = await response.json()
  
      if(response.ok){
        const sortedData = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        const recentData = sortedData.slice(0, 5);
        setPaymentHistory(recentData)
        console.log("All Payment Type Gotten Successfully")
      } else{
        console.log(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getParents = async() => {
    let response = await fetch("https://bdmos.onrender.com/api/parents/",{
      method: "GET",
      headers: {
        "Content-Type":"application/json",
        Authorization: `Bearer ${authTokens.access}`
      },
    });

    const data = await response.json()
    const Length = data.length
    setTotalParents(Length)


    if(response.ok){
      const sortedData = data.sort((a, b) => b.id - a.id);
      // Get the 5 most recent entries
      const recentData = sortedData.slice(0, 5);
      setParents(recentData)
    }else{
      console.error("Failed to fetch students", response.statusText)
    }
  }

  const getClass = async() => {
    let response = await fetch("https://bdmos.onrender.com/api/class/",{
      method: "GET",
      headers: {
        "Content-Type":"application/json",
        Authorization: `Bearer ${authTokens.access}`
      },
    });

    const data = await response.json()
    const Length = data.length
    setTotalClass(Length)

    if(response.ok){
      setClasse(data)
    }else{
      console.error("Failed to fetch students", response.statusText)
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
      // Get the 5 most recent entries
      const recentData = sortedData.slice(0, 5);
      setSchoolItems(recentData)
    } else {
      console.error("Failed to fetch students", response.statusText)
    }
  }

  const getEmails = async () => {
    let response = await fetch("https://bdmos.onrender.com/api/send-email/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authTokens.access}`
      },
    });

    const data = await response.json()

    if (response.ok) {
      const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
      // Get the 5 most recent entries

      const recentData = sortedData.slice(0, 5);

      setEmails(recentData)
    } else {
      console.error("Failed to fetch emails", response.statusText)
    }
  }

  useEffect(() => {
    getAllStundent()
  },[students])

  useEffect(() =>{
    getAllTeacher()
  }, [teachers])

  useEffect(() =>{
    getParents()
  }, [parents])

  useEffect(() =>{
    getClass()
  }, [classe])

  useEffect(() =>{
    getAllItem()
  }, [schoolItems])

  useEffect(() =>{
    getEmails()
  }, [emails])

  useEffect(() => {
    getAllPayment()
  },[paymentHistory])

  const truncateText = (text, wordLimit) => {
    const words = text.split('-');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };

  const truncateDate = (text, wordLimit) => {
    const words = text.split('.');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };


  return(
    <div>
      <div className="position-sticky">
        <AdminDashFrame />
      </div>
      <div className="main-content">

        {showReciptModal &&
            <section className="overlay-background">
              <div className="admin-allPayment-modal-conatiner">
                <div className="admin-allPayment-modal-content">
                  {paymentDetails.length > 0 && (
                    <div>
                      <div className="d-flex justify-content-end">
                        <FontAwesomeIcon className="cursor-pointer" icon={faX} onClick={closeModal}/>
                      </div>
                      <div>
                        <h6 className="font-bold text-center admin-allPayment-h6">PAYMENT RECIEPT</h6>
                      </div>

                      <div className="pt-5">
                        <p className="pb-2"><span className="pe-2">STATUS:</span><span className={`${paymentDetails[0].status == "Pending" ? "pending" : "sucessfull"} ${paymentDetails[0].status == "Declined" && "failed"} text-white1 px-3 py-1`}>{paymentDetails[0].status} </span></p>
                        <p className="pb-2"><span>PAID TO</span>: BDOMS/fredita Children Academy</p>
                        <p className="pb-2"><span>PAID BY</span>: {paymentDetails[0].studentID}</p>
                        <p className="pb-2"><span>PAYMENT REASON</span>: {paymentDetails[0].reason}</p>
                        <p className="pb-2"><span>AMOUNT</span>: {paymentDetails[0].amount}</p>
                        <p className="pb-2"><span>SESSION</span>: {paymentDetails[0].session}</p>
                        <p className="pb-2"><span>TERM</span>: {paymentDetails[0].term}</p>
                        <p className="pb-2"><span>CREATED_AT</span>: {paymentDetails[0].createdDate}2021/2022</p>
                        <p className="pb-2"><span>UPDATED_AT</span>:{paymentDetails[0].updatedDate}</p>
                      </div>

                      <div className="row pt-5 pb-4">
                        <div className="col-6">
                          <div className="admin-allPayment-signatries">
                            <div className="d-flex">
                              <div>
                              <p className="first-p">MANAEMENT</p>
                              <p className="px-3">Signature of Mangement</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-6">
                          <div className="admin-allPayment-signatries">
                            <div className="d-flex">
                              <div>
                                <p className="first-p">{paymentDetails[0].createdDate}</p>
                                <p className="px-5">Date</p>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>

                      
                      <div className="light-background2">
                        <div className="p-2">
                          <div>
                            <p>For more information you contact us through:</p>
                            <p>Phone Number: 08060918549, 0807284591</p>
                            <p>Email: iseghohimhene@gmail.com</p>
                          </div>
                        </div>

                      </div>

                    </div>
                  )}

                </div>
              </div>
            </section>
          
          }
        <div className="container-lg">
          <div className="d-flex justify-content-between align-items-center admin-home-header">
            <div>
              <h1 className="pt-5  admin-head-text">Hi,  Admin!</h1> 
              <h6>Ready to start your day with some pitch decks</h6>
            </div>
            <div className="d-none d-lg-block">
              <img src={picture}  alt="" width='270px' className="pt-5"/>
            </div>
            

          </div>
          <div className="row py-3">
                <div className="col-xxl-12">
                  <div className="row  g-4">
                    <div className="col-md-4 col-sm-6 col-xxl-3 ">
                      <div className="navyblue-blackground-dash d-flex  justify-content-between px-3">
                        <div className="py-4 ">
                          <p>Students</p>
                          <h1>{totalStudent}</h1>
                        </div>
                        <FontAwesomeIcon className="dashboard-icon l-text py-4 px-2"  icon={faUserGraduate}/>
                      </div>

                    </div>

                    <div className="col-md-4 col-sm-6 col-xxl-3 ">
                      <div className="navyblue-blackground-dash d-flex  justify-content-between px-3">
                        <div className="py-4 ">
                          <p>Teacher</p>
                          <h1>{totalTeachers}</h1> 
                        </div>
                        <FontAwesomeIcon className="dashboard-icon l-text py-4 px-2"  icon={faUsers}/>
                      </div>

                    </div>

                    <div className="col-md-4 col-sm-6 col-xxl-3 ">
                      <div className="navyblue-blackground-dash d-flex  justify-content-between px-3">
                        <div className="py-4">
                          <p>Parent</p>
                          <h1>{totalParents}</h1>
                        </div>
                        <FontAwesomeIcon className="dashboard-icon l-text py-4 px-2"  icon={faUserGroup}/>
                      </div>

                    </div>

                    <div className="col-md-4 col-sm-6 col-xxl-3   ">
                      <div className="navyblue-blackground-dash d-flex justify-content-between px-3">
                        <div className="py-4 ">
                          <p>Classes</p>
                          <h1>{totalClass}</h1>
                        </div>
                        <FontAwesomeIcon className="dashboard-icon l-text py-4 px-2"  icon={faSchool}/>
                      </div>

                    </div>

                    <div className="col-md-4 col-sm-6 col-xxl-3">
                      <div className="navyblue-blackground-dash d-flex justify-content-between px-3">
                        <div className="py-4 ">
                          <p className="mb-3">Add Student</p>
                          <h1><Link to='/admin/addStudent'><FontAwesomeIcon className="admin-dashboard-sub-icon p-1 px-2 " icon={faPlus}/></Link></h1>
                        </div>
                        <FontAwesomeIcon className="dashboard-icon l-text py-5 px-2 "  icon={faUserPlus}/>
                      </div>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xxl-3   ">
                      <div className="navyblue-blackground-dash d-flex justify-content-between px-3">
                        <div className="py-4 ">
                          <p className="mb-3">Add Teacher</p>
                          <h1><Link to='/admin/addTeacher'><FontAwesomeIcon className="admin-dashboard-sub-icon p-1 px-2 " icon={faPlus}/></Link></h1>
                        </div>
                        <FontAwesomeIcon className="dashboard-icon l-text py-5 px-2 "  icon={faChalkboardTeacher}/>
                      </div>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xxl-3   ">
                      <div className="navyblue-blackground-dash d-flex justify-content-between px-3">
                        <div className="py-4 ">
                          <p className="mb-3">Add Parent</p>
                          <h1><Link to='/admin/addParent'><FontAwesomeIcon className="admin-dashboard-sub-icon p-1 px-2 " icon={faPlus}/></Link></h1>
                        </div>
                        <FontAwesomeIcon className="dashboard-icon l-text py-5 px-2 "  icon={faPeopleGroup}/>
                      </div>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xxl-3   ">
                      <div className="navyblue-blackground-dash d-flex justify-content-between px-3">
                        <div className="py-4 ">
                          <p className="mb-3">Add Classes</p>
                          <h1><Link to='/admin/AddClass'><FontAwesomeIcon className="admin-dashboard-sub-icon p-1 px-2 " icon={faPlus}/></Link></h1>
                        </div>
                        <FontAwesomeIcon className="dashboard-icon l-text py-5 px-2 "  icon={faSchool}/>
                      </div>
                    </div>


                  </div>
                </div>
          </div>


        </div>

        <div className="admin-chart-container mx-3">
          <div className="row  py-3">
            <div className="col-xxl-12">
              <div className="row g-5">
                <div className="col-lg-6 col-12 ">
                  <div className="navyblue-blackground-dash pt-3">
                    <p className="p-3">Number Of Students</p>
                    <BarchartFrame />
                  </div>

                </div>

                <div className="col-lg-6 col-12 ">
                  <div className="navyblue-blackground-dash p-3">
                    <p className="py-3">Number Of Students</p>
                    <div className="admin-pie-chart-container ">
                      <PieChartFrame/>
                    </div>

                  </div>
                </div>
              </div>
            </div>




          </div>

        </div>

        <section className="container-lg pt-5 non-wrap-text">
          <p className="pb-2">Recent Payment</p>
          <div className="navyblue-blackground-dash">
            <div className="scroll-bar">
              <table className="table1">
              <thead>
                    <tr>
                      <th>Created Date</th>
                      <th>Updated Date</th>
                      <th>Student ID</th>
                      <th>Reason</th>
                      <th>Status</th>
                      <th>Amount</th>
                      <th>Details</th>
                    </tr>
                  </thead>

                  <tbody className="admin-home-table">
                    {paymentHistory.map((data) =>(
                      <tr>
                        <td>{truncateDate(data.created_at, 1)}</td>
                        <td>{truncateDate(data.updated_at, 1)}</td>
                        <td>{truncateText(data.transaction_id, 1)}</td>
                        <td>{data.fee_type_name.name}</td>
                        <td><p className={`${data.status == "Pending" ? "pending" : "sucessfull"} ${data.status == "Declined" && "failed"}`}>{data.status}</p></td>
                        <td>{data.amount}</td>
                        <td><Link className="button-dashboard" onClick={() => recieptContext(data.status, data.transaction_id, data.fee_type_name.name,   data.amount, data.session_name.name, data.term_name.name, data.created_at, data.updated_at)}>View</Link></td>
                      </tr>
                    ))}



                  </tbody>
              </table>

              
            </div>


            
          </div>
          <div className="my-4 d-flex justify-content-center">
            <Link to='/admin/allPayment' className="button-dashboard ">View All</Link>

          </div>
        </section>

        
        <section className="container-lg py-5 non-wrap-text">
          <div className="navyblue-blackground-dash">
            <p className=" ps-3 py-2">Recently Added Student</p>

            <div className="scroll-bar">
              <table className="table1">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Class</th>
                    <th>DOB</th>
                    <th>Father Name</th>
                    <th>Mother Name</th>
                    <th>Mobile Number</th>
                    <th>sex</th>
                  </tr>
                </thead>

                <tbody className="admin-home-table">
                  {students.map((student) =>(
                  <tr>
                    <td>{student.username}</td>
                    <td>{student.first_name} {student.last_name}</td>
                    <td>{student.student_class}</td>
                    <td>{student.date_of_birth}</td>
                    <td>{student.father_name}</td>
                    <td>{student.mother_name}</td>
                    <td>{student.parents_phone_number}</td>
                    <td>{student.sex}</td>
                  </tr>
                  ))}

                </tbody>
              </table>
            </div>


            <div className="payment-link my-2">
              <Link to="/admin/viewAllStudent " className="button-dashboard">View All</Link>
              </div>
          </div>

        </section>

        <section className="container-lg">
          <div className="row">
            <div className="col-xxl-12">
              <div className="row g-3">
                <div className="col-lg-8 col-md-7 col-sm-6">
                  <div className="admin-home-teacher-table-container  non-wrap-text">
                    <p className=" ps-3 py-2">Recently Added Teacher</p>

                    <div className="scroll-bar">                  
                      <table className="table1">

                        <tbody className="">
                          <div className="admin-home-teacher-table">

                            {teachers.map((teacher) =>(
                              <tr>
                                <td>{teacher.username}</td>
                                <td>{teacher.first_name} {teacher.last_name}</td>
                                <td>{teacher.phone_number}</td>
                                <td>{teacher.sex}</td>
                                <td>{teacher.teacher_email}</td>
                                <td>{teacher.permanent_residence}</td>
                              </tr>

                            ))}

                          </div>
                        </tbody>
                      </table>
                    </div>

                    <div className="payment-link my-2">
                      <Link to="/admin/viewAllTeacher" className="button-dashboard">View All</Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-5 col-sm-6">
                  <div className="admin-home-school-item-container scroll-bar-y p-3">
                    <h6 className="py-2">Recent School Items</h6>
                    {schoolItems.map((schoolItem) =>(
                      <div className="mt-3 admin-home-school-item-box">
                        <div className="d-flex justify-content-between"> 
                          <div>
                            <h6>Name: {schoolItem.title}</h6>
                            <p>Amount: {schoolItem.price}</p>
                          </div>
                          <div>
                            <img src={schoolItem.image} alt=""/>
                          </div>
                        </div>
                      </div>
                    ))}


                    
                    <div className="payment-link my-3">
                      <Link to="/admin/viewSchooltItem" className="button-dashboard">View All</Link>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>



        </section>

        <section className="container-lg">
          <div className="row">
            <div className="col-xxl-12">
              <div className="row">
                <div className="col-lg-4 col-md-5 col-sm-6">
                  <div className="admin-home-email-table-container navyblue-blackground-dash non-wrap-text">
                    <p className=" ps-3 py-2">Recently Sent Email</p>

                    <div className="scroll-bar-x">
                      <table className="table1">

                        <tbody className="">
                          {emails.map((email) =>(
                            <div className="admin-home-email-table">
                              <tr>
                                <td>{email.date}</td>
                                <td>{email.to}</td>
                              </tr>
                            </div>
                          ))}



                        </tbody>
                      </table>
                    </div>


                    <div className="payment-link my-2">
                      <Link to="/admin/viewEmail" className="button-dashboard">View All</Link>
                    </div>
                  </div>

                </div>

                <div className="col-lg-8 col-md-7 col-sm-6">
                  <div className=" admin-home-parent-table-container non-wrap-text">
                    <p className=" ps-3 py-2">Recently Added Parent</p>
                    <div className="scroll-bar-x"> 
                      <table className="table1 ">

                        <tbody className="">
                          <div className="admin-home-parent-table">

                            {parents.map((parent) =>(
                              <tr>
                                <td>{parent.name}</td>
                                <td>{parent.children_name} {parent.last_name}</td>
                                <td>{parent.address}</td>
                                <td>{parent.phone_number}</td>
                                <td>{parent.email}</td>
                              </tr>

                            ))}

                          </div>
                        </tbody>
                      </table>
                    </div>


                    <div className="payment-link my-2">
                      <Link to="/admin/viewAllParent" className="button-dashboard">View All</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </section>

      </div>

      

    </div>

  )
}