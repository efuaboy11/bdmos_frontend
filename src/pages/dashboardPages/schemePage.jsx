import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link } from "react-router-dom"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import pic from "../../img/pexels-andrea-piacquadio-762041 (2).jpg"
import { useContext, useEffect, useState } from "react"
import AuthContext from "../../context/AuthContext"
import { DashFrame } from "../../component/dashFrame"

export const SchemePage = () =>{
  const [formValues, setFormValues] = useState([])
  const [subjects, setSubjects] = useState([])

  const {
    classe,
    terms,
    sessions,
    date} = useContext(AuthContext)

  useEffect(() => {
    const fetchSubjects = async () => {
      const response = await fetch(`https://bdmos.onrender.com/api/class/${classe}/`)
      const data = await response.json()
      setSubjects(data.all_subjects)
    }

    fetchSubjects()
  }, [])

  const handleChange = (index, e) => {
    const values = [...formValues]
    if (e.target.name === 'scheme'){
      values[index][e.target.name] = e.target.files[0]
    } else {
      values[index][e.target.name] = e.target.value
    }
    setFormValues(values)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formDataArray = formValues.map((value) => {
      const formData = new FormData()
      Object.keys(value).forEach((key) => {
        formData.append(key, value[key])
      })
      return formData
    })

    const promises = formDataArray.map(async (formData) => {
      const response = await fetch('https://bdmos.onrender.com/api/scheme/', {
        method: "POST",
        body: formData
      })
      return response.json()
    })

    Promise.all(promises).then((results) => {
      console.log(results)
    }).catch((error) => {
      console.error("Error uploading schemes:", error)
    })
  }

  useEffect(() => {
    setFormValues(subjects.map(subject => ({
      student_class: classe,
      term: terms,
      session: sessions,
      date: date,
      subject: subject.id,
      scheme: null
    })))
  }, [subjects])

  console.log(subjects)
	return(
		<div>
      <div className="position-sticky">
      <DashFrame />
      </div>
			<section>
        <div className="main-content">
          <div className="container-lg">
            <div className="row my-3 pb-4">
              <div className="col-md-8 col-sm-6 col-6">
                <h5>View Scheme</h5>
                <p>This are the list off scheme off work for this term</p>
              </div>
            </div>

            <form action="">
              <div className="row add-student">
                <div className="col-sm-4 mb-4">
                  <input type="text" className=" p-2 form-dark border-radius admin-input" placeholder="Search by Subject..."/>
                </div>
              </div>            
            </form> 



            <section className="container-lg navyblue-blackground-dash">
              <div className="view-content-height scroll-bar">
                <div className="non-wrap-text">
                  <table className="table1 ">
                    <thead>
                      <tr>
                        <th>Subjects</th>
                        <th>Link</th>
                      </tr>
                    </thead>
                    <tbody className="admin-home-table view-schoolitems-table ">

                      <tr>
                        <td>Maths</td>
                        <td><Link>Download</Link></td>
                        
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      
		</div>
	)
}