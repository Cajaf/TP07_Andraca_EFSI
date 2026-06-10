import { useEffect, useState } from "react";
import type { typeCatImage } from "../../types";
import axios from "axios";
import PerfilInfo from "../../Componentes/PerfilInfo";
import SideBar from "../../SideBar";
import './perfil.css'

const Perfil = () =>{
    const [cats, setCats] = useState<typeCatImage[]>([]);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await axios.get("https://api.thecatapi.com/v1/images/search", {
          headers: {
            "x-api-key": "live_ZtQBVqgO3tQ6htJwAQ8VqMxkzM0D5tVRF0be6lkTr7S5vGdzdc3YEQZtPdZpbgMB" 
          },
          params: {
            limit: 5
          }
        });
        setCats(response.data);
      } catch (error) {
        console.error("Error al traer gatos:", error);
      }
    };

    fetchCats();
  }, []);

const usuarioPerfil = {
  nombre: "Felipe",
  posts: 5,
  followers: 15,
  following: 14,
  desc: "Desarrollador web.",
  foto: ""
};

const usuario = {
    nombre: "Felipe", 
    foto: "" 
};

    return(
        <section className="container">
            <div className="sidebar">
                <SideBar usuarioSesion={usuario}/>
            </div>
            <section className="main-content">
                <PerfilInfo
                nombre={usuarioPerfil.nombre}
                posts={usuarioPerfil.posts}
                followers={usuarioPerfil.followers}
                following={usuarioPerfil.following}
                desc={usuarioPerfil.desc}
                foto={usuarioPerfil.foto}
                />
                <div>
                    {cats.map(item => <img src={item.url}/>)}
                </div>
        </section>
       </section>
    )
}
export default Perfil