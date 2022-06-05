import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "./context";
import {BrowserRouter,Route} from "react-router-dom"
import About from "./components/about/About";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";

ReactDOM.render(

    <ThemeProvider>
     <BrowserRouter>
      <Route path="/" exact component={App}/>
      <Route path="/about" exact component={About}/>
      <Route path="/intro" exact component={Intro}/>
      <Route path="/contact-us" exact component={Contact}/>
      <Route path="/hobbies" exact component={ProductList}/>
      </BrowserRouter>

    </ThemeProvider>,  
  document.getElementById("root")
);
