import { createContext } from 'react';

const gramatuKratuve = {
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
  izveletaGramataIndex: 0,
  izveletaLapaId: 'lapa1'
};

export const gramatuContext = createContext(gramatuKratuve)

