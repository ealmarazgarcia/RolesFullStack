import { useState } from 'react';
import MenuRoles from "./components/MenuRoles/MenuRoles";
import Contenido from "./components/Contenido/Contenido";
import Detalle from "./components/Detalle/Detalle";
import s from "./style.module.css";

function App() {
  const [currentRoles, setCurrentRoles] = useState("");
  const [currentContenido, setCurrentContenido] = useState("");

  const onMenuRolItemClick = (rol) => {
    setCurrentRoles(rol);
  }

  const onContenidoItemClick = (contenido) => {
    setCurrentContenido(contenido);
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Full Stack Developer</h1>
      <div className={s.workspace}>
        <MenuRoles
          roles={currentRoles}
          onItemClick={onMenuRolItemClick}
        />
        <Contenido
          roles={currentRoles}
          contenido={currentContenido}
          onItemClick={onContenidoItemClick}
        />
        <Detalle
          contenido={currentContenido}
        />
      </div>
    </div>
  );
}

export default App;