import React from 'react'
import { Quote, ArrowRight, Sparkles, BookOpen, Compass } from 'lucide-react'

interface AboutMuseumWidgetProps {
  onNavigate?: (path: string) => void
}

export const AboutMuseumWidget: React.FC<AboutMuseumWidgetProps> = ({ onNavigate }) => {
  return (
    <article className="text-left space-y-20 sm:space-y-28 animate-in fade-in duration-500 w-full font-serif">
      {/* =========================================================================
          1. HERO BANNER — CẤU TRÚC 2 CỘT RỘNG RÃI, THOÁNG ĐÃNG
      ========================================================================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center border-b border-stone-800/80 pb-14 sm:pb-20">
        {/* Cột trái: Tiêu đề lớn & Đoạn tự sự mở đầu */}
        <div className="lg:col-span-7 space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15]">
            Chiếu Chèo Ngàn Năm Dưới Mái Đình Số
          </h1>

          <div className="space-y-4 text-stone-300 font-light text-base sm:text-lg leading-relaxed pt-2">
            <p className="first-letter:text-5xl sm:first-letter:text-6xl first-letter:font-bold first-letter:text-amber-400 first-letter:mr-3 first-letter:float-left first-letter:leading-none">
              Nếu có dịp bước chân về một làng quê Bắc Bộ trong những ngày hội xuân rộn rã, bạn sẽ thấy giữa sân đình rêu phong trải ra một manh chiếu cói đơn sơ. Không cần sân khấu lộng lẫy, không cần đèn màu hoa lệ, chỉ một manh chiếu ấy thôi đã đủ để mở ra cả một vũ trụ nhân sinh: nơi Thần, Phật, Vua, Chúa cùng bước xuống ngồi chung với người nông dân chân lấm tay bùn; nơi tiếng cười trào lộng của anh Hề hòa cùng tiếng thở dài trắc ẩn của người xem trong từng nhịp trống đế.
            </p>
            <p className="text-stone-400 text-sm sm:text-base">
              Bảo Tàng Chèo Số được dựng nên từ khát vọng mang chiếc chiếu chèo mộc mạc ấy bước vào không gian số. Đây không phải là một kho lưu trữ dữ liệu lạnh lẽo, mà là một mái đình số ấm áp — nơi từng câu hát nảy hạt, từng điệu múa bắt quyết và ngón nghề tinh xảo của các bậc tiền nhân được tái hiện trọn vẹn, sống động và trường tồn cùng năm tháng.
            </p>
          </div>
        </div>

        {/* Cột phải: Khung ảnh toàn cảnh khổ lớn */}
        <div className="lg:col-span-5">
          <figure className="relative rounded-3xl overflow-hidden border border-stone-800/90 bg-stone-950 shadow-2xl group">
            <div className="aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden relative">
              <img
                src="/images/gioi-thieu/hero.jpg"
                alt="Không gian bảo tàng số Chèo cổ truyền"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />
            </div>
            <figcaption className="p-5 sm:p-6 absolute bottom-0 inset-x-0 text-xs sm:text-sm text-stone-300 italic bg-stone-950/80 backdrop-blur-md border-t border-stone-800/60">
              Không gian Bảo tàng số — Nơi tinh hoa sân khấu truyền thống hội ngộ cùng ngôn ngữ thị giác đương đại.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* =========================================================================
          2. HỒI 1: TRIẾT LÝ BẢO TÀNG MỞ (SPLIT GRID 2 CỘT)
      ========================================================================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Ảnh minh họa bên trái */}
        <div className="lg:col-span-5 lg:order-1">
          <figure className="rounded-3xl overflow-hidden border border-stone-800/80 bg-stone-950 shadow-xl group">
            <div className="aspect-[4/3] sm:aspect-[4/3] w-full overflow-hidden relative">
              <img
                src="/images/gioi-thieu/digital_sanctuary.jpg"
                alt="Dàn nhạc cụ dân tộc trong không gian số"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <figcaption className="p-4 sm:p-5 text-xs sm:text-sm text-stone-400 italic bg-stone-900/90 border-t border-stone-800/60">
              Dàn nhạc ngũ âm cổ truyền — Tiếng đàn nhị nỉ non, tiếng nguyệt trong trẻo và nhịp trống đế giục giã được ghi âm đa tầng mộc mạc.
            </figcaption>
          </figure>
        </div>

        {/* Bài tự sự bên phải */}
        <div className="lg:col-span-7 lg:order-2 space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
            1. Triết lý một bảo tàng sống, không đóng khung trong lồng kính
          </h2>

          <div className="space-y-4 text-stone-300 font-light text-base sm:text-lg leading-relaxed">
            <p>
              Ở nhiều bảo tàng truyền thống, di sản thường bị ngăn cách sau những tấm kính dày cùng tấm biển cảnh báo “Xin đừng chạm vào hiện vật”. Nhưng với nghệ thuật Chèo — một loại hình nghệ thuật sinh ra từ hơi thở cộng đồng và sự giao cảm trực tiếp giữa người diễn và người xem — nếu chỉ đóng khung trong tủ kính thì Chèo sẽ chết.
            </p>
            <p>
              Chèo là nghệ thuật của ước lệ và chuyển động. Một chiếc quạt nan nằm im lìm trên giá trưng bày chỉ là một vật thể vô tri; nó chỉ thực sự có linh hồn khi được xòe ra nửa mặt e ấp trong tay cô Đào, hay phe phẩy lắc lư đầy châm biếm dưới ngón tay anh Hề. Tiếng trống Chèo cũng vậy: nó phải rung lên, phải dội vào lồng ngực người nghe thì mới thấy được cái náo nức của hội hè đồng bằng châu thổ.
            </p>
          </div>

          {/* Trích dẫn văn hóa thanh nhã */}
          <div className="p-6 rounded-2xl bg-amber-950/20 border-l-2 border-amber-500/70 relative">
            <Quote className="w-8 h-8 text-amber-500/20 absolute top-4 right-4" />
            <blockquote className="italic text-amber-200 text-base sm:text-lg leading-relaxed">
              “Di sản không phải là một di tích đã chết để ta đứng ngắm với lòng hoài cổ. Di sản chỉ thực sự sống khi nó tiếp tục được cất lên, được chạm vào và được thế hệ hôm nay yêu mến như một phần máu thịt của chính mình.”
            </blockquote>
            <p className="text-xs text-stone-400 mt-3 not-italic">
              — Lời ngỏ của ban cố vấn nghệ thuật Bảo tàng Chèo Số
            </p>
          </div>

          <p className="text-stone-300 font-light text-base sm:text-lg leading-relaxed">
            Chính vì vậy, Bảo tàng Chèo Số được thiết kế theo triết lý mở tối đa: cho phép người dùng tự do chạm vào từng nhân vật, lắng nghe phân tách từng nhạc cụ trong dàn nhạc ngũ âm, xoay ngắm từng đường thêu trên nếp áo tứ thân và tự mình thử nghiệm những nhịp trống đế dân gian. Công nghệ không làm mất đi tính thiêng của di sản, mà trái lại, trở thành chiếc kính lúp giúp công chúng nhìn thấu những tầng sâu thẩm mỹ tinh vi nhất mà mắt thường nơi sân đình xa xưa khó lòng bao quát hết.
          </p>
        </div>
      </section>

      {/* =========================================================================
          3. DẢI NGHỈ TOÀN CẢNH (PANORAMIC CALLOUT BAND)
      ========================================================================= */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-amber-950/40 to-stone-900 border border-stone-800/80 p-8 sm:p-12 text-center my-12">
        <div className="max-w-3xl mx-auto space-y-4">
          <p className="text-xl sm:text-2xl lg:text-3xl italic text-amber-100 font-light leading-snug">
            “Bảo tồn di sản không phải là tôn thờ tro tàn của ngày hôm qua, mà là thắp tiếp ngọn lửa rực rỡ cho ngày mai.”
          </p>
          <div className="w-12 h-px bg-amber-500/60 mx-auto" />
          <p className="text-xs sm:text-sm text-stone-400 font-light">
            Nguyên lý xuyên suốt trong từng công trình phục dựng và số hóa của Bảo Tàng Chèo Số
          </p>
        </div>
      </section>

      {/* =========================================================================
          4. HỒI 2: GIAO ĐIỂM CỔ TRUYỀN VÀ CÔNG NGHỆ (REVERSED SPLIT GRID)
      ========================================================================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Bài tự sự bên trái */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
            2. Nơi bàn tay nghệ nhân gặp gỡ công nghệ tương tác
          </h2>

          <div className="space-y-4 text-stone-300 font-light text-base sm:text-lg leading-relaxed">
            <p>
              Để xây dựng nên không gian này, những người thực hiện dự án đã trải qua hàng trăm ngày đêm rong ruổi khắp các làng Chèo cổ từ Thái Bình, Ninh Bình, Hà Nam đến Bắc Giang. Chúng tôi mang theo những chiếc micro phòng thu độ nhạy cao và máy quét quang học về tận thềm đình rêu phong, ngồi cùng các nghệ nhân lão thành đã bước sang tuổi gần đất xa trời.
            </p>
            <p>
              Đó là cuộc gặp gỡ kỳ diệu giữa hai thế hệ: một bên là các cụ già với ngón nghề truyền khẩu nảy hạt trong từng hơi thở, một bên là những kỹ sư trẻ với tình yêu say mê cội nguồn dân tộc. Từng làn điệu cổ như Luyện Năm Tầng, Đào Liễu, Quân Thư, Tình Thư Hạ Vị được bóc tách và phân tích; từng chiếc quạt nan, nón quai thao, dải yếm lụa nhuộm cánh kiến được phục dựng chi tiết từng thớ vải; từng dị bản kịch bản chữ Nôm cổ được đối chiếu khoa học.
            </p>
            <p>
              Tất cả những tư liệu quý giá ấy được chuyển hóa thành một hệ sinh thái dữ liệu mở. Học sinh, sinh viên, nghệ sĩ sáng tạo hay bất kỳ ai yêu văn hóa đều có thể tự do truy cập, thưởng thức và sử dụng làm nguồn cảm hứng cho những tác phẩm nghệ thuật đương đại mới.
            </p>
          </div>
        </div>

        {/* Ảnh minh họa bên phải */}
        <div className="lg:col-span-5">
          <figure className="rounded-3xl overflow-hidden border border-stone-800/80 bg-stone-950 shadow-xl group">
            <div className="aspect-[4/3] sm:aspect-[4/3] w-full overflow-hidden relative">
              <img
                src="/images/gioi-thieu/ganh_hat.jpg"
                alt="Gánh hát Chèo xưa và nay"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <figcaption className="p-4 sm:p-5 text-xs sm:text-sm text-stone-400 italic bg-stone-900/90 border-t border-stone-800/60">
              Gánh hát Chèo xưa rong ruổi qua muôn dặm đường quê — Nay tiếp tục cuộc hành trình trên không gian số không biên giới.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* =========================================================================
          5. HỒI 3: CHIẾC CẦU NỐI ĐƯA NGƯỜI XEM TRỞ VỀ SÂN ĐÌNH & CÁC LỐI KHÁM PHÁ
      ========================================================================= */}
      <section className="space-y-10 pt-10 border-t border-stone-800/60">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
            3. Chiếc cầu nối đưa người xem trở về với sân đình
          </h2>

          <p className="text-stone-300 font-light text-base sm:text-lg leading-relaxed">
            Bảo tàng Chèo Số sinh ra không phải để thay thế sàn diễn Chèo ngoài đời thực. Không một màn hình máy tính hay chiếc điện thoại thông minh nào có thể thay thế được mùi hương trầm thoang thoảng trong đêm hội mùa xuân, độ rung mộc của mặt da trống dưới dùi gõ, hay cái nắm tay ấm áp giữa những người xem quây quần bên manh chiếu cói.
          </p>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            Sứ mệnh chân chính của không gian số này là đóng vai trò một chiếc cầu nối: khơi gợi sự tò mò, mở rộng hiểu biết, đánh thức tình yêu tiềm ẩn trong lòng thế hệ trẻ để rồi thôi thúc họ bước ra đời thực, tìm về với các nhà hát, tìm về với các hội làng để tận mắt chiêm ngưỡng và cổ vũ cho những người nghệ sĩ đang bền bỉ giữ lửa cho quê hương.
          </p>
        </div>

        {/* Lưới 3 cột rộng mở — Dẫn lối hành trình khám phá di sản */}
        <div className="pt-6">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Tiếp nối hành trình khám phá
            </h3>
            <span className="text-xs text-stone-400 font-light">
              Mời bạn tiếp tục dõi theo những mạch nguồn văn hóa
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button
              onClick={() => onNavigate?.('/gioi-thieu/cau-chuyen-hinh-thanh')}
              className="p-6 rounded-3xl bg-stone-900/60 hover:bg-stone-800/80 border border-stone-800/80 hover:border-amber-500/50 text-left transition-all group flex flex-col justify-between cursor-pointer space-y-6 shadow-lg"
            >
              <div className="space-y-2.5">
                <div className="w-10 h-10 rounded-2xl bg-amber-950/40 border border-amber-800/40 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  Câu chuyện hình thành
                </h4>
                <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
                  Những bước chân điền dã đầu tiên gõ cửa làng Khuốc, Yên Khánh và ký ức của các nghệ nhân lão thành.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-amber-400/90 group-hover:text-amber-300 font-medium">
                <span>Lắng nghe ký sự</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            <button
              onClick={() => onNavigate?.('/gioi-thieu/muc-tieu-va-y-nghia')}
              className="p-6 rounded-3xl bg-stone-900/60 hover:bg-stone-800/80 border border-stone-800/80 hover:border-amber-500/50 text-left transition-all group flex flex-col justify-between cursor-pointer space-y-6 shadow-lg"
            >
              <div className="space-y-2.5">
                <div className="w-10 h-10 rounded-2xl bg-amber-950/40 border border-amber-800/40 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  Mục tiêu và ý nghĩa
                </h4>
                <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
                  Vì sao chiếu chèo cần một không gian số và sứ mệnh gìn giữ cội nguồn cho thế hệ mai sau.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-amber-400/90 group-hover:text-amber-300 font-medium">
                <span>Xem tâm nguyện</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            <button
              onClick={() => onNavigate?.('/gioi-thieu/doi-ngu-nhom-thuc-hien')}
              className="p-6 rounded-3xl bg-stone-900/60 hover:bg-stone-800/80 border border-stone-800/80 hover:border-amber-500/50 text-left transition-all group flex flex-col justify-between cursor-pointer space-y-6 shadow-lg"
            >
              <div className="space-y-2.5">
                <div className="w-10 h-10 rounded-2xl bg-amber-950/40 border border-amber-800/40 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  Đội ngũ thực hiện
                </h4>
                <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
                  Sự chung sức của hội đồng cố vấn nghệ thuật, các nghệ nhân gạo cội cùng đội ngũ kỹ sư công nghệ trẻ.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-amber-400/90 group-hover:text-amber-300 font-medium">
                <span>Gặp gỡ nghệ nhân</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. LỜI KẾT THI VỊ
      ========================================================================= */}
      <footer className="pt-12 border-t border-stone-800/80 space-y-6 text-center max-w-2xl mx-auto">
        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Gìn giữ cho muôn đời sau
        </h3>
        <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed">
          Mỗi lần bạn ghé thăm bảo tàng, lắng nghe một khúc hát hay ngắm nhìn một tà áo cổ, là một lần tiếng trống Chèo lại được ngân vang thêm một nhịp trong dòng chảy thời gian của dân tộc.
        </p>

        <div className="pt-6 border-t border-stone-800/50">
          <blockquote className="italic text-amber-200/90 text-base sm:text-lg">
            “Bao giờ cho đến tháng ba,<br className="sm:hidden" /> Hoa gạo rụng xuống, bà già cất chăn.<br className="sm:hidden" /> Hội đình rộn rã tiếng ca,<br className="sm:hidden" /> Nhớ câu hát Chèo đậm đà tình quê.”
          </blockquote>
          <p className="text-xs text-stone-500 mt-2 not-italic">
            — Hát ví đồng bằng Bắc Bộ
          </p>
        </div>
      </footer>
    </article>
  )
}
