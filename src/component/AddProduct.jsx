import React,{useState} from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Dashboardg from '../image/dashboard__1_-removebg-preview.png';
import add from '../image/product-removebg-preview.png';
import history from '../image/file-removebg-preview.png'
import '../css/add.css'
import ctegoryLogo from '../image/category.png'

const AddProduct = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);


    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };



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
          <p>Add your Item Here</p>
        </div>
        <div className="space"></div>
        <div className="content">
          <div className="add">
            <div className="title-box">
              <p>add Item</p>
              <hr/>
              <div className="info">
                <Link to={'/addItem'}><a href="">Click Here To Add</a></Link>
              </div>
            </div>
          </div>
          <div className="add">
            <div className="title-box">
              <p>Add Category</p>
              <hr />
              <div className="info"><a href="">
                <img src={ctegoryLogo} alt=""  width='50px' height=''/></a>
              </div>
            </div>  
          </div>
          <div className="add">
            <div className="title-box">
              <p>Add stock</p>
              <hr />
              <div className="info">
              <Link to={'/addStock'}><a href="">Click Here To Add</a></Link>
              </div>
            </div>
          </div>
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
        <ul className="side">
          <li className="das">
          <a href=""><Link to={`/dashboard`}>Dashboard</Link></a>
            <img src={Dashboardg} alt=""  width='25px' />
          </li>
          <li className="ar">
            <a href="">add your Product</a>
            <img src={add} alt="" width='25px'  />
          </li>
          <li className="his">
            <a href=""><Link to={`/history`}>History</Link></a>
            <img src={history} width='25px' />
          </li>
          <li className="logout">          
            <button><Link to={`/login`}>Logout</Link></button>
            </li>
        </ul>
      </div>
    </div>   
    
  </div>
  )
}

export default AddProduct
