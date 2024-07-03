import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link} from "react-router-dom"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import pic from "../../img/pexels-andrea-piacquadio-762041 (2).jpg"
import AuthContext from "../../context/AuthContext"
import { useContext, useEffect, useState } from "react"
import Alert from '@mui/material/Alert';
import React from 'react'
import { useForm } from "react-hook-form"
import CircularProgress from '@mui/material/CircularProgress';
import { LoadingSpiner } from "../../component/spin"



export const ResultPage = () => {
  const [showModal, setShowModal] = useState(false)
  const {authTokens,
    className,
    term,
    session,
    classe,
    terms,
    sessions,
    resultStudent,
    setResultStudent,
    studentID,} = useContext(AuthContext)

  const [classname, setClassname] = useState("")
  const [termName, setTermName] = useState("")
  const [sessionName, setSessionName] = useState("")

  const [subjects, setSubjects] = useState([])
  const [subjectResults, setSubjectResults] = useState([]);

  const [totalMarkObtain, setTotalMarkObtain] = useState("")
  const [studentAverage, setStudentAverage] = useState("")
  const [classAverage, setClassAverage] = useState("")
  const [students, setStudents] = useState("")
  const [position, setPosition] = useState("")
  const [decision, setDecision] = useState("")
  const [agility, setAgility] = useState("")
  const [caring, setCaring] = useState("")
  const [communication, setCommunication] = useState("")
  const [loving, setLoving] = useState("")
  const [puntuality, setPuntuality] = useState("")
  const [seriousness, setSeriousness] = useState("")
  const [socialization, setSocialization] = useState("")
  const [attentiveness, setAttentiveness] = useState("")
  const [handlingOfTools, setHandlingOfTools] = useState("")
  const [honesty, setHonesty] = useState("")
  const [leadership, setLeadership] = useState("")
  const [music, setMusic] = useState("")
  const [neatness, setNeatness] = useState("")
  const [perserverance, setPerserverance] = useState("")
  const [politeness, setPoliteness] = useState("")
  const [tools, setTools] = useState("")
  const [teacherComment, setTeacherComment] = useState("")
  const [principalComment, setPrincipalComment] = useState("")
  const [nextTermBegins, setNextTermBegins] = useState("")
  const [nextTermSchoolFees, setNextTermSchoolFees] = useState("")


  const [alert, setAlert] = useState("")
  const [showAlert, setShowAlert] = useState(false)
  const [alertSeverity, setAlertSeverity] = useState("")
  const {handleSubmit, register, formState:{errors, isValid}} = useForm()
  const [loader, setLoader] = useState("")
  const [disablebutton, setdisablebutton] = useState(false)

  const onSubmit = (data, e) =>{
    e.preventDefault()
    setdisablebutton(true)
    if(isValid){
    
      console.log(data)
      handleSubmitResult(e)
    }else{
      console.log('error')
      setdisablebutton(false)
    }
  }


  useEffect(() => {
    const fetchStudent = async () => {
      const response = await fetch(`https://bdmos.onrender.com/api/students/${studentID}/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authTokens.access}`,
        },
      });
      const data = await response.json();
      setResultStudent(data);
    };

    const fetchSubjects = async () => {
      const response = await fetch(
        `https://bdmos.onrender.com/api/class/${classe}/`
      );
      const data = await response.json();
      setSubjects(data.all_subjects);
      setSubjectResults(
        data.all_subjects.map((subject) => ({
          subject: subject.id,
          total_ca: "",
          exam_score: "",
          total: "",
          grade: "",
          position: "",
        }))
      );
    };

    fetchStudent();
    fetchSubjects()

    if (className.length > 0 && classe !== undefined) {

      const targetClasseId = typeof classe === 'string' ? parseInt(classe, 10) : classe;

      const classn = className.find((classn) => classn.id === targetClasseId);
      if (classn) {
        setClassname(classn.name);
      } else {
        console.error(`Class with ID ${targetClasseId} not found`);
      }
    }

    if(term.length > 0 && terms !== undefined){
      const targetTermId = typeof terms === 'string' ? parseInt(terms, 10) : terms

      const termn = term.find((termn) => termn.id === targetTermId)
      if(termn){
        setTermName(termn.name)
      }else {
        console.error(`Term with ID ${targetTermId} not found`)
      }
    }
    
    if(session.length > 0 && sessions !== undefined){
      const targetSessionId = typeof sessions === 'string' ? parseInt(sessions, 10) : sessions

      const sessionn = session.find((sessionn) => sessionn.id === targetSessionId)
      if(sessionn){
        setSessionName(sessionn.name)
      }else {
        console.error(`Session with ID ${targetSessionId} not found`)
      }
    }
  }, [authTokens.access, studentID, setResultStudent, className, classe]);

  const handleSubjectChange = (index, e) => {
    const values = [...subjectResults];
    values[index][e.target.name] = e.target.value;
    setSubjectResults(values);
  };

  const handleSubmitResult = async (e) => {
    e.preventDefault();
    
    e.preventDefault()
    if(loader){
      setLoader(false)
    }else{
      setLoader(true)
    }


    const resultData = {
      student: resultStudent.id,
      student_class: classe,
      term: terms,
      session: sessions,
      sex: resultStudent.sex,
      total_marks_obtain: totalMarkObtain,
      student_average: studentAverage,
      class_average: classAverage,
      students: students,
      position: position,
      decision: decision,
      agility: agility,
      caring: caring,
      communication: communication,
      loving: loving,
      puntuality: puntuality,
      seriousness: seriousness,
      socialization: socialization,
      attentiveness: attentiveness,
      handling_of_tools: handlingOfTools,
      honesty: honesty,
      leadership: leadership,
      music: music,
      neatness: neatness,
      perserverance: perserverance,
      politeness: politeness,
      tools: tools,
      teacher_comment: teacherComment,
      principal_comment: principalComment,
      next_term_begins: nextTermBegins,
      next_term_school_fees: nextTermSchoolFees,
      subject_results: subjectResults,
    };

    try {
      const response = await fetch('https://bdmos.onrender.com/api/result/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authTokens.access}`
        },
        body: JSON.stringify(resultData)
      });


      if(response.ok){
        setShowAlert(true)
        setAlert("Result Uploaded Successfully")
        console.log('sucess')
        setAlertSeverity("success")
        setLoader(false)
        setdisablebutton(false)
        setShowModal(true)

      }else{
        const errorData = await response.json()
        const errorMessage = errorData.error
        setShowAlert(true)
        setAlert('There is an error processing your data')
        setAlertSeverity("error")
        console.log(errorMessage)
        setLoader(false)
        setdisablebutton(false)
      }


      const data = await response.json();
      console.log('Result submitted successfully:', data);
    } catch (error) {
      console.error('Error submitting result:', error);
    }
  };
  
	return(
    <div>
      <div className="position-sticky">
        <AdminDashFrame />
      </div>
      <section className="main-content">
        {loader &&
          < LoadingSpiner/>
        }
        <div className="alert-container">
          <div className="alert-position">
            {showAlert && (
              <Alert
                severity={alertSeverity}
                onClose={() => setShowAlert(false)}
              >
                {alert}
              </Alert>
            )}
          </div>
        </div>

        {showModal &&
          <section className="overlay-background">
            <div className="admin-modal-container">
              <div className="admin-modal-content">
                <h5 className="sucessfull-text">Sucess</h5>
                <hr />
                <p>Result  successfully uploaded.</p>
                <div className="d-flex justify-content-between py-3">
                  <div></div>
                  <div>
                    <Link to="/admin/UploadResult" className="admin-modal-close mx-3">Done</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        }

        <div className="container-lg">
          <section>
            <div className="text-center py-5 mt-5">
              <h4>BDOMS RESULT SHIT</h4>
              <p>Please fill the details</p>
            </div>
          </section>

          <form onSubmit={handleSubmit(onSubmit)}>
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
                      <input type="text" className="admin-input  form-dark" disabled value={`${resultStudent?.first_name} ${resultStudent?.middle_name} ${resultStudent?.last_name}`}/>
                    </div>

                    <div className="col-lg-3 col-md-2 col-sm-5 col-6">
                      <label htmlFor="" className="form-label">Class</label>
                      <input type="text" className="admin-input compulsory form-dark" disabled value={classname || ''}/>
                    </div>

                    <div className="col-md-2 col-sm-4 col-6">
                      <label htmlFor="" className="form-label">sex</label>
                      <input type="text" className="admin-input compulsory form-dark" disabled value={resultStudent?.sex}/>
                    </div>

                    <div className="col-md-2 col-lg-1 col-sm-3 col-6">
                      <label htmlFor="" className="form-label">session</label>
                      <input type="text" className="admin-input compulsory form-dark" disabled value={sessionName || ""}/>
                    </div>

                    <div className="col-md-2 col-sm-6 col-6">
                      <label htmlFor="" className="form-label">Term</label>
                      <input type="text" className="admin-input compulsory form-dark" disabled value={termName || ""}/>
                    </div>

                    <div className="col-lg-2 col-md-3 col-sm-3 col-6">
                      <label htmlFor="" className="form-label non-wrap-text">Total Marks Obtain</label>
                      <input type="text" className={` admin-input form-dark ${errors.marks ? 'error-input' : ''}`}  {...register('marks', {required: true})}  value={totalMarkObtain} onChange={(e) => setTotalMarkObtain(e.target.value)}/>
                    </div>

                    <div className="col-md-2 col-sm-3 col-6">
                      <label htmlFor="" className="form-label non-wrap-text">Student Average</label>
                      <input type="text" className={` admin-input form-dark ${errors.studentAverage ? 'error-input' : ''}`}  {...register('studentAverage', {required: true})} value={studentAverage} onChange={(e) => setStudentAverage(e.target.value)}/>
                    </div>

                    <div className="col-md-2 col-sm-4 col-6">
                      <label htmlFor="" className="form-label">Class Average</label>
                      <input type="text" className={` admin-input form-dark ${errors.classAverage ? 'error-input' : ''}`}  {...register('classAverage', {required: true})} value={classAverage} onChange={(e) => setClassAverage(e.target.value)}/>
                    </div>

                    <div className="col-md-1 col-sm-4 col-6">
                      <label htmlFor="" className="form-label non-wrap-text">Students</label>
                      <input type="text" className={` admin-input form-dark ${errors.students ? 'error-input' : ''}`}  {...register('students', {required: true})} value={students} onChange={(e) => setStudents(e.target.value)}/>
                    </div>

                    <div className="col-lg-1 col-md-2 col-sm-4 col-6">
                      <label htmlFor="" className="form-label">Postion</label>
                      <input type="text" className={` admin-input form-dark ${errors.position ? 'error-input' : ''}`}  {...register('position', {required: true})} value={position} onChange={(e) => setPosition(e.target.value)}/>
                    </div>

                    <div className="col-md-2 col-6">
                      <label htmlFor="" className="form-label">Decision</label>
                      <input type="text" className={` admin-input form-dark ${errors.decision ? 'error-input' : ''}`}  {...register('descision', {required: true})} value={decision} onChange={(e) => setDecision(e.target.value)}/>
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
                                {subjectResults.map((subject, index) => {
                                  const subjectn = subjects.find((s) => s.id === subject.subject);
                                  const subjectName = subjectn ? subjectn.name : '';
                                  return (
                                    <tr key={index}>
                                      <td>{subjectName}</td>
                                      <td><input className={` admin-input form-dark`}   type="text" name="total_ca" value={subject.total_ca} onChange={(e) => handleSubjectChange(index, e)} /></td>
                                      <td><input className={` admin-input form-dark`}   type="text" name="exam" value={subject.exam} onChange={(e) => handleSubjectChange(index, e)} /></td>
                                      <td><input className={` admin-input form-dark`}   type="text" name="total" value={subject.total} onChange={(e) => handleSubjectChange(index, e)} /></td>
                                      <td><input className={` admin-input form-dark`}   type="text" name="grade" value={subject.grade} onChange={(e) => handleSubjectChange(index, e)} /></td>
                                      <td><input className={` admin-input form-dark`}   type="text" name="position" value={subject.position} onChange={(e) => handleSubjectChange(index, e)} /></td>
                                    </tr>
                                  );
                                })}
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
                                          <td><input className={` admin-input form-dark ${errors.agility ? 'error-input' : ''}`}  {...register('agility', {required: true})} type="text" value={agility} onChange={(e) => setAgility(e.target.value)}/></td>
                                        </tr>

                                        <tr>
                                          <td>CARING</td>
                                          <td><input className={` admin-input form-dark ${errors.caring ? 'error-input' : ''}`}  {...register('caring', {required: true})} type="text" value={caring} onChange={(e) => setCaring(e.target.value)}/></td>
                                        </tr>

                                        <tr>
                                          <td>COMMUNiCATION</td>
                                          <td><input className={` admin-input form-dark ${errors.communication ? 'error-input' : ''}`}  {...register('communication', {required: true})} type="text" value={communication} onChange={(e) => setCommunication(e.target.value)}/></td>
                                        </tr>

                                        <tr>
                                          <td>LOVING</td>
                                          <td><input className={` admin-input form-dark ${errors.loving ? 'error-input' : ''}`}  {...register('loving', {required: true})} type="text" value={loving} onChange={(e) => setLoving(e.target.value)}/></td>
                                        </tr>

                                        <tr>
                                          <td>PUNTUALITY</td>
                                          <td><input className={` admin-input form-dark ${errors.puntuality ? 'error-input' : ''}`}  {...register('puntuality', {required: true})} type="text" value={puntuality} onChange={(e) => setPuntuality(e.target.value)}/></td>
                                        </tr>

                                        <tr>
                                          <td>SERIOUSNESS</td>
                                          <td><input className={` admin-input form-dark ${errors.seriousness ? 'error-input' : ''}`}  {...register('seriousness', {required: true})} type="text" value={seriousness} onChange={(e) => setSeriousness(e.target.value)}/></td>
                                        </tr>

                                        <tr>
                                          <td>SOCAILIZATION</td>
                                          <td><input className={` admin-input form-dark ${errors.socialization ? 'error-input' : ''}`}  {...register('socialization', {required: true})} type="text" value={socialization} onChange={(e) => setSocialization(e.target.value)}/></td>
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
                                        <td><input className={` admin-input form-dark ${errors.attentiveness ? 'error-input' : ''}`}  {...register('attentiveness', {required: true})} type="text" value={attentiveness} onChange={(e) => setAttentiveness(e.target.value)}/></td>
                                      </tr>

                                      <tr>
                                        <td>HANDLING OF TOOLS</td>
                                        <td><input className={` admin-input form-dark ${errors.handlingOfTools ? 'error-input' : ''}`}  {...register('handlingOfTools', {required: true})} type="text" value={handlingOfTools} onChange={(e) => setHandlingOfTools(e.target.value)}/></td>
                                      </tr>

                                      <tr>
                                        <td>HONESTY</td>
                                        <td><input className={` admin-input form-dark ${errors.honesty ? 'error-input' : ''}`}  {...register('honesty', {required: true})} type="text" value={honesty} onChange={(e) => setHonesty(e.target.value)}/></td>
                                      </tr>

                                      <tr>
                                        <td>LEARDERSHIP</td>
                                        <td><input className={` admin-input form-dark ${errors.leadership ? 'error-input' : ''}`}  {...register('leadership', {required: true})} type="text" value={leadership} onChange={(e) => setLeadership(e.target.value)}/></td>
                                      </tr>

                                      <tr>
                                        <td>MUSIC</td>
                                        <td><input className={` admin-input form-dark ${errors.music ? 'error-input' : ''}`}  {...register('music', {required: true})} type="text" value={music} onChange={(e) => setMusic(e.target.value)}/></td>
                                      </tr>

                                      <tr>
                                        <td>NEATNESS</td>
                                        <td><input className={` admin-input form-dark ${errors.neatness ? 'error-input' : ''}`}  {...register('neatness', {required: true})} type="text" value={neatness} onChange={(e) => setNeatness(e.target.value)}/></td>
                                      </tr>

                                      <tr>
                                        <td>PERSERVERANCE</td>
                                        <td><input className={` admin-input form-dark ${errors.perserverance ? 'error-input' : ''}`}  {...register('perserverance', {required: true})} type="text" value={perserverance} onChange={(e) => setPerserverance(e.target.value)}/></td>
                                      </tr>

                                      <tr>
                                        <td>POLITENESS</td>
                                        <td><input className={` admin-input form-dark ${errors.politeness ? 'error-input' : ''}`}  {...register('politeness', {required: true})} type="text" value={politeness} onChange={(e) => setPoliteness(e.target.value)}/></td>
                                      </tr>

                                      <tr>
                                        <td>TOOLS</td>
                                        <td><input className={` admin-input form-dark ${errors.tools ? 'error-input' : ''}`}  {...register('tools', {required: true})} type="text" value={tools} onChange={(e) => setTools(e.target.value)}/></td>
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
                    <input type="text" className={` admin-input form-dark ${errors.teacherComment ? 'error-input' : ''}`}  {...register('teacherComment', {required: true})} value={teacherComment} onChange={(e) => setTeacherComment(e.target.value)}/>
                  </div>

                  <div className="d-flex non-wrap-text px-3 pb-3">
                    <p className="pe-3">PRINCIPAL COMMENT</p>
                    <input type="text" className={` admin-input form-dark ${errors.principalComment ? 'error-input' : ''}`}  {...register('principalComment', {required: true})} value={principalComment} onChange={(e) => setPrincipalComment(e.target.value)}/>
                  </div>

                  <div className="d-flex non-wrap-text px-3 pb-3">
                    <p className="pe-3">NEXT TERM BEGINS</p>
                    <input type="date" className={` admin-input form-dark ${errors.nextTermBegins ? 'error-input' : ''}`}  {...register('nextTermBegins', {required: true})} value={nextTermBegins} onChange={(e) => setNextTermBegins(e.target.value)}/>
                  </div>

                  <div className="d-flex non-wrap-text px-3 pb-3">
                    <p className="pe-3">NEXT TERM SCHOOL FEES</p>
                    <input type="text" className={` admin-input form-dark ${errors.nextTermSchoolFees ? 'error-input' : ''}`}  {...register('nextTermSchoolFees', {required: true})} value={nextTermSchoolFees} onChange={(e) => setNextTermSchoolFees(e.target.value)}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-5">
              <button className="admin-btn py-2 px-5" type="submit" disabled={disablebutton}>Submit</button>
            </div>
           
          </form>
        </div>
      </section>

    </div>
	)
}