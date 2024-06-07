import { AdminDashFrame } from "../../component/adminDashFRame";
import { Link } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const SendBulkEmail = () => {
  const [emailList, setEmailList] = useState([]);
  const [teachers, setTeachers] = useState();
  const [parents, setParents] = useState()
  const [emailSubject, setEmailSubject] = useState("")
  const [emailBody, setEmailBody] = useState("")

  console.log(emailList, teachers, parents);

  const getAllTeacherEmail = async () => {
    try {
      let response = await fetch("https://bdmos.onrender.com/api/list-emails/teachers/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok) {
        setEmailList(data.email_addresses);
        console.log("Got Email Successfully");
      } else {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAllParentEmail = async () => {
    try {
      let response = await fetch("https://bdmos.onrender.com/api/list-emails/parents/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok) {
        setEmailList(data.email_addresses);
        console.log("Got Parents Email Successfully");
      } else {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleTeacherCheckboxChange = (event) => {
    setTeachers(event.target.checked);
    if (event.target.checked) {
      getAllTeacherEmail();
    }
  };

  const handleParentCheckboxChange = (event) => {
    setParents(event.target.checked);
    if (event.target.checked) {
      getAllParentEmail();
    }
  };

  const sendBulkEmail = async (e) => {
    e.preventDefault()

    try {
      let response = await fetch("https://bdmos.onrender.com/api/send-email/",{
        method: "POST",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          to: emailList,
          subject: emailSubject,
          body: emailBody,
          is_bulk: "true"
        })
      })
  
      const data = await response.json()
  
      if(response.ok){
        console.log(data)
      }else{
        console.log(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

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
                <h5>Bulk Email</h5>
                <p>Broadcast Your message</p>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
                <Link to="/admin">Dashboard / </Link>
                <Link to='/admin/viewEmailem'> View Email</Link>
              </div>
            </div>

            <section>
              <div className="boxing-shadow">
                <div className="navyblue-blackground-dash py-4">
                  <p className="text-center">PLEASE FILL THE DETAILS</p>
                </div>

                <div className="row mx-2">
                  <div className="col-md-11 mt-5 d-flex align-items-center">
                    <label htmlFor="" className="pe-4">To: </label>

                    <input className="" type="checkbox" value={teachers} onChange={(e) => handleTeacherCheckboxChange(e)} />
                    <label htmlFor="" className="px-3">All Teachers</label>

                    <input className="" type="checkbox" value={parents} onChange={(e) => handleParentCheckboxChange(e)}/>
                    <label htmlFor="" className="px-3">All Parent</label>
                  </div>

                  <div className="col-md-11 mt-4 d-flex align-items-center">
                    <label htmlFor="" className="pe-4">Subject: </label>
                    <input className="form-control form-dark py-2 px-3" type="text" value={emailSubject} onChange={(e) => setEmailSubject(e.target.value)}/>
                  </div>

                  <div className="col-md-11 mt-4">
                    <textarea className="form-control form-dark" id="diabilityYes" rows="6" placeholder="text..." value={emailBody} onChange={(e) => setEmailBody(e.target.value)}></textarea>
                  </div>

                  <div className="col-md-10 pt-3 pb-5 mb-4 mt-3">
                    <input className="admin-btn py-2 px-5" type="submit" onClick={sendBulkEmail}/>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};
