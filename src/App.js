
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';

import FullscreenLoader from './components/MasterLayout/FullScreenLoadder';
import Canceledpage from './pages/Canceledpage';
import CompletedPage from './pages/CompletedPage';
import CreatePage from './pages/CreatePage';
import DashboardPage from './pages/DashboardPage';
import ForgetPassPage from './pages/ForgetPassPage';
import LoginPage from './pages/LoginPage';
import NewPage from './pages/NewPage';
import NotFound from './pages/NotFound';
import ProfilePage from './pages/ProfilePage';
import ProgressPage from './pages/ProgressPage';
import RegistrationPage from './pages/RegistrationPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { getToken } from './Helper/SessionHelper';


function App() {

  if(getToken){
    return (
      <>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<DashboardPage></DashboardPage>}></Route>
          <Route path='/Create' element={<CreatePage></CreatePage>}></Route>
          <Route path='/All' element={<NewPage></NewPage>}></Route>
          <Route path='/Progress' element={<ProgressPage></ProgressPage>}></Route>
          <Route path='/Completed' element={<CompletedPage></CompletedPage>}></Route>
          <Route path='/Canceled' element={<Canceledpage></Canceledpage>}></Route>
          <Route path='/Profile' element={<ProfilePage></ProfilePage>}></Route>
       
          
          
        </Routes>
       </BrowserRouter>
       <FullscreenLoader/>
       <ToastContainer/>
      </>
    );


  }
  else{
    return (
      <>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to ="/Login" replace/>}></Route>
          <Route path='/Login' element={<LoginPage></LoginPage>}></Route>
          <Route path='/Registration' element={<RegistrationPage></RegistrationPage>}></Route>
          <Route path='/Forgetpass' element={<ForgetPassPage></ForgetPassPage>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
          
        </Routes>
       </BrowserRouter>
       <FullscreenLoader/>
       <ToastContainer/>
      </>
    );
  }

}
export default App;
