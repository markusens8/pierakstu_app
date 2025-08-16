import { useGramatuContext, useGramatuDispatch } from '../context/GramatuContext'

export default function GramatuIzvelne() {
  const gramatuKratuve = useGramatuContext()
  const dispatch = useGramatuDispatch()
  const gramatuSaraksts = gramatuKratuve.gramatas.map(gramata =>
    <li key={gramata.id} onClick={() => { 
      dispatch({
        type:'mainit gramatu',
        id:gramata.id
      });
    }}>
      {gramata.id}
    </li>
  );

  return (
    <div className="gramatu-izvelne">
      <h2> Gramatu izvelne: </h2>
        <ul>
          {gramatuSaraksts}
        </ul>
    </div>
  );
}
