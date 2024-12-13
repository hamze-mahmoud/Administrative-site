import React, { useState } from "react";

const AdminDashboard = () => {
  const [selected, setSelected] = useState(null); // State to track selected item

  const categories = [
    "Dashboard",
    "Products",
    "Orders",
    "Customers",
    "Reports",
    "Settings",
  ];

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/* Sidebar */}
        <aside
          className="col-12 col-md-3 col-lg-2 bg-dark text-light p-3 shadow-lg d-flex flex-column"
          style={{ minHeight: "100vh" }}
        >
          <h3 className="text-center my-3">Admin Panel</h3>
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Search categories..."
          />
          <nav className="flex-grow-1">
            <ul className="nav flex-column">
              {categories.map((category, index) => (
                <>
                <li
                  key={index}
                  className={`nav-item  p-2 rounded ${selected === index ? "bg-primary text-white" : "text-light"}`}
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelected(index)} // Update selected state
                >
                  {category}
                </li>
                <hr/>
                </>
              ))}
            </ul>
          </nav>
          <footer className="mt-auto text-center">
            <small>&copy; 2024 Admin Panel</small>
          </footer>
        </aside>

        {/* Main Content */}
        <main className="col-12 col-md-9 col-lg-10 bg-light p-4">
          <h1>Welcome, Admin!</h1>
          <p className="lead">
            Manage your dashboard with ease. Use the menu on the left to
            navigate.
          </p>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
