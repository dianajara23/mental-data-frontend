import { useEffect } from "react";
import BarChart from "./components/BarChart";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <div className="App">
      <h1>Mental Data</h1>
      <div className="Chart-container">
        <BarChart></BarChart>
      </div>
    </div>
  );
}

export default App;
