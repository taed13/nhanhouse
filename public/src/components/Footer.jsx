import React from "react";
// import bgImage from "./src/assets/bgnhan2-1.jpg";
import bgImage from "../assets/bgnhan2-1.jpg";
// import logoFooter from "../assets/logoft2.svg";

export default function Footer() {
  return (
    <div
      className="footer w-full h-full bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="content text-white md:container md:mx-auto px-4 gap-2 flex justify-between">
        <p className="w-5/12 py-3 flex flex-col gap-2">
          <h3 className="text-xl font-bold">CÔNG TY TNHH NHÂN VN</h3>
          <p>
            <strong>Địa chỉ</strong>: 54 Nước Mặn 7, Phường Khuê Mỹ, Quận Ngũ
            Hành Sơn, Tp Đà Nẵng.
          </p>
          <p>
            <strong>Email</strong>: nhanhouse2017@gmail.com
          </p>
          <p>
            <strong>Điện thoại</strong>: 0916548678
          </p>
        </p>
        <p className="w-1/12 py-3 flex flex-col gap-2">
          <h3 className="text-lg font-bold">
            <span>Thông tin</span>
          </h3>
          <ul>
            <li>
              <a href="/gioi-thieu/">Về chúng tôi</a>
            </li>
            <li>
              <a href="/lien-he/">Liên hệ</a>
            </li>
          </ul>
        </p>
        <p className="w-2/12 py-3 flex flex-col gap-2">
          <h3 className="text-lg font-bold">
            <span>Dịch vụ</span>
          </h3>
          <ul>
            <li>
              <a href="/bat-dong-san/">Bất động sản</a>
            </li>
            <li>
              <a href="/tu-van-tai-chinh/">Tư vấn tài chính</a>
            </li>
            <li>
              <a href="/lu-hanh-su-kien/">Lữ hành &amp; Sự kiện</a>
            </li>
          </ul>
        </p>
        <p className="w-2/12 py-3 flex flex-col gap-2">
          <h3 className="text-lg font-bold">
            <span>Dự án</span>
          </h3>
          <ul>
            {" "}
            <li class="list-project">
              <a
                title="Dự án căn hộ xã hội Đà Nẵng"
                href="https://nhanvn.com/du-an-can-ho-xa-hoi-da-nang/"
              >
                Dự án căn hộ xã hội Đà Nẵng
              </a>
            </li>
            <li class="list-project">
              <a
                title="Khu dân cư đô thị Hà Quảng"
                href="https://nhanvn.com/khu-dan-cu-do-thi-ha-quang/"
              >
                Khu dân cư đô thị Hà Quảng
              </a>
            </li>
          </ul>
        </p>
        <p className="w-2/12 py-3 flex flex-col gap-2">
          <h3 className="text-lg font-bold">
            <span>Liên kết</span>
          </h3>
          <ul>
            <li>
              <a href="https://kovimarket.com/" target="_blank" rel="noopener">
                Kovi Market
              </a>
            </li>
            <li>
              <a href="https://ustvina.vn/" target="_blank" rel="noopener">
                UST Vina
              </a>
            </li>
            <li>
              <a
                href="https://noithatthuanbinh.vn/"
                target="_blank"
                rel="noopener"
              >
                Thuận Bình Decor
              </a>
            </li>
            <li>
              <a href="http://stdpharma.vn/" target="_blank" rel="noopener">
                STD Pharma
              </a>
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}
