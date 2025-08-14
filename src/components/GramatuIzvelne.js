import { useGramatuContext } from '../context/GramatuContext'

export default function GramatuIzvelne() {
  const gramatuKratuve = useGramatuContext()

  return (
    <div className="gramatu-izvelne">
      <h2> Gramatu izvelne: </h2>
        <ul>
          {gramatuKratuve.gramatas.map(gramata => <li>{gramata.id}</li> )} 
        </ul>
    </div>
  );
}
