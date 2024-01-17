import React from "react";
import { Carousel } from "antd";
import banner1 from "../assets/banner2-1.jpg";
import banner2 from "../assets/banner2-2.jpg";
import banner3 from "../assets/banner2-3.jpg";

import fieldOperation1 from "../assets/realestate.jpg";
import fieldOperation2 from "../assets/FINANCESUPPORT.jpg";
import fieldOperation3 from "../assets/TRAVELEVENTS.jpg";

const contentStyle = {
  color: "#fff",
  textAlign: "center",
};

function HomePage() {
  return (
    <>
      <div>
        <div className="flex flex-col mx-auto">
          <Carousel autoplay>
            <div>
              <img
                src={banner1}
                alt=""
                style={contentStyle}
                className="w-full h-128 object-cover"
              />
            </div>
            <div>
              <img
                src={banner2}
                alt=""
                style={contentStyle}
                className="w-full h-128 object-cover"
              />
            </div>
            <div>
              <img
                src={banner3}
                alt=""
                style={contentStyle}
                className="w-full h-128 object-cover"
              />
            </div>
          </Carousel>
        </div>
        <div className="text-center md:container md:mx-auto mt-5">
          <p className="text-sky-400 uppercase font-bold text-xl py-4">
            Lĩnh vực hoạt động
          </p>
          <div className="flex flex-wrap justify-center gap-7 mt-3 mb-5">
            <div className="w-1/4 relative">
              <img
                src={fieldOperation1}
                alt=""
                className="w-full rounded-lg transform hover:scale-105 transition-transform"
              />
              <p className="text-xl uppercase text-white font-bold py-2 absolute bottom-0 left-0 bg-opacity-50 w-full text-center">
                Bất động sản
              </p>
            </div>
            <div className="w-1/4 relative">
              <img
                src={fieldOperation2}
                alt=""
                className="w-full rounded-lg transform hover:scale-105 transition-transform"
              />
              <p className="text-xl uppercase text-white font-bold py-2 absolute bottom-0 left-0 bg-opacity-50 w-full text-center">
                Tư vấn tài chính
              </p>
            </div>
            <div className="w-1/4 relative">
              <img
                src={fieldOperation3}
                alt=""
                className="w-full rounded-lg transform hover:scale-105 transition-transform"
              />
              <p className="text-xl uppercase text-white font-bold py-2 absolute bottom-0 left-0 bg-opacity-50 w-full text-center">
                Lữ hành & Sự kiện
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
