import React , {useState , useEffect} from "react";
import "./alljobs.css";
import {allJobs} from "../../urls"
function AllJobs() {
  const [state , setstate] = useState([])

  useEffect(() => {
    fetch(allJobs)
    .then((response)=>response.json())
    .then((data)=>{
      if(data.success){
        setstate(data.jobs)
      }
    })
  }, [])

  return (
    <>
      <div className="container">
        <p style={{ color: "#000",fontSize:"20px"}}>Want a Job</p>
        <div class="list">
        {
          state.map((job , index)=> {
            return <ul key={index} >
            <li>{index+1}</li>
            <li>{job.name}</li>
            <li>{job.phone}</li>
            <li>{job.zipcode}</li>
            <li>{job.place}</li>
          </ul>
          })
          
        }
        </div>
      </div>
    </>
  );
}

export default AllJobs;
