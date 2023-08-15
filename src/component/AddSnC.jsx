import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import Dashboardg from "../image/dashboard__1_-removebg-preview.png";
import add from "../image/product-removebg-preview.png";
import history from "../image/file-removebg-preview.png";
import "../css/add.css";
import ctegoryLogo from "../image/category.png";

const AddSnC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [Category, setCategory] = useState("");
  const [Stock, setStock] = useState("");
  const [dropdown, setDropdown] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const HandlerEdit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://192.168.18.210:3212/item/${id}`, {
        categoryId: Category,
        stock: Stock,
      });
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  const HandlerStock = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://192.168.18.210:3212/item/${id}`, {
        stock: parseInt(Stock),
      });
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  const HandlerCategory = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://192.168.18.210:3212/item/${id}`, {
        categoryId: Category,
      });
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const getDropdown = async () => {
    try {
      const response = await axios.get("http://192.168.18.210:3212/category");
      setDropdown(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDropdown();
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
          <p>Add your Item Here</p>
        </div>
        <div className="space"></div>
        <div className="content">
          <div className="add">
            <div className="title-box">
              <p>add Item</p>
              <hr />
              <div className="info">
                <Link to={"/addItem"}>Click Here To Add</Link>
              </div>
            </div>
          </div>

          <div className="add">
            <div className="title-box">
              <p>Add Category</p>
              <hr />
              <div className="info">
                <a href="">
                  <img src={ctegoryLogo} alt="" width="50px" height="" />
                </a>
              </div>
            </div>
          </div>
          <div className="add">
            <div className="title-box">
              <p>Add stock</p>
              <hr />
              <div className="info">
                <Link to={"/addStock"}>
                  <a href="">Click Here To Add</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="category-title">
          <p>Add Category</p>
          <p>Add Stock</p>
        </div>

        <div className="category">
          <div className="categoryBox">
            <div className="categoryIsi">
              <form onSubmit={HandlerCategory}>
                <select
                  id="categoryId"
                  className="ctgry"
                  value={Category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="category"
                >
                  {dropdown &&
                    dropdown.map((item, index) => (
                      <option value={item.id} key={index}>
                        {item.categoryName}
                      </option>
                    ))}
                </select>

                <button type="submit" className="addCnS">
                  submit
                </button>
              </form>
            </div>
          </div>
          <div className="categoryBox">
            <div className="categoryIsi">
              <form onSubmit={HandlerStock}>
                <input
                  type="number"
                  className="editcns"
                  value={Stock}
                  onChange={(e) => setStock(e.target.value)}
                  placeholder="stock"
                />
                <button type="submit" className="addCnS">
                  submit
                </button>
              </form>
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
              <a href="">
                <Link to={`/dashboard`}>Dashboard</Link>
              </a>
              <img src={Dashboardg} alt="" width="25px" />
            </li>
            <li className="ar">
              <a href="">add your Product</a>
              <img src={add} alt="" width="25px" />
            </li>
            <li className="his">
              <a href="">
                <Link to={`/history`}>History</Link>
              </a>
              <img src={history} width="25px" />
            </li>
            <li className="logout">
              <button>
                <Link to={`/login`}>Logout</Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AddSnC;
