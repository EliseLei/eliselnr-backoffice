import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Clients, ShootingPhoto, AddShootingPhoto, AddClient } from './pages';
import { Menu, Header } from './components';


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
            <Route path="/clients" element={<Clients />} />
            <Route path="/add-client" element={<AddClient />} />
            <Route path="/add-shooting-photo" element={<AddShootingPhoto />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
