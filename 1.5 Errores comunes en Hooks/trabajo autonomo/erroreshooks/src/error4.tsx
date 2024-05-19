//Incorrecto

useEffect(() => {
    console.log('Efecto sin dependencias'); 
  });
  
//Correcto 

useEffect(() => {
    console.log('Efecto con dependencias'); 
  }, [count]);
  