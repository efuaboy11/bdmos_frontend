import {NotFound} from './pages/notFound';


import { Home } from './pages/home';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from './component/navbar';
import { Gallery } from './pages/gallery';
import { Portal } from './pages/portal';
import { Contact } from './pages/contact';
import { Application } from './pages/application';
import { Events } from './pages/event';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createContext, useState } from 'react';
import { DashBoard } from './pages/dashboardPages/dashboard';
import { PaymentStep1 } from './pages/dashboardPages/paymentStep1';
import { Scheme1 } from './pages/dashboardPages/scheme1';
import { Result1 } from './pages/dashboardPages/result1';
import { PaymentHistory } from './pages/dashboardPages/paymentHistory';
import { SchoolItems, SchoolStore } from './pages/dashboardPages/schoolStore';
import {AdminDashHome} from "./pages/backendPages/adminDashHome";
import {ViewAllStudents} from "./pages/backendPages/viewAllSudent"
import {AddStudent} from "./pages/backendPages/addStudent1"
import {DeleteStudent} from "./pages/backendPages/deleteStudent"
import {EditStudent} from "./pages/backendPages/editStudent1"
import {ViewAllTeacher} from "./pages/backendPages/viewAllTeacher"
import {AddTeacher} from "./pages/backendPages/addTeacher"
import {DeleteTeacher} from "./pages/backendPages/deleteTeacher"
import {EditTeacher}  from "./pages/backendPages/editTeacher"
import {ViewStudentItems} from "./pages/backendPages/ViewSchoolItems"
import {UploadSchoolItems} from "./pages/backendPages/uploadSchoolItems"
import {DeleteSchoolItem} from "./pages/backendPages/deleteSchoolItems"
import {EditSchoolItem} from "./pages/backendPages/editSchoolItems"
import {ViewStudentResult} from "./pages/backendPages/viewStudentResult"
import {UploaadResult} from "./pages/backendPages/uploadResult"
import {DeleteResult} from "./pages/backendPages/deleteResult"
import {EditResult} from "./pages/backendPages/editResult"
import {UploadEvent} from "./pages/backendPages/uploadEvent"
import {UploadNotification} from "./pages/backendPages/uploadNotification"
import {UploadPicture} from "./pages/backendPages/uploadPicture"
import {ViewEventUploaded} from "./pages/backendPages/viewEventUpload"
import {ViewNotificationUploaded} from "./pages/backendPages/viewNotificationUpload"
import {ViewPictureUploaded} from "./pages/backendPages/viewPictureUpload"
import {AddSession} from "./pages/backendPages/addSession"
import {AddClass} from "./pages/backendPages/addClass"
import {AddSubject} from "./pages/backendPages/addSubject"
import {ViewClass} from   "./pages/backendPages/viewClass"
import {ViewSession} from "./pages/backendPages/viewSession"
import {ViewSubject} from "./pages/backendPages/viewSubject"
import {SendEmail} from "./pages/backendPages/sendEmail"
import {SendBulkEmail} from "./pages/backendPages/sendBulkEmail"
import {ViewEmail} from "./pages/backendPages/viewEmail"
import {EditStudentPage} from "./pages/backendPages/editStudentPage"
import {EditTeacherPage} from "./pages/backendPages/editTeacherPage"
import {EditSchoolItemPage} from "./pages/backendPages/editSchoolItemPage"
import {ResultPage} from "./pages/backendPages/resultPage"
import {UploadScheme} from "./pages/backendPages/uploadScheme"
import { UploadSchemePage } from './pages/backendPages/uploadSchemePage'
import {GenerateScratchNumber} from "./pages/backendPages/generateScratchNumber"
import {ScratchNumberPage} from "./pages/backendPages/scratchNumberPage"
import { ViewGeneratedScratchNumber } from './pages/backendPages/viewGeneratedScratchNumber';


