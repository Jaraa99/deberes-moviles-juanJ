import React, { useState } from 'react';


const calculateScore = (x: number, y: number) => {
  const dist = Math.sqrt(x * x + y * y);
  if (dist <= 1) return 10;
  if (dist <= 5) return 5;
  if (dist <= 10) return 1;
  return 0;
};

const App = () => {
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [score, setScore] = useState(null);

  const handleXChange = (e: { target: { value: React.SetStateAction<string>; }; }) => setX(e.target.value);
  const handleYChange = (e: { target: { value: React.SetStateAction<string>; }; }) => setY(e.target.value);

  const handleCalculateScore = () => {
    const xNum = parseFloat(x);
    const yNum = parseFloat(y);
    if (!isNaN(xNum) && !isNaN(yNum)) {
      const newScore = calculateScore(xNum, yNum);
      setScore(newScore);
    } else {
      alert('Please enter valid numbers for both X and Y.');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Score Calculator</h1>
      <div style={{ marginBottom: '20px' }}>
        <label>
          X:
          <input type="number" value={x} onChange={handleXChange} style={{ marginLeft: '10px', marginRight: '20px' }} />
        </label>
        <label>
          Y:
          <input type="number" value={y} onChange={handleYChange} style={{ marginLeft: '10px' }} />
        </label>
      </div>
      <button onClick={handleCalculateScore} style={{ padding: '10px 20px' }}>
        Calculate Score
      </button>
      {score !== null && (
        <div style={{ marginTop: '20px' }}>
          <h2>Your Score: {score}</h2>
        </div>
      )}
    </div>
  );
};

export default App;
