// src/App.tsx
import React from 'react';
import MatrixComponent from './components/MatrixComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Ejemplo de Matriz</h1>
      <MatrixComponent />
    </div>
  );
};

export default App;
