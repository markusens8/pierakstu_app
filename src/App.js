//PascalCase component
import './App.css'

import GramatuIzvelne from './components/GramatuIzvelne'
import LapuIzvelne from './components/LapuIzvelne'
import PierakstuRedaktors from './components/PierakstuRedaktors'

export default function App() {
  return (
    <div class="app-container">
      <LapuIzvelne />
      <PierakstuRedaktors />
      <GramatuIzvelne />
    </div>
  );
}
