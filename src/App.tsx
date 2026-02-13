import './App.css'
import Button from './components/button'

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <h1>Welcome to A-Store</h1>
      <Button text='Click Me!' onClick={handleClick}/>
      <Button text='Disabled' onClick={handleClick} disabled={true} />
    </div>
  )
}

export default App
