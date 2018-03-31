import React from "react";
import "./Navbar.css";

const Navbar = props => (
	<nav>
		<ul className="zero-zero" id="customnavbar">
			{props.loggedIn ? <li className="text-white">Game</li> : ""}
			{props.loggedIn ? "" : <li className="text-white" onClick={()=>{props.registerPageLoad()}}>Register</li>}
			{props.loggedIn ? "" : <li className="text-white" onClick={()=>{props.loginPageLoad()}}>Login</li>}
			{props.loggedIn ? <li className="text-white" onClick={()=>{props.logOut()}}>Logout</li> : ""}
		</ul>
	</nav>
)

export default Navbar;
