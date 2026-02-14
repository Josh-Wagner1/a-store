import './App.css'
import Button from './components/button'

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <h1>Welcome to A-Store</h1>
      <Button className="proceedButton" label="Click Me!" onClick={handleClick}/>
      <Button className="proceedButton" label="Disabled" onClick={handleClick} disabled={true}/>
      <Button className="navButton" label="Products" onClick={handleClick}/>
    </div>
  )
}

export default App
