import { useEffect, useState } from "react"
import TableData from "./TableData";

export default function DataCategore({name}){
    const [data,setData]=useState([]);
    const [uplodaing,setUplodaing]=useState(false);
    let i=1;
    
   /* useEffect(()=>{
        //use try and catch
       const ger=async ()=>{
        const res=await axios.get("");
        const data=await res.json();
        setData(data);
        setUplodaing(true);
       }
       get();
    },[name])
*/

 
return(
  <div>
    
  </div>
)
}