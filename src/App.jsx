import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import "./components/product/App.css"
import ProductList from "./components/productList/ProductList";
// import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
  
    <div s> 
      {/* <Toggle /> */}
      <Intro />
      <ProductList />
      <About />
      <Contact />

      
    </div>
    </>
  );
};

export default App;
