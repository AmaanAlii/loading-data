import "./App.css";
import NameCard from "./Components/Name-Card-Component/nameCard";
import data from "./Data/data.json";
import { useState, useEffect } from "react";

function App() {
  const [displayedData, setDisplayedData] = useState([data[0]]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextPerson = () => {
    if (currentIndex < data.length) {
      setDisplayedData([...displayedData, data[currentIndex]]);
      setCurrentIndex(currentIndex + 1);
    } else {
      alert("No More People!");
    }
  };

  useEffect(() => {
    setDisplayedData([data[0]]);
  }, []);
  return (
    <div className="App">
      <div className="main-section">
        <div className="main-header">
          <h1>PEOPLE DATA</h1>
          <button onClick={handleNextPerson}>
            <strong>NEXT PERSON</strong>
          </button>
        </div>
        <div className="main-content-section">
          {displayedData.map((person, index) => (
            <NameCard
              key={index}
              name={person.name}
              location={person.location}
              number={index + 1}
            />
          ))}
        </div>
        <div className="main-tally-section">
          <h4>CURRENTLY {displayedData.length} PEOPLE SHOWING</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
