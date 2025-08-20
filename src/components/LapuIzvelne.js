import { useGramatuContext } from '../context/GramatuContext'

export default function LapuIzvelne({ aktivs, setAktivs }) {
  const gramatas = useGramatuContext();
  const aktivaGramata = aktivs.aktivaGramata;
  
  return (
    <div className="lapu-izvelne">
      <h2> Lapu izvelne: </h2>
        <ul>
          {aktivaGramata !== null ? Object.keys(gramatas[aktivaGramata]).map(lapa =>
          <li key={lapa} onClick={() => setAktivs({...aktivs, aktivaLapa:lapa})}>
            {lapa}
          </li>
          ) : null } 
        </ul>
    </div>
  )
}
