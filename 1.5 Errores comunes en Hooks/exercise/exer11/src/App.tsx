import React, { useState } from 'react';

const isPangram = (paragraph: string) => {
  return new Set(paragraph.toLowerCase().replace(/[^a-z]/g, '')).size === 26;
};


const App = () => {
  const [text, setText] = useState('');
  const [isPangramResult, setIsPangramResult] = useState(null);

  const handleTextChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setText(e.target.value);
  };

  const handleCheckPangram = () => {
    const result = isPangram(text);
    setIsPangramResult(result);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1>Pangram Checker</h1>
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        placeholder="Enter a sentence..."
        style={{ padding: '10px', width: '300px', marginBottom: '20px' }}
      />
      <button onClick={handleCheckPangram} style={{ padding: '10px 20px' }}>
        Check Pangram
      </button>
      {isPangramResult !== null && (
        <div style={{ marginTop: '20px' }}>
          <h2>{isPangramResult ? 'The text is a pangram!' : 'The text is not a pangram.'}</h2>
        </div>
      )}
    </div>
  );
};

export default App;
