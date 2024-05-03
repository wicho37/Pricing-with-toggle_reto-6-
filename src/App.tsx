import Tittle from "./components/header/Header"
import ToggleButton from "./components/boton/Button"
import CardList from "./components/cartList/CardList"
import style from "./App.module.css"
import Card from "./components/card/Card"



function App() {


  return (
    <div className={style.content}>
      <Tittle /> 
      <ToggleButton />
      <CardList/>
{/*       <Card />
 */}    </div>
  )
}

export default App
