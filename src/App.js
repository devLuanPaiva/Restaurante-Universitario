import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute.jsx';
import Home from './components/alunos/home/Home';




function App() {
 
  return (

      <Router>
        <Routes>
          
          <Route path="/" element={<ProtectedRoute />}>
            <Route path='HomeAluno' element={<Home />} />
            
          </Route>
        </Routes>
      </Router>

  );
}

export default App;