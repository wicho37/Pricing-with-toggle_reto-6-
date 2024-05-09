import style from "./Button.module.css" 
import "./Button.module.css"



const ToggleButton = () => {

  return (
    <div className={style.plan}>
      <span id="yearly">Annually</span>
         <div className={style.boton}>
          <input type="checkbox" name="checkbox" className={style.switch}/>
         </div> 
         {/* <label className={style.switch}>
             <input type="checkbox" id="toggle" />
             <span className="slider"></span>
         </label>*/}
      <span id="monthly">Monthly</span>
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