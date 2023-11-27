import logo from './logo.svg';
import './App.css';

const name = 'Todd'
const date = new Date();
const year = date.getFullYear();
const hours = date.getHours()
let greeting = ''

if (hours < 12) {
  greeting = 'Good morning'
} else if (hours < 18) {
  greeting = 'Good afternoon'
} else {
  greeting = 'Good evening'
}


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
        <p>Copyright {year}</p>
      
      <h1>{greeting}</h1>


      </header>
    </div>
  );
}

export default App;
