export interface SitemapNode {
  id: string
  title: string
  subtitle?: string
  description: string
  category: 'root' | 'lobby' | 'intro' | 'explore' | 'stage' | 'overview' | 'utility' | 'event'
  badge?: string
  icon: string
  highlights?: string[]
  children?: SitemapNode[]
}

export const SITEMAP_DATA: SitemapNode = {
  id: 'root',
  title: 'BẢO TÀNG CHÈO SỐ',
  subtitle: 'Trung tâm bảo tồn & trải nghiệm nghệ thuật Chèo truyền thống',
  description: 'Nền tảng số hóa toàn diện di sản nghệ thuật Chèo Việt Nam, kết hợp công nghệ tương tác 3D, âm thanh vòm và tư liệu lưu trữ lịch sử.',
  category: 'root',
  badge: 'Cổng chính số',
  icon: 'Landmark',
  highlights: ['Không gian bảo tàng số 3D', 'Lưu trữ di sản phi vật thể', 'Tương tác nghệ thuật đa phương tiện'],
  children: [
    {
      id: 'sanh',
      title: 'Sảnh',
      subtitle: 'Không gian đón tiếp & định hướng tham quan',
      description: 'Điểm khởi đầu của hành trình khám phá, kết nối khách tham quan tới các khu vực Giới thiệu, Không gian Trưng bày Khám phá và các Tiện ích số.',
      category: 'lobby',
      badge: 'Điểm kết nối trung tâm',
      icon: 'DoorOpen',
      highlights: ['Bản đồ định vị 3D', 'Hướng dẫn viên ảo AI', 'Giới thiệu các tour tham quan nổi bật'],
      children: [
        // NHÁNH 1: GIỚI THIỆU (Trái)
        {
          id: 'gioi-thieu',
          title: 'Giới thiệu',
          subtitle: 'Khởi nguồn & sứ mệnh dự án',
          description: 'Cung cấp góc nhìn toàn diện về sự ra đời, mục tiêu văn hóa và đội ngũ sáng lập đứng sau Bảo tàng Chèo Số.',
          category: 'intro',
          badge: '4 Chuyên mục',
          icon: 'Info',
          highlights: ['Sứ mệnh tôn vinh di sản Chèo', 'Đội ngũ nghiên cứu & công nghệ', 'Câu chuyện sáng lập'],
          children: [
            {
              id: 'bao-tang-so-cheo',
              title: 'Bảo tàng số “Chèo”',
              subtitle: 'Tổng quan dự án bảo tàng số',
              description: 'Tầm nhìn xây dựng không gian lưu giữ, truyền bá và đưa nghệ thuật Chèo tiếp cận gần gũi hơn với thế hệ trẻ qua công nghệ số.',
              category: 'intro',
              badge: 'Không gian số',
              icon: 'Tv',
              highlights: ['Bảo tồn kỹ thuật số', 'Trải nghiệm không biên giới', 'Tiếp cận thế hệ trẻ']
            },
            {
              id: 'cau-chuyen-hinh-thanh',
              title: 'Câu chuyện hình thành',
              subtitle: 'Hành trình từ ý tưởng đến thực tiễn',
              description: 'Chia sẻ về nguồn cảm hứng, quá trình điền dã sưu tầm tư liệu tại các làng chèo cổ vùng đồng bằng Bắc Bộ.',
              category: 'intro',
              badge: 'Ký sự điền dã',
              icon: 'ScrollText',
              highlights: ['Hành trình tìm về làng chèo', 'Gặp gỡ nghệ nhân gạo cội', 'Số hóa hàng trăm giờ tư liệu']
            },
            {
              id: 'muc-tieu-va-y-nghia',
              title: 'Mục tiêu và ý nghĩa',
              subtitle: 'Giá trị gìn giữ & lan tỏa',
              description: 'Mục tiêu gìn giữ nguyên bản âm sắc, làn điệu, động tác mẫu mực của nghệ thuật Chèo, đồng thời mở ra sân chơi văn hóa đương đại.',
              category: 'intro',
              badge: 'Ý nghĩa nhân văn',
              icon: 'Target',
              highlights: ['Bảo tồn quy chuẩn cổ', 'Giáo dục di sản học đường', 'Kết nối cộng đồng yêu Chèo']
            },
            {
              id: 'doi-ngu-nhom-thuc-hien',
              title: 'Đội ngũ/ nhóm thực hiện',
              subtitle: 'Nghệ nhân, chuyên gia & kỹ sư công nghệ',
              description: 'Sự kết hợp giữa các nghệ nhân ưu tú, nhà nghiên cứu văn hóa dân gian và đội ngũ kỹ sư công nghệ tương tác.',
              category: 'intro',
              badge: 'Nhân sự & Cố vấn',
              icon: 'Users',
              highlights: ['Hội đồng cố vấn nghệ thuật', 'Nhà thiết kế giao diện di sản', 'Nhóm kỹ sư công nghệ số']
            }
          ]
        },

        // NHÁNH 2: KHÁM PHÁ (Giữa)
        {
          id: 'kham-pha',
          title: 'Khám phá',
          subtitle: 'Trải nghiệm nghệ thuật sân khấu Chèo',
          description: 'Khu vực trọng tâm của bảo tàng: tìm hiểu nguồn gốc lịch sử, bước lên sàn diễn ảo, chiêm ngưỡng phục trang và thưởng thức làn điệu.',
          category: 'explore',
          badge: 'Khu vực chính',
          icon: 'Compass',
          highlights: ['Sân khấu 360 độ', 'Kho nhân vật Chèo kinh điển', 'Âm nhạc & dàn nhạc truyền thống'],
          children: [
            // Phân nhánh 2.1: Tổng quan
            {
              id: 'tong-quan',
              title: 'Tổng quan',
              subtitle: 'Bức tranh toàn cảnh về nghệ thuật Chèo',
              description: 'Tìm hiểu nguồn gốc lịch sử từ thời nhà Đinh thế kỷ thứ 10, giá trị nhân bản và công việc thầm lặng phía sau cánh gà.',
              category: 'overview',
              badge: '3 Nội dung',
              icon: 'BookOpen',
              highlights: ['Từ sân đình đến nhà hát lớn', 'Tính triết lý nhân sinh', 'Không gian hậu trường xưa & nay'],
              children: [
                {
                  id: 'lich-su-phat-trien',
                  title: 'Lịch sử phát triển',
                  subtitle: 'Hơn 10 thế kỷ thăng trầm',
                  description: 'Dòng thời gian từ bà tổ nghề Chèo Đào Thị Huệ, Chèo sân đình thế kỷ 10 đến Chèo cung đình và sân khấu Chèo hiện đại thế kỷ 20-21.',
                  category: 'overview',
                  badge: 'Niên biểu lịch sử',
                  icon: 'History',
                  highlights: ['Bà tổ nghệ thuật Chèo', 'Chèo cổ sân đình Bắc Bộ', 'Dấu mốc phát triển qua các triều đại']
                },
                {
                  id: 'gia-tri-van-hoa',
                  title: 'Giá trị văn hoá',
                  subtitle: 'Đạo đức, ước mơ và nụ cười dân gian',
                  description: 'Chèo phản ánh sâu sắc thế giới quan người Việt: tinh thần lạc quan, đạo lý nhân nghĩa, tính phản biện xã hội qua tiếng cười trào lộng.',
                  category: 'overview',
                  badge: 'Di sản tinh thần',
                  icon: 'HeartHandshake',
                  highlights: ['Tiếng cười trào lộng dân gian', 'Đạo lý nhân nghĩa ở đời', 'Bản sắc văn minh lúa nước']
                },
                {
                  id: 'phia-sau-san-khau',
                  title: 'Phía sau sân khấu',
                  subtitle: 'Hậu trường & công phu rèn luyện',
                  description: 'Khám phá nghệ thuật hóa trang mặt nhân vật, góc hóa trang, đạo cụ diễn xuất và sự khổ luyện "nghệ tinh hoa".',
                  category: 'overview',
                  badge: 'Góc hậu trường',
                  icon: 'Sparkles',
                  highlights: ['Nghệ thuật vẽ mặt nhân vật', 'Góc tập dượt của diễn viên', 'Đạo cụ: quạt mo, đòn gánh, mái chèo']
                }
              ]
            },

            // Phân nhánh 2.2: Sân Khấu
            {
              id: 'san-khau',
              title: 'Sân Khấu',
              subtitle: 'Các yếu tố cấu thành tác phẩm Chèo',
              description: 'Trải nghiệm trực quan 4 trụ cột làm nên sự cuốn hút của một vở diễn Chèo: Nhân vật, Trang phục, Âm thanh và Vở diễn kinh điển.',
              category: 'stage',
              badge: '4 Trụ cột biểu diễn',
              icon: 'Drama',
              highlights: ['Mô hình nhân vật tương tác', 'Kho phục trang số 3D', 'Phòng nghe làn điệu chất lượng cao'],
              children: [
                {
                  id: 'nhan-vat',
                  title: 'Nhân vật',
                  subtitle: 'Hệ thống 5 mẫu hình nhân vật chuẩn mực',
                  description: 'Đào (nữ), Kép (nam), Lão (người già), Mụ (phụ nữ trung niên) và Hề Chèo - linh hồn mang lại tiếng cười triết lý sâu cay.',
                  category: 'stage',
                  badge: 'Hệ mẫu nhân vật',
                  icon: 'Smile',
                  highlights: ['Đào thương & Đào lẳng (Thị Mầu)', 'Kép chuẩn mực (Lưu Bình, Trương Viên)', 'Hề áo ngắn & Hề gậy trào phúng']
                },
                {
                  id: 'trang-phuc',
                  title: 'Trang phục',
                  subtitle: 'Màu sắc & biểu tượng phục trang truyền thống',
                  description: 'Khám phá áo tứ thân, yếm đào, nón quai thao, thắt lưng bao cùng các quy ước nghiêm ngặt về màu sắc trang phục trong Chèo cổ.',
                  category: 'stage',
                  badge: 'Phục trang 3D',
                  icon: 'Shirt',
                  highlights: ['Áo tứ thân & Nón quai thao', 'Quy tắc phối màu sắc trang phục', 'Mũ mãng, hia hài các vai vương hầu']
                },
                {
                  id: 'am-thanh',
                  title: 'Âm Thanh',
                  subtitle: 'Làn điệu & Dàn nhạc dân tộc',
                  description: 'Dàn nhạc Chèo với tiếng Trống cơm, Trống đế, Đàn nguyệt, Nhị, Sáo trúc và hơn 200 làn điệu Chèo đặc sắc như Quân tử vu dịch, Luyện năm cung.',
                  category: 'stage',
                  badge: '3 Chuyên đề',
                  icon: 'Music',
                  highlights: ['Tiếng trống đế giòn giã', 'Đàn nhị, nguyệt, sáo trúc hòa âm', 'Các làn điệu cổ: Sa lệch, Cách cú, Hề mồi'],
                  children: [
                    {
                      id: 'dan-nhac-bat-am',
                      title: 'Dàn Nhạc Bát Âm',
                      subtitle: '6 Nhạc khí cổ truyền chuẩn mực',
                      description: 'Khám phá Trống đế chỉ huy, Đàn nguyệt, Đàn nhị, Sáo trúc, Trống cơm và Thanh la mõ.',
                      category: 'stage',
                      badge: '6 Nhạc khí',
                      icon: 'Music',
                      highlights: ['Trống đế chỉ huy', 'Đàn nguyệt & Đàn nhị', 'Quy tắc hòa âm'],
                      children: [
                        {
                          id: 'trong-de',
                          title: 'Trống Đế',
                          subtitle: 'Trưởng ban tiết tấu',
                          description: 'Chỉ huy nhịp thở của chiếu Chèo, gõ mặt tùng trầm và gõ tang cắc đanh giòn.',
                          category: 'stage',
                          badge: 'Tiết tấu',
                          icon: 'Music',
                          highlights: ['Gõ mặt & Gõ tang', 'Dùi lim', 'Chỉ huy đào kép']
                        },
                        {
                          id: 'dan-nguyet',
                          title: 'Đàn Nguyệt',
                          subtitle: 'Lãnh tấu giai điệu',
                          description: 'Hai dây tơ gảy khúc tự sự dìu dặt, luyến láy nâng niu từng câu hát nhả chữ.',
                          category: 'stage',
                          badge: 'Giai điệu',
                          icon: 'Music',
                          highlights: ['Hai dây tơ', 'Ngón nhấn ngón vuốt', 'Nâng đỡ giọng hát']
                        },
                        {
                          id: 'dan-nhi',
                          title: 'Đàn Nhị',
                          subtitle: 'Biểu cảm nội tâm',
                          description: 'Cung vĩ miết trên hai dây tơ nỉ non da diết như giọt nước mắt oan khiên thân phận.',
                          category: 'stage',
                          badge: 'Bi cảm',
                          icon: 'Music',
                          highlights: ['Cung vĩ lông ngựa', 'Thân bịt da rắn', 'Tiếng khóc ai oán']
                        },
                        {
                          id: 'sao-truc',
                          title: 'Sáo Trúc',
                          subtitle: 'Thanh âm đồng nội',
                          description: 'Ống trúc mộc mạc vút cao lơ lửng lưng trời mang hồn quê châu thổ Kinh Bắc.',
                          category: 'stage',
                          badge: 'Đồng nội',
                          icon: 'Radio',
                          highlights: ['Ống trúc tự nhiên', 'Rung vòm họng', 'Gió đồng Kinh Bắc']
                        },
                        {
                          id: 'trong-com',
                          title: 'Trống Cơm',
                          subtitle: 'Âm sắc lúa nước',
                          description: 'Dán cơm nếp ấm tạo âm trầm ngọt ngào, vỗ hai bàn tay hòa nhịp giao duyên.',
                          category: 'stage',
                          badge: 'Giao duyên',
                          icon: 'Sparkles',
                          highlights: ['Dán cơm nếp', 'Vỗ hai lòng tay', 'Tang tình rộn rã']
                        },
                        {
                          id: 'thanh-la-mo',
                          title: 'Thanh La & Mõ',
                          subtitle: 'Tiết tấu trào lộng',
                          description: 'Thanh la ngân xa kết hợp mõ gỗ đanh giòn, dập phách tạo tiếng cười vai Hề.',
                          category: 'stage',
                          badge: 'Trào lộng',
                          icon: 'Smile',
                          highlights: ['Thanh la đồng', 'Mõ gỗ đanh', 'Tiếng cười Hề Chèo']
                        }
                      ]
                    },
                    {
                      id: 'lan-dieu',
                      title: 'Kho Tàng Làn Điệu',
                      subtitle: '200+ làn điệu mẫu mực',
                      description: 'Phòng thẩm âm tương tác với Đào liễu, Quân tử vu dịch, Sa lệch chênh, Hề mồi.',
                      category: 'stage',
                      badge: 'Thẩm âm',
                      icon: 'Radio',
                      highlights: ['Đào liễu trữ tình', 'Quân tử vu dịch bi ai', 'Kỹ thuật nảy hạt buông bắt']
                    },
                    {
                      id: 'tiet-tau',
                      title: 'Tiết Tấu & Nhịp Trống',
                      subtitle: '4 chặng phát triển kịch tính',
                      description: 'Quy luật tiết tấu đêm diễn từ khởi nhạc mở màn, hát xưng danh đến trào lộng hề chèo.',
                      category: 'stage',
                      badge: 'Nhịp phách',
                      icon: 'Sparkles',
                      highlights: ['Mẫu nhịp trống tùng cắc', '4 Chặng đêm diễn', 'Phi trống bất thành Chèo']
                    }
                  ]
                },
                {
                  id: 'tac-pham-tieu-bieu',
                  title: 'Tác phẩm tiêu biểu',
                  subtitle: 'Những vở Chèo bất hủ vượt thời gian',
                  description: 'Thưởng thức các trích đoạn kinh điển của Quan Âm Thị Kính, Kim Nhan (Xúy Vân giả dại), Lưu Bình - Dương Lễ, Trương Viên.',
                  category: 'stage',
                  badge: 'Kiệt tác sân khấu',
                  icon: 'Film',
                  highlights: ['Quan Âm Thị Kính', 'Xúy Vân giả dại (Kim Nhan)', 'Lưu Bình - Dương Lễ', 'Nghêu Sò Ốc Hến']
                }
              ]
            },

            // Phân nhánh 2.3: Chèo hiện đại
            {
              id: 'cheo-hien-dai',
              title: 'Chèo hiện đại',
              subtitle: 'Sức sống mới & Sự cách tân đương đại',
              description: 'Khám phá sự tiếp biến của Chèo trong đời sống đương đại: kết hợp ánh sáng hiện đại, kịch bản đề tài mới và các dự án nhạc kịch cách tân.',
              category: 'explore',
              badge: 'Chuyển mình thời đại',
              icon: 'Radio',
              highlights: ['Chèo thể nghiệm đương đại', 'Đề tài hiện đại trên nền làn điệu cổ', 'Đưa Chèo ra sân khấu quốc tế']
            }
          ]
        },

        // NHÁNH 3: TIỆN ÍCH (Phải)
        {
          id: 'tien-ich',
          title: 'Tiện ích',
          subtitle: 'Dịch vụ tương tác & Thông tin người dùng',
          description: 'Tập hợp các công cụ hỗ trợ trải nghiệm bảo tàng, tra cứu dữ liệu, đặt vé biểu diễn trực tuyến và đóng góp ý kiến.',
          category: 'utility',
          badge: '6 Tiện ích',
          icon: 'Wrench',
          highlights: ['Tra cứu tư liệu nhanh chóng', 'Đặt vé trực tuyến an toàn', 'Bản đồ chỉ dẫn thông minh'],
          children: [
            {
              id: 'tim-kiem',
              title: 'Tìm kiếm',
              subtitle: 'Bộ lọc thông minh theo từ khóa & chủ đề',
              description: 'Tra cứu nhanh làn điệu, tên trích đoạn, nghệ nhân, nhân vật, nhạc cụ và các bài viết nghiên cứu về Chèo.',
              category: 'utility',
              badge: 'Bộ lọc tra cứu',
              icon: 'Search',
              highlights: ['Tìm kiếm bằng giọng nói & văn bản', 'Lọc theo làn điệu/thể loại', 'Đề xuất thông minh theo ngữ cảnh']
            },
            {
              id: 'danh-gia-cai-thien',
              title: 'Đánh giá/ Cải thiện',
              subtitle: 'Khảo sát cảm nghĩ & đóng góp ý kiến',
              description: 'Nơi khách tham quan gửi gắm nhận xét, chia sẻ trải nghiệm và gợi ý tính năng để bảo tàng số ngày một hoàn thiện hơn.',
              category: 'utility',
              badge: 'Phản hồi khách',
              icon: 'MessageSquareStar',
              highlights: ['Đánh giá sao trải nghiệm', 'Góp ý giao diện & nội dung', 'Bình chọn trích đoạn Chèo yêu thích']
            },
            {
              id: 'ban-do-bao-tang',
              title: 'Bản đồ bảo tàng',
              subtitle: 'Sơ đồ định vị các phòng trưng bày số',
              description: 'Bản đồ tương tác 3D/2D hướng dẫn vị trí các gian phòng trưng bày, phòng chiếu phim trích đoạn và quầy dịch vụ số.',
              category: 'utility',
              badge: 'Bản đồ 3D',
              icon: 'Map',
              highlights: ['Định vị gian trưng bày', 'Lộ trình tham quan gợi ý (30-60 phút)', 'Tự do di chuyển qua các phòng']
            },
            {
              id: 'kho-tu-lieu',
              title: 'Kho tư liệu',
              subtitle: 'Thư viện số hóa sách, băng từ & ghi âm cổ',
              description: 'Lưu trữ tài liệu quý hiếm: bản ghi âm giọng hát của các nghệ nhân tiền bối, sách chuyên khảo về Chèo, kịch bản gốc thời xưa.',
              category: 'utility',
              badge: 'Thư viện số',
              icon: 'FolderGit2',
              highlights: ['Bản ghi âm đĩa hát 78 vòng xưa', 'Sách chuyên khảo & kịch bản gốc', 'Ảnh chụp tư liệu thập niên 1950-1980']
            },
            {
              id: 'tham-quan-va-su-kien',
              title: 'Tham quan và sự kiện',
              subtitle: 'Lịch trình, địa điểm & mua vé biểu diễn',
              description: 'Cập nhật các chương trình biểu diễn Chèo thực tế và trực tuyến, hỗ trợ đặt vé và thông tin chi tiết các nhà hát Chèo cả nước.',
              category: 'event',
              badge: '5 Dịch vụ sự kiện',
              icon: 'CalendarDays',
              highlights: ['Cập nhật lịch diễn thực tế', 'Hệ thống đặt vé giữ chỗ', 'Danh bạ nhà hát Chèo toàn quốc'],
              children: [
                {
                  id: 'thong-bao-su-kien',
                  title: 'Thông báo sự kiện',
                  subtitle: 'Tin tức hội thảo & chuyên đề nghệ thuật',
                  description: 'Các sự kiện tọa đàm, giao lưu cùng nghệ nhân Chèo, ngày hội di sản văn hóa và workshop tập hát Chèo cho giới trẻ.',
                  category: 'event',
                  badge: 'Tin tức & Hội thảo',
                  icon: 'Bell',
                  highlights: ['Tọa đàm cùng nghệ nhân', 'Workshop tập hát Chèo cuối tuần', 'Festival Chèo toàn quốc']
                },
                {
                  id: 'lich-bieu-dien',
                  title: 'Lịch biểu diễn',
                  subtitle: 'Lịch diễn tại các rạp & sân đình định kỳ',
                  description: 'Lịch biểu diễn cập nhật theo tuần và tháng của Nhà hát Chèo Việt Nam, Nhà hát Chèo Hà Nội, Chèo Ninh Bình, Thái Bình...',
                  category: 'event',
                  badge: 'Lịch chiếu',
                  icon: 'Calendar',
                  highlights: ['Lịch diễn cuối tuần', 'Đêm diễn Chèo cổ sân đình', 'Suất diễn trực tuyến Live stream']
                },
                {
                  id: 'dat-mua-ve',
                  title: 'Đặt mua vé',
                  subtitle: 'Cổng bán vé điện tử tiện lợi',
                  description: 'Xem sơ đồ ghế ngồi rạp hát, chọn chỗ và thanh toán vé điện tử nhanh chóng bằng mã QR hoặc thẻ ngân hàng.',
                  category: 'event',
                  badge: 'Vé điện tử QR',
                  icon: 'Ticket',
                  highlights: ['Chọn vị trí ghế ngồi trực quan', 'Thanh toán trực tuyến quét mã QR', 'Vé điện tử gửi qua Email/SMS']
                },
                {
                  id: 'dia-diem-bieu-dien',
                  title: 'Địa điểm biểu diễn',
                  subtitle: 'Mạng lưới các nhà hát & không gian diễn Chèo',
                  description: 'Danh sách địa chỉ, hướng dẫn đường đi tới các rạp Chèo tiêu biểu tại Hà Nội, Bắc Ninh, Hưng Yên, Thái Bình, Nam Định...',
                  category: 'event',
                  badge: 'Địa điểm rạp hát',
                  icon: 'MapPin',
                  highlights: ['Nhà hát Chèo Việt Nam (Hà Nội)', 'Rạp Đại Nam (Phố Huế, HN)', 'Sân đình các làng chèo cổ Bắc Bộ']
                },
                {
                  id: 'thong-tin-tham-quan',
                  title: 'Thông tin tham quan',
                  subtitle: 'Nội quy, giá vé & hướng dẫn trải nghiệm',
                  description: 'Hướng dẫn chi tiết cho khách du lịch và đoàn học sinh/sinh viên: thời gian mở cửa, vé ưu đãi, dịch vụ thuyết minh tai nghe.',
                  category: 'event',
                  badge: 'Cẩm nang khách',
                  icon: 'HelpCircle',
                  highlights: ['Giờ đón tiếp khách tham quan', 'Chính sách vé học sinh/sinh viên', 'Thiết bị thuyết minh tự động (Audio Guide)']
                }
              ]
            },
            {
              id: 'thong-tin-va-ho-tro',
              title: 'Thông tin và hỗ trợ',
              subtitle: 'Tổng đài tư vấn & kênh trợ giúp khách',
              description: 'Kênh liên hệ trực tiếp, câu hỏi thường gặp (FAQ), hướng dẫn sử dụng kính VR và đường dây nóng hỗ trợ khách tham quan.',
              category: 'utility',
              badge: 'Trợ giúp 24/7',
              icon: 'Headphones',
              highlights: ['Đường dây nóng hỗ trợ khách', 'Câu hỏi thường gặp FAQ', 'Hướng dẫn sử dụng tính năng 3D/VR']
            }
          ]
        }
      ]
    }
  ]
}

/** Flatten all nodes for quick search & counting */
export function getAllNodes(node: SitemapNode = SITEMAP_DATA): SitemapNode[] {
  const result: SitemapNode[] = [node]
  if (node.children && node.children.length > 0) {
    for (const child of node.children) {
      result.push(...getAllNodes(child))
    }
  }
  return result
}
