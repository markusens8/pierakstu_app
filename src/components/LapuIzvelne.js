import { useAktivsContext, useSetAktivs} from '../context/AktivsContext';
import { useLapuContext, useLapuDispatch } from '../context/LapuContext';

export default function LapuIzvelne() {
  const aktivs = useAktivsContext();
  const lapas = useLapuContext();

  const lapuNosaukumi =
    lapas.filter(lapa => lapa.gramatasId === aktivs.gramata).map(lapa => lapa.id); 

  return (
    <div className="lapu-izvelne">
      <h2> Lapu izvelne: </h2>
        <ul>
          {lapuNosaukumi.map(lapasNosaukums => 
            <Lapa 
              key={lapasNosaukums}
              lapasNosaukums={lapasNosaukums} 
            />
          )} 
        </ul>
    </div>
  )
}

function Lapa({ lapasNosaukums }) {
  const aktivs = useAktivsContext();
  const setAktivs = useSetAktivs();
  const dispatch = useLapuDispatch();

  return (
    <li 
      onClick={() => setAktivs({...aktivs, lapa:lapasNosaukums})}
    >
      {lapasNosaukums}
    </li>
  );
}
