import { useGramatuContext, useGramatuDispatch } from '../context/GramatuContext';
import { useLapuDispatch } from '../context/LapuContext';
import { useAktivsContext, useAktivsDispatch } from '../context/AktivsContext';
import useOnKeyPress from '../hooks/useOnKeyPress';

export default function GramatuIzvelne() {
  const aktivs = useAktivsContext();
  const gramatas = useGramatuContext();
  const aktivsDispatch = useAktivsDispatch();
  const gramatuDispatch = useGramatuDispatch();
  const lapuDispatch = useLapuDispatch();


  let jaunaisId = '';
  const gramatuSaraksts = gramatas.map(gramata =>
    <li
      key={gramata.id}
      onClick={() => 
        aktivsDispatch({type:'mainita aktiva gramata', gramata:gramata.id})
      }
      className={gramata.id === aktivs.gramata ? 'aktivs-li-elements' : 'li-elements'}
    >
      {aktivs.redigeSadalu === 'gramata' && aktivs.gramata === gramata.id ?  
        <input
          autoFocus
          onBlur={() => aktivsDispatch({type:'beigt redigesanu'})}
          defaultValue={gramata.id}
          onChange={e => jaunaisId = e.target.value}
          onKeyDown={e => {if (e.key === 'Enter') saglabatGramatu()} }
        />
      :
        <span>
          {gramata.id}
        </span>
      }
    </li>
  )

  const saglabatGramatu = () => {
    if (jaunaisId === '' || (gramatas.some(gramata => gramata.id === jaunaisId) && aktivs.gramata !== jaunaisId) )
      alert('nederiga ievade!');
    else {
      gramatuDispatch({
        type: 'mainits id',
        vecaisId: aktivs.gramata,
        jaunaisId: jaunaisId
      })
      lapuDispatch({
        type: 'mainits gramatas id',
        vecaisId: aktivs.gramata,
        jaunaisId: jaunaisId
      })
      aktivsDispatch({type:'mainita aktiva gramata', gramata:jaunaisId});
      aktivsDispatch({type:'beigt redigesanu'});
    }
  }
  

  const izveidotGramatu = () => {
    gramatuDispatch({
      type:'izveidota gramata'
    }) 
    aktivsDispatch({type:'mainita aktiva gramata', gramata:''});
    aktivsDispatch({type:'rediget lauku', sadala:'gramata'});
  }

  
  const dzestGramatu = () => {
    if (aktivs.gramata !== null) {
      gramatuDispatch({
        type: 'dzesta gramata',
        id: aktivs.gramata
      });
      lapuDispatch({
        type:'dzesta gramata',
        gramatasId: aktivs.gramata
      });

      aktivsDispatch({type:'mainita aktiva gramata', gramata:null})
    } 
  }


  useOnKeyPress(izveidotGramatu, 'N');
  useOnKeyPress(() => aktivsDispatch({type:'rediget lauku', sadala:'gramata'}), 'E');
  useOnKeyPress(dzestGramatu, 'D');
  return (
    <nav className='izvelne'>
      <h2> Gramatu izvelne: </h2>
        <ul>
          {gramatuSaraksts}
        </ul>
    </nav>
  );
}
