import { useState } from 'react'
import s from "./style.module.css"

const DetalleItem = (props) => {

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

    return (
        <div
            className={s.container}
            onMouseEnter={activate}
            onMouseLeave={desactivate}
            style={{ backgroundColor: getBackgroundColor() }}
        >
            {props.detalle}
        </div>
    );
};

export default DetalleItem;