import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import {userData } from "../../dummyData"
import { useState , useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {allBooknigs , allUsersUrl} from "../../urls"
import AuthContext from "../../Context/AuthContext";

export default function AdminHome() {
  const { bookings , setbookings , users , setusers } = useContext(AuthContext)
  const navigate = useNavigate(); 
  // get all the bookings 
  useEffect(() => {
    let authToken = localStorage.getItem('MazibaiAdmin');
    if (!authToken) {
        navigate('/');
    } 
    fetch(allBooknigs,{
      method:'GET',
      headers:{
          'Content-Type':'application/json',
          'Admin':authToken
      }
  })
  .then(res => res.json())
  .then(data => {
    if(data.success){
      setbookings(data.bookings); 
    }
  })
}, [])

// get all the users 
useEffect(() => {
  let authToken = localStorage.getItem('MazibaiAdmin');
  if (!authToken) {
      navigate('/');
  } 
  // api call for checking user is logged in or not '
  fetch(allUsersUrl,{
    method:'GET',
    headers:{
        'Content-Type':'application/json',
        'Admin':authToken
    }
})
.then(res => res.json())
.then(data => {
  if(data.success){
    setusers(data.users)
  }
})
}, [])

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
    </div>
  );
}
