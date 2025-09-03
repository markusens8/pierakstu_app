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

export const useGramatuContext = () => useContext(GramatuContext);
export const useGramatuDispatch = () => useContext(GramatuDispatchContext);


function gramatuReducer(gramatas, action) {
  switch (action.type) {
    case 'dzesta gramata': {
      const {[action.dzesamaGramata]: _, ...jaunasGramatas} = gramatas;
      return jaunasGramatas;
    }
    case 'mainits gramatas nosaukums': {
      const jaunasGramatas = {...gramatas};
      jaunasGramatas[action.jaunaisNosaukums] = gramatas[action.vecaisNosaukums];
      delete jaunasGramatas[action.vecaisNosaukums];
      return jaunasGramatas;
    }
  }
}


const initialGramatas = [
  { id:'gramata1'},
  { id:'gramata2'}
]
