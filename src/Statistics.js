const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={good + neutral + bad} />
          <StatisticLine
            text="average "
            value={(good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad)}
          />
          <StatisticLine
            text="positive "
            value={(good / (good + neutral + bad)) * 100 + "%"}
          />
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
