import './App.css';
import Analysis from './Components/Analysis';
import Rating from './Components/Rating';
import Reviews from './Components/Reviews';
import Sidebar from './Components/Sidebar';
import Visitors from './Components/Visitors';
function App() {
  return (
    <div className="container">
      <div className="four"><Analysis />
      </div>
      <div className="three"><Rating />
      </div>
      <div className="two"><Reviews />
      </div>
      <div className="one"><Sidebar />
      </div>
      <div className="five"><Visitors />
      </div>
    </div>
  );
}

export default App;
