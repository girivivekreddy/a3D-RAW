import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import dark_arrow from '../../assets/dark-arrow.png'
import heart_icon from '../../assets/heart.png'



const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "09212379-8f79-4a4f-b559-0bbb415bb7ee");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };




  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out through contact form or find our
                contact information below. Your feedback, questions, and suggestions are important to us 
                as we strive to provide exceptional service to our artist community.<br/><br />
                <h3>With Love <img src={heart_icon} alt="" /></h3>
                <ul className='author'>
                    <li><img src={dark_arrow} alt="" />VIVEK REDDY GIRI</li>
                    <li><img src={dark_arrow} alt="" />THARUN PRASAD REDDY ARAVA</li>
                </ul>
            </p>
            <ul>
                <li><img src={mail_icon} alt="" />Contact@a3d.art</li>
                <li><img src={phone_icon} alt="" />+1 123-456-7890</li>
                <li><img src={location_icon} alt="" />77 Massachusetts Ave, Cambridge<br />MA 02139, United States</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name="name" placeholder='Enter your name' required />
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                <label>Write your message here</label>
                <textarea name='message' rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}
import './Contact.css'


export default Contact
