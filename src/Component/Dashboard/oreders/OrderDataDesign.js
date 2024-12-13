import axios from "axios"
import { useEffect, useState } from "react"
import TableData from "../CategoresProducts/TableData"
export default function OrderDataDesign({data}){
    //AllData is array of objects
    return(
    <div>
        <TableData data={data} />
    </div>
    )
}