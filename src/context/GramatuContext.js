import { useReducer, useContext, createContext } from 'react';

const initGramatas = {
  gramatas: [
    {
      id: 'gramata1',
      lapas: [{lapa1: 'teksts teksts1', lapa2: 'teksts teksts ja2'};]
    }; 
  ]
  izveletaGramataId = 'gramata1',
  izveletaLapaId = 'lapa1'
};

function gramatuReducer(state, action) {

}

const [state, dispatch] = useReducer(gramatuReducer)
