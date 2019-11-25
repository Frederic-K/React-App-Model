import React, { FunctionComponent, useState } from 'react';
 
const App: FunctionComponent = () => {
  const [name, setName] = useState('React');
   
  return (
    <h1>Hello, {name} !</h1>
  )
}
 
export default App;