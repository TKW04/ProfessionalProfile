import React from 'react';
import './ColorPicker.css';

// 4 Paletas hermosas inspiradas en Color Hunt
// Orden: [Fondo Main, Fondo Secundario/Cards, Acento/Botones, Texto]
const palettes = [
  ['#222831', '#393E46', '#00ADB5', '#EEEEEE'], // Dark Teal (Por defecto)
  ['#F9F7F7', '#DBE2EF', '#3F72AF', '#112D4E'], // Light Blue Corporativo
  ['#2C3639', '#3F4E4F', '#A27B5C', '#DCD7C9'], // Earthy Dark
  ['#FFF5E4', '#FFE3E1', '#FFD1D1', '#FF9494'], // Soft Rose
  ['#D96868', '#FBF6F6', '#6A7E3F', '#4C5C2D'], // Green
  ['#BF092F', '#132440', '#16476A', '#3B9797'], // Red
  ['#37353E', '#44444E', '#715A5A', '#D3DAD9'] // Purple
];

const ColorPicker = ({ onSelectPalette }) => {
  return (
    <div className="color-picker">
      <span className="color-picker__label">Tema:</span>
      <div className="color-picker__list">
        {palettes.map((palette, index) => (
          <button
            key={index}
            className="color-picker__btn"
            onClick={() => onSelectPalette(palette)}
            title={`Paleta ${index + 1}`}
          >
            {/* Dibujamos 4 franjas de color para que el usuario vea la paleta */}
            {palette.map((color, i) => (
              <span
                key={i}
                className="color-picker__swatch"
                style={{ backgroundColor: color }}
              ></span>
            ))}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;