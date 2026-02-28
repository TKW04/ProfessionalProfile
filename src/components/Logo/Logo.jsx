// src/components/Logo/Logo.jsx
import React from 'react';
import styles from './Logo.module.css';

// SVG optimizado del diseño de flecha-P hacia arriba
const LogoSVG = () => (
  <svg 
    width="48" 
    height="48" 
    viewBox="0 0 480 480" 
    xmlns="http://www.w3.org/2000/svg"
    className={styles.svgSymbol}
  >
    {/* Fondo base circular (opcional, para contraste) */}
    {/* <circle cx="240" cy="240" r="230" fill="var(--color-1)" stroke="var(--color-3)" strokeWidth="10"/> */}
    
    {/* El Símbolo formado por facetas que crean la 'P' y la flecha hacia arriba */}
    {/* Usamos un color fijo para la columna vertebral y var(--color-3) para la curva */}
    
    <g fillRule="evenodd">
      {/* Columna vertebral profesional (fija o dinámica, la haremos dinámica para que resalte) */}
      <path d="M120 400h60V220h-60z" fill="var(--color-3)" opacity="0.8"/>
      
      {/* Faceta inferior curva (inicio de la P) */}
      <path d="M180 340c60 0 100-30 100-80s-40-80-100-80h-60v160h60z" fill="var(--color-3)"/>
      
      {/* Faceta superior media (Flecha apuntando arriba) */}
      <path d="M180 180V80l140 100z" fill="var(--color-3)" opacity="0.7"/>
      
      {/* Faceta superior derecha (Flecha apuntando arriba) */}
      <path d="M320 180l140 100H320z" fill="var(--color-3)"/>
      
      {/* Faceta central (Contrapunto de color) */}
      <path d="M180 180l140 100H180z" fill="var(--color-3)" opacity="0.9"/>
    </g>
  </svg>
);

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <LogoSVG />
      <div className={styles.brandText}>
        <span className={styles.title}>ProFile</span>
        <span className={styles.subtitle}>Professional Profile Builder</span>
      </div>
    </div>
  );
};

export default Logo;