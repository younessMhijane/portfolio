import './App.css';
import React from 'react';
import { Analytics } from "@vercel/analytics/react"

import Intro from './Pages/Intro'
function App() {

  return (
    <div className="App">
      <Intro/>
      <Analytics/>
    </div>
  );
}

export default App;
