import {useEffect,useState} from "react";
import api from "../services/api";

function Dashboard(){
  const [message, setMessage]=useState("");
  useEffect(()=>{
    api.get("/api/test").then ((res)=>{
      setMessage(res.data.message);
    })
    .catch((err)=>{
      console.log(err);
    });},[]);
  
  return (
    <div>
      <h1>Dashboard
      </h1>
      <h2>{message}</h2>
    </div>
  ) 
}
export default Dashboard;