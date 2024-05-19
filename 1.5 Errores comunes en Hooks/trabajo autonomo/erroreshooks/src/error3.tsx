//Incorrecto
function MyComponent() {
    const [user, setUser] = useState({ name: 'Alice', age: 25 });
    const updateAge = () => {
      setUser({ age: 26 }); 
    return <div>{user.name}, {user.age}</div>;
  }
  
}

  //Correcto 
  function MyComponent() {
    const [user, setUser] = useState({ name: 'Alice', age: 25 });
    const updateAge = () => {
      setUser(prevUser => ({ ...prevUser, age: 26 })); 
    };
    return <div>{user.name}, {user.age}</div>;
  }
  
 

  
