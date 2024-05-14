import style from "./Button.module.css" 
import "./Button.module.css"



const ToggleButton = () => {
    
  const manejoToggle = (e:any) => {
    console.log("manejoToggle", e.target.checked)
  }
  return (
    <div className={style.plan}>
      <span id="yearly">Annually</span>
         <div className={style.boton}>
         
          <input onChange={(e)=>manejoToggle(e)} type="checkbox" name="checkbox" className={style.switch}/>
         </div> 
         
      <span id="monthly">Monthly</span>
    </div>

  );
}

export default ToggleButton;


















{/* <label className={style.switch}>
             <input type="checkbox" id="toggle" />
             <span className="slider"></span>
         </label>*/}
/*  import { useState } from "react"
const [isActive, setIsActive] = useState(false);
const toggleButton = () => {
    setIsActive(!isActive);
onClick={toggleButton} style={{ backgroundColor: isActive ? 'green' : 'red' }} 
  {isActive ? 'Activado' : 'Desactivado'} */