import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {register} from '../dataStore/actions/userActions'
import {useDispatch,useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'

const Register = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state=>state.userInfo);

    const [userInfo,setUserInfo] = useState({
        name:'',
        email:'',
        password:'',
        address:'',
        city:'',
        zipcode:'',
        country:''
    })

    const onSubmit = (e)=>{
    e.preventDefault();
    
    dispatch(register(userInfo));
    }

    useEffect(() => {
        if(user.userInfo.email){
         history.push('/account');
        }

    }, [user])
    return (
        <div>
            
            <form className='form' onSubmit={onSubmit}>
                <h6>Register</h6>

                <label htmlFor='email'>Full Name</label>
                <input onChange={(e)=>setUserInfo({...userInfo,[e.target.name]:e.target.value})} name='name' type='text' required placeholder='Enter your Full Name' />

                <label htmlFor='email'>Email</label>
                <input onChange={(e)=>setUserInfo({...userInfo,[e.target.name]:e.target.value})} name='email' type='email' required placeholder='Enter your Email' />

                <label htmlFor='password'>Password</label>
                <input onChange={(e)=>setUserInfo({...userInfo,[e.target.name]:e.target.value})} name='password' type='password' required placeholder='Enter your Password'/>

                <label htmlFor='password2'>Password</label>
                <input onChange={(e)=>setUserInfo({...userInfo,[e.target.name]:e.target.value})} name='password2' type='password' required placeholder='Confirm your Password'/>

                <label htmlFor='address'>Address</label>
                <input onChange={(e)=>setUserInfo({...userInfo,[e.target.name]:e.target.value})} name='address' type='text' required placeholder='Enter your Address'/>

                <label htmlFor='address'>City</label>
                <input onChange={(e)=>setUserInfo({...userInfo,[e.target.name]:e.target.value})} name='city' type='text' required placeholder='Enter your City'/>

                <label htmlFor='address'>Zip-Code</label>
                <input onChange={(e)=>setUserInfo({...userInfo,[e.target.name]:e.target.value})} name='zipcode' type='text' required placeholder='Enter your Zip-Code'/>

                <label htmlFor='country'>Country</label>
                <input onChange={(e)=>setUserInfo({...userInfo,[e.target.name]:e.target.value})} name='country' type='text' required placeholder='Enter your Country'/>
                
                <button type='submit'>Register</button>
                <h6>Already have account ? <Link to='/login'>Login</Link></h6>
            </form>
        </div>
    )
}

export default Register
