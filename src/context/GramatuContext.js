import { createContext, useContext, useReducer } from 'react';

const GramatuContext = createContext(null);

const GramatuDispatchContext = createContext(null);


export function GramatuProvider({ children }) {
  const [gramatas, dispatch] = useReducer(gramatuReducer, initialGramatas)  

  return (
    <GramatuContext value={gramatas}>
      <GramatuDispatchContext value={dispatch}>
        {children}
      </GramatuDispatchContext>
    </GramatuContext>
  );
}


export function useGramatuContext() {
  return useContext(GramatuContext); 
}

export function useGramatasDispatch() {
  return useContext(GramatuDispatchContext);
}


function gramatuReducer(gramatas, darbiba) {
  switch (darbiba.tips) {
  
  }
}


const initialGramatas = {
  gramatas:
  [
    {
      id: 'gramata1',
      lapas: [{lapa1:'teksts teksts1'}, {lapa2:'teksts teksts ja2'}]
    },
    {
      id: 'gramata2',
      lapas: [{lapalapa:'tekst'}]
    }
  ],
  // Šie ir indeksi no gramatas masiva un lapas masiva
  aktivaGramata: 0,
  aktivaLapa: 0
};


