import React from "react";
import { Carousel } from "antd";
import banner1 from "../assets/banner2-1.jpg";
import banner2 from "../assets/banner2-2.jpg";
import banner3 from "../assets/banner2-3.jpg";
import data from "../data/data_news.json";

import fieldOperation1 from "../assets/realestate.jpg";
import fieldOperation2 from "../assets/FINANCESUPPORT.jpg";
import fieldOperation3 from "../assets/TRAVELEVENTS.jpg";
import doitac from "../assets/doitac.jpg";

import bannerNhan from "../assets/bgnhan2-1.jpg";
import Link from "antd/es/typography/Link";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const contentStyle = {
  color: "#fff",
  textAlign: "center",
};

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function HomePage() {
  console.log(data);

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
          <p className="text-sky-400 uppercase font-bold text-2xl py-4">
            Lĩnh vực hoạt động
          </p>
          <div className="flex flex-wrap justify-center gap-7 mt-3 mb-10">
            <div className="w-1/4 h-128 relative">
              <img
                src={fieldOperation1}
                alt=""
                className="w-full rounded-lg transform hover:scale-105 transition-transform"
              />
              <p className="text-xl uppercase text-white font-bold absolute bottom-0 left-0 bg-opacity-50 w-full text-center">
                Bất động sản
              </p>
            </div>
            <div className="w-1/4 h-128 relative">
              <img
                src={fieldOperation2}
                alt=""
                className="w-full rounded-lg transform hover:scale-105 transition-transform"
              />
              <p className="text-xl uppercase text-white font-bold absolute bottom-0 left-0 bg-opacity-50 w-full text-center">
                Tư vấn tài chính
              </p>
            </div>
            <div className="w-1/4 h-128 relative">
              <img
                src={fieldOperation3}
                alt=""
                className="w-full rounded-lg transform hover:scale-105 transition-transform"
              />
              <p className="text-xl uppercase text-white font-bold absolute bottom-0 left-0 bg-opacity-50 w-full text-center">
                Lữ hành & Sự kiện
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 mb-10 bg-cover bg-center h-100 flex gap-1">
          <div
            className="outstandingprj w-1/2 flex flex-col gap-3 items-center justify-center text-white uppercase"
            style={{ backgroundImage: `url(${bannerNhan})` }}
          >
            <div className="flex">
              <h3 className="text-2xl font-semibold mr-5">Dự án nổi bật</h3>
              <ul className="list-disc pl-5 flex flex-col gap-1">
                <li>
                  <a href="#">Dự án 1</a>
                </li>
                <li>
                  <a href="#">Dự án 2</a>
                </li>
              </ul>
            </div>
            <div className="hover:bg-white transition-colors duration-300 rounded-lg">
              <Link
                to="/"
                className="border p-2 rounded-lg w-40 flex justify-center text-white hover:text-sky-400"
              >
                Tất cả dự án{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div
            className="w-1/2"
            style={{
              backgroundImage: `url(https://e1.pxfuel.com/desktop-wallpaper/412/938/desktop-wallpaper-best-6-management-backgrounds-on-hip-project-manager.jpg)`,
            }}
          ></div>
          {/* https://e1.pxfuel.com/desktop-wallpaper/412/938/desktop-wallpaper-best-6-management-backgrounds-on-hip-project-manager.jpg */}
        </div>

        <div className="md:container md:mx-auto mb-5">
          <h3 className="text-sky-400 uppercase font-bold text-2xl py-4">
            Tin tức
          </h3>
          <Slider {...settings} className="">
            {data.map((item, index) => (
              <>
                <div key={index} className="cursor-pointer">
                  <img src={item.imgurl} alt="" className="" />
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-500">
                    {new Date(item.date).toLocaleDateString("vi-VN")}
                  </p>
                  <p className="">{item.description}</p>
                  <Link to="/" className="text-white hover:text-sky-400">
                    Xem thêm...
                  </Link>
                </div>
              </>
            ))}
          </Slider>
        </div>

        <div className="mt-10 flex">
          <div className="w-1/2">
            <img src={doitac} alt="" />
          </div>
          <div className="w-1/2 bg-custom-blue py-10 px-5 text-xl">
            <h3 className="text-2xl text-white font-semibold uppercase">
              Đối tác
            </h3>
            <div className="grid grid-cols-4 grid-rows-3 gap-4 mt-5">
              <div className="col-span-1 row-span-1">
                <img src={doitac} alt="" />
              </div>
              <div className="col-span-1 row-span-1">
                <img src={doitac} alt="" />
              </div>
              <div className="col-span-1 row-span-1">
                <img src={doitac} alt="" />
              </div>
              <div className="col-span-1 row-span-1">
                <img src={doitac} alt="" />
              </div>
              <div className="col-span-1 row-span-1">
                <img src={doitac} alt="" />
              </div>
              <div className="col-span-1 row-span-1">
                <img src={doitac} alt="" />
              </div>
              <div className="col-span-1 row-span-1">
                <img src={doitac} alt="" />
              </div>
              <div className="col-span-1 row-span-1">
                <img src={doitac} alt="" />
              </div>
              <div className="col-span-1 row-span-1">
                <img src={doitac} alt="" />
              </div>
              <div className="col-span-1 row-span-1">
                <img src={doitac} alt="" />
              </div>
              <div className="col-span-1 row-span-1">
                <img src={doitac} alt="" />
              </div>
              <div className="col-span-1 row-span-1">
                <img src={doitac} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
