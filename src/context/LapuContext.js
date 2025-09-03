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
  return null;
}


const initialLapas = [
  {gramatasId:'gramata1', id:'lapa1', saturs:'šis ir lapas saturs 123'},
  {gramatasId:'gramata2', id:'lapa2', saturs:'jajaj'}
]
