import React from 'react'
import App from "./App"
import Form from "../src/components/Form"
import {Routes, Route, useNavigate} from "react-router-dom"
import MainHeader from './MainHeader';
import Login from "./components/Login"
const Main = () => {
  const navigate=useNavigate();
  return (
<>
<Routes>
    <Route path="/" element={<MainHeader/>}>
        <Route index element={<App/>}/>
      <Route path={`/signup`} element={<Form/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="*" element={<div className='flex flex-col justify-center items-center'><h1 className='text-slate-800 text-center' >Website is in building mode ...</h1><button  className="text-slate-950 border rounded-md border-slate-500 hover:bg-slate-700 w-[70px] h-[30px] hover:text-white" onClick={(e)=>{
        e.preventDefault();
        navigate(-1);
      }}>Back</button></div>}/>
      </Route>
  </Routes>
</>
  )
}

export default Main;