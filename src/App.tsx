import { useState } from 'react'
import './App.css'
import type { typeComentario, typePerfil, typePublicacion } from './types';
import SideBar from './SideBar';
import Publicacion from './Componentes/Publicacion';
import Perfiles from './Componentes/Perfiles';

function App() {
  
    const perfiles = [
    { nombre: "Felipe", foto: "" },
    { nombre: "Ana", foto: "" },
    { nombre: "Luis", foto: "" },
    { nombre: "María", foto: "" },
    { nombre: "Carlos", foto: "" },
    { nombre: "Sofía", foto: "" },
    { nombre: "Pedro", foto: "" },
    { nombre: "Lucía", foto: "" },
    { nombre: "Jorge", foto: "" },
    { nombre: "Valentina", foto: "" },
  ];

  // 20 comentarios
  const comentarios = [
    { nombre: "Felipe", comentario: "¡Qué buena foto!" },
    { nombre: "Ana", comentario: "Me encanta este lugar." },
    { nombre: "Luis", comentario: "Gran recuerdo." },
    { nombre: "María", comentario: "Muy inspirador." },
    { nombre: "Carlos", comentario: "Hermoso día." },
    { nombre: "Sofía", comentario: "Qué alegría verte." },
    { nombre: "Pedro", comentario: "Excelente publicación." },
    { nombre: "Lucía", comentario: "Me trae nostalgia." },
    { nombre: "Jorge", comentario: "Muy buena toma." },
    { nombre: "Valentina", comentario: "¡Felicitaciones!" },
    { nombre: "Felipe", comentario: "Siempre motivando." },
    { nombre: "Ana", comentario: "Qué lindo detalle." },
    { nombre: "Luis", comentario: "Me gusta mucho." },
    { nombre: "María", comentario: "Gran homenaje." },
    { nombre: "Carlos", comentario: "Muy emotivo." },
    { nombre: "Sofía", comentario: "Qué buena energía." },
    { nombre: "Pedro", comentario: "Me inspira bastante." },
    { nombre: "Lucía", comentario: "Muy auténtico." },
    { nombre: "Jorge", comentario: "Qué gran recuerdo." },
    { nombre: "Valentina", comentario: "Me alegra verlo." },
  ];

  // 10 publicaciones
  const publicaciones = [
    { perfil: perfiles[0], foto: "", likes: 12, comentarios: [comentarios[2], comentarios[4]] },
    { perfil: perfiles[1], foto: "", likes: 8, comentarios: [comentarios[1]] },
    { perfil: perfiles[2], foto: "", likes: 15, comentarios: [comentarios[5], comentarios[0]] },
    { perfil: perfiles[3], foto: "", likes: 20, comentarios: [comentarios[10]] },
    { perfil: perfiles[4], foto: "", likes: 5, comentarios: [comentarios[1], comentarios[2]] },
    { perfil: perfiles[5], foto: "", likes: 9, comentarios: [comentarios[11]] },
    { perfil: perfiles[6], foto: "", likes: 13, comentarios: [comentarios[12], comentarios[13]] },
    { perfil: perfiles[7], foto: "", likes: 7, comentarios: [comentarios[14]] },
    { perfil: perfiles[8], foto: "", likes: 11, comentarios: [comentarios[9], comentarios[8]] },
    { perfil: perfiles[9], foto: "", likes: 18, comentarios: [comentarios[3], comentarios[5]] },
  ];

  // Los datos se los pedi a la ia
  return (
    <section className="app-container">
      
    <div className="sidebar">
      <SideBar/>
    </div>
      <section className="main-content">
        
        <Perfiles perfiles={perfiles}/>
          {publicaciones.map(item => <Publicacion perfil={item.perfil} foto={item.foto} likes={item.likes} comentarios={item.comentarios}/>)}
      </section>
    </section>
  )
}

export default App
