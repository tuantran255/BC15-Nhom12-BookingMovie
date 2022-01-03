import React from "react";
import cgv from "../../../../assets/images/icon-partner/cgv.png";
import bhd from "../../../../assets/images/icon-partner/bhd.png";
import galaxycine from "../../../../assets/images/icon-partner/galaxycine.png";
import cinestar from "../../../../assets/images/icon-partner/cinestar.png";
import megags from "../../../../assets/images/icon-partner/megags.png";
import bt from "../../../../assets/images/icon-partner/bt.jpg";
import dongdacinema from "../../../../assets/images/icon-partner/dongdacinema.png";
import lotte from "../../../../assets/images/icon-partner/lotte.png";
import TOUCH from "../../../../assets/images/icon-partner/TOUCH.png";
import cnx from "../../../../assets/images/icon-partner/cnx.jpg";
import STARLIGHT from "../../../../assets/images/icon-partner/STARLIGHT.png";
import dcine from "../../../../assets/images/icon-partner/dcine.png";
import zalopay_icon from "../../../../assets/images/icon-partner/zalopay_icon.png";
import payoo from "../../../../assets/images/icon-partner/payoo.jpg";
import VCB from "../../../../assets/images/icon-partner/VCB.png";
import AGRIBANK from "../../../../assets/images/icon-partner/AGRIBANK.png";
import VIETTINBANK from "../../../../assets/images/icon-partner/VIETTINBANK.png";
import IVB from "../../../../assets/images/icon-partner/IVB.png";
import img123go from "../../../../assets/images/icon-partner/123go.png";
import laban from "../../../../assets/images/icon-partner/laban.png";
import appleLogo from "../../../../assets/images/apple-logo.png";
import androidLogo from "../../../../assets/images/android-logo.png";
import facebookLogo from "../../../../assets/images/facebook-logo.png";
import zaloLogo from "../../../../assets/images/zalo-logo.png";
import zionLogo from "../../../../assets/images/zion-logo.jpg";
import boCongThuongLogo from "../../../../assets/images/bo-cong-thuong.png";

export default function Footer(props) {
  return (
    <div className="p-5" style={{ backgroundColor: "#222" }}>
      <div className="mainMaxWidth mx-auto ">
        <div className="grid grid-cols-3">
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
              <a href="https://www.cgv.vn/" target="_blank" className="transition duration-200 hover:opacity-80">
                <img src={cgv} className="w-8 bg-white rounded-full" alt="logo-partner" />
              </a>
              <a href="http://bhdstar.vn/" target="_blank" className="transition duration-200 hover:opacity-80">
                <img src={bhd} className="w-8 rounded-full" alt="logo-partner" />
              </a>
              <a href="http://galaxycine.vn/" target="_blank" className="transition duration-200 hover:opacity-80">
                <img src={galaxycine} className="w-8 rounded-full" alt="logo-partner" />
              </a>
              <a href="http://cinestar.com.vn/" target="_blank" className="transition duration-200 hover:opacity-80">
                <img src={cinestar} className="w-8 rounded-full" alt="logo-partner" />
              </a>
              <a href="http://lottecinemavn.com/" target="_blank" className="transition duration-200 hover:opacity-80">
                <img src={lotte} className="w-8 rounded-full" alt="logo-partner" />
              </a>
              <a
                href="https://www.megagscinemas.vn/"
                target="_blank"
                className="transition duration-200 hover:opacity-80"
              >
                <img src={megags} className="w-8 rounded-full" alt="logo-partner" />
              </a>
              <a
                href="https://www.betacineplex.vn/"
                target="_blank"
                className="transition duration-200 hover:opacity-80"
              >
                <img src={bt} className="w-8 rounded-full" alt="logo-partner" />
              </a>
              <a href="http://ddcinema.vn/" target="_blank" className="transition duration-200 hover:opacity-80">
                <img src={dongdacinema} className="w-8 rounded-full" alt="logo-partner" />
              </a>
              <a href="https://touchcinema.com/" target="_blank" className="transition duration-200 hover:opacity-80">
                <img src={TOUCH} className="w-8 rounded-full" alt="logo-partner" />
              </a>
              <a href="https://cinemaxvn.com/" target="_blank" className="transition duration-200 hover:opacity-80">
                <img src={cnx} className="w-8 rounded-full" alt="logo-partner" />
              </a>
              <a href="http://starlight.vn/" target="_blank" className="transition duration-200 hover:opacity-80">
                <img src={STARLIGHT} className="w-8 rounded-full" alt="logo-partner" />
              </a>
              <a href="https://www.dcine.vn/" target="_blank" className="transition duration-200 hover:opacity-80">
                <img src={dcine} className="w-8 rounded-full" alt="logo-partner" />
              </a>
              <a href="https://zalopay.vn/" target="_blank" className="transition duration-200 hover:opacity-80">
                <img src={zalopay_icon} className="w-8 rounded-full" alt="logo-partner" />
              </a>
              <a href="https://www.payoo.vn/" target="_blank" className="transition duration-200 hover:opacity-80">
                <img src={payoo} className="w-8 rounded-full" alt="logo-partner" />
              </a>
              <a
                href="https://www.vietcombank.com.vn/"
                target="_blank"
                className="transition duration-200 hover:opacity-80"
              >
                <img src={VCB} className="w-8 rounded-full" alt="logo-partner" />
              </a>
              <a
                href="http://www.agribank.com.vn/"
                target="_blank"
                className="transition duration-200 hover:opacity-80"
              >
                <img src={AGRIBANK} className="w-8 rounded-full" alt="logo-partner" />
              </a>
              <a href="https://www.vietinbank.vn/" target="_blank" className="transition duration-200 hover:opacity-80">
                <img src={VIETTINBANK} className="w-8 rounded-full" alt="logo-partner" />
              </a>
              <a
                href="https://www.indovinabank.com.vn/"
                target="_blank"
                className="transition duration-200 hover:opacity-80"
              >
                <img src={IVB} className="w-8 rounded-full" alt="logo-partner" />
              </a>
              <a href="http://123go.vn/" target="_blank" className="transition duration-200 hover:opacity-80">
                <img src={img123go} className="w-8 rounded-full" alt="logo-partner" />
              </a>
              <a href="http://laban.vn/" target="_blank" className="transition duration-200 hover:opacity-80">
                <img src={laban} className="w-8 rounded-full" alt="logo-partner" />
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
                  >
                    <img src={appleLogo} alt="apple-logo" className="w-7" />
                  </a>
                  <a target="_blank" href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123">
                    <img src={androidLogo} alt="androi-logo" className="w-7" />
                  </a>
                </div>
              </div>
              <div>
                <p className="text-white text-xs">SOCIAL</p>
                <div className="flex items-center justify-center">
                  <a target="_blank" href="https://www.facebook.com/tix.vn/" className="mr-4">
                    <img src={facebookLogo} alt="facebook-logo" className="w-8" />
                  </a>
                  <a target="_blank" href="https://zalo.me/tixdatve">
                    <img src={zaloLogo} alt="zalo-logo" className="w-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-5 opacity-30" />
        <div className="grid grid-cols-12">
          <img src={zionLogo} alt="zion-logo" className="rounded-md" />
          <div className="col-span-9 px-4">
            <p className="text-white text-xs mb-2">TIX SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</p>
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
            <a href="http://online.gov.vn/Home/WebDetails/62782" target="_blank" className="flex justify-end">
              <img src={boCongThuongLogo} alt="bo-cong-thuong-icon" className="w-10/12" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
