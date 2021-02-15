import React from "react";
import {Route, Switch} from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import 'tachyons';
import Error from "./Error";
import Menu from "./Menu";
const App=()=>{

  return (
      <>
      <div className="bg-light-purple b br-40 tc br1 bb-ns ">
      <Menu />
      </div>
      <Switch>
        <Route exact path="/" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route component={Error} />
      </Switch>
      </>
    );
};

export default App;


// exact => use to render the component on exact path