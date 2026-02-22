import "../App.css"
/*import Button from "../components/button"*/
import Card from "../components/card"
import NavBar from "../components/navbar"
import Slideshow from "../components/slideshow"

function Home() {

  const pics = [
    "/images/Apple.jpg",
    "/images/Banana.jpg",
    "/images/Carrot.jpg"
  ];

  return (
    <div>
      <>
        <NavBar />
      </>

      <section className="section">
        <h1 className="title">Today's Best Sellers:</h1>

        <div className="container">
          <Slideshow images={pics} delay={5000}/>
        </div>

        <h1 className="title">Popular:</h1>

        <div className="container">
          <Card image="/images/Apple.jpg" title="Title" subtitle="Subtitle" content="Content"/>
          <Card image="/images/Banana.jpg" title="Title2" subtitle="Subtitle2" content="Content2"/>
          <Card image="/images/Carrot.jpg" title="Title3" subtitle="Subtitle3" content="Content3"/>
          <Card image="/images/Carrot.jpg" title="Title4" subtitle="Subtitle4" content="Content4"/>
        </div>
      </section>
    </div>
  )
}

export default Home