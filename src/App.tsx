import "./App.css"
import Button from "./components/button"
import Card from "./components/card"
import NavBar from "./components/navbar"

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <>
        <NavBar />
      </>
      
      <div>
        <h1>Welcome to A-Store</h1>
        <Button className="proceedButton" label="Click Me!" onClick={handleClick}/>
        <Button className="proceedButton" label="Disabled" onClick={handleClick} disabled={true}/>
        <Button className="navButton" label="Products" onClick={handleClick}/>
      </div>

      <div>
        <Card title="Title" subtitle="Subtitle" content="Content"></Card>
        <Card title="Title2" subtitle="Subtitle2" content="Content2"></Card>
      </div>

      <div>
        <Card title="Title2" subtitle="Subtitle2" content="Content2"></Card>
      </div>
    </div>
  )
}

export default App
