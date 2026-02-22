import "../App.css"
import NavBar from "../components/navbar"
import Button from "../components/button"

function Contact() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <>
        <NavBar/>
      </>

      <section className="section">
        <h1 className="title">Contact Us</h1>

        <div className="container">
          <div className="title">
            <p>If you want to order in bulk or an item more than</p>
            <p>30 years before its sold we got you covered!</p>
            <br/>
            <p>Phone: 0403 020 010</p>
            <p>Email: A.Store@Telemail.com</p>
            <p>Location: Core - Earth Prime</p>
            <p>Teleporter code: 5948-38A</p>
          </div>
          
          <div className="title">
            <div className="section accent">
              <div className="container">
                <h3 className="title">Name:</h3>
                <h3 className="title">Email:</h3>
              </div>

              <div className="container">
                <input className="title txt-input" type="text" id="name" name="name"/>
                <input className="title txt-input" type="text" id="email" name="email"/>
              </div>

              <div className="title">
                <h3>Message:</h3>
                <input className="title txt-input-large" type="text" id="msg" name="msg"/>
                <Button className="proceedButton" label="Submit" onClick={handleClick}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact