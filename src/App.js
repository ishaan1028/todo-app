import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Todo from './components/Todo';
import { Container } from 'react-bootstrap';

function App() {

  return <Container>
    <div className="App">
      <header className="header">
        <h1>Todos</h1>
      </header>
      <Todo />
    </div></Container>
}

export default App;
