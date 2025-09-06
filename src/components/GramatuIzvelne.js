import { useGramatuContext, useGramatuDispatch } from '../context/GramatuContext';
import { useAktivsContext, useSetAktivs } from '../context/AktivsContext';
import useOnKeyPress from '../hooks/useOnKeyPress';

export default function GramatuIzvelne() {
  const aktivs = useAktivsContext();
  const setAktivs = useSetAktivs();
  const gramatas = useGramatuContext();
  const dispatch = useGramatuDispatch();
  const gramatuNosaukumi = gramatas.map(gramata => gramata.id);

  const dzestGramatu = () => {
    if (aktivs.gramata !== null) {
      dispatch({
        type: 'dzesta gramata',
        id: aktivs.gramata
      });
      setAktivs({gramata:null, lapa:null});
    } 
  }

  useOnKeyPress(dzestGramatu, 'D');
  return (
    <div className="gramatu-izvelne">
      <h2> Gramatu izvelne: </h2>
        <ul>
          {gramatuNosaukumi.map(gramata => 
            <li 
              key={gramata}
              onClick={() => setAktivs({gramata:gramata, lapa:null})}
            >
              {gramata}
            </li>
            )
          }
        </ul>
    </div>
  );
}
