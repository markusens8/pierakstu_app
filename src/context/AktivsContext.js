import { createContext, useContext, useReducer } from 'react';
   

const AktivsContext = createContext(null);
const AktivsDispatchContext = createContext(null);

export function AktivsStateProvider({ children }) {
  const initialAktivs = {gramata:null, lapa:null, redigeSadalu:null};
  const [aktivs, setAktivs] = useReducer(aktivsReducer, initialAktivs);

  return (
    <AktivsContext value={aktivs}>
      <AktivsDispatchContext value={setAktivs}>
        {children}
      </AktivsDispatchContext>
    </AktivsContext>
  );
}


export const useAktivsContext = () => useContext(AktivsContext);
export const useAktivsDispatch = () => useContext(AktivsDispatchContext);


function aktivsReducer(aktivs, action) {
  switch (action.type) {
    case 'mainita aktiva gramata': {
      return {...aktivs, gramata:action.gramata, lapa:null};
    }
    case 'mainita aktiva lapa': {
      return {...aktivs, lapa:action.lapa}
    }
    case 'rediget lauku': {
      if (aktivs.redigeSadalu === null)
        return {...aktivs, redigeSadalu:action.sadala};
    }
    case 'beigt redigesanu': {
      return {...aktivs, redigeSadalu:null};
    }
  }
}
