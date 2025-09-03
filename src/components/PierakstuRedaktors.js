import { useAktivsContext } from '../context/AktivsContext';
import { useLapuContext, useLapuDispatch } from '../context/LapuContext';

export default function PierakstuRedaktors() {
  return (
    <div className='pierakstu-redaktors'>
      <h2> Pierakstu redaktors: </h2>
      <TekstaIevade/> 
    </div>
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
            type:'redigeta lapa',
            gramataId:aktivs.gramata,
            lapaId:aktivs.lapa
          })
        }
      />
    );
  }
}
