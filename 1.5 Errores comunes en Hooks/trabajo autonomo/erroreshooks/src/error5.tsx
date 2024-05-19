// Incorrecto 
const logEffect = () => {
    console.log('Efecto');
  };
  useEffect(() => {
    logEffect();
  }, [logEffect]);
  


// Correcto 
useEffect(() => {
    const logEffect = () => {
      console.log('Efecto');
    };
    logEffect();
  }, []); 
