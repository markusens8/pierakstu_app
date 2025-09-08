import { useState } from 'react';

import { useGramatuContext, useGramatuDispatch } from '../context/GramatuContext';
import { useLapuDispatch } from '../context/LapuContext';
import { useAktivsContext, useSetAktivs } from '../context/AktivsContext';
import useOnKeyPress from '../hooks/useOnKeyPress';

export default function GramatuIzvelne() {
  const aktivs = useAktivsContext();
  const setAktivs = useSetAktivs();
  const gramatas = useGramatuContext();
  const dispatch = useGramatuDispatch();
  const lapuDispatch = useLapuDispatch();
  const [vaiRedige, setVaiRedige] = useState(false); 
  const [jaunaisId, setJaunaisId] = useState('');

  const gramatuSaraksts = gramatas.map(gramata =>
    <li
      key={gramata.id}
      onClick={() => setAktivs({gramata:gramata.id, lapa:null})}
    >
      {vaiRedige && gramata.id === aktivs.gramata ?  
        <input
          autoFocus
          defaultValue={gramata.id}
          onChange={e => setJaunaisId(e.target.value)}
          onKeyDown={e => {if (e.key === 'Enter') saglabatGramatu();} }
        />
      :
        gramata.id
      }
    </li>
  )

  const saglabatGramatu = () => {
    if (jaunaisId === '' || gramatas.includes({id:aktivs.gramata}) )
      alert('nederiga ievade!');
    else {
      setAktivs({...aktivs, gramata:jaunaisId})
      setVaiRedige(false);

      dispatch({
        type: 'mainits id',
        vecaisId: aktivs.gramata,
        jaunaisId: jaunaisId
      })
    }
  }

  const dzestGramatu = () => {
    if (aktivs.gramata !== null) {
      dispatch({
        type: 'dzesta gramata',
        id: aktivs.gramata
      });
      setAktivs({gramata:null, lapa:null});
    } 
  }

  useOnKeyPress(() => setVaiRedige(false), 'Escape');
  useOnKeyPress(() => setVaiRedige(true), 'E');
  useOnKeyPress(dzestGramatu, 'D');
  return (
    <div className="gramatu-izvelne">
      <h2> Gramatu izvelne: </h2>
        <ul>
          {gramatuSaraksts}
        </ul>
    </div>
  );
}
