import {Outlet , useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Topbar from "../components/topbar/Topbar";
function Admin() {
  const navigate  = useNavigate()
  const location = useLocation()
  useEffect(() => {
    if(location.pathname==='/'){
      navigate('/home')
    }
    let authToken = localStorage.getItem('MazibaiAdmin');
    if(!authToken){
        navigate('/auth')
    }
  }, [])
  return (
    
<>
      <Topbar />
      <div className="adminContainer">
        <Sidebar /> 
        <Outlet/>
      </div>
    </>
  );
}

export default Admin;
