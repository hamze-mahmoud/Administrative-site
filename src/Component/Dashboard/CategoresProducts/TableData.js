import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function TableData({data}) {
  // Constant data orders
   console.log("data=",data)
/*  data: [
            { id: 1, description: "Wireless Mouse", price: 25, type: "Electronics", totalPrice: 25 },
            { id: 2, description: "USB-C Cable", price: 15, type: "Electronics", totalPrice: 15 },
            { id: 3, description: "Notebook", price: 10, type: "Stationery", totalPrice: 10 },
          ],
          */
  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Orders Table</h2>
      <div className="table-responsive">
  <table className="table table-striped table-bordered table-sm d-md-table d-lg-table">
  
 
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>description</th>
              <th>price</th>
              <th>type</th>
              <th>totalPrice</th>
             
            </tr>
          </thead>
          <tbody>
  {data.map((parentOrder) => (
    <React.Fragment key={parentOrder.name}>
      {parentOrder.isSelected && parentOrder.data.map((order) => (
        <tr key={order.id}>
          <td>{order.id}</td>
          <td>{order.description}</td>
          <td>${order.price.toFixed(2)}</td>
          <td>{order.type}</td>
          <td>${order.totalPrice.toFixed(2)}</td>
        </tr>
      ))}
    </React.Fragment>
  ))}
</tbody>
        </table>
      </div>
    </div>
  );
}