import axios from 'axios'
import {React,useState} from 'react'
import { toast } from 'react-hot-toast'
import {Link, useNavigate} from 'react-router-dom' 
import './studentportal.css'
import Back from '../common/back/Back'

const StudentPortalRegister = () => {
    const navigate = useNavigate()
    const [data,setData]=useState({
        name:'',
        email:'',
        password:'',
    })
    const registerUser= async(e) => {
        e.preventDefault()
        axios.get('/')
        const {name,email,password} =data
        try {
            const {data} = await axios.post('/register',
            {
                name,email,password
            })
            if(data.error) {
                toast.error(data.error)
            } else {
                setData({})
                toast.success('Login Successfull.Welcome!')
                navigate('/dashboard')
            }
        } catch (error) {
            console.log(error)
        }

    }
  
  return (
    <>
    <Back/>
    <div>
    <form onSubmit={registerUser} className='form'>
        <div>
        <label className='field'>Name:</label>
        <input type='text' placeholder='enter name' value={data.name} onChange={(e)=>setData({...data,name:e.target.value})}/>
        </div>
        <div>
        <label className='field'>Email:</label>
        <input type='email' placeholder='enter email' value={data.email} onChange={(e)=>setData({...data,email:e.target.value})}/>
        </div>
        <div>
        <label className='field'>password:</label>
        <input type='password' placeholder='enter password' value={data.password} onChange={(e)=>setData({...data,password:e.target.value})}/>
        </div>
        <button type='submit'>Submit</button>
        <Link to='/login'><button type='button'>Login</button></Link>
    </form>
    </div>
    </>
  )
}

export default StudentPortalRegister