import React from "react";
import { Carousel } from "antd";
import banner1 from "../assets/banner2-1.jpg";
import banner2 from "../assets/banner2-2.jpg";
import banner3 from "../assets/banner2-3.jpg";

import fieldOperation1 from "../assets/realestate.jpg";
import fieldOperation2 from "../assets/FINANCESUPPORT.jpg";
import fieldOperation3 from "../assets/TRAVELEVENTS.jpg";

import bannerNhan from "../assets/bgnhan2-1.jpg";
import Link from "antd/es/typography/Link";

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

        <div className="md:container md:mx-auto">
          <h3 className="text-sky-500 uppercase text-xl">Tin tức</h3>
        </div>
      </div>
    </>
  );
}

export default HomePage;
