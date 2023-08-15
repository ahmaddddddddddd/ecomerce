import React, { useState } from "react";
import axios from "axios";
import "../css/addItem.css";
import { useNavigate } from "react-router-dom";

const AddItem = () => {
  const [ItemName, setItemName] = useState("");
  const [Price, setPrice] = useState("");
  const [Stock, setStock] = useState("");
  const [image, setImage] = useState("");
  const [Descripsi, setDescripsi] = useState("");

  const navigate = useNavigate();

  const HandlerAdd = async (e) => {
    e.preventDefault();
    try {
       await axios.post("http://192.168.18.210:3212/item", {
        itemName: ItemName,
        description: Descripsi,
        image: image,
        price: parseInt(Price),
        stock: parseInt(Stock)
      });
      navigate("/dashboard");
    } catch (error){
    console.log(error)}
  };

  return (
    <div className="bg">
      <div className="p">
        <h4> Add Item</h4>
      </div>
      <form onSubmit={HandlerAdd}>
        <div className="addItem">
          <div className="inputBox">
            <div className="text">
              <div className="up">
                <input
                  type="text"
                  required
                  placeholder="Item Name"
                  value={ItemName}
                  onChange={(e) => setItemName(e.target.value)}
                />
                <input
                  type="input"
                  required
                  placeholder="Price"
                  value={Price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="mid">
                <input
                  type="input"
                  required
                  placeholder="Link"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />

                <input
                  type="number"
                  required
                  placeholder="Stock"
                  value={Stock}
                  onChange={(e) => setStock(e.target.value)}
                />
              </div>
              <div className="down">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  value={Descripsi}
                  onChange={(e) => setDescripsi(e.target.value)}
                ></textarea>
                   <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
           
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
