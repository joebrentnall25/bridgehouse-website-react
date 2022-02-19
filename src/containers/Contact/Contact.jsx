import "./Contact.scss";
import react, {useRef, useState} from "react";
import emailjs from '@emailjs/browser';

// Components
import Bookings from "../../components/BookTable/Bookings";
import Button from "../../components/Buttons/Button";

const Contact = () => {
    const form = useRef();
    const [isSuccessful, setIsSuccessful] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('bridgehouse_support', 'bridgehouse_default_msg', form.current, 'user_ipKjdSHYHWIzBGxAV38ZZ')
          .then((result) => {
              console.log(result.text);
              if (result.text === "OK"){
                  setIsSuccessful(true)
                  setTimeout(() => {
                      setIsSuccessful(false)
                  }, 15000)
              }
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };

    return ( 
        <main>
        <header className="contact-hero">
            <h2 className="menu-hero__title primary">Contact</h2>
            <h3 className="menu-hero__subheader">Get in touch.</h3>
        </header>
        <div className="contact">
            <div className="contact__info dark">
                <div className="contact__info-text">
                    <p>Bridgehouse</p>
                    <p>Derby Road</p>
                    <p>Ambergate</p>
                    <p>Belper</p>
                    <br/>
                    <p><a className="contact__info-text-links" href="tel:+441332482549"><i className="fas fa-phone"></i> 01332 482549</a></p>
                    <p><a className="contact__info-text-links" href="mailto:support@bridgehouseambergate.co.uk"><i className="fas fa-envelope"></i>Email</a></p>
                    <div className="contact__info-text-times">
                        <br/>
                        <ul>
                            <li>M: <span className="highlight">8am-3pm</span></li>
                            <li>T: <span className="highlight">8am-3pm</span></li>
                            <li>W: <span className="highlight">8am-3pm</span></li>
                            <li>T: <span className="highlight">8am-3pm</span></li>
                            <li>F: <span className="highlight">8am-3pm</span></li>
                            <li>S: <span className="highlight">8am-3pm</span></li>
                            <li>S: <span className="highlight">9am-2pm</span></li>
                        </ul> 
                        <br/>
                        <p>Please note that we stop serving food an hour before close.</p> 
                      </div>
                </div>
                <div className="contact__info-links ">
                    <a target="_blank" href="https://www.facebook.com/BridgeHouseAmbergate"><i className="icon-facebook fab fa-facebook fa-3x"></i></a>
                    <a href="https://www.tripadvisor.co.uk/Restaurant_Review-g2093189-d23163521-Reviews-Bridge_House-Ambergate_Derbyshire_England.html" target="_blank"><img src="./assets/images/trip-advisor-icon.png" alt=""/></a>
                </div>
            </div>
            <form ref={form} action="" className="contact__form" onSubmit={sendEmail}>
                <input type="text" name="name" id="name" placeholder="Name" required/>
                <input type="email" name="email" id="email" placeholder="Email" required/>
                <input type="tel" name="number" id="number" placeholder="Contact Number"
                pattern="[0-9]{11}" required/>
                <input type="text" name="subject" id="subject" placeholder="Subject" required/>
                <textarea name="message" id="message" cols="30" rows="10" placeholder="Message" required></textarea>
                <Button buttonType="submit" text="Submit" type="form"/>
                {isSuccessful ? <p className="contact__form-success">Success!</p> : null}
            </form>
        </div>
        <Bookings type="table"/>
    </main>);
}

export default Contact;