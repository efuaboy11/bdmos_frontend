import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link } from "react-router-dom"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useEffect, useState } from "react"
import Alert from '@mui/material/Alert';
import React from 'react'
import { useForm } from "react-hook-form"
import CircularProgress from '@mui/material/CircularProgress';
import AuthContext from "../../context/AuthContext"
import pic from "../../img/pexels-andrea-piacquadio-762041 (2).jpg"



export const ViewResultPage = () =>{

  return(
    <div>
      <div className="position-sticky">
        <AdminDashFrame />
      </div>
      <section id="view-result-page">
        <div className="main-content">
          <div className="container-xxl">
            <section>
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
            </section>

            <section>
              <div className="view-result-page-header-bg p-3">
                <div>
                  <div className="row ">
                    <p className="col-lg-2 col-sm-3">ID: SBHSISE234</p>
                    <p className="col-lg-4 col-md-6 col-sm-8 ">Name: Iseghohimhen Ehizefua Oghenekevwe</p>
                    <p className="col-lg-2 col-sm-3">Class: Primary 4</p>
                    <p className="col-lg-2 col-sm-3">Sex: Male</p>   
                    <p className="col-lg-2 col-md-3 col-sm-5">Session: 2021/2022</p>
                    <p className="col-lg-2 col-sm-3">term: First Term</p>
                    <p className="col-lg-2 col-md-3 col-sm-5">Total Mark Obtain: 203</p>
                    <p className="col-lg-2 col-sm-4">Student Average: 84%</p>
                    <p className="col-lg-2 col-sm-4">class Average: 56%</p>
                    <p className="col-lg-2 col-sm-3">Student: 47</p>
                    <p className="col-lg-2 col-sm-3">Position: 5th</p>
                    <p className="col-lg-2 col-sm-3">Decison: passed</p>

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
                              <tr>
                                <td>MATH</td>
                                <td>59</td>
                                <td>59</td>
                                <td>59</td>
                                <td>59</td>
                                <td>59</td>
                              </tr>
                              <tr>
                                <td>MATH</td>
                                <td>59</td>
                                <td>59</td>
                                <td>59</td>
                                <td>59</td>
                                <td>59</td>
                              </tr>

                              <tr>
                                <td>MATH</td>
                                <td>59</td>
                                <td>59</td>
                                <td>59</td>
                                <td>59</td>
                                <td>59</td>
                              </tr>

                              <tr>
                                <td>MATH</td>
                                <td>59</td>
                                <td>59</td>
                                <td>59</td>
                                <td>59</td>
                                <td>59</td>
                              </tr>

                              <tr>
                                <td>MATH</td>
                                <td>59</td>
                                <td>59</td>
                                <td>59</td>
                                <td>59</td>
                                <td>59</td>
                              </tr>

                              <tr>
                                <td>MATH</td>
                                <td>59</td>
                                <td>59</td>
                                <td>59</td>
                                <td>59</td>
                                <td>59</td>
                              </tr>

                              <tr>
                                <td>MATH</td>
                                <td>59</td>
                                <td>59</td>
                                <td>59</td>
                                <td>59</td>
                                <td>59</td>
                              </tr>

                              <tr>
                                <td>MATH</td>
                                <td>59</td>
                                <td>59</td>
                                <td>59</td>
                                <td>59</td>
                                <td>59</td>
                              </tr>

                              

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
                                          <td>Good</td>
                                        </tr>

                                        <tr>
                                          <td>CARING</td>
                                          <td>Good</td>
                                        </tr>

                                        <tr>
                                          <td>COMMUNiCATION</td>
                                          <td>Good</td>
                                        </tr>

                                        <tr>
                                          <td>LOVING</td>
                                          <td>Good</td>
                                        </tr>

                                        <tr>
                                          <td>AGILITY</td>
                                          <td>Good</td>
                                        </tr>

                                        <tr>
                                          <td>PUNTUALITY</td>
                                          <td>Good</td>
                                        </tr>

                                        <tr>
                                          <td>SERIOUSNESS</td>
                                          <td>Good</td>
                                        </tr>

                                        <tr>
                                          <td>SOCAILIZATION</td>
                                          <td>Good</td>
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
                                          <td>Good</td>
                                        </tr>

                                        <tr>
                                          <td>HANGLING OFF TOOOLS</td>
                                          <td>Good</td>
                                        </tr>

                                        <tr>
                                          <td>HONESTY</td>
                                          <td>Good</td>
                                        </tr>

                                        <tr>
                                          <td>LEADERSHIP</td>
                                          <td>Good</td>
                                        </tr>

                                        <tr>
                                          <td>MUSIC</td>
                                          <td>Good</td>
                                        </tr>

                                        <tr>
                                          <td>NEATNESS</td>
                                          <td>Good</td>
                                        </tr>

                                        <tr>
                                          <td>PERSERVERANCE</td>
                                          <td>Good</td>
                                        </tr>

                                        <tr>
                                          <td>POLITENESS</td>
                                          <td>Good</td>
                                        </tr>

                                        <tr>
                                          <td>TOOLS</td>
                                          <td>Good</td>
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
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, expedita.</p>
                </div>

                <div className="d-flex non-wrap-text px-3 pb-3">
                  <p className="pe-3">PRINCIPAL COMMENT</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, expedita.</p>
                </div>

                <div className="d-flex non-wrap-text px-3 pb-3">
                  <p className="pe-3">NEXT TERM BEGINS</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, expedita.</p>
                </div>

                <div className="d-flex non-wrap-text px-3 pb-3">
                  <p className="pe-3">NEXT TERM SCHOOL FEES</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, expedita.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>
    </div>
      )
  }