//Incorrecto 
function MyComponent({ items }) {
    const [total, setTotal] = useState(0);
    setTotal(items.length); 
    return <div>{total}</div>;
  }
  
  
  
  //Correcto 
  function MyComponent({ items }) {
    const [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(items.length); 
    }, [items]);
    return <div>{total}</div>;
  }
  