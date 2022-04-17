// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'

// const slideImages = [
//   'assets/images/slide11.jpeg',
//   'assets/images/slide2.jpg',
//   'assets/images/slide3.jpg'
// ];

// const Slideshow = () => {
//   return (
//     <div style={{
//       "border": "1px solid",
//       "padding": "10px",
//       "box-shadow": "1px 1px 3px grey"
//     }}>
//       <Slide easing="ease">
//         <div className="each-slide">
//           <div style={{ 'backgroundImage': `url(${slideImages[0]})`, 'color': 'black' }}>
//           </div>
//         </div>
//         <div className="each-slide">
//           <div style={{ 'backgroundImage': `url(${slideImages[1]})`, 'height': '250px' }}>
//           </div>
//         </div>
//         <div className="each-slide">
//           <div style={{ 'backgroundImage': `url(${slideImages[2]})`, 'color': 'black' }}>
//           </div>
//         </div>
//       </Slide>
//     </div>
//   )
// };

// export default Slideshow;

import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "./data";
import { mobile } from "../components/responsive"; 

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  color: black
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 100%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`

  font-size: 70px;
`;

const Desc = styled.p`

  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button onClick={()=>{
                alert("On Progress!!")
              }}>SHOW MORE</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;