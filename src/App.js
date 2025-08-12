import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Clients from './Pages/Clients';
import ShootingPhoto from './Pages/ShootingPhoto';
import AddClient from './Pages/AddClient';
import Menu from './components/Common/Menu';
import Header from './components/Common/Header';

function App() {
  const [clients, setClients] = useState([]);

  const handleAddClient = (client) => {
    setClients([...clients, client]);
  };

  return (
    <div className="App">
      <div className="h-full flex">
        <Menu />
        <div className="w-full">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shooting-photo" element={<ShootingPhoto />} />
            <Route path="/clients" element={<Clients clients={clients} />} />
            <Route path="/add-client" element={<AddClient onAddClient={handleAddClient} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
