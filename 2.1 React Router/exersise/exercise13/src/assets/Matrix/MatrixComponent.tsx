// src/components/MatrixComponent.tsx
import React, { useState } from 'react';
import { Matrix } from '../Matrix';

const MatrixComponent: React.FC = () => {
  const [matrixString, setMatrixString] = useState<string>('1 2 3\n4 5 6\n7 8 9');
  const [matrix, setMatrix] = useState<Matrix | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMatrixString(event.target.value);
  };

  const handleClick = () => {
    const newMatrix = new Matrix(matrixString);
    setMatrix(newMatrix);
  };

  return (
    <div>
      <textarea value={matrixString} onChange={handleChange} rows={4} cols={20} />
      <button onClick={handleClick}>Generar Matriz</button>
      {matrix && (
        <div>
          <h3>Filas:</h3>
          <pre>{JSON.stringify(matrix.rows, null, 2)}</pre>
          <h3>Columnas:</h3>
          <pre>{JSON.stringify(matrix.columns, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default MatrixComponent;
