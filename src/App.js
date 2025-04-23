import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserList from './components/UserList';
import UserCreate from './components/UserCreate';
import UserEdit from './components/UserEdit';
import UserView from './components/UserView';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>User Management App</h1>
          <nav>
            <ul className="nav-links">
              <li>
                <Link to="/">Users List</Link>
              </li>
              <li>
                <Link to="/create">Add User</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="App-content">
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/create" element={<UserCreate />} />
            <Route path="/view/:id" element={<UserView />} />
            <Route path="/edit/:id" element={<UserEdit />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;