import './App.css';
import { Navbar } from './components/Navbar';
import { Video } from './components/Video';
import { Footer }from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
  <Video />
  <Footer />
    </div>
  );
}

export default App;
