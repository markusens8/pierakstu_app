import { useGramatuContext, useGramatuDispatch } from '../context/GramatuContext'

export default function GramatuIzvelne({ aktivs, setAktivs }) {
  const gramatas = useGramatuContext()
  const dispatch = useGramatuDispatch()

  const gramatuNosaukumi = Object.keys(gramatas) 

  return (
    <div className="gramatu-izvelne">
      <h2> Gramatu izvelne: </h2>
        <ul>
          {gramatuNosaukumi.map(gramata =>
          <li key={gramata} onClick={() => setAktivs({aktivaGramata:gramata, aktivaLapa:null})}>
            {gramata}
          </li>
          )}
        </ul>
    </div>
  );
}
