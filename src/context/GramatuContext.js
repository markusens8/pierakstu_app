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
    case 'lapa redigeta': {
      return {
        ...gramatas,
        [action.gramata]: {
          ...gramatas[action.gramata],
          [action.lapa]: action.teksts,
        },
      };
    }
    case 'izveidota gramata': {
      return null;
    }
  }
}

// gramatas id, lapas{id:saturs}
const initialGramatas = {
  'gramata1': {'lapa1':'teksts1', 'lapa2':'teksts2'},
  'gramata2': {'2lapa1':'2teksts1', '2lapa2':'2teksts2'}
};

