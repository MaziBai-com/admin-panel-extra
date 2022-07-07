import React , {useState , useEffect} from 'react'
import {allRefers} from "../../urls"
function AllRefers() {
    const [state , setstate] = useState([])

  useEffect(() => {
    fetch(allRefers)
    .then((response)=>response.json())
    .then((data)=>{
      if(data.success){
        setstate(data.refers)
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
            <li>Maid Name</li>
            <li>Maid Phone</li>
            <li>Name</li>
            <li>Phone</li>
        </ul>
        {
          state.map((refer , index)=> {
            return <ul key={index} >
            <li>{index+1}</li>
            <li>{refer.referee_name}</li>
            <li>{refer.referee_phone}</li>
            <li>{refer.referer_name}</li>
            <li>{refer.referer_phone}</li>
          </ul>
          })
        }
        </div>
      </div> 
      {/* "referee_name": "udaykiran",
      "referee_phone": "1234567890",
      "referer_name": "udaykiran",
      "referer_phone": "1234567890", */}
    </>

  )
}

export default AllRefers