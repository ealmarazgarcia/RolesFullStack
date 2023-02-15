import MenuRolItem from "../MenuRolItem/MenuRolItem";
import { ROLES } from "./constantesRoles";
import s from "./style.module.css";

const MenuRoles = (props) => {
    return (
        <div className={s.container}>
            {ROLES.map((roles, idx) => (
                <MenuRolItem
                    key={idx}
                    isSelected={props.roles === roles}
                    onClick={props.onItemClick}
                    roles={roles}
                />
            ))}

        </div>
    );
};

export default MenuRoles;