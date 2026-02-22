import "../App.css"
import NavBar from "../components/navbar"
import Card from "../components/card"

function Products() {
  return (
    <div>
      <>
        <NavBar/>
      </>

      <section className="section">
        <h1 className="title">Products:</h1>

        <div className="container">
          <div className="title">
            <h2>Category:</h2>
            <p>Food and Drink</p>
            <p>Electronic</p>
            <p>Household</p>
            <p>Stationary</p>
            <p>Tools</p>
            <p>Books</p>
          </div>

          <div className="section">
            <div className="container">
              <Card image="/images/Apple.jpg" title="Title" subtitle="Subtitle" content="Content"/>
              <Card image="/images/Banana.jpg" title="Title2" subtitle="Subtitle2" content="Content2"/>
              <Card image="/images/Carrot.jpg" title="Title3" subtitle="Subtitle3" content="Content3"/>
            </div>

            <div className="container">
              <Card image="/images/Apple.jpg" title="Title" subtitle="Subtitle" content="Content"/>
              <Card image="/images/Banana.jpg" title="Title2" subtitle="Subtitle2" content="Content2"/>
              <Card image="/images/Carrot.jpg" title="Title3" subtitle="Subtitle3" content="Content3"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products