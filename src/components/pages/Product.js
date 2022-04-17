// import axios from "axios";
// import React, { Component } from "react";
// import { Card, Row, Col, Container, Button } from "react-bootstrap";
// import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
// import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';

// export default class Product extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     data: [],
  //     productId: null,
  //     quantity: 0,
  //     productPrice: 0,
  //     count: 0
  //   };
//     this.handleCard = this.handleCard.bind(this);
//     this.incrementCount = this.incrementCount.bind(this);
//     this.decrementCount = this.decrementCount.bind(this);
//     this.updateProductId = this.updateProductId.bind(this);
//   }
//   incrementCount() {
//     this.setState({ count: this.state.count + 1 })
//   }
//   decrementCount() {

//     if (this.state.count < 0) {
//       this.setState({ count: 0 });
//     } else {
//       this.setState({ count: this.state.count - 1 })
//     }

//   }

//   componentDidMount() {
//     var axiosinstane = axios.get("http://localhost:9003/products/allproducts");
//     axiosinstane.then((res) => {
//       this.setState({ data: res.data });
//       console.log(this.state.data);
//     });
//   }
//   handleCard(product, productP) {
//     var cart = {
//       cartId: 0,
//       productId: product,
//       customerId: sessionStorage.getItem("userId"),
//       quantity: this.state.count,
//       productAmount: this.state.count * productP,
//       isSold: false
//     }
//     let headers = {
//       'Content-Type': 'application/json',
//       'Access-Control-Allow-Origin': '*'
//     }
//     axios.post("http://localhost:9004/cart/addToCart", cart, headers)
//       .then(response => {
//         alert("added to Cart")
//       })
//       .catch(error => {
//         alert("not to Cart :", error)
//       });
//     console.log(cart);
//   }

//   updateProductId(product) {


//     console.log(this.state.productId)
//   }

//   render() {
//     return (
//       <div
//         style={{
//           border: "1px solid",
//           padding: "10px",
//           "box-shadow": "1px 1px 3px grey",
//           margin: "10px",
//           alignItems: "center",
//         }}
//       >
//         <Container
//           margin={10}
//           style={{
//             alignItems: "center",
//           }}
//         >
//           <Row>
//             {this.state.data.map((product, k) => (
//               <Col key={k} xs={12} md={4}>
//                 <Card
//                   className="text-center hover-overlay"
//                   style={{
//                     width: "18rem",
//                     color: "black",
//                     border: "1px solid",
//                     padding: "10px",

//                     margin: "10px",
//                   }}
//                 >
//                   <Card.Img src={`https://source.unsplash.com/150x75/?${product.productName}`} />

//                   <Card.Body>
//                     <Card.Title>{product.productName}</Card.Title>
//                     <Card.Text>service price: {product.productPrice}</Card.Text>
//                   </Card.Body>
//                   <Card.Footer className="text-muted">
//                     <button onClick={this.incrementCount}>+</button>
//                     {this.state.count}
//                     <button onClick={this.decrementCount}>-</button>

//                     <Button variant="secondary" onClick={() => {
//                       console.log(product.productId);

//                       this.handleCard(product.productId, product.productPrice);

//                     }}>Add to Cart</Button>

//                   </Card.Footer>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </Container>
//       </div>
//     );
//   }
// }


import React, { Component } from "react";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import {  SearchOutlined, ShoppingCartOutlined , FavoriteBorderOutlined} from '@material-ui/icons'
import axios from "axios";

import styled from 'styled-components'


const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
const Title = styled.div``

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: black;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;


export default class Product extends Component  {
  constructor() {
    super();
    this.state = {
      data: [],
      productId: null,
      quantity: 0,
      productPrice: 0,
      count: 1
    };
    this.handleCard = this.handleCard.bind(this);
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
    // this.updateProductId = this.updateProductId.bind(this);
  }
  incrementCount() {
    this.setState({ count: this.state.count + 1 })
  }
  decrementCount() {

    if (this.state.count <= 1) {
      this.setState({ count: 1 });
    } else {
      this.setState({ count: this.state.count - 1 })
    }

  }

  handleCard(product, productP) {
    if(sessionStorage.getItem("userId") == null){
      alert("please Login!!");
    }else{
      var cart = {
        cartId: 0,
        productId: product,
        customerId: sessionStorage.getItem("userId"),
        quantity: this.state.count,
        productAmount: this.state.count * productP,
        isSold: false
      }
      let headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
      axios.post("http://localhost:9004/cart/addToCart", cart, headers)
        .then(response => {
          alert("added to Cart")
        })
        .catch(error => {
          alert("not to Cart :", error)
        });
      console.log(cart);
    }
    
  }
  render(){
    const { item } = this.props;
  return (
    <Container>
      <Circle />
      <Image src = {`https://source.unsplash.com/700x900?${item.productName}`}/>
      
      <Info>
        
      {item.productName}{` ₹`}
      {item.productPrice}
        
        <Icon>
          <ShoppingCartOutlined onClick = {()=>{
            this.handleCard(item.productId, item.productPrice);
          }
          }/>
        </Icon>
        <Icon>
          <HighlightOffIcon onClick = {this.decrementCount}/>
        </Icon>
        {this.state.count}
        <Icon>
          <LibraryAddIcon onClick = {this.incrementCount}/>
          

        </Icon>
        <br />
        
        
        
      </Info>
      
    </Container>
    
  )
}
}




