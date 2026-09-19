import React from 'react'
import { Quote } from 'lucide-react'

export const GoalsWidget: React.FC = () => {
  return (
    <article className="text-left space-y-20 sm:space-y-28 animate-in fade-in duration-500 w-full font-serif">
      {/* =========================================================================
          1. HERO BANNER — CẤU TRÚC 2 CỘT RỘNG RÃI
      ========================================================================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center border-b border-stone-800/80 pb-14 sm:pb-20">
        {/* Cột trái: Tiêu đề lớn & Tự sự mở đầu */}
        <div className="lg:col-span-7 space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15]">
            Không Để Tiếng Trống Hội Làng Lùi Vào Dĩ Vãng
          </h1>

          <div className="space-y-4 text-stone-300 font-light text-base sm:text-lg leading-relaxed pt-2">
            <p className="first-letter:text-5xl sm:first-letter:text-6xl first-letter:font-bold first-letter:text-amber-400 first-letter:mr-3 first-letter:float-left first-letter:leading-none">
              Chèo không sinh ra trong những khán phòng lộng lẫy bọc nhung, cũng không bắt đầu từ những bài diễn văn đạo mạo. Chèo sinh ra từ đất phù sa màu mỡ sông Hồng, từ mùi rơm rạ mùa gặt, từ chiếc chiếu cói đơn sơ trải giữa sân đình rêu phong và tiếng trống giục giã gọi cả làng cùng ngồi lại bên nhau. Suốt mười thế kỷ thăng trầm giông bão, người nông dân Bắc Bộ gửi gắm vào tích Chèo tất cả nỗi niềm trắc ẩn, tiếng cười châm biếm sâu cay và khát vọng về lẽ công bằng ở đời.
            </p>
            <p className="text-stone-400 text-sm sm:text-base">
              Nhưng hôm nay, nhịp sống hiện đại cuốn phăng những nếp nhà mái ngói, những nghệ nhân báu vật sống dần qua đời, các làn điệu cổ đứng trước nguy cơ chỉ còn là tiếng vọng mờ nhạt trong hoài niệm. Dự án Bảo Tàng Chèo Số không ra đời từ những toan tính thương mại hay những chỉ tiêu khô cứng. Dự án này được dựng nên từ một tâm nguyện tha thiết: giữ lại linh hồn của cha ông cho mai sau, biến di sản thành dòng chảy sống động trong lòng người Việt trẻ.
            </p>
          </div>
        </div>

        {/* Cột phải: Ảnh tư liệu toàn cảnh */}
        <div className="lg:col-span-5">
          <figure className="relative rounded-3xl overflow-hidden border border-stone-800/90 bg-stone-950 shadow-2xl group">
            <div className="aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden relative">
              <img
                src="/images/gioi-thieu/goals.jpg"
                alt="Chiếu chèo truyền thống giữa sân đình làng"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />
            </div>
            <figcaption className="p-5 sm:p-6 absolute bottom-0 inset-x-0 text-xs sm:text-sm text-stone-300 italic bg-stone-950/80 backdrop-blur-md border-t border-stone-800/60">
              Chiếu chèo mở giữa lòng cộng đồng — Không gian biểu tượng của tâm hồn và trí tuệ dân gian Bắc Bộ.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* =========================================================================
          2. HỒI I: CỨU LẤY KÝ ỨC (SPLIT GRID 2 CỘT)
      ========================================================================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Cột trái: Ảnh minh họa nghệ nhân */}
        <div className="lg:col-span-5 lg:order-1">
          <figure className="rounded-3xl overflow-hidden border border-stone-800/80 bg-stone-950 shadow-xl group">
            <div className="aspect-[4/3] sm:aspect-[4/3] w-full overflow-hidden relative">
              <img
                src="/images/gioi-thieu/field_story.jpg"
                alt="Nghệ nhân truyền nghề bên manh chiếu cổ"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <figcaption className="p-4 sm:p-5 text-xs sm:text-sm text-stone-400 italic bg-stone-900/90 border-t border-stone-800/60">
              Những manh chiếu cói thềm đình — Nơi ngón nghề truyền khẩu nảy hạt được trao truyền qua từng ánh mắt, nụ cười.
            </figcaption>
          </figure>
        </div>

        {/* Cột phải: Bài tự sự & Trích dẫn */}
        <div className="lg:col-span-7 lg:order-2 space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
            1. Khi những pho sách sống dần khép lại
          </h2>

          <div className="space-y-4 text-stone-300 font-light text-base sm:text-lg leading-relaxed">
            <p>
              Chuyến điền dã đưa chúng tôi về làng Khuốc (Thái Bình), Yên Khánh (Ninh Bình) rồi Nam Trực (Nam Định) — những cái nôi ngàn năm của nghệ thuật Chèo đồng bằng Bắc Bộ. Ngồi đối diện với các cụ ông, cụ bà ngoài tám mươi, chín mươi tuổi, lắng nghe từng câu hát mộc không micro, chúng tôi cảm nhận được sự run rẩy nghẹn ngào của thời gian.
            </p>
            <p>
              Nghệ thuật Chèo vốn dĩ là nghệ thuật truyền khẩu “bắt tay chỉ ngón”. Những tinh hoa kỳ diệu nhất — cái ngón nghề nảy hạt trong cổ họng, cách vuốt hơi như làn khói mỏng, ánh mắt liếc sắc như dao cau của cô Đào hay nhịp gõ dùi cau vào tang trống gỗ mít của người đánh đế — hoàn toàn không thể ký âm hay diễn tả trọn vẹn qua những trang sách vở thông thường. Khi một nghệ nhân lão thành tạ thế, một kho tàng làn điệu ngàn năm cũng theo đó vĩnh viễn khép lại.
            </p>
          </div>



          <p className="text-stone-300 font-light text-base sm:text-lg leading-relaxed">
            Bảo tàng Chèo Số ra đời trước hết như một sự thôi thúc từ lương tâm: phải chạy đua với thời gian để ghi lại trung thực nhất từng vi âm thanh âm, từng góc máy chuyển động của các bậc tiền bối. Không chỉ ghi âm đơn thuần, dự án ứng dụng công nghệ số hóa phân tầng và ghi hình động tác để lưu giữ chuẩn mực từng ngón tay bắt quyết, từng bước đi chữ bát. Lưu giữ ở đây không phải để đóng băng di sản trong tủ kính, mà để dựng nên một hệ quy chiếu nguyên bản chân thực nhất cho mai sau.
          </p>
        </div>
      </section>

      {/* =========================================================================
          3. DẢI NGHỈ TOÀN CẢNH (PANORAMIC CALLOUT BAND)
      ========================================================================= */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-amber-950/40 to-stone-900 border border-stone-800/80 p-8 sm:p-12 text-center my-12">
        <div className="max-w-3xl mx-auto space-y-4">
          <p className="text-xl sm:text-2xl lg:text-3xl italic text-amber-100 font-light leading-snug">
            “Nghề Chèo là nghề truyền miệng, một nhịp phách rơi ra ngoài là rơi mất một phần hồn phách của tổ tiên.”
          </p>
          <div className="w-12 h-px bg-amber-500/60 mx-auto" />
          <p className="text-xs sm:text-sm text-stone-400 font-light">
            Lời răn dạy của các nghệ nhân bậc thầy làng Chèo cổ truyền
          </p>
        </div>
      </section>

      {/* =========================================================================
          4. HỒI II: ĐÁNH THỨC NIỀM TỰ HÀO TRẺ (REVERSED SPLIT GRID)
      ========================================================================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Cột trái: Tự sự & Trích dẫn bạn trẻ */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
            2. Chèo chưa bao giờ cũ, chỉ là chưa được kể đúng cách
          </h2>

          <div className="space-y-4 text-stone-300 font-light text-base sm:text-lg leading-relaxed">
            <p>
              Người ta thường buông tiếng thở dài rằng giới trẻ ngày nay chỉ mải mê với nhạc ngoại, phim ảnh kỹ xảo mà hờ hững với tiếng trống chèo hội làng. Nhưng qua hàng ngàn cuộc trò chuyện và tiếp xúc thực tế, chúng tôi nhận ra một sự thật hoàn toàn khác: Người trẻ xa lạ vì họ chỉ được tiếp cận Chèo qua những thước phim tư liệu mờ nhòe hay những bài giảng lý thuyết nặng nề giáo điều.
            </p>
            <p>
              Khi chúng tôi bóc tách từng lớp nhân vật dưới góc nhìn văn hóa hiện đại, các bạn trẻ đã sửng sốt: Một nàng Xúy Vân giả dại dám đạp đổ xiềng xích lễ giáo để đi tìm tự do đích thực; một Thị Mầu nổi loạn, bộc trực, khao khát yêu đương mãnh liệt; hay nhân vật Hề Chèo với tiếng cười trào lộng dám vạch trần thói hư tật xấu của quan lại ngay giữa thanh thiên bạch nhật... Đó chính là những tư tưởng nhân văn, tự do và bình đẳng vượt thời đại.
            </p>
          </div>



          <p className="text-stone-300 font-light text-base sm:text-lg leading-relaxed">
            Bằng việc ứng dụng đồ họa tương tác, công nghệ âm thanh đa tầng và trải nghiệm số trực quan, chúng tôi muốn trao cho người trẻ quyền được tự do chạm vào di sản. Chèo bước ra khỏi sự cổ kính xa xôi để trở thành nguồn cảm hứng tươi mới cho âm nhạc đương đại, hội họa, thiết kế thời trang và sân khấu thể nghiệm của thế hệ hôm nay.
          </p>
        </div>

        {/* Cột phải: Ảnh cận cảnh trang phục */}
        <div className="lg:col-span-5">
          <figure className="rounded-3xl overflow-hidden border border-stone-800/80 bg-stone-950 shadow-xl group">
            <div className="aspect-[4/3] sm:aspect-[4/3] w-full overflow-hidden relative">
              <img
                src="/images/gioi-thieu/costume.jpg"
                alt="Họa tiết trang phục Chèo truyền thống"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <figcaption className="p-4 sm:p-5 text-xs sm:text-sm text-stone-400 italic bg-stone-900/90 border-t border-stone-800/60">
              Từng đường kim mũi chỉ trên tà áo tứ thân chứa đựng cả quan niệm thẩm mỹ tinh tế của ông cha.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* =========================================================================
          5. HỒI III: TỪ SÂN ĐÌNH BƯỚC RA KHÔNG GIAN NHÂN LOẠI (SPLIT GRID)
      ========================================================================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-10 border-t border-stone-800/60">
        {/* Cột trái: Ảnh nghệ thuật Chèo thăng hoa */}
        <div className="lg:col-span-5 lg:order-1">
          <figure className="rounded-3xl overflow-hidden border border-stone-800/80 bg-stone-950 shadow-xl group">
            <div className="aspect-[4/3] sm:aspect-[4/3] w-full overflow-hidden relative">
              <img
                src="/images/gioi-thieu/world.jpg"
                alt="Nghệ thuật Chèo thăng hoa"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <figcaption className="p-4 sm:p-5 text-xs sm:text-sm text-stone-400 italic bg-stone-900/90 border-t border-stone-800/60">
              Nghệ thuật Chèo thăng hoa — Tinh hoa diễn xướng của dân tộc Việt Nam vươn tầm thế giới.
            </figcaption>
          </figure>
        </div>

        {/* Cột phải: Tự sự về tính dân chủ sân đình & UNESCO */}
        <div className="lg:col-span-7 lg:order-2 space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
            3. Từ sân đình Bắc Bộ bước ra không gian nhân loại
          </h2>

          <div className="space-y-4 text-stone-300 font-light text-base sm:text-lg leading-relaxed">
            <p>
              Nếu người phương Tây tự hào về nhạc kịch Opera tráng lệ trong các khán phòng nhung lụa, nước Nhật nâng niu nghệ thuật kịch Noh tĩnh tại và Kabuki hoa mỹ, Trung Hoa tự hào với Kinh kịch bác học — thì Việt Nam có Chèo: một thể loại sân khấu kịch hát dân gian độc nhất vô nhị.
            </p>
            <p>
              Điều làm nên sự vĩ đại của Chèo chính là tính dân chủ tuyệt đối của sân đình: không có bức tường thứ tư ngăn cách người diễn và người xem. Nghệ sĩ ngồi hát trên chiếc chiếu cói giữa sân đình, khán giả vây quanh ba bề bốn bên; tiếng đế của người làng chính là sự đồng vọng, đối thoại bình đẳng với số phận nhân vật. Ở đó, triết lý nhân quả “ở hiền gặp lành, ác giả ác báo” không được rao giảng khô khốc mà thấm sâu vào lòng người qua từng giọt nước mắt và nụ cười sảng khoái.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-amber-950/20 border-l-2 border-amber-500/70 relative">
            <Quote className="w-8 h-8 text-amber-500/20 absolute top-4 right-4" />
            <blockquote className="italic text-amber-200 text-base sm:text-lg leading-relaxed">
              “Chèo là hình thái sân khấu tương tác cộng đồng sớm nhất mà tôi từng chứng kiến. Tính tự do biểu đạt và sự gắn kết của nó vượt xa nhiều quy ước sân khấu phương Tây.”
            </blockquote>
            <p className="text-xs text-stone-400 mt-3 not-italic">
              — GS. Julian Davies, Nhà nghiên cứu nhân học sân khấu phương Đông
            </p>
          </div>

          <p className="text-stone-300 font-light text-base sm:text-lg leading-relaxed">
            Bảo tàng Chèo Số đồng hành cùng hành trình của Việt Nam đệ trình UNESCO công nhận Nghệ thuật Chèo là Di sản Văn hóa Phi vật thể đại diện của Nhân loại. Với nền tảng số hóa đa ngôn ngữ không biên giới, chúng tôi mở rộng cánh cửa để một học giả ở Paris, một sinh viên ở Tokyo hay một du khách ở New York đều có thể lắng nghe tiếng trống rộn rã của một hội làng Bắc Bộ và thấu hiểu chiều sâu tâm hồn Việt Nam.
          </p>
        </div>
      </section>

      {/* =========================================================================
          6. LỜI HỨA VỚI TIỀN NHÂN (LẮNG ĐỌNG)
      ========================================================================= */}
      <footer className="pt-12 border-t border-stone-800/80 space-y-6 text-center max-w-2xl mx-auto">
        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Lời hứa với tiền nhân
        </h3>
        <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed">
          Chúng tôi không tham vọng biến tất cả mọi người thành nghệ sĩ Chèo. Chúng tôi chỉ mong rằng, giữa những ngày tháng bộn bề của cuộc sống hiện đại, khi bất chợt nghe thấy một nhịp trống đế giòn tan hay một câu hát nảy hạt ngân nga, bạn sẽ dừng lại một giây, mỉm cười và nhận ra: <span className="text-amber-300 italic font-medium">Đó chính là cội nguồn của mình.</span>
        </p>

        <div className="pt-6 border-t border-stone-800/50">
          <blockquote className="italic text-amber-200/90 text-base sm:text-lg">
            “Chẳng thèm ăn chả ăn nem,<br className="sm:hidden" /> thèm nghe tiếng trống chèo đem hội làng.”
          </blockquote>
          <p className="text-xs text-stone-500 mt-2 not-italic">
            — Ca dao dân gian Bắc Bộ
          </p>
        </div>
      </footer>
    </article>
  )
}
