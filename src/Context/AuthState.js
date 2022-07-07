import   {   useState } from "react";
import AuthContext from "./AuthContext";
import {addNotificationUrl , loginAdmin} from "../urls"
const AuthState = (props) => {
    const [admin  , setadmin  ] = useState({
        email:''
    })
    const [users , setusers ] = useState([])
    const [bookings , setbookings] = useState([]); 

    const [error , seterror ] = useState(''); 
    
    const handleError = () => {
        setTimeout(() => {
            seterror(''); 
        }, 5000);
    }


    const Login = async (loginEmail , loginPassword ) => {
        
        try {
            const response = await fetch(loginAdmin,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    email:loginEmail,
                    password:loginPassword   
                })
            })
            const data = await response.json() 
            return data             
        } catch (error) {
            seterror('Internal Server Error');
            handleError();
        }

    }
    const sendNotification = async (email , title , body ) => {
        fetch(addNotificationUrl,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email:email,
                title:title,
                body:body 
            })
        }).then(res => res.json())
        .then(data => {
            if(data.success){
                return data.success; 
            }else{
               return  data.success 
            }
        })
    }
    return (
        <>
            <AuthContext.Provider value={{users , sendNotification,  setusers ,  admin , setadmin , error , Login ,seterror , handleError , bookings , setbookings }}>
                {props.children} 
            </AuthContext.Provider>
        </>
    )
}

export default AuthState

