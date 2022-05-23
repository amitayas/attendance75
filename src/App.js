//import logo from "./logo.svg";
import "./App.css";
import { AttendanceCalculator } from "./components/AttendanceCalculator/AttendanceCalculator";
import { Navbar } from "./components/Navbar/Navbar";
import { Title } from "./components/Title/Title";

const App = () => {
  return (
    <div className="app-wrapper">
      <Navbar/>
      <Title/>
      <AttendanceCalculator className="testclass"/>
    </div>
  );
}

export default App;