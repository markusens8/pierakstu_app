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
      return gramatas.filter(gramata => gramata.id !== action.id);
    }
    case 'mainits id': {
      return gramatas.map(gramata => gramata.id === action.vecaisId ? 
        {id: action.jaunaisId} 
        : gramata
      )
    }
    case 'izveidota gramata': {
      return [
        ...gramatas,
        {id:'jauna gramata'}
      ]
    }
  }
}

//const getGramatasIndex = (gramatas, id) =>
//  gramatas.findIndex(gramata => gramata.id === id); 

const initialGramatas = [
  {id:'gramata1'},
  {id:'gramata2'}
]
