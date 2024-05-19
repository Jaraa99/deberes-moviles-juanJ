// Error

function MyComponent() {
  if (someCondition) {
    const [state, setState] = useState(0); 
  }
  return <div>Hola</div>;
}


//Correcion 

function MyComponent() {
  const [state, setState] = useState(0); 
  if (someCondition) {
    
  }
  return <div>Hola</div>;
}

