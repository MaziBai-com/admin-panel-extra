import {BrowserRouter , Routes , Route} from 'react-router-dom';
// CLIENT SIDE PAGES AND THE COMPONENTS 
import "./App.css"
// ADMIN SIDE PAGES AND THE COMPONENTS 
import AdminDashboard from "./pages/AdminDashboard";
import AdminHome from './pages/Home/Home';
import AdminMaid from './pages/maid/Maid'
import AdminNewMaid from './pages/newMaid/NewMaid'
import AdminMaidList from './pages/maidlist/MaidList'
import AdminBookings from "./pages/allbookings/Bookings"
import AdminAuth from "./pages/Auth/Auth"
import AdminError from "./pages/ErrorPage"
import AuthState from "./Context/AuthState"
import AdminInstantBooking from "./pages/instantBooking/InstantBooking"
import AllJobs from './pages/alljobs/AllJobs';
import AllPartners from './pages/allpartners/AllPartners';
import AllRefers from './pages/refers/AllRefers';
function App() {
  return (
    <>
    <AuthState>
        <BrowserRouter>
            <Routes>
                <Route path='/auth' element={<AdminAuth/>}/>
                <Route path='/'  element={<AdminDashboard/>} >
                      <Route path='/home' element={<AdminHome/>} />
                      <Route path='/maid' element={<AdminMaid/>} />
                      <Route path='/newmaid' element={<AdminNewMaid/>} />
                      <Route path='/instantbooking' element={<AdminInstantBooking/>} />
                      <Route path='/allmaids' element={<AdminMaidList/>} />
                      <Route path='/bookings' element={<AdminBookings/>} />
                      <Route path='/alljobs' element={<AllJobs/>} />
                      <Route path='/partners' element={<AllPartners/>} />
                      <Route path='/refers' element={<AllRefers/>} />
                </Route>
                <Route path='*' element={<AdminError/>}/>
            </Routes>
        </BrowserRouter>  
    </AuthState>
    </>
  );
}

export default App;
