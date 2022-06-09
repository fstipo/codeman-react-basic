import './App.css';

import Greet from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name="Franko" heroName="CodeMan" />
      <Welcome name="Franko" />
    </div>
  );
}

export default App;
