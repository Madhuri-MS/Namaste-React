import { useState } from "react";
import { ICON_URL } from "../../utils/constants";

import { Link } from "react-router";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () =>{

  const [btnName, setBtnName] = useState('Login');
  const onlineStatus = useOnlineStatus();
   return (
    <div className="heading">
      <div className="logo-container">
        <img className="logo"  src={ICON_URL} alt="logo" /></div>
      <div className="nav-items">
        <ul>
          <li><h4>Online Status: {onlineStatus ? "🟢" : "🔴"}</h4></li>
          <li><Link to="/"><h4>Home</h4></Link></li>
          <li><Link to ="/about"><h4>About</h4></Link></li>
          <li><Link to="/contact"><h4>Contact</h4></Link></li>
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