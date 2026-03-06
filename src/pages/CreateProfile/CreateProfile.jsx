import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import styles from './CreateProfile.module.css';
import Logo from '../../components/Logo/Logo';
import { profileActions } from '../../store/profile-store/profile-slice';


// Usamos la misma data inicial por ahora para poblar el formulario
const initialData = {
    name: "Isaac Hiraldo",
    title: "Software Engineer Senior | 15 Años de Experiencia",
    avatar: "https://i.pravatar.cc/300?img=11",
    about: "Desarrollador con amplia trayectoria construyendo soluciones robustas...",
    skills: [
        { name: "ReactJS & Vite", level: 90 },
        { name: "Python & .NET Core", level: 85 }
    ],
    projects: [
        {
            id: 1,
            name: "Qatalo",
            description: "Plataforma integral de catálogo online...",
            demoLink: "https://qatalo.online",
            repoLink: "https://github.com/tu-usuario/qatalo"
        }
    ]
};

const CreateProfile = () => {
    const [formData, setFormData] = useState(initialData);
    const profile = useSelector(state => state.profile.profile);
    const dispatch = useDispatch();
    const [addSkill, setAddSkill] = useState(false);
    const [skill, setSkill] = useState({ id: uuidv4(), name: "", level: 0 });

    console.log("profile", profile);


    return (
        <div className={styles.container}>
            <div style={{ opacity: 0.5, marginBottom: '-1rem' }}>
                <Logo />
            </div>
            {/* SECCIÓN 1: Info Básica */}
            <section className={styles.card}>
                <h2 className={styles.sectionTitle}>Información Básica</h2>

                <div className={styles.formGroup}>
                    <label>Nombre</label>
                    <input
                        type="text"
                        name="name"
                        value={profile.first_name}
                        onChange={(e) => {
                            dispatch(profileActions.modifyPropertyValue({ id: "first_name", value: e.target.value }));
                        }}
                        className={styles.input}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>Apellido</label>
                    <input
                        type="text"
                        name="name"
                        value={profile.last_name}
                        onChange={(e) => {
                            dispatch(profileActions.modifyPropertyValue({ id: "last_name", value: e.target.value }));
                        }}
                        className={styles.input}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Titular Profesional</label>
                    <input
                        type="text"
                        name="title"
                        value={profile.title}
                        onChange={(e) => {
                            dispatch(profileActions.modifyPropertyValue({ id: "title", value: e.target.value }));
                        }}
                        className={styles.input}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Foto de Perfil</label>
                    <input
                        type="file"
                        name="avatar"
                        onChange={(e) => {
                            dispatch(profileActions.modifyPropertyValue({ id: "avatar", value: e.target.value }));
                        }}
                        className={styles.input}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Sobre mí</label>
                    <textarea
                        name="about"
                        value={profile.about_me}
                        onChange={(e) => {
                            dispatch(profileActions.modifyPropertyValue({ id: "about_me", value: e.target.value }));
                        }}
                        className={styles.textarea}
                    />
                </div>
            </section>

            {/* SECCIÓN 2: Habilidades */}
            <section className={styles.card}>
                <h2 className={styles.sectionTitle}>Habilidades</h2>
                {addSkill && (
                    <div className={styles.dynamicItem}>
                        <div className={styles.grid2}>
                            <div className={styles.formGroup}>
                                <label>Habilidad</label>
                                <input
                                    type="text"
                                    value={skill.name}
                                    className={styles.input}
                                    onChange={(e) => setSkill({ ...skill, name: e.target.value })}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Nivel (%)</label>
                                <input
                                    type="number"
                                    value={skill.level}
                                    className={styles.input}
                                    onChange={(e) => setSkill({ ...skill, level: e.target.value })}
                                />
                            </div>
                        </div>
                        < button className={styles.btnPrimary} > Guardar Cambios</button >
                    </div>
                )}
                {
                    profile.skills.map((skill, index) => (
                        addSkill && (
                            <div key={index} className={styles.dynamicItem}>
                                <div className={styles.grid2}>
                                    <div className={styles.formGroup}>
                                        <label>Habilidad</label>
                                        <input
                                            type="text"
                                            value={skill.name}
                                            className={styles.input}
                                            readOnly // Por ahora readOnly hasta conectar la lógica de arrays
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Nivel (%)</label>
                                        <input
                                            type="number"
                                            value={skill.level}
                                            className={styles.input}
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    ))
                }
                <button className={styles.btnOutline} onClick={() => setAddSkill(true)}>+ Añadir Nueva Habilidad</button>
            </section >

            {/* SECCIÓN 3: Proyectos */}
            < section className={styles.card} >
                <h2 className={styles.sectionTitle}>Proyectos</h2>
                {
                    formData.projects.map((project, index) => (
                        <div key={project.id} className={styles.dynamicItem}>
                            <div className={styles.formGroup}>
                                <label>Nombre del Proyecto</label>
                                <input type="text" value={project.name} className={styles.input} readOnly />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Descripción</label>
                                <textarea value={project.description} className={styles.textarea} style={{ minHeight: '80px' }} readOnly />
                            </div>
                            <div className={styles.grid2}>
                                <div className={styles.formGroup}>
                                    <label>URL Demo</label>
                                    <input type="text" value={project.demoLink} className={styles.input} readOnly />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>URL Repositorio</label>
                                    <input type="text" value={project.repoLink} className={styles.input} readOnly />
                                </div>
                            </div>
                        </div>
                    ))
                }
                <button className={styles.btnOutline}>+ Añadir Nuevo Proyecto</button>
            </section >

            {/* BOTÓN GUARDAR */}
            < button className={styles.btnPrimary} > Guardar Cambios</button >

        </div >
    );
};

export default CreateProfile;