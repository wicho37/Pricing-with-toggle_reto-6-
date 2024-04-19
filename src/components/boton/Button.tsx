import style from "./Button.module.css"



const ToggleButton = () => {

  return (
    <div className={style.plan}>
      <span >Annually</span>
         <div className={style.boton}>
          <input type="checkbox" name="checkbox" className={style.switch}/>
         </div>
      <span>Monthly</span>
    </div>

  );
}

export default ToggleButton;


/*  import { useState } from "react"
const [isActive, setIsActive] = useState(false);
const toggleButton = () => {
    setIsActive(!isActive);
onClick={toggleButton} style={{ backgroundColor: isActive ? 'green' : 'red' }} 
  {isActive ? 'Activado' : 'Desactivado'} */