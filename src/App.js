import React, { useState } from "react";
import Button from "./Button.js"
import Statistics from "./Statistics.js"

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const title = "give feedback";
  const stats = "statistics";

  return (
    <div>
     <h1>{title}</h1> 
      <Button click={() => setGood(good + 1)} text="good" />
      <Button click={() => setNeutral(neutral + 1)} text="neutral" />
      <Button click={() => setBad(bad + 1)} text="bad" />
      <h1>{stats}</h1> 
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
