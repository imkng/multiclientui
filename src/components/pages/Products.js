import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Product from "./Product";



const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchAllProducts() {
      const URL = `http://localhost:9003/products/allproducts`;
      try {
        const res = await axios.get(URL);
        console.log(res.data);
        setData(res.data);
        // console.log(data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllProducts();
  }, []);
  return (
    <Container>
      {data.map((d) => (
          
        // <Product item = {d} key = {d.productId}/>
        <>
            <Product item = {d} key = {d.productId}/>
            
        </>
        
        
      ))}
    </Container>
  );
};
export default Products;
