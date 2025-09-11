import { createContext, useContext, useReducer } from 'react';

const LapuContext = createContext();
const LapuDispatchContext = createContext();

export function LapuProvider({ children }) {
  const [lapas, dispatch] = useReducer(lapuReducer, initialLapas)

  return (
    <LapuContext value={lapas}>
      <LapuDispatchContext value={dispatch}>
        {children}
      </LapuDispatchContext>
    </LapuContext>
  );
}

export const useLapuContext = () => useContext(LapuContext);
export const useLapuDispatch = () => useContext(LapuDispatchContext);

function lapuReducer(lapas, action) {
  switch (action.type) {
    case 'dzesta lapa': {
      return lapas.filter(lapa => 
        lapa.gramatasId !== action.gramatasId 
        && lapa.id !== action.id
      )
    }
    case 'redigeta lapa': {
      const index = getLapasIndex(lapas, action.gramatasId, action.lapasId);
      return [
        ...lapas,
        lapas[index].saturs = action.jaunaisSaturs
      ];
    }
    case 'mainits gramatas id': {
      return lapas.map(lapa => lapa.gramatasId === action.vecaisId ?
        {...lapa, gramatasId:action.jaunaisId}
        : lapa   
      )
    }
  }
}

const getLapasIndex = (lapas, gramatasId, lapasId) =>
  lapas.findIndex(lapa => lapa.gramatasId === gramatasId && lapa.id === lapasId);

const initialLapas = [
  {gramatasId:'gramata1', id:'lapa1', saturs:'šis ir lapas saturs 123'},
  {gramatasId:'gramata2', id:'lapa2', saturs:'jajaj'}
]
