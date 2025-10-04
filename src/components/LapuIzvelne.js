import { useAktivsContext, useAktivsDispatch} from '../context/AktivsContext';
import { useLapuContext, useLapuDispatch } from '../context/LapuContext';
import useOnKeyPress from '../hooks/useOnKeyPress';

export default function LapuIzvelne() {
  const aktivs = useAktivsContext();
  const aktivsDispatch = useAktivsDispatch();
  const lapas = useLapuContext().filter(lapa => lapa.gramatasId === aktivs.gramata);
  const lapuDispatch = useLapuDispatch();

  let jaunaisId = '';
  const lapuSaraksts = lapas.map(lapa => 
    <li
      key={lapa.id}
      onClick={() => aktivsDispatch({type:'mainita aktiva lapa', lapa:lapa.id})}
      className={lapa.id === aktivs.lapa ? 'aktivs-li-elements' : 'li-elements'}
    >
      {aktivs.redigeSadalu === 'lapa' && aktivs.lapa === lapa.id ? 
        <input
          autoFocus
          defaultValue={lapa.id}
          onChange={e => jaunaisId = e.target.value}
          onKeyDown={e => {if (e.key === 'Enter') saglabatLapu();} }
        />
      :
        <span>
          {lapa.id}
        </span>
      }
    </li>
  )

  const saglabatLapu = () => {
    if(jaunaisId === '' || (lapas.some(lapa => lapa.id === jaunaisId) && aktivs.lapa !== jaunaisId))
      alert('nederīgs lapas nosaukums!');
    else {
      lapuDispatch({
        type: 'mainits id',
        vecaisId: aktivs.lapa,
        jaunaisId: jaunaisId
      })
      aktivsDispatch({type:'mainita aktiva lapa', lapa:jaunaisId})
      aktivsDispatch({type:'beigt redigesanu'});
    }
  }
  
  const izveidotLapu = () => {
    lapuDispatch({
      type:'izveidota lapa',
      gramatasId:aktivs.gramata
    })
    aktivsDispatch({type:'mainita aktiva lapa', lapa:''});
    aktivsDispatch({type:'rediget lauku', sadala:'lapa'});
  }

  
  const dzestLapu = () => {
    if (aktivs.gramata !== null) {
      lapuDispatch({
        type:'dzesta lapa',
        gramatasId: aktivs.gramata,
        id: aktivs.lapa
      })
      aktivsDispatch({type:'mainita aktiva lapa', lapa:null})
    }
  }


  useOnKeyPress(izveidotLapu, 'n');
  useOnKeyPress(() => aktivsDispatch({type:'rediget lauku', sadala:'lapa'}), 'e'); 
  useOnKeyPress(() => aktivsDispatch({type:'beigt redigesanu'}), 'Escape');
  useOnKeyPress(dzestLapu, 'd');
  return (
    <nav className='izvelne'>
      <h2> Lapu izvelne: </h2>
        <ul>
          {lapuSaraksts}
        </ul>
    </nav>
  )
}
