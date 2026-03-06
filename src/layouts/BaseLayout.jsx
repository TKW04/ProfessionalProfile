import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { NotificationProvider } from "../components/UI/NotificationProvider";

import { isNotValidToken, removeToken, setToken } from "../helpers/token";
import { getCurrentSession } from "../services/authenticate";
import "@fontsource/roboto";

const AdminLayout = () => {
  const notValidToken = isNotValidToken();
  const location = useLocation();

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

  useEffect(() => {
    if (!notValidToken) {
      // Supongamos que esta es la paleta (Earthy Dark) que el dueño guardó
      const savedPalette = ['#2C3639', '#3F4E4F', '#A27B5C', '#DCD7C9'];
      handleColorChange(savedPalette);
    }
  }, [notValidToken]);

  useEffect(() => {
    if (
      notValidToken &&
      !location.pathname.includes("/login") &&
      !location.pathname.includes("/forgotPassword") &&
      !location.pathname.includes("/register")
    ) {
      getCurrentSession()
        .then((data) => {
          setToken(data.idToken.jwtToken);
          window.location.reload();
        })
        .catch(() => {
          removeToken();
          window.location.href = "/login";
        });
    }
  }, [location.pathname, notValidToken]);

  useEffect(() => {
    if (!notValidToken && location.pathname.includes("/login")) {
      window.location.href = "/";
    }
  }, [location.pathname, notValidToken]);

  return (
    <>
      <NotificationProvider>
        {/* {!notValidToken && <NavBar />} */}
        <Outlet />
      </NotificationProvider>
    </>
  );
};
export default AdminLayout;
