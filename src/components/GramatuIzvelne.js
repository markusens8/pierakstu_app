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
  const gramatas = useGramatuContext();
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

  function beigtRediget(jaunaisNosaukums) {
    console.log(jaunaisNosaukums);
    if (jaunaisNosaukums !== '' && !(jaunaisNosaukums in gramatas)) {
      setVaiRedige(false);

      dispatch ({
        type: 'mainits gramatas nosaukums',
        vecaisNosaukums: gramatasNosaukums,
        jaunaisNosaukums: jaunaisNosaukums
      })
    }
  } 


  if (vaiRedige) {
    let jaunaisNosaukums = gramatasNosaukums;
    return (
      <input
        defaultValue={jaunaisNosaukums}
        onChange={(e) => jaunaisNosaukums = e.target.value}
        onKeyDown={(e) => { 
          if (e.key === "Enter")
            beigtRediget(jaunaisNosaukums)
          }
        }
        autoFocus={true}
      />
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
