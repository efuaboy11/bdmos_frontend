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


export const StudentPassword = () => {

  const { authTokens, details } = useContext(AuthContext);

  const [datas, setdatas] = useState([]);
  const [studentID, setStudentID] = useState("")
  const [studentName, setStudentName] = useState("")

  const getDetails = async () => {
    let response = await fetch("https://bdmos.onrender.com/api/student_passwords/", {
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

  const filterAllStudent = async() => {
    let url;
    if (studentID.length !== 0) {
      url = `https://bdmos.onrender.com/api/student_passwords/?search=${studentID}`;
    } else if (studentName.length !== 0) {
      url = `https://bdmos.onrender.com/api/student_passwords/?search=${studentName}`;
    } else {
      getDetails();
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
      setdatas(data)
    }else{
      console.error("Failed to fetch students")
    }
  }

  useEffect(() => {
    if(!studentID && !studentName){
      getDetails();
    } else if(studentID){
      filterAllStudent()
    } else if(studentName){
      filterAllStudent()
    } else{
      getDetails();
    }
  },[datas])

  console.log(datas)
  

  return (
    <div>
      <div className="position-sticky">
        <AdminDashFrame />
      </div>
      <section>
        <div className="main-content">
          <div className="container-lg">
            <div className="row my-3 pb-4">
              <div className="col-md-8 col-sm-6 col-6">
                <h5>Student Details</h5>
                <p>View student password</p>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
							  <Link to="/admin/addStudent" className="light-navyblue-background p-3 border-radius"><FontAwesomeIcon icon={faUser} className="px-2"/>Add Student</Link>
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

                {/* <div className="col-sm-1 mb-3">
                  <input type="button" value={"Submit"} className=" p-2 form-dark border-radius" onClick={filterAllStudent}/>
                </div> */}
              </div>            
            </form>



            <section className="container-lg navyblue-blackground-dash">
              <div className="view-content-height scroll-bar non-wrap-text">
                <div className="scroll-bar">
                  <p className=" ps-3 py-2">Parent Upload</p>
                  <table className="table1 ">
                    <thead>
                      <tr>
                        <th>Student Name</th>
                        <th>Student ID</th>
                        <th>Student Password</th>
                        <th>Date Joined</th>
                      </tr>
                    </thead>
                    

                    <tbody className="admin-home-table view-schoolitems-table ">
                      {datas.map((data) =>(
                        <tr>
                          <td>{data.student_name.last_name} {data.student_name.first_name}</td>
                          <td>{data.student_name.username}</td>
                          <td>{data.raw_password}</td>
                          <td>{data.student_name.date_joined}</td>
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
