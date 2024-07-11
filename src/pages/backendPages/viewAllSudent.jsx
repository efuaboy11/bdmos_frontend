import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link, useNavigate } from "react-router-dom"
import {faL, faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useEffect, useContext } from "react"
import AuthContext from "../../context/AuthContext"
import { LoadingSpiner } from "../../component/spin"

export const ViewAllStudents = () =>{
  const navigate  = useNavigate()

  const { authTokens, setDetails } = useContext(AuthContext)
  setDetails('')
  const [studentID, setStudentID] = useState("")
  const [studentName, setStudentName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  const [students, setStudents] = useState([])

  const [loader, setLoader] = useState(false)


  const filterAllStudent = async() => {
    let url;
    if (studentID.length !== 0) {
      url = `https://bdmos.onrender.com/api/students/?search=${studentID}`;
    } else if (studentName.length !== 0) {
      url = `https://bdmos.onrender.com/api/students/?search=${studentName}`;
    } else if (phoneNumber.length !== 0) {
      url = `https://bdmos.onrender.com/api/students/?search=${phoneNumber}`;
    } else {
      getAllStundent();
      return;
    }

    let response = await fetch(url,{
      method: "GET",
      headers: {
        "Content-Type":"application/json"
      }
    })

    const data = await response.json()

    if(response.ok){
      setStudents(data)
    }else{
      console.error("Failed to fetch students")
    }
  }

  const getAllStundent = async() => {
    let response = await fetch("https://bdmos.onrender.com/api/students/",{
      method: "GET",
      headers: {
        "Content-Type":"application/json"
      },
    });

    const data = await response.json()

    if(response.ok){
      const sortedData = data.sort((a, b) => a.first_name.localeCompare(b.first_name));
      setStudents(sortedData)
    }else{
      console.error("Failed to fetch students", response.statusText)
    }
  }

  const handeStudentPage = (id) =>{
    setLoader(true)

    studentPage(id)
  }

  const studentPage = async (id) => {


    let response = await fetch(`https://bdmos.onrender.com/api/students/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authTokens.access}`
      }
    })

    const data = await response.json()

    localStorage.setItem("studentIndividualData", JSON.stringify(data));

    if (response.ok) {
      setDetails(data)
      setLoader(false)
      navigate(`/admin/viewAllStudent/${data.id}`)
    }else{
      setLoader(false)
    
    }

  }

  useEffect(() => {
    if(!studentID && !studentName && !phoneNumber){
      getAllStundent()
    } else if(studentID){
      filterAllStudent()
    } else if(studentName){
      filterAllStudent()
    } else if(phoneNumber){
      filterAllStudent()
    } else{
      getAllStundent()
    }
  },[students])

	return(
		<div>
      <div className="position-sticky">
        <AdminDashFrame />
      </div>
			<section>
        <div className="main-content">
          {loader &&
            < LoadingSpiner/>
          }
          <div className="container-lg">
            <div className="row my-3 pb-4">
              <div className="col-md-8 col-sm-6 col-6">
                <h5>Student</h5>
                <p>List Off Student</p>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
							  <Link to="/admin/addStudent" className="light-navyblue-background p-3 border-radius"><FontAwesomeIcon icon={faUser} className="px-2"/>  Add Student</Link>
						  </div>
            </div>

            <form action="">
              <div className="row add-student g-3">
                <div className="col-sm-3 mb-4">
                  <input type="text" className=" p-2 form-dark border-radius view-student-input " placeholder="Search by ID..."  value={studentID} onChange={(e) => setStudentID(e.target.value)}/>
                </div>

                <div className="col-sm-3 mb-4">
                  <input type="text" className=" p-2 form-dark border-radius view-student-input" placeholder="Search by Name..."  value={studentName} onChange={(e) => setStudentName(e.target.value)}/>
                </div>

                <div className="col-sm-3 mb-4">
                  <input type="text" className=" p-2 form-dark border-radius view-student-input" placeholder="Search by Class..."  value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                </div>

                {/* <div className="col-sm-1 mb-3">
                  <input type="button" value={"Submit"} className=" p-2 form-dark border-radius" onClick={filterAllStudent}/>
                </div> */}
              </div>            
            </form>


            <section className="view-content-height scroll-bar-y">
              <div className="row">
                <div className="col-xxl-12">
                  <div className="row  g-2">
                    {students.map((student) => (
                      <div className="col-md-4 col-sm-6 col-xxl-3">
                        <div className="student-list">
                          <div className="student-list-boxes boxing-shadow py-3 ps-3">
                            <img src={student.passport} alt="" /> 
                            <div className="ps-3">
                              <h5>{student.username}</h5>
                              <p>{`${student.first_name} ${student.last_name}`}</p>
                              <Link onClick={() => handeStudentPage(student.username)} >View Profile</Link>
                            </div>  
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </section>


        
          </div>
        </div>

      </section>
		</div>
	)
}