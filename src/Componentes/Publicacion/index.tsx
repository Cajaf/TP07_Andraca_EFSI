import type { typePublicacion } from "../../types"
import Comentario from "../comentario"
import FotoPerfil from "../FotoPerfil"
import './publicacion.css'

const Publicacion: React.FC<typePublicacion> = ({perfil,foto, likes, comentarios}) =>{
    return(
       <div className="publicacion">
            <div className="publicacion-head">
                <FotoPerfil foto={perfil.foto} nombre={perfil.nombre}/>
                <h4>{perfil.nombre}</h4>
            </div>
            <img src={foto} className="publicacion-img" />
            <h4 className="publicacion-likes">{likes} likes</h4>
            <div className="publicacion-comentario">
              <Comentario nombre={comentarios[0].nombre} comentario={comentarios[0].comentario}/>
            </div>
       </div>
    )
}
export default Publicacion