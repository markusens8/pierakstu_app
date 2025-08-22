//PascalCase component
import './App.css';

import { useState } from 'react';

import { GramatuProvider } from './context/GramatuContext';

import GramatuIzvelne from './components/GramatuIzvelne';
import LapuIzvelne from './components/LapuIzvelne';
import PierakstuRedaktors from './components/PierakstuRedaktors';


export default function App() {
  const [aktivs, setAktivs] = useState({aktivaGramata:null, aktivaLapa:null});  

  return (
    <GramatuProvider>
      <div className="app-container">
        <LapuIzvelne aktivs={aktivs} setAktivs={setAktivs}/>
        <PierakstuRedaktors aktivs={aktivs}/>
        <GramatuIzvelne aktivs={aktivs} setAktivs={setAktivs}/>
      </div>
    </GramatuProvider>
  );
}
