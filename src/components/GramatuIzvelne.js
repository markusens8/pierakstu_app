import { useGramatuContext, useGramatuDispatch } from '../context/GramatuContext'

export default function GramatuIzvelne({ aktivs, setAktivs }) {
  const gramatas = useGramatuContext();

  const gramatuNosaukumi = Object.keys(gramatas);

  return (
    <div className="gramatu-izvelne">
      <h2> Gramatu izvelne: </h2>
        <ul>
          {gramatuNosaukumi.map(gramatasNosaukums => 
            <Gramata 
              key={gramatasNosaukums}
              gramatasNosaukums={gramatasNosaukums} 
              aktivs={aktivs} 
              setAktivs={setAktivs}
            />
          )}
        </ul>
    </div>
  );
}

function Gramata({ gramatasNosaukums, aktivs, setAktivs }) {
  const dispatch = useGramatuDispatch();

  function dzestGramatu(e) {
    e.preventDefault();
    dispatch({type:'dzesta gramata', dzesamaGramata:gramatasNosaukums});

    if (aktivs?.gramata ===  gramatasNosaukums) 
      setAktivs({gramata:null, lapa:null});
  }

  return (
    <li 
      onClick={() => setAktivs({gramata:gramatasNosaukums, lapa:null})}
      onContextMenu={dzestGramatu}
    >
      {gramatasNosaukums}
    </li>
  );
}
