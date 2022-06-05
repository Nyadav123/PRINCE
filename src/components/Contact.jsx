import "./contact.css";
import Phone from "./../img/phone.png";
import Email from "./../img/email.png";
import wht from "./whts.png";
import emailjs from "emailjs-com";
import Address from "./../img/address.png";
import { useRef, useState } from "react";

const Result = () => {
  return <p>Your Message has been successfully sent.I will contact you soon</p>;
};
const Contact = () => {
  const form = useRef();
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_629ogyq",
        "template_eoah1zg",
        e.target,
        "bVcost1zdWtqQmpiu"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">You can contact us.</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              <a
                rel="noreferrer"
                style={{ color: "grey" }}
                href="tel: 9911714884"
                target="_blank"
              >
                {" "}
                +91-9911714884</a>
            </div>
            <div className="c-info-item">
              <img src={wht} alt="" className="c-icon" />
              <a
                rel="noreferrer"
                style={{ color: "grey" }}
                href="https://wa.me/+919911714884?text=Hi%27,%20I'm%20interested%20in%20your%20products"
                target="_blank"
              >
                {" "}
                9911714884
              </a>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              <a
                rel="noreferrer"
                style={{ color: "grey" }}
                href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTLGJLZPFLrWZNwBzWqvmTsgmZxDrLfzHSVVlQhSvCZkTxsGQkKPkHtXqkGTfPbjgQNnjB"
                target="_blank"
              >
                yadavtarun343@gmail.com
              </a>
            </div>
       
        
        
          
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              <a
                rel="noreferrer"
                style={{ color: "grey" }}
                target="_blank"
                href="https://www.google.co.in/maps/place/Metro+Station+Samaypur+Badli,+Bawana+Rd,+Suraj+Park,+Badli,+Rohini,+New+Delhi,+Delhi+110042/@28.7447563,77.133936,16.28z/data=!4m5!3m4!1s0x390d0104d97c6181:0x43018bd8edd2fa8e!8m2!3d28.7462907!4d77.1375512"
              >
                Samaypur,Badli,Delhi-110042
              </a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <h1 className="c-title1">
            {" "}
           How May I Help You.
          </h1>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Name" name="name" />
            &nbsp; <input type="text" placeholder="Company Name" name="Company" />
            <input type="text" placeholder="Email" name="email" />
            &nbsp; <input type="text" placeholder="Phone No." name="phone" />
            <textarea
              rows="5"
              placeholder="Any Message drop here!"
              name="message"
              className="message"
            />
              <textarea
              rows="5"
              placeholder="Any Feedback leave here!"
              name="feedback"
              className="feedback"
            />
           {/* <br/> */}
            <button
              style={{ marginTop: 10, marginBottom: 20 }}
              type="submit"
              value="Send"
            >
              Submit
            </button>
            <div style={{ marginTop: 10 }} className="row">
              {result ? <Result /> : null}
              {/* style={{backgroundColor: darkMode && "#333"}}
            if ypu want to add background on darkmode */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
