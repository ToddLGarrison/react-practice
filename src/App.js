import './App.css';
import Greeting from './Greeting';
import Heading from './Heading';
import List from './List';

const name = 'Todd'

const date = new Date();
const year = date.getFullYear();

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Greeting />
        <Heading name={name} />
        <List />
        <p>Copyright {year}</p>
      </header>
    </div>
  );
}

export default App;
