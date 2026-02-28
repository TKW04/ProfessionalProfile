import React from 'react';
import styles from './Profile.module.css';
import Logo from '../../components/Logo/Logo';

const profileData = {
  name: "Isaac Hiraldo",
  title: "Software Engineer Senior | 15 Años de Experiencia",
  avatar: "https://i.pravatar.cc/300?img=11", 
  about: "Desarrollador con amplia trayectoria construyendo soluciones robustas en web, backend y plataformas móviles. Apasionado por la creación de videojuegos y la integración de inteligencia artificial para la generación de assets y música en proyectos creativos.",
  
  // Nuevas Redes Sociales (usando emojis/texto para no depender de librerías de iconos aún)
  socials: [
    { name: "LinkedIn", url: "https://linkedin.com/in/tu-perfil", icon: "in" },
    { name: "GitHub", url: "https://github.com/tu-usuario", icon: "gh" },
    { name: "X", url: "https://x.com/tu-usuario", icon: "𝕏" },
    { name: "YouTube", url: "https://youtube.com/@tu-canal", icon: "▶" },
    { name: "Facebook", url: "https://facebook.com/tu-perfil", icon: "f" },
    { name: "Instagram", url: "https://instagram.com/tu-perfil", icon: "ig" }
  ],

  // Skills con porcentaje para la barra de progreso
  skills: [
    { name: "ReactJS & Vite", level: 90 },
    { name: "Python & .NET Core", level: 85 },
    { name: "Bases de Datos (SQL/NoSQL)", level: 80 },
    { name: "Godot & React Native", level: 75 },
    { name: "Inglés (Intermedio)", level: 50 }, // Justo a la mitad como pediste
  ],

  // Proyectos con links de Demo y Repo
  projects: [
    {
      id: 1,
      name: "Qatalo",
      description: "Plataforma integral de catálogo online enfocada en la experiencia de usuario y rendimiento.",
      demoLink: "https://qatalo.online",
      repoLink: "https://github.com/tu-usuario/qatalo"
    },
    {
      id: 2,
      name: "Caffe Kingdoms",
      description: "Videojuego móvil estratégico en pleno desarrollo, combinando mecánicas inmersivas y modelado personalizado.",
      demoLink: "", // Si está vacío, no se muestra el botón
      repoLink: "https://github.com/tu-usuario/caffe-kingdoms"
    },
    {
      id: 3,
      name: "The Horizon: Protocolo de Desconexión",
      description: "Juego narrativo que sigue a Isak Fix, explorando temas de tecnología e inteligencia artificial profunda.",
      demoLink: "https://tu-demo.com",
      repoLink: ""
    }
  ]
};

const Profile = () => {
  return (
    <div className={styles.container}>
      <div style={{opacity: 0.5, marginBottom: '-1rem'}}>
        <Logo />
      </div>
      <div className={styles.layout}>
        
        {/* COLUMNA IZQUIERDA: Info Personal, Redes y Skills */}
        <aside className={styles.sidebar}>
          <div className={`${styles.card} ${styles.header}`}>
            <img src={profileData.avatar} alt="Perfil" className={styles.avatar} />
            <h1 className={styles.name}>{profileData.name}</h1>
            <h2 className={styles.title}>{profileData.title}</h2>
            
            {/* Redes Sociales */}
            <div className={styles.socials}>
              {profileData.socials.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className={styles.socialIcon}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <h3 className={styles.sectionTitle} style={{ textAlign: 'left' }}>
              Habilidades
            </h3>
            
            {/* Barras de Progreso */}
            <div className={styles.skillsContainer}>
              {profileData.skills.map((skill, index) => (
                <div key={index} className={styles.skillItem}>
                  <div className={styles.skillHeader}>
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className={styles.skillTrack}>
                    <div 
                      className={styles.skillFill} 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* COLUMNA DERECHA: Sobre mí y Proyectos */}
        <main className={styles.mainContent}>
          <div className={styles.card} style={{ marginBottom: '2rem' }}>
            <h3 className={styles.sectionTitle}>Sobre mí</h3>
            <p className={styles.aboutText}>{profileData.about}</p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.sectionTitle}>Proyectos Destacados</h3>
            <div className={styles.projectsGrid}>
              {profileData.projects.map(project => (
                <div key={project.id} className={styles.projectCard}>
                  <h4>{project.name}</h4>
                  <p>{project.description}</p>
                  
                  {/* Botones de Links Condicionales */}
                  <div className={styles.projectLinks}>
                    {project.demoLink && (
                      <a href={project.demoLink} target="_blank" rel="noreferrer" className={styles.btnLink}>
                        Ver Demo
                      </a>
                    )}
                    {project.repoLink && (
                      <a href={project.repoLink} target="_blank" rel="noreferrer" className={styles.btnLink}>
                        Código
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

      </div>
    </div>
  );
};

export default Profile;