
import styled from 'styled-components';
import PhotoAlbum from "react-photo-album";
import img1 from "../../assets/img/add_udaan_1.jpg";
import img2 from "../../assets/img/add_udaan_2.jpg";
import img3 from "../../assets/img/add_udaan_3.jpg";
import img4 from "../../assets/img/add_udaan_4.jpg";
import img5 from "../../assets/img/add_udaan_5.jpg";
import img6 from "../../assets/img/add_udaan_6.jpg";
import img7 from "../../assets/img/add_udaan_7.jpg";
import img8 from "../../assets/img/add_udaan_8.jpg";
import img9 from "../../assets/img/add_udaan_9.jpg";
import img10 from "../../assets/img/add_udaan_10.jpg";
import carousel1 from "../../assets/img/Gallery/Img1.JPG";
import carousel2 from "../../assets/img/Gallery/Img2.JPG";
import carousel3 from "../../assets/img/Gallery/Img3.JPG";
import carousel4 from "../../assets/img/Gallery/Img4.JPG";
import carousel5 from "../../assets/img/Gallery/Img5.JPG";
import carousel6 from "../../assets/img/Gallery/Img6.JPG";
import carousel7 from "../../assets/img/Gallery/Img7.JPG";
import carousel8 from "../../assets/img/Gallery/Img8.JPG";
import carousel9 from "../../assets/img/Gallery/Img9.JPG";
import carousel10 from "../../assets/img/Gallery/Img10.JPG";
import { Carousel } from 'react-carousel-minimal';
import React from "react";



const photos = [
    { src: img1, width: 800, height: 900, },
    { src: img2, width: 2500, height: 2000 },
    { src: img3, width: 1600, height: 2000 },
    { src: img4, width: 2000, height: 2500 },
    { src: img6, width: 1000, height: 900 },
    { src: img7, width: 900, height: 900 },
    { src: img8, width: 1600, height: 1900 },
    { src: img9, width: 600, height: 900 },
    { src: img10, width: 600, height: 700 },
    { src: img1, width: 1600, height: 900 },
    { src: img5, width: 1600, height: 2200 },


];



export default function Gallery() {

    const data = [
      {
        image: carousel3,
        caption: ""
      },
      {
        image: carousel10,
        caption: ""
      },
      {
        image: carousel7,
        caption: ""
      },
        {
          image: carousel1,
          caption: `<div>
                    </div>`
        },
        {
          image: carousel2,
          caption: ""
        },
        {
          image: carousel4,
          caption: ""
        },
        {
          image: carousel6,
          caption: ""
        },
        {
          image: carousel8,
          caption: ""
        },
        {
          image: carousel9,
          caption: ""
        },
        {
          image: carousel5,
          caption: ""
        },
      ];
    
      const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }
    
  return (
    <Wrapper>
      <div style={{height:"8vh"}} id="photo"></div>
        <div style={{ textAlign: "center" }}>
        <h1>Let's have a Look</h1>
        <div>
          <Carousel
            data={data}
            time={3000}
            width="1050px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <PhotoAlbum layout="masonry" photos={photos} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 8vw;
  width: 100%;
  min-height: 100vh;
`;