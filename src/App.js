import { Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import { Toaster } from './components/ui/toaster';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
