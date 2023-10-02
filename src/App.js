import logo from './logo.svg';
import './App.css';
import Libro from './components/libro';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Libro titulo='Programacion I' precio='50' fechaRegistro='2023-05-05'></Libro>
      </header>
    </div>
  );
}

export default App;
