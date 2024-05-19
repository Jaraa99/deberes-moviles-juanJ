//Incorrecto 
useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/data');
      setData(response.data); 
    }
    fetchData();
  }, []);
  
//Correcto 

useEffect(() => {
    let isMounted = true;
    async function fetchData() {
      const response = await fetch('/api/data');
      if (isMounted) {
        setData(response.data); 
      }
    }
    fetchData();
    return () => { isMounted = false; };
  }, []);
  

