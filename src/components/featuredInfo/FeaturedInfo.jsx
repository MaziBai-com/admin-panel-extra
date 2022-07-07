import "./featuredInfo.css";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {allBooknigs , allUsersUrl} from "../../urls"
import AuthContext from "../../Context/AuthContext";
import { SettingsBackupRestoreSharp } from "@material-ui/icons";
export default function FeaturedInfo() {
  const { bookings , setbookings , users , setusers } = useContext(AuthContext)
  const navigate = useNavigate(); 
const [pending , setpending ] = useState(0)
useEffect(()=>{
  let pending = bookings.filter((book)=>{
    if(book.status === 'Booked'){
      return book 
    }
  })
  // console.log(pending)
  setpending(pending.length); 
},[bookings])


  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Number of Users </span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{users.length}</span>
         
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Total Bookings</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{bookings.length}</span>
          
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Pending Bookings</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            {
              pending
            }
          </span>
          
        </div>
      </div>
    </div>
  );
}
