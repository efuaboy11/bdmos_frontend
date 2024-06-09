import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link } from "react-router-dom"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useContext, useEffect } from "react"
import Alert from '@mui/material/Alert';
import React from 'react'
import { useForm } from "react-hook-form"
import CircularProgress from '@mui/material/CircularProgress';
import AuthContext from "../../context/AuthContext"
import pic from "../../img/pexels-andrea-piacquadio-762041 (2).jpg"


export const StudentPage = () =>{
  const { authTokens, details } = useContext(AuthContext)
	return(
		<div>
      <div className="position-sticky">
        <AdminDashFrame />
        <section className="main-content">
          <div className="container-lg">


            <div className="row justify-content-center">
              <div className="col-11 col-lg-10 col-xxl-8 student-page-container">
                { details &&
                  <div>
                    <div className="d-flex justify-content-center">
                      <img  className="student-page-img" src={details.passport} alt="" />
                    </div>
                    <div className="row">
                      <div className="col-xxl-12">
                        <div>
                        
                          <div className="row g-2 ps-4 pt-5">
                            <div className="col-sm-6">
                              <div>
                                <p>Student ID: {details.username}</p>
                                <p>Pasword: sbhsise234</p>
                                <p>First Name: {details.first_name}</p>
                                <p>Middle Name: {details.middle_name}</p>
                                <p>Last Name: {details.last_name}</p>
                                <p>DOB: {details.date_of_birth}</p>
                                <p>Sex: {details.sex}</p>
                                <p>Father Name: {details.father_name}</p>
                                <p>Mother Name: {details.mother_name}</p>
                                <p>Gurdian: {details.gurdian_name}</p>
                              </div>
                            </div>

                            <div className="col-sm-6">
                              <div>
                                <p>Parent Number: {details.parents_phone_number}</p>
                                <p>Parent Email: {details.parents_email}</p>
                                <p>State Off Origin: {details.state_of_origin}</p>
                                <p>Religion: {details.religion}</p>
                                <p>Disability: {details.disability}</p>
                                <p>Class:  {details.student_class}</p>
                                <p>City/Town: {details.city_or_town}</p>
                                <p>Previous School:{details.previous_school} </p>
                                <p>Disablility Text:{details.disability_note} </p>
                                <p>Date Added: {details.date_joined}</p>

                              </div>
                            </div>
                          </div>                 
                          
                          



                        </div>
                      </div>
                    </div>
                  </div>
                }


              </div>
            </div>


          </div>
        </section>
      </div>
		</div>
	)
}