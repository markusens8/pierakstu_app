//PascalCase component
import './App.css';

import { GramatuProvider } from './context/GramatuContext';
import { AktivsStateProvider} from './context/AktivsContext';
import { LapuProvider } from './context/LapuContext';

import GramatuIzvelne from './components/GramatuIzvelne';
import LapuIzvelne from './components/LapuIzvelne';
import PierakstuRedaktors from './components/PierakstuRedaktors';


export default function App() {
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
