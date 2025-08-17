import { useGramatuContext, useGramatuDispatch } from '../context/GramatuContext'

export default function GramatuIzvelne({ aktivs, setAktivs }) {
  const gramatas = useGramatuContext()
  const dispatch = useGramatuDispatch()

  const gramatuSaraksts = gramatas.map((gramata,index) =>
    <li key={gramata.id} onClick={() => {
      setAktivs({
        ...aktivs,
        aktivaGramata: index
      });
    }}>
      {gramata.id}
    </li>
  ) 

  return (
    <div className="gramatu-izvelne">
      <h2> Gramatu izvelne: </h2>
        <ul>
          {gramatuSaraksts}
        </ul>
    </div>
  );
}
