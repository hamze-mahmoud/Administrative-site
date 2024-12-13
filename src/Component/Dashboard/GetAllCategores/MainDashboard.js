import React, { useState } from "react"
import DataCategore from "../CategoresProducts/DataCategore";
import To_Do_List from "./To_Do_List";
export default function MainDashboard(){
   const [nameCategory,setName]=useState("")
   const handelNameCategory=(name)=>{
    setName(name);
       return name;
   }
    return(
        <div>
          <To_Do_List handelName={handelNameCategory} />       
             
          {nameCategory !== "Orders" && <DataCategore name={nameCategory} />}        
          
          </div>
    )
}