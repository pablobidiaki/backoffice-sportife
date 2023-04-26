import './App.css';

import NavBar from './components/navbar/NavBar';

import Login from './components/login/Login';

import PersonalData from './components/options/data/PersonalData';

function App() {
  return (
    <div className="App">
      <NavBar />
      <PersonalData />
    </div>
  );
}

export default App;
