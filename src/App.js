import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import SignIn from './components/Auth/SignIn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/auth/signin" element={<SignIn/>} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
    </Router>
  );
}

export default App;
