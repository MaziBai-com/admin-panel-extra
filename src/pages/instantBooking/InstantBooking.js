import React, { useContext  , useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext'
import {  bookNowUrl, addNotificationUrl} from "../../urls";
import "./instant.css"
function DashboardBookNow() {
	const navigate = useNavigate(); 
	const [error , seterror ] = useState(''); 
	const [showError , setShowError ] = useState(false); 
	const {user , setuser } = useContext(AuthContext); 
	const [showModal , setShowModal] = useState(false)
    
	const [booking , setbooking] = useState({});
	const [array , setArray] = useState([]); 
	const ArrayHandle = (e) => {
		let a = [];
		let list = document.getElementsByClassName("bookingsArray1"); 
		for(let i=0 ; i<list.length ; i++){
			if(list[i].checked){
				a.push(list[i].value); 
			}
		}
		setArray(a); 
	}
	const BookNow = async ()=>{
		let authToken = localStorage.getItem('MazibaiToken');
        if (!authToken) {
            navigate('/');
        } 
		fetch(bookNowUrl,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'authToken':authToken
            },
			body:JSON.stringify({
				email:booking.email,
				name:booking.name,
				phone:booking.phone,
				preferGender:booking.gender,
				service:array,
				place:booking.place,
				zipcode:booking.zipcode,
				text:booking.zipcode 
			})
        }).then(res => res.json())
        .then(data => {
			console.log(data)
            if(data.success === true){
					showError(true); 
					seterror('Booknig Confirmed')
					setTimeout(() => {
						seterror('')
						showError(false)
					}, 3000);
                        
					}        
				})
	}
	
	const handleChange = (e) => {
		setbooking({...booking , [e.target.name]:e.target.value})
	}
  return (
    <>
	<div className="userList">
      <div className="container mt-3 mb-4">
	  <main id="chary2" className="booknow">
			{
			showError &&   <div className="alert alert-success" role="alert">
				{error}
			</div>
			}
			<div className="form">
				<div className="headerForm text">
					<h4>Bookings form</h4>
					<div className="py-2">
			        <div className="row py-2">
			            <div className="col-md-5"> <label htmlFor="name">Name</label> 
							<input type="text" className="bg-light form-control" name='name'  onChange={handleChange} value={booking.name}/> 
						</div>
						<div className="col-md-5"> <label htmlFor="email">Email Address</label> 
							<input type="text" className="bg-light form-control"  name='email' onChange={handleChange} value={booking.email}/>
			        	</div>
			        
						<div className="col-md-5 pt-md-0 pt-3"> <label htmlFor="phone">Phone Number</label> 
						<input type="tel" className="bg-light form-control" minLength={6} name='phone' onChange={handleChange} value={booking.phone} required={true} /> </div>
							<div className="col-md-5">
							<label htmlFor="pincode">Zip Code</label> 
							<input type="text" value={booking.zipcode} onChange={handleChange}  name="zipcode" maxlength="6" className="bg-light form-control" placeholder="Pincode" />
						</div>
						<div className="col-md-5"> 
			               </div>
			        </div>
					<div className="row py-2">
							<div class="col-md-10">
								<label for="exampleFormControlTextarea1" class="form-label">Text</label>
								<textarea class="form-control" id="exampleFormControlTextarea1" rows="2" value={booking.text} onChange={handleChange} name='text'></textarea>
							</div>
			        </div>
					<div className="row py-2">
						<div className="col-md-10 "> 
							<div className="container_service">
									<label>Select Services</label>
									<ul class="ks-cboxtags">
									<li><input type="checkbox" onChange={(e)=>{ArrayHandle(e)}} className="bookingsArray1" name='name1' id="checkboxOne" value="COOK"/><label for="checkboxOne">DELICIOUS COOK</label></li>
									<li><input type="checkbox" onChange={(e)=>{ArrayHandle(e)}} className="bookingsArray1" name='name2' id="checkboxTwo" value="HYGIENIC_CLEAN" /><label for="checkboxTwo">HYGIENIC HOUSE CLEANING</label></li>
									<li><input type="checkbox" onChange={(e)=>{ArrayHandle(e)}} className="bookingsArray1" name='name3' id="checkboxFour" value="BABY_SITTER"/><label for="checkboxFour">CAREFUL BABY SITTING</label></li>
									<li><input type="checkbox" onChange={(e)=>{ArrayHandle(e)}} className="bookingsArray1" name='name4' id="checkbox10" value="COMPREHENSIVE_CLEAN" /><label for="checkbox10">COMPREHENSIVE HOUSE CLEANING</label></li>
									<li><input type="checkbox" onChange={(e)=>{ArrayHandle(e)}} className="bookingsArray1" name='name4' id="checkboxThree" value="KITCHEN_CARE" /><label for="checkboxThree">HYGIENIC KITCHEN CARE</label></li>
									<li><input type="checkbox" onChange={(e)=>{ArrayHandle(e)}} className="bookingsArray1" name='' id="checkboxFive" value="LAUNDRY"/><label for="checkboxFive">LAUNDRY</label></li>
									<li><input type="checkbox" onChange={(e)=>{ArrayHandle(e)}} className="bookingsArray1" name='services' id="checkboxSix" value="ELDER_CARE" /><label for="checkboxSix">CAREFUL ELDER CARE</label></li>
									<li><input type="checkbox" onChange={(e)=>{ArrayHandle(e)}} className="bookingsArray1" name='services' id="checkboxSeven" value="PATIENT_CARE"/><label for="checkboxSeven">RESPONSIBLE PATIENT CARE</label></li>
									<li><input type="checkbox" onChange={(e)=>{ArrayHandle(e)}} className="bookingsArray1" name='services' id="checkboxEight" value="HYGIENIC_CARE"/><label for="checkboxEight">PERSONAL HYGIENIC CARE</label></li>
									<li><input type="checkbox" onChange={(e)=>{ArrayHandle(e)}} className="bookingsArray1" name='services' id="checkboxNine" value="BABY_CARE"/><label for="checkboxNine">NEWLY BORN BABY & MOTHER CARE</label></li>
									<li><input type="checkbox" onChange={(e)=>{ArrayHandle(e)}} className="bookingsArray1" name='services' id="checkboxTen" value="NURSE"/><label for="checkboxTen">NURTURING NURSES</label></li>
									<li class="ks-selected"><input type="checkbox"  onChange={(e)=>{ArrayHandle(e)}} className="bookingsArray1" name='services' id="checkboxEleven" value="GARDENER"/><label for="checkboxEleven">GARDENER</label></li>
									<li><input type="checkbox" onChange={(e)=>{ArrayHandle(e)}} className="bookingsArray1" name='services' id="checkboxTwelve" value="OFFICE_BOY"/><label for="checkboxTwelve">OFFICE BOY / WORKER</label></li>
									<li><input type="checkbox" onChange={(e)=>{ArrayHandle(e)}} className="bookingsArray1" name='services' id="checkboxThirteen" value="PAINTING"/><label for="checkboxThirteen">HOUSE COLORING & PAINTING</label></li>
									</ul>
								</div>
						</div>
			    	</div>
					<div className="row py-2">
							<div class="col-md-10">
								<label for="exampleFormControlTextarea1" class="form-label">Area/Place/Address</label>
								<textarea class="form-control" id="exampleFormControlTextarea1" rows="2" value={booking.place} onChange={handleChange} name='place'> address</textarea>
							</div>
			        </div>
		
					<div className="row py-2">
						<div className="col-md-2"></div>
						<div className="col-md-5 ">
							 <button type="button" className="btn button button-lg btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
							Book Now 
							</button>
						</div>
					</div>
				</div>
			</div>
				
				<>
					<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog">
						<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">Are you sure ?</h5>
							<button type="button" className="btn-outline-danger btn btn-close" data-bs-dismiss="modal" aria-label="Close">X</button>
						</div>
						<div className="modal-body">
							{
								( array.length  )  ? <p style={{color:'black'}}>Booked <b style={{color:'green'}}> { array.length} </b> services</p>  : <p style={{color:'red'}}>Select Any Service</p> 
							}
							
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
							<button type="button" className="btn btn-primary" data-bs-toggle="modal" disabled={array.length===0}  onClick={BookNow} >Confirm Booking</button>
						</div>
						</div>
					</div>
					</div>
				</>
				</div>
		</main>
      </div>
    </div>
    </>
  )
}



export default DashboardBookNow