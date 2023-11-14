import {React,useState} from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import "./studentportal.css"
import Back from '../common/back/Back'
const StudentPortallogin = () => {
  const navigate=useNavigate()
  const [data,setData]=useState({
    email:'',
    password:'',
})
  const loginUser=async(e)=>{
    e.preventDefault()
    const {email,password} = data
    try {
      const {data} = await axios.post('/login',{
        email,
        password,
      });
      if(data.error){
        toast.error(data.error)
      }
      else{
        setData({});
        navigate('/dashboard')
      }
    } catch (error) {
      
    }
  }
  
  return (
    <>
    
    <Back/>
    <div>
    <form onSubmit={loginUser} className='form'>
    <div>
    <label className='field'>Email:</label>
    <input type='email' placeholder='enter email' value={data.email} onChange={(e)=>setData({...data,email:e.target.value})} className='input'/>
    </div>
    <div>
    <label className='field'>password:</label>
    <input type='password' placeholder='enter password' value={data.password} onChange={(e)=>setData({...data,password:e.target.value})} className='input'/>
    </div>
    <button type='submit'>login</button>
    </form>
    </div>
    </>
  )
  
}//onChange={(e)=>setData({...data,email:e.target.value})}

export default StudentPortallogin
