import {React, useContext} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styled from "styled-components";
import { ProductsContext } from '../context/products.context';
import classes from './product.module.css';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: auto;
  align-items: center;
  background-color: whitesmoke;
  padding-bottom: 50px;
  padding-top: 20px;
`;

const TextOne = styled.b`
  font-size: 30px;
  color: rgb(4, 4, 59);
  text-align: center;
`;
const TextTwo = styled.p`
  color: rgb(4, 4, 34);
  font-size: 15px;
  text-align: center;
  max-width: 1200px;
`;

const FeatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: auto;
  align-items: center;
  background-color: whitesmoke;
  padding-bottom: 50px;
  padding-top: 20px;
  
`;

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

const Testimonial = styled.div`
text-align:center;
`;



function Home(){
  const productsContext = useContext(ProductsContext);
    return(
        <>
        <div>
            <Carousel >
                <div>
                    <img src="assets/sj-banner-1.png" alt="Silver-Jewels"/>
                </div>
                <div>
                    <img src="assets/sj-banner-2.png" alt="Silver-Jewels"/>
                </div>
                <div>
                    <img src="assets/sj-banner-1.png" alt="Silver-Jewels"/>
                </div>
            </Carousel>
        </div>

        <FeatureWrapper>
        <TextOne>FeaturedCollections</TextOne>
        <div >
        

          {productsContext?.products?.slice(0, 4).map((item, index)=>{
                return (
                <Card  key={`product${index}`} >
                <img src={item.images} alt={item.name} />
                <p>{item.name}</p>
                <Price >Rs{item.price}</Price>
              </Card>
          )
          })}
      </div>
        </FeatureWrapper>

        <PageWrapper>
        <TextOne>About US</TextOne>
        <TextTwo>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when 
            an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
            like Aldus PageMaker including versions of Lorem Ipsum</TextTwo>
        </PageWrapper>
        <Testimonial>
          <TextOne>What other say for us</TextOne>
        </Testimonial>
        <PageWrapper>
        <TextOne> Subscribe to our Newsletter </TextOne>
        </PageWrapper>
        </>
    )
}

export default Home;