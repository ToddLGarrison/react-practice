import logo from './logo.svg';
import './App.css';

const name = 'Todd'
const currentDate = new Date().getFullYear();

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello {name}</h1>
        <ul>
          <li>Bacon</li>
          <li>Chips</li>
          <li>Salsa</li>
        </ul>
        <p>Copyright {currentDate}</p>
      </header>
    </div>
  );
}

export default App;
