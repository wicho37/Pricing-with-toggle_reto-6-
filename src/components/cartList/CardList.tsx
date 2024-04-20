import { useEffect, useState } from "react";
import style from "./CardList.module.css"


    const Card_Data = [
        {
          id: 1,
          tittle: 'Basic',
          price: '$19.99',
          description: "500 GB Storage",
          description2: "2 User Allowed",
          description3: "Send up to 3 GB"
          
          
        },
        {
          id: 2,
          tittle: 'Profecional',
          price: '$24.99' ,
          description: '1 TB Storage',
          description2: "5 User Allowed",
          description3: "Send up to 10 GB"
         
        },
        {
            id: 3,
            tittle: 'Master',
            price: '$39.99',
            description: '2TB Storage',
            description2: "10 User Allowed",
            description3: "Send up to 20 GB"
            
          }
      ]
      

      const pedirDatos = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(Card_Data)
          }, 2000);
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
    
    return (
      <div className={style.row}>
         {
          productos.map((prod) => (

          <div className={style.card}>
            <h2>{prod.tittle}</h2>
            <strong>{prod.price}</strong>
            <p>{prod.description}</p> 
            <p>{prod.description2}</p>
            <p>{prod.description3}</p>
            <button className="btn btn-primary">LEARM MORE</button>

          </div> )
          )
         }
      </div>
    )
 
}


export default CardList
    
/*{ <div className="pricing-container">

<div className="pricing">
    <div className="price monthly">
        <h2>$10</h2>
        <span>/month</span>
    </div>
    <div className="price annually">
        <h2>$100</h2>
        <span>/year</span>
    </div>
</div>
</div> }*/