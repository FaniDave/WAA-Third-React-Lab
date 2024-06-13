import "./App.css";
import { Dashboard } from "./Components/Dashboard";
import { SelectedPostProvider } from "./Components/SelectedPostContext";

function App() {
  return (
    <div className="App">
      <SelectedPostProvider>
        <Dashboard />
      </SelectedPostProvider>
    </div>
  );
}

export default App;
