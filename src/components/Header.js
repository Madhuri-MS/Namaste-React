import { useState } from "react";
import { ICON_URL } from "../../utils/constants";

const Header = () =>{

  const [btnName, setBtnName] = useState('Login');
   return (
    <div className="heading">
      <div className="logo-container">
        <img className="logo"  src={ICON_URL} alt="logo" /></div>
      <div className="nav-items">
        <ul>
          <li><h4>Home</h4></li>
          <li><h4>About</h4></li>
          <li><h4>Contact</h4></li>
          <li><h4>Cart</h4></li>
           <li><button className="login-btn" onClick={ () =>{
            setBtnName(btnName === "Login" ? "Logout" : "Login");
           }}>{btnName}</button></li>
        </ul>
      </div>
    </div>
   )
}

export default Header;