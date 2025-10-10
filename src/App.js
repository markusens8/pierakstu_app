//PascalCase component
import './styles/App.css';

import { GramatuProvider } from './context/GramatuContext';
import { AktivsStateProvider} from './context/AktivsContext';
import { LapuProvider } from './context/LapuContext';
import useOnKeyPress from './hooks/useOnKeyPress'; 

import GramatuIzvelne from './components/GramatuIzvelne';
import LapuIzvelne from './components/LapuIzvelne';
import PierakstuRedaktors from './components/PierakstuRedaktors';


export default function App() {
  useOnKeyPress(() => prompt('Ievadi ID:'), 'I');
  return (
    <div className="app-container">
      <AktivsStateProvider>
        <GramatuProvider>
          <LapuProvider>
            <LapuIzvelne/> 
            <PierakstuRedaktors/> 
            <GramatuIzvelne/> 
          </LapuProvider>
        </GramatuProvider>
      </AktivsStateProvider>
    </div>
  );
}
