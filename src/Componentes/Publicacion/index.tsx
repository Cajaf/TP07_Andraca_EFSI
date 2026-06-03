import type { typePublicacion } from "../../types"
import Comentario from "../comentario"
import FotoPerfil from "../FotoPerfil"

const Publicacion: React.FC<typePublicacion> = ({perfil,foto, likes, comentarios}) =>{

    return(
       <section>
            <div className="head">
                <FotoPerfil foto={perfil.foto} nombre={perfil.nombre}/>
                <h4>{perfil.nombre}</h4>
            </div>
            <img src={foto}></img>
            <h4>{likes}</h4>
            <Comentario nombre={comentarios[0].nombre} comentario={comentarios[0].comentario}/>
       </section>
    )
}

export default Publicacion