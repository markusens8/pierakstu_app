import { useGramatuContext } from '../context/GramatuContext'

export default function LapuIzvelne({ aktivs, setAktivs }) {
  const gramatas = useGramatuContext();
  const lapas = gramatas[aktivs.aktivaGramata].lapas; 
  
  return (
    <div className="lapu-izvelne">
      <h2> Lapu izvelne: </h2>
        <ul>
          {lapas.map(lapa => <li key={lapa[0]}>{lapa[0]}</li> )} 
        </ul>
    </div>
  )
}
