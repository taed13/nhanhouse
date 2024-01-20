import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CardNews = ({ data }) => {
  const chunkedData = [];
  for (let i = 0; i < data.length; i += 4) {
    chunkedData.push(data.slice(i, i + 4));
  }

  return (
    <Carousel showThumbs={false}>
      {chunkedData.map((chunk, index) => (
        <div key={index}>
          {chunk.map((item) => (
            <div key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.date}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      ))}
    </Carousel>
  );
};

export default CardNews;
