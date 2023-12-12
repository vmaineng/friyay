import './App.css';
import { Navbar } from './layouts/Navbar';
import { Videos } from './pages/Videos';
import { Footer }from './layouts/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
  <Videos />
  <Footer />
    </div>
  );
}

export default App;
