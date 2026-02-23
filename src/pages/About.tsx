import "../App.css"
import NavBar from "../components/navbar"

function About() {
  return (
    <div>
      <>
        <NavBar/>
      </>

      <section className="section">
        
        <div className="section title accent">
          <h1>Future Products at Today's Prices</h1>
          <p>At A-Store we are committed to providing the best products on the market that don’t exist anywhere else. Our <br/>
            products are swiftly packed by our team of drones and sent directly to your doorstep via quantum teleportation.
          </p>
        </div>

        <div className="container">
          <div className="section">
            <img src="/images/Founder.jpg" height={450} width={300}/>
            <h4>Stock Swedish Guy</h4>
            <p>CEO</p>
          </div>
          <h2 className="speech-bubble">“I don’t why I have this <br/> position I just asked for <br/> a tour of the place.”</h2>
        </div>
      </section>
    </div>
  )
}

export default About