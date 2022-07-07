import React , {useState , useContext ,  useEffect} from "react";
import "./topbar.css";
import { useNavigate } from "react-router-dom";
import { NotificationsNone } from "@material-ui/icons";
import AuthContext from "../../Context/AuthContext";

export default function Topbar() {
  const { bookings , setbookings , users , setusers } = useContext(AuthContext)
  const navigate = useNavigate(); 
  const [pending , setpending ] = useState(0)
  const Logout = ()=>{
    localStorage.removeItem('MazibaiAdmin');
    navigate('/auth'); 
  }
  useEffect(()=>{
    let pending = bookings.filter((book)=>{
      if(book.status === 'Booked'){
        return book 
      }
    })
    setpending(pending.length); 
  },[bookings])
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Mazibai Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">{pending}</span>
          </div>
          <button onClick={Logout} className="btn-sm btn-danger btn">Log Out</button>
        </div>
      </div>
    </div>
  );
}
