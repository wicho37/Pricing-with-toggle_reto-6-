import Tittle from "./components/header/Header"
import ToggleButton from "./components/boton/Button"
import CardList from "./components/cartList/CardList"
import style from "./App.module.css"
import { useState } from "react"


function App() {
    const [dataToggle, setDataToggle] = useState(false)

    return (
      <div className={style.content}>
        <Tittle /> 
        <ToggleButton  setDataToggle={setDataToggle}/>
        <CardList dataToggle={dataToggle}t/>
      </div>
  )
}

export default App
