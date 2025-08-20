import { useGramatuContext, useGramatuDispatch } from '../context/GramatuContext'

export default function PierakstuRedaktors({ aktivs, setAktivs }) {
  const gramatas = useGramatuContext();
  const dispatch = useGramatuDispatch;

  const aktivaGramata = aktivs.aktivaGramata;
  const aktivaLapa = aktivs.aktivaLapa;
  const lapasSaturs = aktivaLapa === null ? '' : gramatas[aktivaGramata][aktivaLapa]; 

  return (
    <div className='pierakstu-redaktors'>
      <h2> Pierakstu redaktors: </h2>
      <input value={lapasSaturs} />
    </div>
  );
}
