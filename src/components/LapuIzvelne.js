import { useState } from 'react';

import { useAktivsContext, useSetAktivs} from '../context/AktivsContext';
import { useLapuContext, useLapuDispatch } from '../context/LapuContext';
import useOnKeyPress from '../hooks/useOnKeyPress';

export default function LapuIzvelne() {
  const aktivs = useAktivsContext();
  const setAktivs = useSetAktivs();
  const lapas = useLapuContext().filter(lapa => lapa.gramatasId === aktivs.gramata);
  const dispatch = useLapuDispatch();
  const [vaiRedige, setVaiRedige] = useState(false); 
  let jaunaisId = '';

  const lapuSaraksts = lapas.map(lapa => 
    <li
      key={lapa.id}
      onClick={() => setAktivs({...aktivs, lapa:lapa.id})}
    >
      {vaiRedige && lapa.id === aktivs.lapa ? 
        <input
          autoFocus
          defaultValue={lapa.id}
          onChange={e => jaunaisId = e.target.value}
          onKeyDown={e => {if (e.key === 'Enter') saglabatLapu();} }
        />
      :
        lapa.id
      }
    </li>
  )


  const izveidotLapu = () => {
    dispatch({
      type:'izveidota lapa',
      gramatasId:aktivs.gramata
    })

    setAktivs({...aktivs, lapa:'jauna lapa'});
    setVaiRedige(true);
  }

  const saglabatLapu = () => {
    if(jaunaisId === '' || (lapas.some(lapa => lapa.id === jaunaisId) && aktivs.lapa !== jaunaisId))
      alert('nederīgs lapas nosaukums!');
    else {
      dispatch({
        type: 'mainits id',
        vecaisId: aktivs.lapa,
        jaunaisId: jaunaisId
      })

      setAktivs({...aktivs, lapa:jaunaisId});
      setVaiRedige(false);
    }
  }

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


  useOnKeyPress(izveidotLapu, 'n');
  useOnKeyPress(() => setVaiRedige(true), 'e'); 
  useOnKeyPress(() => setVaiRedige(false), 'Escape');
  useOnKeyPress(dzestLapu, 'd');
  return (
    <nav className="lapu-izvelne">
      <h2> Lapu izvelne: </h2>
        <ul>
          {lapuSaraksts}
        </ul>
    </nav>
  )
}
