import React, { useState , useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext';
import { loginAdmin } from '../../urls';
import "./auth.css"
function Auth() {
    const navigate = useNavigate()
    const { admin  , setadmin, error , seterror , handleError   } = useContext(AuthContext);
    const [input , setinput] = useState({});
    const loginuser = async () => {
        fetch(loginAdmin,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(input)
        }).then(res => res.json())
        .then(data => {
            if(data.success){
                setadmin({
                    email:data.admin.email
                });
                localStorage.setItem('MazibaiAdmin',admin.email)
                navigate('/home')
            }else{
                seterror(data.msg);
                handleError(); 
            }
        })
    }
    const handleChange = (e)=>{
        setinput({...input,[e.target.name]:e.target.value});
    }
    return (
        <div className='adminAuthContainer'>
            <div className="adminAuth">
                <h3 className="adminHeader">Login As Admin</h3>
                {error && 
                    <div className="alert alert-danger" style={{textAlign:'center'}} role="alert">
                    {error}
                    </div>

                }
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" onChange={handleChange} name="email" value={input.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" onChange={handleChange} name="password" value={input.password} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="button" style={{marginLeft:'0',marginRight:'auto',width:'100%',marginTop:'20px',height:'40px'}} onClick={loginuser} className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Auth
