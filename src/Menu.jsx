import React from "react";
import {NavLink} from "react-router-dom";
import 'tachyons';


const Menu=()=>{

  return (
  	<>	
  		<NavLink to="/" className="bg-light-blue ma2 dib grow">About US</NavLink>
    	<NavLink to="/contact" className="bg-light-blue ma2 dib grow"> Contact US </NavLink>
    </>
    );
};

export default Menu;
