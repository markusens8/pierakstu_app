import { useGramatuContext, useGramatuDispatch } from '../context/GramatuContext';
import { useAktivsContext, useSetAktivs} from '../context/AktivsContext';

export default function GramatuIzvelne() {
  const gramatas = useGramatuContext();
  const gramatuNosaukumi = gramatas.map(gramata => gramata.id);

  return (
    <div className="gramatu-izvelne">
      <h2> Gramatu izvelne: </h2>
        <ul>
          {gramatuNosaukumi.map(gramatasNosaukums => 
            <li key={gramatasNosaukums}>
              <Gramata gramatasNosaukums={gramatasNosaukums}/>
            </li>
          )}
        </ul>
    </div>
  );
}

function Gramata({ gramatasNosaukums }) {
  const aktivs = useAktivsContext();
  const setAktivs = useSetAktivs();
  
  return (
    <span
      onClick={() => setAktivs({gramata:gramatasNosaukums, lapa:null})}
    >
      {gramatasNosaukums}
    </span>
  )
}
