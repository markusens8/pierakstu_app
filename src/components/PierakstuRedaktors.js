import { useAktivsContext } from '../context/AktivsContext';
import { useLapuContext, useLapuDispatch } from '../context/LapuContext';

export default function PierakstuRedaktors() {
  return (
    <main className='pierakstu-redaktors'>
      <h2> Pierakstu redaktors: </h2>
      <TekstaIevade/> 
    </main>
  );
}

function TekstaIevade() {
  const aktivs = useAktivsContext();
  const lapas = useLapuContext();
  const dispatch = useLapuDispatch();

  if (!aktivs.lapa)
    return <textarea value={''} disabled/>;
  else {
    const lapasSaturs = lapas.find(lapa =>
      lapa.gramatasId === aktivs.gramata &&
      lapa.id === aktivs.lapa
    ).saturs;

    return (
      <textarea
        value={lapasSaturs}
        onChange={(e) => 
          dispatch({
            type: 'redigeta lapa',
            gramatasId: aktivs.gramata,
            lapasId: aktivs.lapa,
            jaunaisSaturs: e.target.value
          })
        }
      />
    );
  }
}
