import { useState } from 'react'
import { Landing } from './screens/Landing';
import { Game } from './screens/Game';
import './App.css'
import { BrowserRouter,Route,Routes} from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='h-screen bg-slate-900'>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} /> {/* 👈 Renders at /app/ */}
        <Route path="/game" element={<Game/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
