import { useGramatuContext, useGramatuDispatch } from '../context/GramatuContext';
import { useAktivsContext, useSetAktivs} from '../context/AktivsContext';

export default function LapuIzvelne() {
  const gramatas = useGramatuContext();
  const aktivs = useAktivsContext();

  const lapuNosaukumi = aktivs.gramata 
    ? Object.keys(gramatas[aktivs.gramata] || {})
    : []; 

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
  const dispatch = useGramatuDispatch();

  function dzestLapu(e) {
    e.preventDefault();

    dispatch ({
      type: 'dzesta lapa',
      gramata: aktivs.gramata,
      dzesamaLapa: lapasNosaukums
    });

    if (aktivs.lapa === lapasNosaukums)
      setAktivs({...aktivs, lapa:null});
  }

  return (
    <li
      onClick={() => setAktivs({...aktivs, lapa:lapasNosaukums})}
      onContextMenu={dzestLapu}
    >
      {lapasNosaukums}
    </li>
  );
}
