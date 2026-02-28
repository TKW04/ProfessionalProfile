// src/App.jsx
import React, { useState, useEffect } from 'react';
import ColorPicker from './components/ColorPicker/ColorPicker';
import Profile from './pages/Profile/Profile';
import EditProfile from './pages/EditProfile/EditProfile';
import Login from './pages/Auth/Login'; // Importamos el Login
import './App.css';

function App() {
  // viewMode puede ser: 'login', 'owner' (dueño logueado), o 'public' (visitante)
  const [viewMode, setViewMode] = useState('public'); 
  const [isEditing, setIsEditing] = useState(false);

  // Función para aplicar paleta de colores
  const handleColorChange = (palette) => {
    const root = document.documentElement;
    root.style.setProperty('--color-1', palette[0]);
    root.style.setProperty('--color-2', palette[1]);
    root.style.setProperty('--color-3', palette[2]);
    root.style.setProperty('--color-4', palette[3]);
  };

  // Simulación: Si es la vista pública, forzamos la paleta de colores que el usuario "guardó" en la base de datos.
  useEffect(() => {
    if (viewMode === 'public') {
      // Supongamos que esta es la paleta (Earthy Dark) que el dueño guardó
      const savedPalette = ['#2C3639', '#3F4E4F', '#A27B5C', '#DCD7C9']; 
      handleColorChange(savedPalette);
    }
  }, [viewMode]);

  // --- RENDERIZADO DEL LOGIN ---
  if (viewMode === 'login') {
    return (
      <>
        <Login />
        {/* Botón temporal para navegar mientras no usamos React Router */}
        <button onClick={() => setViewMode('owner')} style={{ position: 'fixed', bottom: 10, right: 10 }}>
          Simular Login Exitoso
        </button>
      </>
    );
  }

  // --- RENDERIZADO DEL PERFIL (PÚBLICO O DUEÑO) ---
  return (
    <div className="app-container">
      
      {/* Si es el dueño, le mostramos el header con el ColorPicker y el botón de editar. 
          Si es visitante ('public'), el header NO se renderiza. */}
      {viewMode === 'owner' && (
        <header className="app-header">
          <div className="app-header__controls">
            <ColorPicker onSelectPalette={handleColorChange} />
            <button 
              className="app-header__toggle-btn"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? '👀 Ver Perfil' : '✏️ Editar Perfil'}
            </button>
          </div>
        </header>
      )}

      {/* Botón temporal para alternar vistas para que pruebes */}
      <div style={{ padding: '10px', background: 'red', color: 'white', textAlign: 'center' }}>
        Modo actual: {viewMode.toUpperCase()} | 
        <button onClick={() => setViewMode('public')}>Ver como Visitante</button> |
        <button onClick={() => setViewMode('owner')}>Ver como Dueño</button> |
        <button onClick={() => setViewMode('login')}>Ir al Login</button>
      </div>

      <main className="app-main">
        {/* Si está en modo dueño Y le dio a editar, muestra EditProfile, sino muestra el Profile normal */}
        {viewMode === 'owner' && isEditing ? <EditProfile /> : <Profile />}
      </main>
    </div>
  );
}

export default App;