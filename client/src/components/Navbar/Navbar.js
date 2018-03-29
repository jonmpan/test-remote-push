import React from "react";
import "./Navbar.css";

const Navbar = props => (
	<nav>
		<ul className="zero-zero" id="customnavbar">
			{props.loggedIn ? <li className="text-white"><a href="/">Game</a></li> : ""}
			{props.loggedIn ? "" : <li className="text-white"><a href="/register">Register</a></li>}
			{props.loggedIn ? "" : <li className="text-white"><a href="/login">Login</a></li>}
			{props.loggedIn ? <li className="text-white"><a href="/logout">Logout</a></li> : ""}
		</ul>
	</nav>
)

export default Navbar;
