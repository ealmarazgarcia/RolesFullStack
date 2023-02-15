import { useState } from 'react'
import s from "./style.module.css"

const ContenidoItem = (props) => {

    const [isHovered, setIsHover] = useState(false);

    const activate = () => {
        setIsHover(true);
    }

    const desactivate = () => {
        setIsHover(false);
    }

    const getBackgroundColor = () => {
        if(isHovered){
            return "#a5e9ff"
        } else {
            if (props.isSelected) {
                return "#26baea"
            } else {
                return "#eff0ef"
            }
        }
    }

    const onItemClick = () => {
        props.onClick(props.contenido);
    }

    return (
        <div
            className={s.container}
            onClick={onItemClick}
            onMouseEnter={activate}
            onMouseLeave={desactivate}
            style={{ backgroundColor: getBackgroundColor() }}
        >
            Content: {props.contenido}
        </div>
    );
};

export default ContenidoItem;