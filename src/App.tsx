import { Box } from "@material-ui/core";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home"
import Music from "./pages/Music";

export default function App() {
  return (
    <Router>
       {/* <Box height='40px' width='100%' bgcolor='#fff' display='flex' justifyContent='center' alignItems='center'><p style={{color: 'black', padding:'5px', margin:0}}>This site is under construction</p></Box> */}
      <Box >
        <Navigation />
        <Switch>
        <Route path="/music" exact component={Music}/>
          <Route path="/about" exact component={About}/>
          <Route path="/contact" exact component={Contact}/>
          <Route path="/" exact component={Home}/>
        </Switch>
      </Box>
    </Router>
  )
}


