
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Canceledpage from './pages/Canceledpage';
import CompletedPage from './pages/CompletedPage';
import CreatePage from './pages/CreatePage';
import LoginPage from './pages/LoginPage';
import NewPage from './pages/NewPage';
import NotFound from './pages/NotFound';
import ProfilePage from './pages/ProfilePage';
import ProgressPage from './pages/ProgressPage';
import Registration from './pages/Registration';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard></Dashboard>}></Route>
        <Route path='/Create' element={<CreatePage></CreatePage>}></Route>
        <Route path='/All' element={<NewPage></NewPage>}></Route>
        <Route path='/Progress' element={<ProgressPage></ProgressPage>}></Route>
        <Route path='/Completed' element={<CompletedPage></CompletedPage>}></Route>
        <Route path='/Canceled' element={<Canceledpage></Canceledpage>}></Route>
        <Route path='/Profile' element={<ProfilePage></ProfilePage>}></Route>
        <Route path='/Login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/Registration' element={<Registration></Registration>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
