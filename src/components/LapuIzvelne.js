import { useContext } from 'react';
import { gramatuContext } from '../context/GramatuContext'

export default function LapuIzvelne() {
  const gramatuKratuve = useContext(gramatuContext);
  const lapas = gramatuKratuve.gramatas[gramatuKratuve.izveletaGramataIndex].lapas 
  
  return (
    <div className="lapu-izvelne">
      <h2> Lapu izvelne: </h2>
        <ul>
          {lapas.map(lapa => <li>{Object.keys(lapa)}</li> )} 
        </ul>
    </div>
  )
}
