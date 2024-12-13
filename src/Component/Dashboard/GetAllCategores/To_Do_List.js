import React, { useState } from "react";
import OrdersList from "./OrderList/OrdersList";

export default function To_Do_List({ handelName }) {
  console.log(handelName); // Should log the function definition
  console.log(handelName("hamze"))
  const [selected, setSelected] = useState(null); // Track selected item
  const [showOrders, setShowOrders] = useState(false); // Track whether to show orders

 console.log(showOrders);
  const orders = [
    "Order1 - John Doe",
    "Order2- Jane Smith",
    "Order3 - Mark Johnson",
    "Order4 - Emily Davis",
  ]; 




  const data=["Dashboard","products","Orders","costumers","Reports","setting"];
//design all requirments in to-do-list
  const AllData = data.map((el, index) => (
    <>
      <li
        key={index}
        className={`nav-item p-2 rounded ${
          selected === index ? "bg-primary text-white" : "text-light"
        }`}
        style={{ cursor: "pointer" }}
        onClick={() => {
          setSelected(index);
       
          if (el === "Orders") {
            setShowOrders(true);
          } else {
            setShowOrders(false);
          
          }
        }}
      >
        {el}
      </li>
      <hr />
    </>
  ));

  return (


    <div className="container-fluid vh-100">
      <div className="row h-100">
      

        <aside
          className="col-12 col-md-3 col-lg-2 bg-dark text-light p-3 shadow-lg d-flex flex-column"
          style={{
            minHeight: "40rem", // Allows height to adjust dynamically
            
          }}
        >
          <h3 className="text-center my-3">Admin Panel</h3>
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Search categories..."
          />



          <nav className="flex-grow-1">
            <ul className="nav flex-column">
              {AllData}
            
            </ul>
          </nav>





          <footer className="mt-auto text-center">
            <small>&copy; 2024 Admin Panel</small>
          </footer>
        </aside>

       
        <main className="col-12 col-md-9 col-lg-10 bg-light p-4">
          <h1>Welcome, Admin!</h1>
          <p className="lead">
            Manage your dashboard with ease. Use the menu on the left to
            navigate.
          </p>

         
          {showOrders && (
           <OrdersList orders={orders}  />//if Admin clicked at option Orders
          )}
        </main>
      </div>
    </div>
  );
}
