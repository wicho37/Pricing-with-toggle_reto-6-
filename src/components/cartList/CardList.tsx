import { useState } from "react";

    const Card_Data = [
        {
          id: 1,
          title: 'Product 1',
          description: 'Description for Product 1',
          price: '$10',
          
        },
        {
          id: 2,
          title: 'Product 2',
          description: 'Description for Product 2',
          price: '$20',
         
        },
        {
            id: 3,
            title: 'Product 3',
            description: 'Description for Product 3',
            price: '$10',
            
          }
      ]
      

      const pedirDatos = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(Card_Data)
          }, 2000);
        })
      }


const ItemList = () => {
   const [productos, setProductos] = useState([])
   console.log(productos)

    pedirDatos(
        .then((res) => {
          setProductos(res)
        })
        .catch((error) => {
          console.log(error)
        })
    
    return (
      <div className="catalogo_contenedor">
         <h1>hola</h1>
      </div>
    )
  )
}


export default ItemList
    
<div className="pricing-container">

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
</div>