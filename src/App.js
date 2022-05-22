//import logo from "./logo.svg";
import "./App.css";
import { AttendanceCalculator } from "./components/AttendanceCalculator/AttendanceCalculator";

const App = () => {
  return (
    <div className="app-wrapper">
      <AttendanceCalculator className="testclass"/>
    </div>
  );
}

export default App;