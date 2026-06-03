import type { typePerfil } from "../../types"
import './fotoPerfil.css'

const FotoPerfil:React.FC<typePerfil> = ({nombre,foto}) =>{
     return(
        <>
        <img src={foto} className="foto-perfil-img"/>
        </>
     )
}

export default FotoPerfil