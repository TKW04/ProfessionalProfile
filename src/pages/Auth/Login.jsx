// src/pages/Auth/Login.jsx
import React from 'react';
import Logo from '../../components/Logo/Logo'; // Importamos el Logo
import styles from './Auth.module.css';

const Login = () => {
  return (
    <div className={styles.authWrapper}>
      <div className={styles.authCard}>
        {/* === LOGO CENTRAL === */}
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <Logo />
        </div>
        
        <h2 className={styles.title}>Bienvenido</h2>
        <p className={styles.subtitle}>Ingresa para gestionar tu identidad profesional</p>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className={styles.formGroup}>
            <label>Correo Electrónico</label>
            <input type="email" className={styles.input} placeholder="correo@ejemplo.com" required />
          </div>

          <div className={styles.formGroup}>
            <label>Contraseña</label>
            <input type="password" className={styles.input} placeholder="••••••••" required />
          </div>

          <button type="submit" className={styles.btnSubmit}>
            Iniciar Sesión
          </button>
        </form>

        <div className={styles.links}>
          <a href="#forgot" className={styles.link}>¿Olvidaste tu contraseña?</a>
          <span style={{ color: 'var(--color-4)', opacity: 0.8 }}>
            ¿No tienes cuenta? <a href="#register" className={styles.link}>Regístrate</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;