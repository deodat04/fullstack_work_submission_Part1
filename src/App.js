import { useState } from "react";

const Hello = ({ title }) => {
  return <h1>{title}</h1>;
};

const Button = ({ click, text }) => {
  return <button onClick={click}>{text}</button>;
};

const Display = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <div>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>all : {good + neutral + bad}</p>
      <p>average : {(good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad)} </p>
      <p>positive : { (good / (good + neutral + bad) * 100) } % </p>
    </div>
  );
};

const App = () => {
  // enregistrer les clics de chaque bouton dans un état différent
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const title = "give feedback";
  const stats = "statistics";

  return (
    <div>
      <Hello title={title} />
      <Button click={() => setGood(good + 1)} text="good" />
      <Button click={() => setNeutral(neutral + 1)} text="neutral" />
      <Button click={() => setBad(bad + 1)} text="bad" />
      <Hello title={stats} />
      <Display good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
