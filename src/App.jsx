import './App.scss';
import './Assets/Styles/Utility/_resets.scss';
import './Assets/Styles/Utility/_typography.scss';
import Routing from "./containers/Routing/Routing";

function App() {
  return (
    <div className="App">
      <Routing/>
    </div>
  );
}

export default App;
