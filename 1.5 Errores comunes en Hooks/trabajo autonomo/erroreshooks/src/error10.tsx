//Incorrecto 
function ChildComponent({ prop }) {
    console.log('Renderizando');
    return <div>{prop}</div>;
  }

  //Correcto 

  const ChildComponent = React.memo(function ChildComponent({ prop }) {
    console.log('Renderizando');
    return <div>{prop}</div>;
  });
  