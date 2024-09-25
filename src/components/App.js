import React, { useEffect, useState } from "react";
import "./../styles/App.css";

const fruits = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "bandf",
];

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (inputValue.trim() === "") {
      setSuggestion([]);
      return;
    }
    const fetchSuggestion = setTimeout(() => {
      const filtered = fruits.filter((fruit) =>
        fruit.toLowerCase().startsWith(inputValue.toLowerCase())
      );
      setSuggestion(filtered);
    }, 150);
    return () => clearTimeout(fetchSuggestion);
  }, [inputValue]);

  return (
    <div id="main">
      {/* Do not remove the main div */}
      <input
        type="text"
        placeholder="search item's"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <ul>
        {suggestion.length > 0 &&
          suggestion.map((fruit, i) => {
            return <li key={i}>{fruit}</li>;
          })}
      </ul>
    </div>
  );
};

export default App;
