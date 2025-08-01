
import React, { useState } from 'react';

export default function App(){
  const [kategorijas, mainitKategorijas] = useState({})
  const [jaunaKategorija, setKategorijasVards] = useState("") 

  function jaunsIeraksts(){
    mainitKategorijas({
      ...kategorijas, [jaunaKategorija]:""
    });
  }

  return (
    <div>
      <h1> Labdien, pasaule! </h1>
      <input
        value={jaunaKategorija}
        onChange={e => setKategorijasVards(e.target.value)}
      />
      <button onClick={jaunsIeraksts}> Izveidot jaunu </button>
      <ul>
        {Object.entries(kategorijas).map( ([key]) => ( <li key={key}>{key}</li> ) )}
      </ul>
    </div>
  );
}
