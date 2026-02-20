import "../App.css"
import Button from "../components/button"
import Card from "../components/card"
import NavBar from "../components/navbar"
import Slideshow from "../components/slideshow"

function Home() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  const pics = [
    "/images/Apple.jpg",
    "/images/Banana.jpg",
    "/images/Carrot.jpg"
  ];

  return (
    <body>
      <>
        <NavBar />
      </>
      
      <div>
        <div className="container">
          <h1>Welcome to A-Store</h1>
          <Button className="proceedButton" label="Click Me!" onClick={handleClick}/>
          <Button className="proceedButton" label="Disabled" onClick={handleClick} disabled={true}/>
        </div>

        <div className="container">
          <Card title="Title" subtitle="Subtitle" content="Content"/>
          <Card title="Title2" subtitle="Subtitle2" content="Content2"/>
        </div>
        
        <div className="container">
          <Slideshow images={pics} delay={7000}/>
        </div>
      </div>
    </body>
  )
}

export default Home