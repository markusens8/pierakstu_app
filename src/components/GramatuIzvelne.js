import { useState } from 'react';

import { useGramatuContext, useGramatuDispatch } from '../context/GramatuContext';
import { useAktivsContext, useSetAktivs} from '../context/AktivsContext';

export default function GramatuIzvelne(aktivs, setAktivs) {
  const gramatas = useGramatuContext();
  const gramatuNosaukumi = Object.keys(gramatas);

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
  const dispatch = useGramatuDispatch();

  const [vaiRedige, setVaiRedige] = useState(false);


  function dzestGramatu(e) {
    e.preventDefault();
    dispatch({type:'dzesta gramata', dzesamaGramata:gramatasNosaukums});

    if (aktivs?.gramata ===  gramatasNosaukums) 
      setAktivs({gramata:null, lapa:null});
  }


  if (vaiRedige) {
    return (
      <input value={gramatasNosaukums}/>
    );
  }
  return (
    <span 
      onClick={() => setAktivs({gramata:gramatasNosaukums, lapa:null})}
      onContextMenu={dzestGramatu}
      onDoubleClick={() => setVaiRedige(true)}
    >
      {gramatasNosaukums}
    </span>
  );
}
