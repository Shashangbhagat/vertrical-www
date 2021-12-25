import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import RecordDetails from './components/RecordDetails';
import RecordsList from './components/RecordsList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route 
            path="/:id" 
            element={<RecordDetails />} 
          />
          <Route
            path="/"
            element={<RecordsList />} 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
