import { useGramatuContext } from '../context/GramatuContext'

export default function LapuIzvelne() {
  const gramatuKratuve = useGramatuContext()
  const lapas = gramatuKratuve.gramatas[gramatuKratuve.aktivaGramata].lapas 
  
  return (
    <div className="lapu-izvelne">
      <h2> Lapu izvelne: </h2>
        <ul>
          {lapas.map(lapa => <li>{Object.keys(lapa)}</li> )} 
        </ul>
    </div>
  )
}
