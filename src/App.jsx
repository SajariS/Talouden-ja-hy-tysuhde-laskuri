import { useState } from 'react'
import './App.css'

function App() {
  const [kori, setKori] = useState({
    maara: 0,
    voltti: 0.0,
    tilavuus: 0.0,
    hinta: 0.0,
    //Jos muistaa palauttaa B) SHAMMOUNAAH
    pantti: 0.0,
    kauppaKaynnit: 0
  });
  
  const handleChange = (e) => {
    setKori({...kori, [e.target.name], e.target.value})
  }

  return (
    <>
      <form onSubmit={}>
        <label>
          Kori
        </label>
        <input value={maara} onChange={e => }
      </form>
    </>
  )
}

export default App
