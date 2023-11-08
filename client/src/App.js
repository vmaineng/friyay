import './App.css';
import { Navbar } from './layouts/Navbar';
import { Video } from './components/Video';
import { Footer }from './layouts/Footer';

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
