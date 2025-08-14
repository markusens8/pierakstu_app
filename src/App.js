//PascalCase component
import './App.css';

import { GramatuProvider } from './context/GramatuContext'

import GramatuIzvelne from './components/GramatuIzvelne';
import LapuIzvelne from './components/LapuIzvelne';
import PierakstuRedaktors from './components/PierakstuRedaktors';

export default function App() {
  return (
    <GramatuProvider>
      <div className="app-container">
        <LapuIzvelne />
        <PierakstuRedaktors />
        <GramatuIzvelne />
      </div>
    </GramatuProvider>
  );
}
