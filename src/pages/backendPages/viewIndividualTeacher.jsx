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


export const TeacherPage = () =>{
  const { authTokens, details } = useContext(AuthContext)
	return(
		<div>
      <div className="position-sticky">
        <AdminDashFrame />
        <section className="main-content">
          <div className="container-lg">


            <div className="row justify-content-center">
              <div className="col-11 col-lg-10 col-xxl-8 teacher-page-container">
                { details &&
                  <div>
                    <div className="d-flex justify-content-center">
                      <img  className="teacher-page-img" src={details.passport} alt="" />
                    </div>
                    <div className="row">
                      <div className="col-xxl-12">
                        <div>
                        
                          <div className="row g-2 ps-4 pt-5">
                            <div className="col-sm-6">
                              <div>
                                <p>Teacher ID: {details.username}</p>
                                <p>First Name: {details.first_name}</p>
                                <p>Middle Name: {details.middle_name}</p>
                                <p>Last Name: {details.last_name}</p>
                                <p>Tempopary Residence: {details.temporary_residence}</p>
                                <p>Permanent Residence: {details.permanent_residence}</p>
                                <p>State of origin: {details.state_of_origin}</p>
                                <p>City/TOwn: {details.city_or_town}</p>
                                <p>DOB: {details.date_of_birth}</p>
                                <p>Sex: {details.sex}</p>
                                <p>Parent Number: {details.phone_number}</p>
                                <p>Parent Email: {details.teacher_email}</p>
                                <p>Religion: {details.religion}</p>
                                <p>Disability: {details.disability}</p>
                              </div>
                            </div>

                            <div className="col-sm-6">
                              <div>

                                <p>Marital Status: {details.maritial_status}</p>
                                <p>Years of Experience: {details.years_of_experience}</p>
                                <p>Computer Skills: {details.computer_skills}</p>
                                <p>Disablility Text:{details.disability_note} </p>
                                <p>cv: <a  href={details.cv} download={details.cv}>link</a></p>
                                <p>First leaving school cert: <a href={details.flsc} target="_blank" rel="noopener noreferrer">link</a></p>
                                <p>Waec/Neco/gce: <a href={details.waec_neco_nabteb_gce} target="_blank" rel="noopener noreferrer">link</a></p>
                                <p>Secondary School Transcript: <a href={details.secondary_school_transcript} target="_blank" rel="noopener noreferrer">link</a></p>
                                <p>University/Poly cert: <a href={details.university_polytech_institution_cer} target="_blank" rel="noopener noreferrer">link</a></p>
                                <p>University/poly Transcript: <a href={details.university_polytech_institution_cer_trans} target="_blank" rel="noopener noreferrer">link</a></p>
                                <p>Other Cert: <a href={details.other_certificate} target="_blank" rel="noopener noreferrer">link</a></p>
                                <p>Teacher Speech: {details.teacher_speech}</p>
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