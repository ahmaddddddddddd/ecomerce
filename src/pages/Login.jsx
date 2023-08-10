import React, { useEffect, useState } from "react";
import "../css/Login.css";
import "../css/responsive.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const HandlerLogin = async (e) => { 
    e.preventDefault();
    try {
          await axios.post(`http://192.168.18.210:3212/auth/login`,
        {
          userName: Username,
          password: Password,
        }
      );
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="backghround">
        <img
          src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/icarus/kratos/45ab29df.png"
          width="800px"
        />
        <div className="login-box">
          <div className="title">
            <h2>Login</h2>
            <Link className="nn" to={`/registrasiUser`}>Registrasi
            </Link>
          </div>

          <form onSubmit={HandlerLogin}>
            <div className="user-box">
              <input type="text" required placeholder="Username" value={Username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="user-box">
              <input type="password" required placeholder="Password"  value={Password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button type="submit" className="btn">
              SignIn
            </button>

            <div className="downCard">
              <div className="signInLine">
              <div className="vertikalLine"></div>
              <p>Or</p>
              <div className="vertikalLine"></div>
              </div>
              <div className="google">
                <div className="box">
                  <img
                    src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                    width="20px"
                    height="20px"
                  />
                  <a href="">Google</a>
                </div>

                <div className="box">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/631/631061.png?w=900&t=st=1691558161~exp=1691558761~hmac=d923c93b820251cd77d1daa5c97212ef98d2a7d2b74c751e7c9bd390fb998a16"
                    width="20px"
                    height="20px"
                  />
                  <a href="">Scan Kode QR</a>
                </div>

                <div className="footer">
                  <p>Need Help?<a href=""> Contack Us Here</a></p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
