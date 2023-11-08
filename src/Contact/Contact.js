import React,{useState, forwardRef} from "react";
import './Contact.css'
import { send } from "emailjs-com";


const Contact = forwardRef((props, ref) =>{
  // const [inputValue, setInputValue] = useState(inputValue);
  const [text, setText] = useState("");
  const [toSend, setToSend] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    option:""
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_9xqs1me", "template_mbyqixg", toSend, "rRuF3xAyUBxfNaFxW")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setText(
          "Your message has been sent successfully, please expect a response within an hour."
        );
        setToSend({
          name: "",
          email: "",
          phone: "",
          message: "",
          option: "",
        }); // Сбросить данные в состоянии после отправки
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handelChange = (event) => {
    setToSend({ ...toSend, [event.target.name]: event.target.value });
  };



    return (
      <div className="form" ref={ref}>
        <p className="decr-form">
          Hey, this could be the start of something magical!
          <br />
          Whether you would like to share your life stories, create meaningful
          content for your beautiful brands or need a helping hand with your
          growth as a creative soul, I would be honoured to be a part of your
          journey.
        </p>
        <form onSubmit={onSubmit}>
          <div className="item-form">
            <input
              placeholder="name*"
              name="name"
              type="text"
              value={toSend.name}
              onChange={handelChange}
            />
          </div>

          <div className="item-form">
            <input
              placeholder="Email*"
              name="email"
              type="text"
              value={toSend.email}
              onChange={handelChange}
            />
          </div>

          <div className="item-form">
            <input
              placeholder="Phone number*"
              name="phone"
              type="number"
              value={toSend.phone}
              onChange={handelChange}
            />
          </div>
          <div className="item-form">
            <select name="option" value={toSend.option} onChange={handelChange}>
              <option>Wedding</option>
              <option>Love story</option>
              <option>Portrait</option>
              <option>Another</option>
            </select>
          </div>
          <div className="item-form">
            <textarea
              type="text"
              name="message"
              placeholder="Your message*"
              value={toSend.message}
              onChange={handelChange}
            />
          </div>
          <button type="submit">SEND</button>
        </form>
        <div className="out">{text}</div>
      </div>
    );
})

export default Contact;