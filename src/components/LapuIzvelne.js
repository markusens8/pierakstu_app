import { useAktivsContext, useSetAktivs} from '../context/AktivsContext';
import { useLapuContext, useLapuDispatch } from '../context/LapuContext';
import useOnKeyPress from '../hooks/useOnKeyPress';

export default function LapuIzvelne() {
  const aktivs = useAktivsContext();
  const setAktivs = useSetAktivs();
  const lapas = useLapuContext().filter(lapa => lapa.gramatasId === aktivs.gramata);
  const dispatch = useLapuDispatch();

  const dzestLapu = () => {
    if (aktivs.gramata !== null) {
      dispatch({
        type:'dzesta lapa',
        gramatasId: aktivs.gramata,
        id: aktivs.lapa
      })
      setAktivs({...aktivs, lapa:null});
    }
  }

  useOnKeyPress(dzestLapu, 'd');
  return (
    <div className="lapu-izvelne">
      <h2> Lapu izvelne: </h2>
        <ul>
          {lapas.map(lapa => 
            <li
              key={lapa.id}
              onClick={() => setAktivs({...aktivs, lapa:lapa.id})}
            >
              {lapa.id}
            </li>
            )
          }
        </ul>
    </div>
  )
}
