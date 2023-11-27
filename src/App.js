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

const fontColor = {
  color: ""
}

if(greeting === 'Good morning') {
  fontColor.color = "green"
} else if (greeting === 'Good afternoon') {
  fontColor.color = "red"
} else {
  fontColor.color = "blue"
}

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      <h1 className='heading' style={fontColor}>{greeting}</h1>
        <h1>Hello {name}</h1>
        <ul>
          <li>Bacon</li>
          <li>Chips</li>
          <li>Salsa</li>
        </ul>
        <p>Copyright {year}</p>
      </header>
    </div>
  );
}

export default App;
