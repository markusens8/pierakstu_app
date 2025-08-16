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

export function useGramatuDispatch() {
  return useContext(GramatuDispatchContext);
}


function gramatuReducer(gramatas, action) {
  switch (action.type) {
    case 'mainit gramatu': {
      return {
        ...gramatas,
        aktivaGramata: gramatas.gramatas.findIndex(gramata => gramata.id === action.id)
      }
    } 
  }
}

// lapas masiva 1. elements ir lapas nosaukums, 2. elements ir lapas saturs
const initialGramatas = {
  gramatas: [{
      id: 'gramata1',
      lapas: [['lapa1','teksts teksts1'], ['lapa2','teksts teksts ja2']]
    }, {
      id: 'gramata2',
      lapas: [['2.gramatas lapa','teksts2']]
    }],
  // Šie ir indeksi no gramatas masiva un attieciga lapas masiva
  aktivaGramata: 0,
  aktivaLapa: 0
};


