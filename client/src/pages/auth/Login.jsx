import {Link} from 'react-router-dom';
import { useState} from"react";
import axios from "axios";
import { useNavigate} from "react-router-dom";

function Login(){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      const res=await axios.post("https://interviewaceai-rpmo.onrender.com/api/auth/login",{
        email,password
      },
    );
     console.log(res.data);

     localStorage.setItem("token",res.data.token);
     console.log(localStorage.getItem("token"));
     alert("Login successful");
     navigate("/dashboard");
    }
    catch (error) {
    console.error("Error registering user:", error);
    alert("Login failed");
   }
  }
  return (
    <div className="w-full max-w-md bg-white p-8 rounded-3xl border border-slate-150 shadow-xl shadow-slate-100/50">
      <h2 className="text-2xl font-extrabold text-slate-800 text-center mb-6">Welcome Back</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
          <input 
            type="email" 
            placeholder="name@company.com" 
            value={email} 
            onChange={(e)=>setEmail(e.target.value)} 
            required  
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm bg-slate-50/50 focus:bg-white" 
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Password</label>
          <input 
            type="password" 
            placeholder="••••••••" 
            value={password} 
            onChange={(e)=>setPassword(e.target.value)} 
            required  
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm bg-slate-50/50 focus:bg-white"
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:brightness-110 text-white py-3 rounded-xl font-bold shadow-md shadow-indigo-100 transition active:scale-98 text-sm mt-3"
        >
          Sign In
        </button>

        <p className="mt-4 text-center text-sm text-slate-500 font-medium">
          Don't have an account?
          <Link to="/register" className="text-indigo-600 hover:text-indigo-700 ml-1 font-semibold hover:underline">
            Register here
          </Link>
        </p>
      </form>
    </div>
  )
}
  
export default Login;