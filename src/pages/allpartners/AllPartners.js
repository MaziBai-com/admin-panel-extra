import React , {useState , useEffect} from 'react'
import {allPartners} from "../../urls"
function AllPartners() {
  const [state , setstate] = useState([])

  useEffect(() => {
    fetch(allPartners)
    .then((response)=>response.json())
    .then((data)=>{
      if(data.success){
        setstate(data.partners)
      }
    })
  }, [])
  return (
    <>
        <div className="container">
        <p style={{ color: "#000",fontSize:"20px"}}>Partners</p>
        <div class="list">
        <ul >
            <li>Sl No</li>
            <li>Name</li>
            <li>Phone</li>
            <li>service</li>
            <li>Email</li>
        </ul>
        {
          state.map((partner , index)=> {
            return <ul key={index} >
            <li>{index+1}</li>
            <li>{partner.name}</li>
            <li>{partner.phone}</li>
            <li>{partner.service}</li>
            <li>{partner.email}</li>
          </ul>
          })
        }
        </div>
      </div> 
    </>
  )
}

export default AllPartners