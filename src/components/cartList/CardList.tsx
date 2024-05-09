import { useEffect, useState } from "react";
import style from "./CardList.module.css"



    const Card_Data = [
        {
          id: 1,
          tittle: 'Basic',
          price: '$19.99',
          priceYear: "$199.99",
          description: "500 GB Storage",
          description2: "2 User Allowed",
          description3: "Send up to 3 GB"
          
          
        },
        {
          id: 2,
          tittle: 'Profecional',
          price: '$24.99' ,
          priceYear: '$240.99' ,
          description: '1 TB Storage',
          description2: "5 User Allowed",
          description3: "Send up to 10 GB"
         
        },
        {
            id: 3,
            tittle: 'Master',
            price: '$39.99',
            priceYear:"$399.99",
            description: '2TB Storage',
            description2: "10 User Allowed",
            description3: "Send up to 20 GB"
            
          }
      ]
      

      const pedirDatos = () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(Card_Data)
          }, 1000);
        })
      }


const CardList = () => {
   const [productos, setProductos] = useState([])
   console.log(productos)

   

   useEffect(() => {
    pedirDatos()
           .then((res) => {
             setProductos(res)
           })
           .catch((error) => {
             console.log(error)
           })
        }, [])
    

        const checkBox = document.querySelector(".switch") ;
        const Montlhy=  document.querySelector("#monthly") ;
        const Annually =  document.querySelector("#yearly") ;

        checkBox.addEventListener("change", function(){

          if(checkBox.checked){
          
          }else{
            
          }
        })


    
    return (
      <div className={style.row}>
         {
          productos.map((prod) => (

          <div className={style.card}>
            <h2>{prod.tittle}</h2>
            
            <div>
              <p className={style.price}>{prod.price}</p>
              <p>{prod.description}</p> 
              <p>{prod.description2}</p>
              <p>{prod.description3}</p>
            </div>
            
            <button className={style.button}>LEARM MORE</button>

          </div> )
          )
         }
      </div>
    )
 
}


export default CardList