import Tittle from "./components/header/Header"
import ToggleButton from "./components/boton/Button"
import CardList from "./components/cartList/CardList"
import style from "./App.module.css"



function App() {


  return (
    <div className={style.content}>
      <Tittle /> 
      <ToggleButton />
      <CardList/>
    </div>
  )
}

export default App
