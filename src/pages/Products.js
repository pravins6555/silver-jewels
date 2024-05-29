import React , { createContext, useContext, useEffect } from "react";


import { ProductsContext } from '../context/products.context';

function Products(){
  const productsContext = useContext(ProductsContext);


  
    return(
      <div>
        Products

          {productsContext?.products?.map((item, index)=>{
                return <div key={`product${index}`}>
                <p>Name : {item.name}</p>
                <p>Price : {item.price}</p>
              <p>Description : {item.description}</p>
              </div>
          })}
      </div>

    )
}

export default Products;