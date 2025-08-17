//PascalCase component
import './App.css';

import { useState } from 'react';

import { GramatuProvider } from './context/GramatuContext';

import GramatuIzvelne from './components/GramatuIzvelne';
import LapuIzvelne from './components/LapuIzvelne';
import PierakstuRedaktors from './components/PierakstuRedaktors';

export default function App() {
  const [aktivs, setAktivs] = useState({aktivaGramata: 0, aktivaLapa: 0 });  

  return (
    <GramatuProvider>
      <div className="app-container">
        <LapuIzvelne aktivs={aktivs} setAktivs={setAktivs}/>
        <PierakstuRedaktors />
        <GramatuIzvelne aktivs={aktivs} setAktivs={setAktivs}/>
      </div>
    </GramatuProvider>
  );
}
