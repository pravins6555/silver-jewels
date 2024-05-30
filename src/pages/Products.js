import React , { createContext, useContext, useEffect } from "react";

import styled from "styled-components";



import { ProductsContext } from '../context/products.context';


const Card = styled.div`
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    margin: 10px;
    padding: 10px;
    text-align: center;
    font-family: arial;
    display: inline-block;
`;

const Price = styled.h3`
color: grey;
    font-size: 22px;
`;

const Button = styled.button`
border: none;
outline: 0;
padding: 12px;
color: white;
background-color: #08083f;
text-align: center;
cursor: pointer;
width: 100%;
font-size: 18px;
`;



function Products(){
  const productsContext = useContext(ProductsContext);


  
    return(
      <div style={{marginLeft:'72px'}}>
        

          {productsContext?.products?.map((item, index)=>{
                return (
                <Card  key={`product${index}`} >
                <img src={item.images} alt={item.name} />
                <p>{item.name}</p>
                <Price>Rs{item.price}</Price>
                
              
              <Button>Add to Cart</Button>
              </Card>
          )
          })}
      </div>

    )
}

export default Products;