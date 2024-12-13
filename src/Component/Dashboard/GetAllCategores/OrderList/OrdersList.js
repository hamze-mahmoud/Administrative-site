import { useEffect, useState } from "react";
import axios from "axios";
import OrderDataDesign from "../../oreders/OrderDataDesign";
//design the oreders Names and add fetch data that Special in Order name
export default function OrdersList(){
    const [OrderName,setNameOrder]=useState("");
    const [select,setSelect]=useState(false);
    const [uploading,setUploading]=useState(true);
    const [allOrders,setAllOreders]=useState([]);
    const [ordersNames, setOrderNames] = useState([
        {
          name: "order1",
          isSelected: false,
          data: [
            { id: 1, description: "Wireless Mouse", price: 25, type: "Electronics", totalPrice: 25 },
            { id: 2, description: "USB-C Cable", price: 15, type: "Electronics", totalPrice: 15 },
            { id: 3, description: "Notebook", price: 10, type: "Stationery", totalPrice: 10 },
          ],
          prevSelected: false,
          date: "1/2/2023",
          shipper: "China",
        },
        {
          name: "order2",
          isSelected: false,
          data: [
            { id: 1, description: "Gaming Keyboard", price: 45, type: "Electronics", totalPrice: 45 },
            { id: 2, description: "Desk Lamp", price: 30, type: "Home & Office", totalPrice: 30 },
            { id: 3, description: "Water Bottle", price: 20, type: "Accessories", totalPrice: 20 },
          ],
          prevSelected: false,
          date: "1/5/2023",
          shipper: "USA",
        },
        {
          name: "order3",
          isSelected: false,
          data: [
            { id: 1, description: "Bluetooth Speaker", price: 50, type: "Electronics", totalPrice: 50 },
            { id: 2, description: "Notebook Set", price: 12, type: "Stationery", totalPrice: 12 },
            { id: 3, description: "Pen Pack", price: 8, type: "Stationery", totalPrice: 8 },
          ],
          prevSelected: false,
          date: "1/10/2023",
          shipper: "Germany",
        },
        {
          name: "order4",
          isSelected: false,
          data: [
            { id: 1, description: "Smartphone Case", price: 20, type: "Accessories", totalPrice: 20 },
            { id: 2, description: "Power Bank", price: 35, type: "Electronics", totalPrice: 35 },
            { id: 3, description: "Headphones", price: 80, type: "Electronics", totalPrice: 80 },
          ],
          prevSelected: false,
          date: "2/15/2023",
          shipper: "Japan",
        },
      ]);
console.log(ordersNames);

 /* useEffect(()=>{
    const PrevSelected=false
    //select order
        const prevSelected=ordersNames.map((el)=>{
            if(el.name==OrderName&&el.prevSelected==false){
                setUploading(false);
                setOrderNames((prev)=>[...prev,{
                    name:OrderName,
                    isSelected:true,
                    prevSelected:true,
                    data:[...el.data],
                    ...el,
                }
                ]);
                return;
            }
        })
   },[OrderName])
*/

   const SetNameOrders=(e,order)=>{
       if(e.target.checked){
      const isSelected={  isSelected:true,prevSelected:true};
      console.log("e.target=",e.target.checked);
      console.log("name",order.name);
      if(ordersNames.length>0){
        const checked=ordersNames.map((el)=>{
            console.log(el.name)
            if (el.name === order.name) {
                console.log("checked is corect for el")
                return { ...el, ...isSelected }; // Return the updated object
              }
              return el; // Return the original object if not updated
        })
        console.log("checked",checked);
        setOrderNames([...checked])
    }
       }
       else{//if unSelected
        const updatedOrders = ordersNames.map((el) => {
            if (el.name === order.name) {
              return { ...el, isSelected: false }; // Update isSelected to false
            }
            return el; // Return the original object for others
          });
          setOrderNames([...updatedOrders])
       }
   }
    return(
    <div>
        <h2 className="mt-4">Order List</h2>
        <ul className="list-group">
          {ordersNames.map((order, index) => (
            <li key={index} className="list-group-item">
              <input
                type="checkbox"
                className="form-check-input me-2"
                onChange={(e)=>{
                  console.log(e.target.checked);
                  setSelect(true);
                  setNameOrder(order)
                  SetNameOrders(e,order)
                }}
                id={`order-${index}`}
              />
             <label htmlFor={`order-${index}`} style={{width:'90%'}}>{order.name}</label>
            </li>
          ))}
        </ul>
        {!uploading&&<h1>Up loading</h1>}
       {select==true?  <OrderDataDesign data={ordersNames} /> : <h1>Select Any One Of Order</h1>} 
      </div>
    )
}