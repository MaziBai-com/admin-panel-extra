import React, { useContext , useEffect, useState } from 'react'
import AuthContext from '../../Context/AuthContext'
import { allBooknigs , confirmBookingUrl , getallMaids , addNotificationUrl } from "../../urls"
import "./bookings.css"
function Bookings() {

  const [maids , setmaids ] = useState([]); 

  


  const { bookings, setbookings,sendNotification ,  users, setusers } = useContext(AuthContext)
  useEffect(() => {
    let authToken = localStorage.getItem('MazibaiAdmin');
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
      bookings.forEach(element => {
        console.log(element.service); 
      });
    }
  })
}, [])
useEffect(() => {
  fetch(getallMaids)
  .then((response)=>response.json())
  .then((data)=>{
    if(data.success){
      setmaids(data.maids); 
    }
  })
}, [])

  const confirmBooking = (email , service , id , status) => {
    // confirm booking 
    let authToken = localStorage.getItem('MazibaiAdmin');
    // api call for checking user is logged in or not '
    let url = `${confirmBookingUrl}${id}`
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Admin': authToken
      },
      body:JSON.stringify({
        status:status 
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          // send notification to that user 
          // update in frontend 
          let tempBookings = bookings.filter((book)=> {
            if(book._id == id){
              book.status = status 
            }
            return book 
          })
          setbookings(tempBookings);
          
          let notified = sendNotification(email , `Booking ${status} for ${service} service` , 'Thanks for choosing our services ')
        }
      })
  }
  const dateToDate = (date) => {
    let string = new Date(date); 
    return string.toLocaleDateString(); 
  } 
  const dateToTime = (date) => {
    let string = new Date(date); 
    return string.toLocaleTimeString(); 
  } 

  return (
    <>
    {
      bookings.length == 0 && 'No Booknigs'
    }
    
    <div className="container">
      {
        bookings.map((book , index)=> {
          return <article key={index} className="card" >
          <div className="card-header">{book._id}</div>
          <div className="card-body">
              <figure className="itemside mb-3">

                  <div className="dett mt-3 ml-2">
                      <span>USERNAME</span>
                      <span className="ml-1">{book.name}</span>
                  </div>
                  <div className="dett mt-3 ml-5">
                      <span>ZIP/PINCODE</span>
                      <span className="ml-1">{book.zipcode}</span>
                  </div>
                  <div className="dett mt-3 ml-5">
                      <span>Status</span>
                      <span className="ml-1 orange">{book.status}</span>
                  </div>

                  <div className="acc mt-4 ml-5">
                      <div  className="ac1 button" onClick={()=>confirmBooking(book.email , book.service , book._id , 'Confirmed')} >ACCEPT</div>
                      <div  className="ac2 button" onClick={()=>confirmBooking(book.email , book.service , book._id , 'Cancelled')} >REJECT</div>
                  </div>

              </figure>

              <article   className="card mb-3 ">
                  <div className="det mt-1 ml-4 mb-1 col">
                      <div className="col">
                          <span>SERVIES CHOOSED</span>
                      </div>
                      <div className="col">
                          <span className="">NEAR BY MAIDS</span>
                      </div>
                  </div>

                  <div className="service ml-5 mb-4 mt-4 col heightAuto">
                      <div className="services_choosed col-9">
                            {
                              book.service.map((s,index)=> {
                                return <div key={index} className="row">
                                 <div>{s}</div>
                              </div>
                              })
                            }
                          
                      </div>
                      <div className="services_choosed  mr-4  col-12 justify-content-right">
                        {
                          maids.map((maid , index)=> {
                            return  <div key={index}> {maid.zipcode===book.zipcode && maid.name}</div>
                          })
                        }
                      </div>
                  </div>
              </article>
              <article className="card">
                  <div className="card-body row">
                      <div className="col"> <strong>ORDER PLACED ON</strong> <br/>{
                      dateToTime(book.date) + '   '+ dateToDate(book.date)
                      }</div>
                      <div className="col"> <strong>FROM ADDRESS</strong> <br/>{book.place} </div>
                      <div className="col"> <strong>TEXT</strong> <br/>{book.text}</div>
                  </div>
              </article>
          </div>
      </article>
        })
      }
        
    </div>
    </>
  )
}

export default Bookings