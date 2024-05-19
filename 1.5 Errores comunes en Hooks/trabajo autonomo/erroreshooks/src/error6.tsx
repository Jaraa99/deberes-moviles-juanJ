//Incorrecto 

useEffect(() => {
    const interval = setInterval(() => {
      console.log('Intervalo');
    }, 1000);
  }, []); 
  
//Correcto 

useEffect(() => {
    const interval = setInterval(() => {
      console.log('Intervalo');
    }, 1000);
    return () => clearInterval(interval); // Correcto: Limpia el intervalo.
  }, []);
  