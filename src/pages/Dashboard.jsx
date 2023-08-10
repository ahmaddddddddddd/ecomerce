import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

function Dashboard() {

    const[data,setData] = useState([])
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


const fetchData = async() =>{
    try {
        const response = await axios.get(`http://192.168.18.210:3212/item`);
        setData(response.data);
    } catch (error) {
        
    }

}
useEffect(()=>{
    fetchData();
},[])
  

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
          <button><Link className='logout'to={`/login`}>Logout</Link></button>
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
              <p>Totel Items Sold</p>
              <hr />
              <div className="info">
                <p>6.9009090</p>
              </div>
            </div>
          </div>
          <div className="dash">
            <div className="title-box">
              <p>Total Visite</p>
              <hr />
              <div className="info">
                <p>6.9009090</p>
              </div>
            </div>
          </div>
        </div>
 <p className="parag">Here all Your Item</p>
 
        <div className="item">
            {data.map(item => (
            <div className="book-cell" key={item.id}>
                <div className="category">{item.categoryId}</div>
              <div className="book-img">
                <img
                  src={item.image}
                  alt={item.title}
                  className="book-photo"
                />
              </div>
            <div className="book-content">
              <div className="book-title">{item.itemName}</div>
              <div className="book-author">Rp.{item.price}</div>
                <span className="book-voters">Stock Item : {item.stock}</span>
              
              <div className="book-sum">
               {item.description}
              </div>
            </div>
            </div>

            ))}

          </div>
        
      </main>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="nameTop">
          <p>Navbar</p>
          <button className="close-button" onClick={toggleSidebar}>
            ×
          </button>
        </div>
        <div className="sideName">
          <ul>
            <li>
              <a href="">Dashboard</a>
            </li>
            <li>
              <a href="">add your Product</a>
            </li>
            <li>
              <a href="">History</a>
            </li>
          </ul>
        </div>
      </div>   
    </div>
  );
}

export default Dashboard;
