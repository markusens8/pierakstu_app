//PascalCase component
import './App.css';

import { GramatuProvider } from './context/GramatuContext';
import { AktivsStateProvider} from './context/AktivsContext';

import GramatuIzvelne from './components/GramatuIzvelne';
import LapuIzvelne from './components/LapuIzvelne';
import PierakstuRedaktors from './components/PierakstuRedaktors';


export default function App() {
  return (
    <AktivsStateProvider>
      <GramatuProvider>
        <div className="app-container">
          <LapuIzvelne/> 
          <PierakstuRedaktors/> 
          <GramatuIzvelne/> 
        </div>
      </GramatuProvider>
    </AktivsStateProvider>
  );
}
