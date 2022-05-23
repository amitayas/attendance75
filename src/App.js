//import logo from "./logo.svg";
import "./App.css";
import { AttendanceCalculator } from "./components/AttendanceCalculator/AttendanceCalculator";
import { Navbar } from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="app-wrapper">
      <Navbar/>
      <AttendanceCalculator className="testclass"/>
    </div>
  );
}

export default App;