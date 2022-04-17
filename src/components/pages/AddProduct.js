import axios from 'axios';
import React, { Component } from 'react';
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

class AddProduct extends Component {
    constructor() {
        super()
        this.state = {
            productName: '',
            productPrice: 0
        }
    }
    render(){
        return (
            <Container>
              <Wrapper>
                <Title>CREATE A PRODUCT</Title>
                <Form>
                  <Input placeholder="Product name" onChange={(e)=>{
                      this.setState({productName: e.target.value})
                  }}/>
                  <Input placeholder="Product Price" onChange={(e)=>{
                      this.setState({productPrice: e.target.value})
                  }}/>
                  {/* <Input placeholder="username" />
                  <Input placeholder="email" />
                  <Input placeholder="password" />
                  <Input placeholder="confirm password" /> */}
                  <Agreement>
                    By creating an Product, I consent to the processing of my personal
                    data in accordance with the <a href='#' onClick={()=>{
                        alert("You have accepted our terms!!")
                    }}>PRIVACY POLICY</a>
                  </Agreement>
                  <Button onClick={(e)=>{
                      e.preventDefault();
                      var product = {
                          productId: 0,
                          productName: this.state.productName,
                          productPrice: this.state.productPrice,
                          merchantId: sessionStorage.getItem("userId")
                      }
                      console.log(product)
                      var options = {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                    axios.post("http://localhost:9003/products/add", product, options).then((res) => {
                        console.log(res.data)
                        alert("Product Added Successfully")
                        window.location.reload(true);
                        this.context.router.push('/home')
                    }).catch((err) => {
                        alert("Please Try Again")
                        this.context.router.push('/home')
                    })
                  }}>CREATE</Button>
                </Form>
              </Wrapper>
            </Container>
          );
    }
  
};

export default AddProduct;