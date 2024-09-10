import React, { useState } from 'react'
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import login from "../images/login.png";
import logobatball from "../images/logobatball.jpg"
import {toast} from "react-hot-toast"
import {useNavigate} from "react-router-dom"


export default function Form() {
    const navigate =useNavigate();
    const [formData, setFormData] = useState({
        firstName : "",
        lastName : "",
        email : "",
        country : "India",
        terms: false,
        password:"",
        confirmPassword: ""
    });

    function inputChangeHandler(event){
        const {name, type, value, checked} = event.target;

        setFormData(prevState => {
            return({
                ...prevState,
                [name] : type === 'checkbox' ? checked : value
            })
        });
    }

    async function submitHandler(event){
        event.preventDefault();

        let data = Object.keys(formData).map((key) => `${key} = ${formData[key]}`);
        // join() returns an array as a string
        data = data.join(" \n");
        
        const response=await fetch("https://cricket-tournament-backend.onrender.com/api/v1/createUser",{
            method: "POST",
            headers:  {'Content-Type': 'application/json'},
            body: JSON.stringify(formData),
        })
        alert(data);
        console.log(response);
        if(response.status===200){
            toast.success("User Registered Successfully...");
            console.log("inside section");
            navigate("/login");
        }
        else{
            toast.error("User Registration Failed");
        }
    }
    const [password, setPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(false)

  return (
    <div className="FormDiv bg-[url('./images/Ahmedabad_compress.jpg')] bg-cover" /**/>
    
    <form 
    action="" 
    onSubmit={submitHandler}
    className="md:w-1/2 md:max-w-[1000px] rounded-md p-[30px] mx-auto flex flex-col gap-2 shadow-md SignUpForm " style={{backdropFilter:"blur(25px)"}}>
        <div className='flex justify-center gap-2 mt-2'><img className='h-12' src={logobatball} style={{}} alt=""/><img className='h-12 w-[125px]' src={login} alt=""/></div>
        {/* first name */}
        <div>
            <label 
            htmlFor="firstName"
            className='font-medium text-sm'>First Name</label>

            <input 
            type='text'
            placeholder='Vivek' 
            id='firstName'
            name='firstName'
            onChange={inputChangeHandler}
            value={formData.firstName}
            className='w-full border border-1 border-blue-400 rounded-md p-2 mt-2 bg-slate-100'
            required
            />
        </div>

        {/* last name */}
        <div>
            <label 
            htmlFor="lastName"
            className='font-medium text-sm'>Last Name</label>

            <input 
            type='text'
            placeholder='Sharma' 
            id='lastName'
            name='lastName'
            onChange={inputChangeHandler}
            value={formData.lastName}
            className='w-full border border-blue-400 rounded-md p-2 mt-2 bg-slate-100'
            required
            />
        </div>

        {/* email */}
        <div>
            <label 
            htmlFor="email"
            className='font-medium text-sm'>Email Address</label>

            <input 
            type="email" 
            placeholder='viveksharma4507@gmail.com' 
            id='email'
            name="email"
            onChange={inputChangeHandler}
            value={formData.email}
            className='w-full border border-1 border-blue-400 rounded-md p-2 mt-2 bg-slate-100'
            required
            />
        </div>

        {/* country  - dropdown*/}
        <div>
            <label 
            htmlFor="country"
            className='font-medium text-sm'>Country</label>

            <select 
            name="country" 
            id="country"
            value={formData.country}
            onChange={inputChangeHandler}
            className='w-full border border-1 border-blue-400 rounded-md p-2 mt-2 bg-slate-100'
            required
            >
                <option value="india">India</option>
                <option value="united states">United States</option>
                <option value="canada">Canada</option>
                <option value="mexico">Mexico</option>
            </select>
        </div>

        
    
        {/* //password  */}
        <div className='relative'>
            <label 
            htmlFor="Password"
            className='font-medium text-sm'>Password</label>

            <input 
            type={password?"text":"password"}
            placeholder='' 
            id='password'
            name='password'
            onChange={inputChangeHandler}
            value={formData.password}
            className='w-full border border-blue-400 rounded-md p-2 mt-2 bg-slate-100'
            required
            />
            <button className="absolute top-[60%] right-[3%]" onClick={(e)=>{
                e.preventDefault();
                setPassword(!password);
            }}>{password?<AiOutlineEye />:<AiOutlineEyeInvisible />}</button>

        </div>
        <div  className='relative'>
            <label 
            htmlFor="confirmPassword"
            className='font-medium text-sm'>Confirm Password</label>

            <input 
            type={confirmPassword?`text`:`password`}
            placeholder='' 
            id='confirmPassword'
            name='confirmPassword'
            onChange={inputChangeHandler}
            value={formData.confirmPassword}
            className='w-full border border-blue-400 rounded-md p-2 mt-2 bg-slate-100'
            required
            /><button className='absolute top-[60%] right-[3%]' onClick={(e)=>{
                e.preventDefault();
                setConfirmPassword(!confirmPassword);
            }}>{confirmPassword?<AiOutlineEye />:<AiOutlineEyeInvisible />}</button>

        </div>


        {/* by mail - checkbox */}
        <div className='mb-4'>
            
            <div className='flex items-start gap-2 mt-2'>
                <div className='h-[18px] w-[18px]'>
                    <input 
                    type="checkbox" 
                    id='terms'
                    name='terms'
                    onChange={inputChangeHandler}
                    checked={formData.terms}
                    required
                    className=''
                    />
                </div>
                <div>
                    {/* <label htmlFor="comments"  className='font-medium text-sm'></label> */}
                    <p className='text text-slate-500'>Agree to the Terms and Conditions apply</p>
                </div>
            </div>
        </div> 

        {/* submit button */}
        <button 
        className='bg-blue-500 text-lg font-medium text-white py-[8px] px-4 rounded-md hover:bg-[#26cce6]
        transition-all duration-200' 
        type='submit'>
        Submit
        </button>
    </form>
    </div>
  )
}