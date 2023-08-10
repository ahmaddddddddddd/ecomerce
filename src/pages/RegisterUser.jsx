import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/register.css";
import { Link } from "react-router-dom";
import gambar from'../image/regis.png'


const RegisterUser = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  const handlerRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://192.168.18.210:3212/auth/register`,
        {
          userName: Username,
          password: Password,
        }
      );
      navigate("/login")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container">
      <div className="image">
        <img
          src={gambar}
          width="700px"
        />
              </div>

        <div className="register-box">
          <div className="title">
            <h2>Registrasi</h2>
          </div>

          <form onSubmit={handlerRegister}>
            <div className="google">
              <div className="box">
                <img
                  src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                  width="20px"
                  height="20px"
                />
                <a href="">Google</a>
              </div>
              <div className="downCard">
                <div className="signInLine">
                  <div className="vertikalLine"></div>
                  <p>Or</p>
                  <div className="vertikalLine"></div>
                </div>
              </div>
            </div>
            <div className="user-box">
              <input
                type="text"
                required
                placeholder="Username"
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="user-box">
              <input
                type="password"
                required
                placeholder="Password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn">
              SignUp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;
