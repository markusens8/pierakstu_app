import { useGramatuContext, useGramatuDispatch } from '../context/GramatuContext'

export default function LapuIzvelne({ aktivs, setAktivs }) {
  const gramatas = useGramatuContext();

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
              aktivs={aktivs} 
              setAktivs={setAktivs}
            />
          )} 
        </ul>
    </div>
  )
}

function Lapa({ lapasNosaukums, aktivs, setAktivs }) {
  const dispatch = useGramatuDispatch();

  return (
    <li
      onClick={() => setAktivs({...aktivs, lapa:lapasNosaukums})}
      onContextMenu={() =>
        dispatch ({
          type: 'dzesta lapa',
          gramata: aktivs.gramata,
          dzesamaLapa: lapasNosaukums
        })   
      }
    >
      {lapasNosaukums}
    </li>
  );
}
