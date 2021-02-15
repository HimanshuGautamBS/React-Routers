import React from "react";

import {Link} from "react-dom-router";


const Navbar=()=>{

  return (
  	<>	
  		<Link to="/">About US</Link>
    	<Link to="/contact"> Contact US </Link>
    </>
    );
};

export default Navbar;
