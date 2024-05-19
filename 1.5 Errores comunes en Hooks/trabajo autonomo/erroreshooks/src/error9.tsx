//Incorrecto
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), []); 

//Correcto 
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]); 