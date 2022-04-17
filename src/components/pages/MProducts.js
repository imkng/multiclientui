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

const MProducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let headers = {

        'Content-Type': 'application/json',

        'Access-Control-Allow-Origin': '*',

        // 'Authorization': `Bearer ${sessionStorage.getItem("token")}`

      }
    async function fetchAllProducts() {
        let id = sessionStorage.getItem("userId");
      const URL = `http://localhost:9003/allproductsbymerchantid/${id}`;
      try {
        const res = await axios.get(URL, headers);
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
      {/* {data.map((d) => (
          
        // <Product item = {d} key = {d.productId}/>
        <>
            <Product item = {d} key = {d.productId}/>
            
        </>
        
        
      ))} */}
      Merchants Products
    </Container>
  );
};
export default MProducts;
