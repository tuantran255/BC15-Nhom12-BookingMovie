import React from "react";
import NewsCard from "../../../components/NewsCard/NewsCard";
import "./HomeNew.css";

export default function HomeNews(props) {
  return (
    <div id="homeNews" className="container pt-5 lg:pt-16 pb-10 xl:max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="lg:pr-4">
          <h3 className="text-xl uppercase relative pb-2">Bình Luận Phim</h3>
          <NewsCard
            img="./images/imgNews/death-on-the-nile-gal-gadot-dep-tung-milimet-4_1644685069873.jpg"
            title="[Review] Death On The Nile: Gal Gadot Đẹp Từng Milimet"
            desc="Dài hơn 2 tiếng, Án Mạng Sông Nile chẳng hề nhàm chán bởi
            nhịp phim nhanh gọn, bất ngờ xảy ra liên tục."
            date="March 12, 2022"
            view="3.1K"
            link="https://www.galaxycine.vn/binh-luan-phim/review-death-on-the-nile-gal-gadot-dep-tung-milimet"
          />
          <NewsCard
            img="./images/imgNews/450_1644662552380.jpg"
            title="[Review] Chuyện Ma Gần Nhà: Ám Ảnh Đến Từ Truyền Thuyết Đô Thị"
            desc="Dài hơn 2 tiếng, Án Mạng Sông Nile chẳng hề nhàm chán bởi
            nhịp phim nhanh gọn, bất ngờ xLấy chất liệu từ những “truyền thuyết đô thị” vốn là mảnh đất màu mỡ để khai thác các câu chuyện huyền ảo đáng sợ, Chuyện Ma Gần Nhà của đạo diễn Trần Hữu Tấn tiếp tục đem đến sự khởi sắc cho phim Việt."
            date="March 12, 2022"
            view="4.2K"
            link="https://www.galaxycine.vn/binh-luan-phim/review-chuyen-ma-gan-nha-am-anh-den-tu-truyen-thuyet-do-thi"
          />
          <NewsCard
            img="./images/imgNews/encanto-tinh-cam-gia-dinh-chang-can-dao-to-bua-lon-2_1644309756146.jpg"
            title="[Review] Encanto: Tình Cảm Gia Đình Chẳng Cần Đao To Búa Lớn!"
            desc="Chẳng đao to búa lớn, chẳng dời non lấp bể, cách bạn trở thành người hùng để cứu lấy thứ gì đó quan trọng hóa ra lại đơn giản tới không ngờ!"
            date="March 11, 2022"
            view="7.2K"
            link="https://www.galaxycine.vn/binh-luan-phim/review-encanto-tinh-cam-gia-dinh-chang-can-dao-to-bua-lon"
          />
          <NewsCard
            img="./images/imgNews/sing-2-ganh-hat-tinh-le-mo-len-thanh-pho-1_1644221337692.jpg"
            title="[Review] Sing 2: Gánh Hát Tỉnh Lẻ Mơ Lên Thành Phố!"
            desc="Hài hước, vui nhộn, tràn đầy màu sắc… Sing 2 ra mắt đúng dịp Tết Nguyên Đán là món ăn tuyệt vời ở “bàn tiệc điện ảnh” quy tụ cả gia đình."
            date="March 10, 2022"
            view="9.5K"
            link="https://www.galaxycine.vn/binh-luan-phim/review-sing-2-ganh-hat-tinh-le-mo-len-thanh-pho"
          />
        </div>
        <div className="lg:pl-4">
          <h3 className="text-xl uppercase relative pb-2">Blog điện ảnh</h3>
          <NewsCard
            img="./images/imgNews/oscar-2022-mcu-nhan-hai-de-cu--andrew-garfield-va-kristen-stewart-duoc-vinh-danh-7_1644391003626.jpg"
            title="Oscar 2022 | MCU Nhận Hai Đề Cử, Andrew Garfield Và Kristen Stewart Được Vinh Danh"
            desc="Viện Hàn Lâm vừa công bố danh sách đề cử Oscar 2022. Bước đầu, The Power Of The Dog đang áp đảo với 12 đề cử."
            date="March 12, 2022"
            view="1.1K"
            link="https://www.galaxycine.vn/movie-blog/oscar-2022--mcu-nhan-hai-de-cu-andrew-garfield-va-kristen-stewart-duoc-vinh-danh"
          />
          <NewsCard
            img="./images/imgNews/450_1642846475212.jpg"
            title="Ký Sự Điện Ảnh - Kỳ 20: Thời Kỳ New Hollywood"
            desc="New Hollywood tỏa sáng rực rỡ từ những năm 70 đến cuối thập niên 80, cũng là thời điểm hàng loạt phim kinh điển ra đời."
            date="March 12, 2022"
            view="5.4K"
            link="https://www.galaxycine.vn/movie-blog/ky-su-dien-anh---ky-20-thoi-ky-new-hollywood"
          />
          <NewsCard
            img="./images/imgNews/hosuttuthan450x300_1640613762080.jpg"
            title="Sinkhole: Kịch Tính Thật Nhiều Mà Cười Cũng Thật Nhiều"
            desc="Khai thác đề tài thảm họa thế nhưng Sinkhole vẫn tạo được điểm nhấn nhờ sự kết hợp giữa yếu tố sinh tồn căng thẳng và những mảng miếng hài hước duyên dáng."
            date="March 11, 2022"
            view="8.5K"
            link="https://www.galaxycine.vn/movie-blog/sinkhole-kich-tinh-that-nhieu-ma-cuoi-cung-that-nhieu"
          />
          <NewsCard
            img="./images/imgNews/loat-tinh-tiet-dien-ro-ma-trailer-moi-doctor-strange-in-the-multiverse-of-madness-tiet-lo-3_1644816156929.jpg"
            title="Loạt Tình Tiết Điên Rồ Mà Trailer Mới Doctor Strange In The Multiverse Of Madness Tiết Lộ!"
            desc="Bất ngờ, ấn tượng và sốc... là những cảm xúc của khán giả khi xem trailer mới Doctor Strange 2."
            date="March 10, 2022"
            view="10.3K"
            link="https://www.galaxycine.vn/movie-blog/loat-tinh-tiet-dien-ro-ma-trailer-moi-doctor-strange-in-the-multiverse-of-madness-tiet-lo"
          />
        </div>
      </div>
    </div>
  );
}
