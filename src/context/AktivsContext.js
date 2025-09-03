import { createContext, useContext, useState } from 'react';
   

const AktivsContext = createContext(null);
const SetAktivsContext = createContext(null);

export function AktivsStateProvider({ children }) {
  const [aktivs, setAktivs] = useState({gramata:null, lapa:null});

  return (
    <AktivsContext value={aktivs}>
      <SetAktivsContext value={setAktivs}>
        {children}
      </SetAktivsContext>
    </AktivsContext>
  );
}

export const useAktivsContext = () => useContext(AktivsContext);
export const useSetAktivs = () => useContext(SetAktivsContext);
