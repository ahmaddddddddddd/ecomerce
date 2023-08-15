  import React, { useEffect, useState } from "react";
  import axios from "axios";
  import { Link, useParams } from "react-router-dom";
  import "../css/Navbar.css";
  import DashboardIcon from "../image/dashboard__1_-removebg-preview.png";
  import AddIcon from "../image/product-removebg-preview.png";
  import HistoryIcon from "../image/file-removebg-preview.png";
  import Logo from "../image/logo.png";

  function Dashboard() {
    const [data, setData] = useState([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

    const fetchData = async () => {
      try {
        const response = await axios.get(`http://192.168.18.210:3212/item`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        if (error.response) {
          console.error("Response data:", error.response.data);
        }
      }
    };

    

    const handlerDelete = async (id) => {
      try {
        await axios.delete(`http://192.168.18.210:3212/item/${id}`);
        console.log("Item deleted successfully.");

      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      fetchData();
    }, []);

    return (
      <div className={`App ${isSidebarOpen ? "sidebar-open" : ""}`}>
        <header className="App-header">
          <button
            className={`hamburger ${isSidebarOpen ? "open" : ""}`}
            onClick={toggleSidebar}
          >
            ☰
          </button>
        </header>
        <main className="main-content">
          <div className="navbar">
            <p>Dashboard</p>
          </div>
          <div className="space"></div>
          <div className="content">
            <div className="dash">
              <div className="title-box">
                <p>Total Your Item</p>
                <hr />
                <div className="info">
                  <p>6.9009090</p>
                </div>
              </div>
            </div>
            <div className="dash">
              <div className="title-box">
                <p>Total Items Sold</p>
                <hr />
                <div className="info">
                  <p>6.9009090</p>
                </div>
              </div>
            </div>
            <div className="dash">
              <div className="title-box">
                <p>Total Visits</p>
                <hr />
                <div className="info">
                  <p>6.9009090</p>
                </div>
              </div>
            </div>
          </div>

          <p className="parag">Here all Your Items</p>
          <div className="Border">
            <div className="card-container">
              {data.map((item) => (
                <div key={item.id} className="card">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.title}
                    width="200px"
                    height="200px"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.itemName}</h5>
                    <div className="price-stock">
                      <div className="price">
                        <hr className="line" />
                        <p className="card-text">Price: {item.price}</p>
                        <hr className="line" />
                      </div>
                      <div className="stock">
                        <hr className="line" />
                        <p className="card-text">Stock: {item.stock}</p>
                        <hr className="line" />
                      </div>
                    </div>
                    <p className="card-text" id="descripsi">
                      {item.description}
                    </p>
                  </div>
                  <div className="tom">
                  <Link to={`/addsnc/${item.id}`} className="f">Edit</Link>
                 <button className="delete" onClick={() => handlerDelete(item.id)}>Delete</button>

                  </div>
                
                </div>
              ))}
            </div>
          </div>
        </main>
        <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
          <div className="nameTop">
            <p>Lubli</p>
            <button className="close-button" onClick={toggleSidebar}>
              ×
            </button>
          </div>
          <div className="sideName">
            <ul className="side">
              <li className="board">
                <Link to="/">Dashboard</Link>
                <img src={DashboardIcon} alt="Dashboard" width="25px" />
              </li>
              <li className="bar">
                <Link to="/addproduct">Add Your Product</Link>
                <img src={AddIcon} alt="Add Product" width="25px" />
              </li>
              <li className="his">
                <Link to="/history">History</Link>
                <img src={HistoryIcon} alt="History" width="25px" />
              </li>
              <li className="logout">
                <Link to="/login">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  export default Dashboard;
