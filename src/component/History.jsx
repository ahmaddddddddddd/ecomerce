import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import Dashboardg from '../image/dashboard__1_-removebg-preview.png';
import add from '../image/product-removebg-preview.png';
import history from '../image/file-removebg-preview.png'
import '../css/history.css'
import axios from 'axios';

const History = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

    const [Checkout, setCheckout] = useState([]);

    const fetchData = async()=>{
      try {
        const response = await axios.get('http://192.168.18.210:3212/checkout');
        setCheckout(response.data)
    
      } catch (error) {
        console.log(error);
      }
    }
  
    useEffect(()=>{
      fetchData()
    },[])

  return (

    
    <div>
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
          <p>Your History</p>
        </div>

        <table className="custom-table">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>shopId</th>
        <th>checkAmount</th>

      </tr>
    </thead>
    <tbody>
    {Checkout.map((item, index) => (
               <tr key={item}>
               <td>{index+1}</td>
               <td>{item.itemId}</td>
               <td>{item.shopId}</td>
               <td >{item.checkAmount}</td>
             </tr>
      ))}
 
    </tbody>
  </table>
      
      
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
          <li className="dd">
            <Link to={'/addProduct'}><a href="">add your Product</a></Link>
            <img src={add} alt="" width='25px'  />
          </li>
          <li className="tory">
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
   </div>
  )
}

export default History
