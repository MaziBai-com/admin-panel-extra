import "./newmaid.css";
import { useState } from "react";
import {addMaidUrl} from "../../urls"
export default function NewMaid() {
  const [maid, setmaid] = useState({});
  const [show , setShow ] = useState(false); 
  const [result , setresult ] = useState(null); 
  const [error , seterror ] = useState(false); 
  const handleChange = (e) => {
    setmaid({ ...maid, [e.target.name]: e.target.value })
  }
 
  const AddMaid = () => {
    // add a maid in the backend 
    fetch(addMaidUrl , {
      method: "POST",
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(maid)
    }).then((response)=>response.json())
    .then((data)=> {
      console.log(data); 
      if(data.success){
        setresult('Maid Added Successfully'); 
        setShow(true); 
        setTimeout(() => {
          setShow(false)
        }, 5000);
      }else{
        setShow(true)
        seterror(true); 
        setresult(data.msg)
        setTimeout(() => {
          setresult('')
          setShow(false)
          seterror(false); 
        }, 5000);
      }
    })
  }
  return (
    <>
    <div className="userList">
      <div className="container mt-3 mb-4">
      <main id="chary2" className="booknow">
			<div className="form">
      {
			show &&   <div className={error ? "alert alert-danger": "alert alert-success"} role="alert">
				{result}
			</div>
			}
				<div className="headerForm text">
					<h4>Add New Maid</h4>
					<div className="py-2">
			        <div className="row py-2">
			            <div className="col-md-5"> <label htmlFor="name">Name</label> 
							<input type="text" className="bg-light form-control" name='name'  onChange={handleChange} value={maid.name}/> 
						</div>
			            <div className="col-md-5"> <label htmlFor="name">Name</label> 
							<select className="form-control" name="gender"value={maid.gender}>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
						</div>
						<div className="col-md-5 pt-md-0 pt-3"> <label htmlFor="phone">Phone Number</label> 
						<input type="tel" className="bg-light form-control" minLength={6} name='phone' onChange={handleChange} value={maid.phone} required={true} /> </div>
							<div className="col-md-5">
							<label htmlFor="pincode">Zip Code</label> 
							<input type="text" value={maid.zipcode} onChange={handleChange}  name="zipcode" maxlength="6" className="bg-light form-control" placeholder="Pincode" />
						</div>
						<div className="col-md-5"> 
			               </div>
			        </div>
					<div className="row py-2">
			        </div>
					
					<div className="row py-2">
							<div class="col-md-10">
								<label for="exampleFormControlTextarea1" class="form-label">Area/Place/Address</label>
								<textarea class="form-control" id="exampleFormControlTextarea1" rows="2" value={maid.place} onChange={handleChange} name='place'></textarea>
							</div>
			        </div>
		
					<div className="row py-2">
						<div className="col-md-2"></div>
						<div className="col-md-5 ">
							 <button type="button" onClick={AddMaid} className="btn button button-lg btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Add Maid 
							</button>
						</div>
					</div>
				</div>
			</div>
				</div>
		</main>
      </div>
    </div>

    </>
  );
}
