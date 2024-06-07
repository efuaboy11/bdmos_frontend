import { AdminDashFrame } from "../../component/adminDashFRame";
import { Link } from "react-router-dom";
import { faTrashCan, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import CircularProgress from '@mui/material/CircularProgress';
import { Alert } from "@mui/material";

export const ViewSession = () => {
  const [schoolSections, setSchoolSections] = useState("");
  const [datas, setDatas] = useState([]);
  const [filteredDatas, setFilteredDatas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedSessionID, setSelectedSessionID] = useState(null);
  const [alerts, setAlerts] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("");
  const [loader, setLoader] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  const { authTokens } = useContext(AuthContext);

  const filterAllSession = async () => {
    if (schoolSections.length === 0) {
      getSession();
      return;
    }

    const url = `https://bdmos.onrender.com/api/sessions/?search=${schoolSections}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authTokens.access}`,
      },
    });

    const data = await response.json();

    if (response.ok) {
      setFilteredDatas(data);
    } else {
      console.error("Failed to fetch sessions");
    }
  };

  const getSession = async () => {
    const response = await fetch("https://bdmos.onrender.com/api/sessions", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authTokens.access}`,
      },
    });

    const data = await response.json();

    if (response.ok) {
      setDatas(data);
      setFilteredDatas(data);
    } else {
      console.error("Failed to fetch sessions", response.statusText);
    }
  };

  const showDeleteModal = (id) => {
    setSelectedSessionID(id);
    setShowModal(true);
  };

  const hideDeleteModal = () => {
    setShowModal(false);
    setSelectedSessionID(null);
  };

  const deleteSession = async () => {
    setDisableButton(true);
    setLoader(true);

    const response = await fetch(`https://bdmos.onrender.com/api/sessions/${selectedSessionID}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authTokens.access}`,
      },
    });

    if (response.ok) {
      setShowAlert(true);
      setAlerts("Session deleted successfully");
      setAlertSeverity("success");
      setLoader(false);
      setDisableButton(false);
      setDatas(datas.filter((data) => data.id !== selectedSessionID));
      setFilteredDatas(filteredDatas.filter((data) => data.id !== selectedSessionID));
      setShowModal(false);
    } else {
      const errorData = await response.json();
      const errorMessage = errorData.error;
      setShowAlert(true);
      setAlerts("There is an error in processing your data");
      setAlertSeverity("error");
      setLoader(false);
      setDisableButton(false);
      console.error(errorMessage);
    }
  };

  useEffect(() => {
    if (schoolSections === "") {
      getSession();
    } else {
      filterAllSession();
    }
  }, [schoolSections]);

  return (
    <div>
      <div className="position-sticky">
        <AdminDashFrame />
      </div>
      <section>
        <div className="main-content">
          <div className="alert-container">
            <div className="alert-position">
              {showAlert && (
                <Alert severity={alertSeverity} onClose={() => setShowAlert(false)}>
                  {alerts}
                </Alert>
              )}
            </div>
          </div>

          {showModal && (
            <section className="overlay-background">
              <div className="admin-modal-container">
                <div className="admin-modal-content">
                  <h5>Delete Session?</h5>
                  <hr />
                  <p>This will delete the Session.</p>
                  <div className="d-flex justify-content-between py-3">
                    <div></div>
                    <div>
                      <button className="admin-modal-close mx-3" onClick={hideDeleteModal}>
                        Cancel
                      </button>
                      <button className="admin-modal-delete" disabled={disableButton} onClick={deleteSession}>
                        {loader ? <CircularProgress color="inherit" /> : "Delete"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          <div className="container-lg">
            <div className="row my-3 pb-4">
              <div className="col-md-8 col-sm-6 col-6">
                <h5>View Session</h5>
                <p>List of Sessions uploaded</p>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
                <Link to="/admin/AddSession" className="light-navyblue-background p-3 border-radius">
                  <FontAwesomeIcon icon={faUser} className="px-2" />
                  Upload Session
                </Link>
              </div>
            </div>

            <form>
              <div className="row add-student">
                <div className="col-sm-4 mb-4">
                  <input
                    type="text"
                    className="p-2 form-dark border-radius admin-input"
                    placeholder="Search For session"
                    value={schoolSections}
                    onChange={(e) => setSchoolSections(e.target.value)}
                  />
                </div>
              </div>
            </form>

            <section className="container-lg navyblue-blackground-dash">
              <div className="view-content-height scroll-bar">
                <div className="non-wrap-text">
                  <p className="ps-3 py-2">Event Upload</p>
                  <table className="table1">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Session</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody className="admin-home-table view-schoolitems-table">
                      {filteredDatas.map((data) => (
                        <tr key={data.id}>
                          <td>{data.id}</td>
                          <td>{data.name}</td>
                          <td onClick={() => showDeleteModal(data.id)}>
                            <FontAwesomeIcon className="text-center cursor-pointer" icon={faTrashCan} />
                          </td>
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
