import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import signin from "../images/signin.png";
import logobatball from "../images/logobatball.jpg";
import { useNavigate } from "react-router-dom";
import {toast} from "react-hot-toast"

export default function Login() {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function inputChangeHandler(event) {
    const { name, value } = event.target;

    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  async function submitHandler(event) {
    event.preventDefault();

    let data = Object.keys(formData).map((key) => `${key} = ${formData[key]}`);
    // join() returns an array as a string
    data = data.join(" \n");
    alert(data);
    // console.log(formData);
    const response=await fetch("https://cricket-tournament-backend.onrender.com/api/v1/login",{
      method: "POST",
      headers:  {'Content-Type': 'application/json'},
      body: JSON.stringify(formData),
  })
    console.log("Logging Login response",response);
    if(response.status===200){
      toast.success("Logged In Successful")
      navigate("/");
    }
    else{
      toast.error("Could Not Login !!!");
      console.log(response.message);
    }
  }
  const [password, setPassword] = useState(false);

  return (
    <div
      className="FormDiv bg-[url('./images/Ahmedabad_compress.jpg')] bg-cover h-[100vh] flex justify-center items-center" /**/
    >
      <div className="md:w-3/4 md:max-w-[1000px] h-[100vh] flex justify-center items-center" style={{ background: "rgba(255, 255, 255, 0.26)",
"borderRadius": "4px",
"boxShadow": "0 4px 30px rgba(0, 0, 0, 0.8)",
"backdropFilter": "blur(1.4px)",
"border": "1px solid rgba(255, 255, 255, 0.14)"}}>
        <form
          action=""
          onSubmit={submitHandler}
          className="md:w-1/2 md:max-w-[1000px] rounded-md p-[30px] mx-auto flex flex-col gap-3 shadow-md LoginForm"
          style={{ "backdropFilter": "blur(20px)","boxShadow": "0 4px 30px rgba(0, 0, 0, 0.8)" }}
        >
          <div className="flex justify-center gap-2 mt-2">
            <img className="h-12" src={logobatball} style={{}} alt="" />
            <img className="h-12 w-[125px]" src={signin} alt="" />
          </div>

          {/* email */}
          <div className="mt-2">
            <label htmlFor="email" className="font-medium text-sm text-slate-700">
              Email /UserName
            </label>

            <input
              type="email"
              placeholder="viveksharma4507@gmail.com"
              id="email"
              name="email"
              onChange={inputChangeHandler}
              value={formData.email}
              className="w-full border border-1 border-blue-400 rounded-md p-2 mt-2 bg-slate-100"
              required
            />
          </div>

          {/* //password  */}
          <div className="relative">
            <label htmlFor="Password" className="font-medium text-sm text-slate-700">
              Password
            </label>

            <input
              type={password ? "text" : "password"}
              placeholder=""
              id="password"
              name="password"
              onChange={inputChangeHandler}
              value={formData.password}
              className="w-full border border-blue-400 rounded-md p-2 mt-2 bg-slate-100"
              required
            />
            <button
              className="absolute top-[60%] right-[3%] text-slate-600"
              onClick={(e) => {
                e.preventDefault();
                setPassword(!password);
              }}
            >
              {password ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </button>
          </div>
          <div>
            <div className="mt-[6%] "><p>Didn't Register ? <a href="/signup" className="no-underline">{" "}SignUp</a></p></div>
          {/* submit button */}
          <button
            className="bg-blue-500 text-lg w-full font-medium text-white py-[8px] px-4 rounded-md hover:bg-[rgb(38,204,230)]
        transition-all duration-200 "
            type="submit"
          >
            Login
          </button></div>
        </form>
      </div>
    </div>
  );
}
