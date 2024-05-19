//Incorrecto

function MyComponent() {
    const [count, setCount] = useState(0);
    count = 5; 
    return <div>{count}</div>;
  }
  


  //Correcto 
  function MyComponent() {
    const [count, setCount] = useState(0);
    setCount(5);
    return <div>{count}</div>;
  }
  
  
  