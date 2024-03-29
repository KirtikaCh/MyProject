import React, { useState }  from 'react';
import { Link } from 'react-router-dom'; 
import food from './images/food5.jpg';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
const Signup = () => {
  const [show,setShow]=useState(false);
  return (
    <div className="bg-[#111827a4] fixed top-[50%] left-[50%] w-full h-full translate-x-[-50%] z-[999] translate-y-[-50%] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="p-8 border-[3px] border-[#43591a] sm:mx-auto sm:rounded-lg sm:w-full sm:max-w-md" style={{ backgroundImage: `url(${food})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: "5%" }}>
        <div className="bg-[#43591a]  rounded-lg py-8 px-6 shadow sm:rounded-lg sm:px-10">
          <div>
            <h2 className="pb-8 text-center text-3xl font-extrabold text-white">Create an account</h2>
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-base font-bold text-white">
                  Email address:
                </label>
                <div className="mt-1">
                  <input id="email" name="email" type="email" autoComplete="email" required className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 bg-[#8c9a72] text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block text-base font-bold text-white">
                  Password:
                </label>
                <div className="mt-1 relative">
                  <input id="password" name="password" type={show ? "text":"password"} autoComplete="current-password" required className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 bg-[#8c9a72] text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                  <div className=" absolute top-[50%] right-3 cursor-pointer translate-y-[-50%]" onClick={()=>setShow((prev)=>!prev)}>
                  {show ? <FaEye/> : <FaEyeSlash />}
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-base font-bold text-white">
                  Confirm Password:
                </label>
                <div className="mt-1 relative">
                  <input id="confirmPassword" name="confirmPassword" type={show ? "text":"password"} autoComplete="new-password" required className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 bg-[#8c9a72] text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                  <div className=" absolute top-[50%] right-3 cursor-pointer translate-y-[-50%]" onClick={()=>setShow((prev)=>!prev)}>
                  {show ? <FaEye/> : <FaEyeSlash />}
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-white font-semibold">Already have an account? <Link to="/login" className="font-medium text-[#ccd9b5] hover:text-black">Log in</Link></p>
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-white rounded-md shadow-sm text-sm font-bold text-white bg-[#8c9a72] hover:bg-black hover:text-[#8c9a72] hover:font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  SIGN UP
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
