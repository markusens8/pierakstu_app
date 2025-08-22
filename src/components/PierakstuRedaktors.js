import { useGramatuContext, useGramatuDispatch } from '../context/GramatuContext'

export default function PierakstuRedaktors({ aktivs }) {
  return (
    <div className='pierakstu-redaktors'>
      <h2> Pierakstu redaktors: </h2>
      <TekstaIevade aktivs={aktivs}/> 
    </div>
  );
}

function TekstaIevade({ aktivs }) {
  const gramatas = useGramatuContext();
  const dispatch = useGramatuDispatch(); 

  if (aktivs.aktivaLapa === null) {
    return <textarea disabled/>;
  }

  const lapasSaturs = gramatas[aktivs.aktivaGramata][aktivs.aktivaLapa];
  return <textarea value={lapasSaturs} onChange={e => dispatch({
    type:'lapa redigeta',
    gramata:aktivs.aktivaGramata,
    lapa:aktivs.aktivaLapa,
    teksts:e.target.value}) 
  }/>;
}
