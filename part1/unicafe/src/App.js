import { useState } from 'react';
import React from 'react';
import Statistics from './Statistics';
import Button from './Button';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const increaseGood = () => {
    setGood(good + 1);
    setAll(all + 1);
  };

  const increaseneutral = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };

  const increaseBad = () => {
    setBad(bad + 1);
    setAll(all + 1);
  };

  const average = () => {
    return (good - bad) / all;
  };

  const positive = () => {
    return (good / all) * 100;
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={increaseGood} text="Good" />
      <Button handleClick={increaseneutral} text="Neutral" />
      <Button handleClick={increaseBad} text="Bad" />
      <h1>Statistics</h1>
      {all === 0 ? (
        <p>No feedback given</p>
      ) : (
        <Statistics
          goodVote={good}
          neutralVote={neutral}
          badVote={bad}
          allVotes={all}
          averageVotes={average()}
          positiveOfAllVotes={positive()}
        />
      )}
    </div>
  );
};

export default App;
