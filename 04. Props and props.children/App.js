import Greet from './components/Greet';
import './App.css';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      {/* Functional components */}
      <Greet name="Bruce" heroName="Batman">
        <p>This is children prop</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <p>Also children prop</p>
        <button className="btn btn-outline-dark ">Click me!</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder Woman" />

      {/* Class Components */}
      <Welcome name="Class component" />
      <Welcome name="Class Component 2" />
    </div>
  );
}

export default App;
