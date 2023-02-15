import ContenidoItem from "../ContenidoItem/ContenidoItem";
import { CFRONTEND } from "./constantesFrontEnd";
import { CBACKEND } from "./constantesBackEnd";
import { CDATABASE } from "./constantesDataBase";
import s from "./style.module.css";

const Contenido = (props) => {
    const cont = [];

    if (props.roles == "Front End") {
        //cont = []
        CFRONTEND.map((contenido, idx) => (
            cont.push(contenido)
        ))
    }

    if (props.roles == "Back End") {
        //cont = []
        CBACKEND.map((contenido, idx) => (
            cont.push(contenido)
        ))
    }

    if (props.roles == "Data Base") {
        //cont = []
        CDATABASE.map((contenido, idx) => (
            cont.push(contenido)
        ))
    }

    return (
        <div className={s.container}>
            {
                cont.map((contenido, idx) => (
                    <ContenidoItem
                        key={idx}
                        isSelected={props.contenido === contenido}
                        onClick={props.onItemClick}
                        contenido={contenido}
                    />
                ))
            }
        </div>
    );
};

export default Contenido;