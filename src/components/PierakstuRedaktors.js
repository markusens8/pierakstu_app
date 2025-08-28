import { useGramatuContext, useGramatuDispatch } from '../context/GramatuContext';
import { useAktivsContext } from '../context/AktivsContext';

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
  const gramatas = useGramatuContext();
  const dispatch = useGramatuDispatch(); 

  if (!aktivs.lapa)
    return <textarea value={''} disabled/>;

  const lapasSaturs = gramatas[aktivs.gramata][aktivs.lapa];
  return <textarea value={lapasSaturs} onChange={e => dispatch({
    type:'lapa redigeta',
    gramata:aktivs.aktivaGramata,
    lapa:aktivs.aktivaLapa,
    teksts:e.target.value }) 
  }/>;
}
