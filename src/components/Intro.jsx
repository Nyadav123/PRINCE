import { Link } from "react-router-dom";
import "./intro.css";
import logo from "./pr.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
      <div id="mySidenav" className="sidenav">
 <Link to="/" id="about">Home<br/>&nbsp;&nbsp;&nbsp;&nbsp;&#9839;</Link>
  <Link to="/hobbies" id="projects" style={{fontSize:13}}>Products<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9745;</Link>
   <Link to="/about" id="blog">About<br/>&nbsp;&nbsp;&nbsp;&nbsp;&#9739;</Link>
  <Link to="/contact-us" id="contact">Contact<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9743;</Link>
 </div>
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello,</h2>
          <h2 className="i-intro">Welcome to</h2>
          {/* <h1 className="i-name">PRINCE</h1> */}
          <img className="c-logo" alt="" src={logo} />
          <h1 className="i-name">INDUSTRIES</h1>

          <h1 className="i-name1">FOR US</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Quality isn't</div>
              <div className="i-title-item">EXPENSIVE</div>
              <div className="i-title-item">it's</div>
              <div className="i-title-item">PRICELESS.</div>
            </div>
          </div>
          <p className="i-desc">
          Stands For Quality.<br/>Since 1999
          </p>
        </div>
    
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        {/* <img src={logo} alt="" className="c-logo" /> */}
      </div>
    </div>
  );
};

export default Intro;