import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import { AddParent } from './pages/backendPages/addParent';
import { DeleteParent } from './pages/backendPages/deleteParent';
import { EditParent } from './pages/backendPages/editParent';
import { ViewAllParent } from './pages/backendPages/viewAllParent';
import { EditParentPage } from './pages/backendPages/editParentPage';
import { ViewResultPage } from './pages/backendPages/viewResultPage';
import { ViewScheme } from './pages/backendPages/viewScheme';
import { Settings } from './pages/backendPages/settings';
import { OurStory } from './pages/ourStory';
import { Vision } from './pages/vision';
import { OurValues } from './pages/values';
import { Anthem } from './pages/anthem';
import { Uniform } from './pages/uniform';
import { Addmision } from './pages/admision';
import { EditClass } from './pages/backendPages/editClassPage';
import { StudentPage } from './pages/backendPages/viewIndiviualStudent';
import { TeacherPage } from './pages/backendPages/viewIndividualTeacher';
import { FactSheet } from './pages/factSheet';
import { InfantSchool } from './pages/infantSchool';
import { InfantSchoolAbout } from './pages/infantSchoolAbout';
import { JuniorSchool } from './pages/juniorSchool';
import { JuniorSchoolAbout } from './pages/juniorSchoolAbout';
import { CurriculumInfant } from './pages/curriculumInfant';
import { CurriculumJunior } from './pages/curriclumJunior';
import { Literacy } from './pages/curriculumLiteracy';
import { Numeracy } from './pages/currNumeracy';
import { Science } from './pages/curriculumScience';
import { Blog } from './pages/eventBlog';
import ScrollToTop from './component/scrollToTop';
import { SchemePage } from './pages/dashboardPages/schemePage';
import { CartPage } from './pages/dashboardPages/cartPgae';
import { EditResultPage } from './pages/backendPages/editResultPage';
import { CheckResultClient } from './pages/dashboardPages/checkResultClient';
import { AccountPage } from './pages/backendPages/accountPage';
import { AddPayment } from './pages/backendPages/addPayment';
import { ApprovePayemnt } from './pages/backendPages/approvePayment';
import { AllPayment } from './pages/backendPages/allPayment';
import { DeclinePayment } from './pages/backendPages/declinePayment';
import { PendingPayment } from './pages/backendPages/pendingPayment';
import { PaymentOptions } from './pages/backendPages/paymentOption';
import { AdminScheme } from './pages/backendPages/adminScheme';
import { AdminSchemePage } from './pages/backendPages/adminSchemePage';
import { NoticeBoard } from './pages/dashboardPages/noticeBoard';
import { MakePaymentPage } from './pages/dashboardPages/makePaymentPage';
;





