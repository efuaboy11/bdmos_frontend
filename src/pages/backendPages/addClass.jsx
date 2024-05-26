import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link } from "react-router-dom"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useContext } from "react"
import Alert from '@mui/material/Alert';
import React from 'react'
import { useForm } from "react-hook-form"
import CircularProgress from '@mui/material/CircularProgress';
import AuthContext from "../../context/AuthContext"


export const AddClass = () =>{
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
                <h5>Add Class</h5>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
							  <Link to="/admin" >Dashboard /  </Link>
                <Link to="/admin/viewClass">  View Sessions</Link>
						  </div>
            </div>


            <section>
              <div className="boxing-shadow ">
                <div className="navyblue-blackground-dash py-4">
                  <p className="text-center">PLEASE ENTER THE CLASS NAME YOU WANT TO ADD AND SELECT THE SUBJECT</p>
                </div>


                <div className="row mx-2">
                  <div className="col-md-11 mt-5">
                    <input className="delete-student-input form-dark py-2 px-3" type="text" placeholder="Enter class Name..."/>
                  </div>


                </div>

                <div className="m-4 p-3 add-class-nursery non-wrap-text">
                  <p className="pb-4">Nursery Subject</p>
                  <div className="row">
                    <div className="col-12 col-sm-6 col-md-2">
                      <div className="d-flex">
                        <input type="checkbox"/>
                        <p  className="px-4">Number Work</p>
                      </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-2">
                      <div className="d-flex">
                        <input type="checkbox" />
                        <p className="px-4">Letter  Work</p>
                      </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-2">
                      <div className="d-flex">
                        <input type="checkbox" />
                        <p className="px-4">Phonices</p>
                      </div>
                    </div>


                    <div className="col-12 col-sm-6 col-md-2">
                      <div className="d-flex">
                        <input type="checkbox" />
                        <p className="px-4">Nature Talk</p>
                      </div>
                    </div>


                    <div className="col-12 col-sm-6 col-md-2">
                      <div className="d-flex">
                        <input type="checkbox" />
                        <p className="px-4">Social Habit</p>
                      </div>
                    </div>


                    <div className="col-12 col-sm-6 col-md-2">
                      <div className="d-flex">
                        <input type="checkbox" />
                        <p className="px-4">C.R.S</p>
                      </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-2">
                      <div className="d-flex">
                        <input type="checkbox" />
                        <p className="px-4">Computer</p>
                      </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-2">
                      <div className="d-flex">
                        <input type="checkbox" />
                        <p className="px-4">Hand Writing</p>
                      </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-2">
                      <div className="d-flex">
                        <input type="checkbox" />
                        <p className="px-4">Fine Art</p>
                      </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-2">
                      <div className="d-flex">
                        <input type="checkbox" />
                        <p className="px-4">Rhythms</p>
                      </div>
                    </div>
                  </div>
                </div>


                <div className=" ps-4 pt-3 pb-5 mb-4">
                    <input className="admin-btn py-2 px-5" type="submit" />                    
                  </div>



              </div>
            </section>

        
          </div>
        </div>

      </section>
		</div>
	)
}