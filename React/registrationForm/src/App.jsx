import { useState } from 'react'
import Header from './components/Header';
import Registeration from './pages/Registeration';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Registeration/>
      
    </>
  )
}

export default App
