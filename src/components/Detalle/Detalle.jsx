import DetalleItem from "../DetalleItem/DetalleItem";
import { DBASICS } from "./constantesBasics";
import { DFRAMEWORKS } from "./constantesFrameworks";
import { DGRAPH } from "./constantesGraph";
import { DNOSQL } from "./constantesNoSQL";
import { DRDBMS } from "./constantesRDBMS";
import { DSTYLES } from "./constantesStyles";
import { DTECHNOLOGY } from "./constantesTechnology";
import s from "./style.module.css";

const Detalle = (props) => {
    const det = [];

    if (props.contenido == "Basics") {
        DBASICS.map((detalle, idx) => (
            det.push(detalle)
        ))
    }

    if (props.contenido == "Frameworks") {
        DFRAMEWORKS.map((detalle, idx) => (
            det.push(detalle)
        ))
    }

    if (props.contenido == "Styles") {
        DSTYLES.map((detalle, idx) => (
            det.push(detalle)
        ))
    }

    if (props.contenido == "Technology") {
        DTECHNOLOGY.map((detalle, idx) => (
            det.push(detalle)
        ))
    }

    if (props.contenido == "RDBMS") {
        DRDBMS.map((detalle, idx) => (
            det.push(detalle)
        ))
    }

    if (props.contenido == "NoSQL") {
        DNOSQL.map((detalle, idx) => (
            det.push(detalle)
        ))
    }

    if (props.contenido == "Graph") {
        DGRAPH.map((detalle, idx) => (
            det.push(detalle)
        ))
    }

    return (
        <div className={s.container}>
            {
                det.map((detalle, idx) => (
                    <DetalleItem
                        key={idx}
                        detalle={detalle}
                    />
                ))
            }
        </div>

    );
};

export default Detalle;