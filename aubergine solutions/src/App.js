import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from './components/card';
import UserDetailPage from './components/UserDetailPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/detail/:id" element={<UserDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