function App() {

  return (
    <div>
      <Router>
        <AuthProvider>
          <ScrollToTop />
          <Routes>

            {/* ------------------ Client Page -------------------------------- */}
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about/ourStory" element={<OurStory />} />
            <Route path="/about/Vision" element={<Vision />} />           
            <Route path="/about/ourValues" element={<OurValues />} />
            <Route path="/about/ourAnthem" element={<Anthem />} />
            <Route path="/info/uniform" element={<Uniform />} />  
            <Route path="/info/admission" element={<Addmision />} />    
            <Route path="/info/factSheet" element={<FactSheet />} />   
            <Route path="/campus/infantSchool" element={<InfantSchool />} />   
            <Route path="/campus/infantSchool/about" element={<InfantSchoolAbout />} />    
            <Route path="/campus/juniorSchool" element={<JuniorSchool />} />   
            <Route path="/campus/juniorSchool/about" element={<JuniorSchoolAbout />} />     
            <Route path="/curriculum/infant" element={<CurriculumInfant />} />   
            <Route path="/curriculum/junior" element={<CurriculumJunior />} />  
            <Route path="/curriculum/junior/literacy" element={<Literacy />} />        
            <Route path="/curriculum/junior/Numeracy" element={<Numeracy />} />     
            <Route path="/curriculum/junior/science" element={<Science />} />              
            <Route path="/portal" element={<Portal />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/application" element={<Application />} />
            <Route path="/event" element={<Events />} />
            <Route path="/event/blog" element={<Blog />} />



            {/* Private Route */}
            <Route element={<PrivateRoute/>}>

              {/* ---------------------  Student Dashboard ----------------------------- */}
              <Route path="/dashboard" element={<DashBoard />}/>
              <Route path="/paymentStep1" element={<PaymentStep1 />}/>
              <Route path="/makePaymentPage" element={<MakePaymentPage />}/>

              <Route path="/schemeStep1" element={<Scheme1 />}/>    
              <Route path="/schemePage" element={<SchemePage />}/>                   
              <Route path="/resultStep1" element={<Result1 />}/>
              <Route path="/checkResult" element={<CheckResultClient />}/>
              <Route path="/paymentHistory" element={<PaymentHistory />}/>
              <Route path="/noticeBoard" element={<NoticeBoard />}/>              
              <Route path="/schoolStore" element={<SchoolStore />}/>
              <Route path="/schoolStore/cartPage" element={<CartPage />}/>






              {/* ------------------------------ ADINM --------------------------------------- */}
              <Route path='/admin' element={<AdminDashHome />}/>
              <Route path="/admin/viewAllStudent" element={<ViewAllStudents />}/>
              <Route path="/admin/viewAllStudent/:id" element={<StudentPage />}/>
              <Route path="/admin/addStudent" element={<AddStudent />}/>
              <Route path="/admin/deleteStudent" element={<DeleteStudent />}/>
              <Route path='/admin/editStudent' element={<EditStudent/>}/>


              <Route path='/admin/viewAllTeacher' element={<ViewAllTeacher/>}/>
              <Route path='/admin/viewAllTeacher/:id' element={<TeacherPage/>}/>
              <Route path='/admin/addTeacher' element={<AddTeacher/>}/>
              <Route path='/admin/deleteTeacher' element={<DeleteTeacher/>}/>
              <Route path='/admin/editTeacher' element={<EditTeacher />}/>


              <Route path='/admin/viewAllParent' element={<ViewAllParent />}/>
              <Route path='/admin/addParent' element={<AddParent />}/> 
              <Route path='/admin/deleteParent' element={<DeleteParent />}/> 
              <Route path='/admin/editParent' element={<EditParent />}/>  

              <Route path='/admin/accountPage' element={<AccountPage />}/>  
              <Route path='/admin/addPayment' element={<AddPayment />}/>
              <Route path='/admin/paymentOptions' element={<PaymentOptions />}/>
              <Route path='/admin/approvePayment' element={<ApprovePayemnt />}/>
              <Route path='/admin/allPayment' element={<AllPayment />}/>
              <Route path='/admin/declinePayment' element={<DeclinePayment />}/>
              <Route path='/admin/pendingPayment' element={<PendingPayment />}/>

              <Route path='/admin/viewSchooltItem' element={<ViewStudentItems/>}/>
              <Route path='/admin/uploadSchoolItems' element={<UploadSchoolItems/>}/>          
              <Route path='/admin/deleteSchoolItem' element={<DeleteSchoolItem/>}/>   
              <Route path='/admin/EditSchoolItem' element={<EditSchoolItem/>}/>    


              <Route path='/admin/ViewStudentResult' element={<ViewStudentResult/>}/> 
              <Route path='/admin/UploadResult' element={<UploaadResult/>}/>    
              <Route path='/admin/deleteResult' element={<DeleteResult/>}/>      
              <Route path='/admin/editResult' element={<EditResult/>}/>  
              <Route path='/admin/editResultPage' element={<EditResultPage/>}/>


              <Route path='/admin/uploadEvent' element={<UploadEvent/>}/> 
              <Route path='/admin/uploadNotification' element={<UploadNotification/>}/> 
              <Route path='/admin/uploadPicture' element={<UploadPicture/>}/> 


              <Route path='/admin/ViewEventUploads' element={<ViewEventUploaded/>}/> 
              <Route path='/admin/ViewNotificationUploads' element={<ViewNotificationUploaded/>}/> 
              <Route path='/admin/ViewPictureUploads' element={<ViewPictureUploaded/>}/> 
              <Route path='/admin/ViewSchemeUploads' element={<AdminScheme/>}/>  
              <Route path='/admin/ViewSchemePage' element={<AdminSchemePage/>}/> 


              <Route path='/admin/AddSession' element={<AddSession/>}/> 
              <Route path='/admin/AddClass' element={<AddClass/>}/> 
              <Route path='/admin/addSubject' element={<AddSubject/>}/> 


              <Route path='/admin/viewClass' element={<ViewClass/>}/>          
              <Route path='/admin/viewSession' element={<ViewSession/>}/>            
              <Route path='/admin/viewSubject' element={<ViewSubject/>}/>

              <Route path='/admin/sendEmail' element={<SendEmail/>}/>
              <Route path='/admin/sendBulkEmail' element={<SendBulkEmail/>}/>
              <Route path='/admin/viewEmail' element={<ViewEmail/>}/>


              <Route path='/admin/editStudent/:id' element={<EditStudentPage/>}/>   
              <Route path='/admin/editTeacher/:id' element={<EditTeacherPage/>}/>   
              <Route path='/admin/editParent/:id' element={<EditParentPage/>}/>   
              <Route path='/admin/viewResultPage/' element={<ViewResultPage/>}/>   
              <Route path='/admin/editSchoolItem/:id' element={<EditSchoolItemPage/>}/>
              <Route path='/admin/viewClass/:id' element={<EditClass/>}/>
              <Route path='/admin/resultPage' element={<ResultPage/>}/>
              <Route path='/admin/uploadScheme' element={<UploadScheme/>}/>
              <Route path='/admin/uploadSchemePage' element={<UploadSchemePage/>}/>
              <Route path='/admin/generateScratchNumber' element={<GenerateScratchNumber/>}/>
              <Route path='/admin/scratchNumberPage' element={<ScratchNumberPage/>}/>
              <Route path='/admin/viewGeneratedScratchNumber' element={<ViewGeneratedScratchNumber/>}/>
              <Route path='/admin/settings' element={<Settings/>}/>             
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}
export default App;

