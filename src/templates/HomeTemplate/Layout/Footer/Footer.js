import React from "react";

export default function Footer(props) {
  return (
    <div className="p-5" style={{ backgroundColor: "#222" }}>
      <div className="container xl:max-w-7xl mx-auto ">
        <div className="lg:grid grid-cols-3 hidden">
          <div>
            <p className="text-white text-xs">Tix</p>
            <div className="grid grid-cols-2 gap-2">
              <p className="text-gray-400 text-xs font-semibold hover:text-white transition duration-300 cursor-pointer">
                FAQ
              </p>
              <p className="text-gray-400 text-xs font-semibold hover:text-white transition duration-300 cursor-pointer">
                Brand Guidelines
              </p>
              <p className="text-gray-400 text-xs font-semibold hover:text-white transition duration-300 cursor-pointer">
                Thỏa thuận sử dụng
              </p>
              <p className="text-gray-400 text-xs font-semibold hover:text-white transition duration-300 cursor-pointer">
                Chính sách bảo mật
              </p>
            </div>
          </div>
          <div>
            <p className="text-white text-xs">Đối tác</p>
            <div className="grid grid-cols-5 gap-y-4 gap-x-0 text-center">
              <a
                href="https://www.cgv.vn/"
                target="_blank"
                className="transition duration-200 hover:opacity-80"
                rel="noreferrer"
              >
                <img
                  src="./images/iconPartner/cgv.png"
                  className="w-8 bg-white rounded-full"
                  alt="logo-partner"
                />
              </a>
              <a
                href="http://bhdstar.vn/"
                target="_blank"
                className="transition duration-200 hover:opacity-80"
                rel="noreferrer"
              >
                <img
                  src="./images/iconPartner/bhd.png"
                  className="w-8 rounded-full"
                  alt="logo-partner"
                />
              </a>
              <a
                href="http://galaxycine.vn/"
                target="_blank"
                className="transition duration-200 hover:opacity-80"
                rel="noreferrer"
              >
                <img
                  src="./images/iconPartner/galaxycine.png"
                  className="w-8 rounded-full"
                  alt="logo-partner"
                />
              </a>
              <a
                href="http://cinestar.com.vn/"
                target="_blank"
                className="transition duration-200 hover:opacity-80"
                rel="noreferrer"
              >
                <img
                  src="./images/iconPartner/cinestar.png"
                  className="w-8 rounded-full"
                  alt="logo-partner"
                />
              </a>
              <a
                href="http://lottecinemavn.com/"
                target="_blank"
                className="transition duration-200 hover:opacity-80"
                rel="noreferrer"
              >
                <img
                  src="./images/iconPartner/lotte.png"
                  className="w-8 rounded-full"
                  alt="logo-partner"
                />
              </a>
              <a
                href="https://www.megagscinemas.vn/"
                target="_blank"
                className="transition duration-200 hover:opacity-80"
                rel="noreferrer"
              >
                <img
                  src="./images/iconPartner/megags.png"
                  className="w-8 rounded-full"
                  alt="logo-partner"
                />
              </a>
              <a
                href="https://www.betacineplex.vn/"
                target="_blank"
                className="transition duration-200 hover:opacity-80"
                rel="noreferrer"
              >
                <img
                  src="./images/iconPartner/bt.jpg"
                  className="w-8 rounded-full"
                  alt="logo-partner"
                />
              </a>
              <a
                href="http://ddcinema.vn/"
                target="_blank"
                className="transition duration-200 hover:opacity-80"
                rel="noreferrer"
              >
                <img
                  src="./images/iconPartner/dongdacinema.png"
                  className="w-8 rounded-full"
                  alt="logo-partner"
                />
              </a>
              <a
                href="https://touchcinema.com/"
                target="_blank"
                className="transition duration-200 hover:opacity-80"
                rel="noreferrer"
              >
                <img
                  src="./images/iconPartner/TOUCH.png"
                  className="w-8 rounded-full"
                  alt="logo-partner"
                />
              </a>
              <a
                href="https://cinemaxvn.com/"
                target="_blank"
                className="transition duration-200 hover:opacity-80"
                rel="noreferrer"
              >
                <img
                  src="./images/iconPartner/cnx.jpg"
                  className="w-8 rounded-full"
                  alt="logo-partner"
                />
              </a>
              <a
                href="http://starlight.vn/"
                target="_blank"
                className="transition duration-200 hover:opacity-80"
                rel="noreferrer"
              >
                <img
                  src="./images/iconPartner/STARLIGHT.png"
                  className="w-8 rounded-full"
                  alt="logo-partner"
                />
              </a>
              <a
                href="https://www.dcine.vn/"
                target="_blank"
                className="transition duration-200 hover:opacity-80"
                rel="noreferrer"
              >
                <img
                  src="./images/iconPartner/dcine.png"
                  className="w-8 rounded-full"
                  alt="logo-partner"
                />
              </a>
              <a
                href="https://zalopay.vn/"
                target="_blank"
                className="transition duration-200 hover:opacity-80"
                rel="noreferrer"
              >
                <img
                  src="./images/iconPartner/zalopay_icon.png"
                  className="w-8 rounded-full"
                  alt="logo-partner"
                />
              </a>
              <a
                href="https://www.payoo.vn/"
                target="_blank"
                className="transition duration-200 hover:opacity-80"
                rel="noreferrer"
              >
                <img
                  src="./images/iconPartner/payoo.jpg"
                  className="w-8 rounded-full"
                  alt="logo-partner"
                />
              </a>
              <a
                href="https://www.vietcombank.com.vn/"
                target="_blank"
                className="transition duration-200 hover:opacity-80"
                rel="noreferrer"
              >
                <img
                  src="./images/iconPartner/VCB.png"
                  className="w-8 rounded-full"
                  alt="logo-partner"
                />
              </a>
              <a
                href="http://www.agribank.com.vn/"
                target="_blank"
                className="transition duration-200 hover:opacity-80"
                rel="noreferrer"
              >
                <img
                  src="./images/iconPartner/AGRIBANK.png"
                  className="w-8 rounded-full"
                  alt="logo-partner"
                />
              </a>
              <a
                href="https://www.vietinbank.vn/"
                target="_blank"
                className="transition duration-200 hover:opacity-80"
                rel="noreferrer"
              >
                <img
                  src="./images/iconPartner/VIETTINBANK.png"
                  className="w-8 rounded-full"
                  alt="logo-partner"
                />
              </a>
              <a
                href="https://www.indovinabank.com.vn/"
                target="_blank"
                className="transition duration-200 hover:opacity-80"
                rel="noreferrer"
              >
                <img
                  src="./images/iconPartner/IVB.png"
                  className="w-8 rounded-full"
                  alt="logo-partner"
                />
              </a>
              <a
                href="http://123go.vn/"
                target="_blank"
                className="transition duration-200 hover:opacity-80"
                rel="noreferrer"
              >
                <img
                  src="./images/iconPartner/123go.png"
                  className="w-8 rounded-full"
                  alt="logo-partner"
                />
              </a>
              <a
                href="http://laban.vn/"
                target="_blank"
                className="transition duration-200 hover:opacity-80"
                rel="noreferrer"
              >
                <img
                  src="./images/iconPartner/laban.png"
                  className="w-8 rounded-full"
                  alt="logo-partner"
                />
              </a>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 text-center">
              <div>
                <p className="text-white text-xs">MOBILE APP</p>
                <div className="flex items-center justify-center">
                  <a
                    target="_blank"
                    href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197"
                    className="mr-4"
                    rel="noreferrer"
                  >
                    <img src="./images/apple-logo.png" alt="apple-logo" className="w-7" />
                  </a>
                  <a
                    target="_blank"
                    href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                    rel="noreferrer"
                  >
                    <img src="./images/android-logo.png" alt="androi-logo" className="w-7" />
                  </a>
                </div>
              </div>
              <div>
                <p className="text-white text-xs">SOCIAL</p>
                <div className="flex items-center justify-center">
                  <a target="_blank" href="https://www.facebook.com/tix.vn/" className="mr-4" rel="noreferrer">
                    <img src="./images/facebook-logo.png" alt="facebook-logo" className="w-8" />
                  </a>
                  <a target="_blank" href="https://zalo.me/tixdatve" rel="noreferrer">
                    <img src="./images/zalo-logo.png" alt="zalo-logo" className="w-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-5 opacity-30 md:block hidden" />
        <div className="md:grid md:grid-cols-12 flex flex-col items-center md:items-start">
          <img src="./images/zion-logo.jpg" alt="zion-logo" className="rounded-md" width="100" />
          <div className="col-span-9 px-4 text-center my-6 md:my-0">
            <p className="text-white text-xs mb-2">TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</p>
            <p
              className="text-zinc-400 text-xs font-thin mb-0"
              style={{ lineHeight: "1.8", fontFamily: "SF Text Regular" }}
            >
              Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.
            </p>
            <p
              className="text-zinc-400 text-xs font-thin mb-0"
              style={{ lineHeight: "1.8", fontFamily: "SF Text Regular" }}
            >
              Giấy chứng nhận đăng ký kinh doanh số: 0101659783, <br />
              đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp
            </p>
            <p
              className="text-zinc-400 text-xs font-thin mb-0"
              style={{ lineHeight: "1.8", fontFamily: "SF Text Regular" }}
            >
              Số Điện Thoại (Hotline): 1900 545 436
            </p>
            <p
              className="text-zinc-400 text-xs font-thin mb-0"
              style={{ lineHeight: "1.8", fontFamily: "SF Text Regular" }}
            >
              Email:{" "}
              <a href="mailto: support@tix.vn" className="text-red-500">
                support@tix.vn
              </a>
            </p>
          </div>
          <div className="col-span-2">
            <a
              href="http://online.gov.vn/Home/WebDetails/62782"
              target="_blank"
              className="flex justify-end"
              rel="noreferrer"
            >
              <img src="./images/bo-cong-thuong.png" alt="bo-cong-thuong-icon" width="100" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
