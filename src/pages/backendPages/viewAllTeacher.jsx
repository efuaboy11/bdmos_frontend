import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link } from "react-router-dom"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import pic from "../../img/pexels-andrea-piacquadio-762041 (2).jpg"
import { useState, useEffect } from "react"


export const ViewAllTeacher = () =>{
  const [teacherID, setTeacherID] = useState("")
  const [teacherName, setTeacherName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  const [teachers, setTeachers] = useState([])

  const filterAllTeachers = async() => {
    let url;
    if (teacherID.length !== 0) {
      url = `https://bdmos.onrender.com/api/teachers/?search=${teacherID}`;
    } else if (teacherName.length !== 0) {
      url = `https://bdmos.onrender.com/api/teachers/?search=${teacherName}`;
    } else if (phoneNumber.length !== 0) {
      url = `https://bdmos.onrender.com/api/teachers/?search=${phoneNumber}`;
    } else {
      getAllTeacher();
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
      setTeachers(data)
    }else{
      console.error("Failed to fetch students")
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

    if(response.ok){
      const sortedData = data.sort((a, b) => a.first_name.localeCompare(b.first_name));
      setTeachers(sortedData)
    }else{
      console.error("Failed to fetch students", response.statusText)
    }
  }

  useEffect(() =>{
    if(!teacherID && !teacherName && !phoneNumber){
      getAllTeacher()
    } else if(teacherID){
      filterAllTeachers()
    } else if(teacherName){
      filterAllTeachers()
    } else if(phoneNumber){
      filterAllTeachers()
    } else{
      getAllTeacher()
    }
  }, [teachers])

	return(
		<div>
      <div className="position-sticky">
        <AdminDashFrame />
      </div>
			<section>
        <div className="main-content">
          <div className="container-lg">
            <div className="row my-3 pb-4">
              <div className="col-md-8 col-sm-6 col-6">
                <h5>Teachers</h5>
                <p>List Off Teachers</p>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
							  <Link to="/admin/addTeacher" className="light-navyblue-background p-3 border-radius"><FontAwesomeIcon icon={faUser} className="px-2"/>  Add Teacher</Link>
						  </div>
            </div>

            <form action="">
              <div className="row  g-3">
                <div className="col-sm-3 mb-4">
                  <input type="text" className=" p-2 form-dark border-radius view-teacher-input " placeholder="Search by ID..." value={teacherID} onChange={(e) => setTeacherID(e.target.value)}/>
                </div>

                <div className="col-sm-3 mb-4">
                  <input type="text" className=" p-2 form-dark border-radius view-teacher-input" placeholder="Search by Name..." value={teacherName} onChange={(e) => setTeacherName(e.target.value)}/>
                </div>

                <div className="col-sm-3 mb-4">
                  <input type="text" className=" p-2 form-dark border-radius view-teacher-input" placeholder="Search by Class..." value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                </div>
              </div>            
            </form>


            <section className="view-content-height scroll-bar-y">
              <div className="row">
                <div className="col-xxl-12">
                  <div className="row  g-2">
                    {teachers.map((teacher) =>(                  
                      <div className="col-md-4 col-sm-6 col-xxl-3">
                        <div className="teacher-list">
                          <div className="teacher-list-boxes boxing-shadow py-3 ps-3">
                            <img src={teacher.passport} alt="" /> 
                            <div className="ps-3">
                              <h5>{teacher.username}</h5>
                              <p> {`${teacher.first_name} ${teacher.last_name}`} </p>
                              <Link>View Profile</Link>
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