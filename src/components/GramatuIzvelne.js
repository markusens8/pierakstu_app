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
  let jaunaisId = '';

  const gramatuSaraksts = gramatas.map(gramata =>
    <li
      key={gramata.id}
      onClick={() => setAktivs({gramata:gramata.id, lapa:null})}
    >
      {vaiRedige && gramata.id === aktivs.gramata ?  
        <input
          autoFocus
          defaultValue={gramata.id}
          onChange={e => jaunaisId = e.target.value}
          onKeyDown={e => {if (e.key === 'Enter') saglabatGramatu();} }
        />
      :
        gramata.id
      }
    </li>
  )

  const izveidotGramatu = () => {
    dispatch({
      type:'izveidota gramata'
    }) 

    setAktivs({gramata:'jauna gramata', lapa:null});
    setVaiRedige(true);
  }

  const saglabatGramatu = () => {
    if (jaunaisId === '' || (gramatas.some(gramata => gramata.id === jaunaisId) && aktivs.gramata !== jaunaisId) )
      alert('nederiga ievade!');
    else {
      dispatch({
        type: 'mainits id',
        vecaisId: aktivs.gramata,
        jaunaisId: jaunaisId
      })
      lapuDispatch({
        type: 'mainits gramatas id',
        vecaisId: aktivs.gramata,
        jaunaisId: jaunaisId
      })

      setAktivs({...aktivs, gramata:jaunaisId});
      setVaiRedige(false);
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

  useOnKeyPress(izveidotGramatu, 'N');
  useOnKeyPress(() => setVaiRedige(true), 'E');
  useOnKeyPress(() => setVaiRedige(false), 'Escape');
  useOnKeyPress(dzestGramatu, 'D');
  return (
    <nav className="gramatu-izvelne">
      <h2> Gramatu izvelne: </h2>
        <ul>
          {gramatuSaraksts}
        </ul>
    </nav>
  );
}
