# BÁO CÁO TOÀN DIỆN: KIỂM TOÁN HỆ THỐNG UI, STYLING VÀ KIẾN TRÚC COMPONENT BẢO TÀNG CHÈO SỐ
**Thực hiện bởi**: Explorer Survey 2 (`teamwork_preview_explorer`)  
**Thời gian hoàn thành**: 2026-09-18T17:38:00Z  
**Tài liệu yêu cầu gốc**: `.agents/ORIGINAL_REQUEST.md`  

---

## TỔNG QUAN KẾT QUẢ KIỂM TOÁN (EXECUTIVE SUMMARY)
Toàn bộ ứng dụng Bảo Tàng Chèo Số (React 19 + Vite 8 + Tailwind CSS v4) sở hữu nền tảng mỹ thuật định hướng theo phong cách di sản kinh điển (Playfair Display, Be Vietnam Pro, bảng màu son thắm - gỗ mộc - vàng thiếp). Tuy nhiên, trải nghiệm người dùng hiện tại đang bị cản trở bởi **7 vị trí lạm dụng UI tab** (che khuất 75%–80% nội dung hiện vật quý), **4 điểm nghẽn về mật độ văn bản dồn ép** vi phạm trực tiếp yêu cầu R4/phạm vi mở rộng, và **trang hub của 7 phân mục** chỉ hiển thị dạng lưới thẻ con xơ xác không có banner điểm nhấn. Báo cáo này thiết lập bản đồ định vị chính xác từng dòng code và đề xuất kiến trúc 5 bộ component tái sử dụng chuẩn hóa để đội ngũ triển khai thay thế triệt để.

---

## 1. OBSERVATION (QUAN SÁT THỰC NGHIỆM TRỰC TIẾP)

### 1.1 Khảo sát Hệ thống Styling Framework & Design System
* **Framework**: Tailwind CSS v4 (`@tailwindcss/vite` ^4.3.3, `tailwindcss` ^4.3.3 trong `package.json:13, 17`). Không có file `tailwind.config.js` truyền thống; cấu hình hoàn toàn qua CSS token `@theme` tại `src/index.css:3-6`.
* **Typography**:
  - Font Serif (Tiêu đề, trích dẫn thơ, trướng cổ): `Playfair Display` (`src/index.css:4`, `index.html:10`).
  - Font Sans (Nội dung, meta badge, phụ đề): `Be Vietnam Pro` (`src/index.css:5`, `index.html:10`).
* **Bảng màu chủ đạo (Cung đình & Chiếu chèo sân đình)**:
  - Nền tối di sản: `#120f0d` (màu gỗ lim ngâm trầm mặc), `#16120f` (nền thẻ card), `#0e0b09` (footer).
  - Màu chữ: `#e7e0d8` (sắc giấy dó/ngà voi), `text-white`, `text-stone-300`, `text-stone-400`.
  - Màu nhấn (Accent): Vàng son thiếp (`amber-400`, `amber-500`, `amber-600`), Đỏ chu sa/yếm đào (`red-800`, `rose-600`, `#991b1b`).
* **Sự không nhất quán về styling phát hiện được**:
  - Một số component đời đầu (`src/components/interactive/AudioSamplePlayer.tsx`, `CharactersGallery.tsx`, `CostumesShowcase.tsx`, `PlaysShowcase.tsx`) sử dụng lớp màu `slate` (`text-slate-400`, `bg-slate-900`, `border-white/10`, `bg-[#07090e]`) mang cảm giác công nghệ lạnh, bị lệch khỏi bảng màu ấm cổ kính `stone/amber` của toàn trang.
* **Cảnh báo Linter (`oxlint`)**:
  - `src/components/interactive/AudioSamplePlayer.tsx:152:62`: `Date.now()` được gọi trực tiếp trong quá trình render thuộc tính inline style của waveform gây cảnh báo purity `react(purity): Cannot call impure function during render`.

---

### 1.2 Danh mục Toàn bộ 7 Vị trí UI Tab Cần Chuyển Đổi (Tab Inventory)

| STT | File & Vị trí dòng | State Quản Lý Tab | Hiện Trạng Tab Đang Tồn Tại | Giải Pháp Chuyển Đổi Đề Xuất |
| :--- | :--- | :--- | :--- | :--- |
| **1** | `src/components/HomePage.tsx:22, 240-258` | `stageTab: 'audio' \| 'characters' \| 'costumes' \| 'ticket'` | 4 nút tab ngang ẩn 3 trong 4 trụ cột sân khấu trên trang chủ. | Chuyển thành **Multi-Exhibit Curated Showcase** (Lưới trưng bày đa phân khu tương tác đồng thời) với card preview trực quan. |
| **2** | `src/components/interactive/ModernCheoShowcase.tsx:126, 164-189` | `activeTab: 'timeline' \| 'masterpieces' \| 'artists' \| 'unesco'` + `selectedMilestone` (dòng 127) | 4 tab phân mảnh lịch sử, tác phẩm, nghệ nhân và UNESCO; bên trong tab timeline lại có 4 nút năm lồng nhau. Component này thậm chí **chưa được gắn vào MuseumView**. | Chuyển thành **Triển Lãm Đa Tầng Chèo Hiện Đại (`ModernCheoExhibition`)**: Dải Timeline 4 mốc thời gian -> Grid Danh nhân tiên phong -> Lưới Tác phẩm đột phá -> Không gian Hồ sơ UNESCO. |
| **3** | `src/components/interactive/AudioSamplePlayer.tsx:54, 88-107` | `selectedMelody: Melody` | 4 tab nút bấm chuyển làn điệu đơn điệu (`Đào liễu`, `Quân tử vu dịch`, `Sa lệch`, `Hề mồi`), không có timeline, không có card dàn nhạc cụ. | Chuyển thành **Timeline 4 Hồi Âm Sắc Đêm Chèo** + **Lưới Thẻ Card 6 Nhạc Cụ Dàn Nhạc Chèo Cổ** có audio sample và lời thơ cổ. |
| **4** | `src/components/interactive/CharactersGallery.tsx:74, 91-105` | `selectedChar: CharacterArchetype` | 5 tab chọn từng nhân vật (`Đào`, `Kép`, `Hề`, `Lão`, `Mụ`), ẩn 4/5 nhân vật khi người dùng xem. | Chuyển thành **Showcase 5 Mẫu Hình Nhân Vật Ước Lệ**: Hiển thị đồng thời 5 card nhân vật với bảng màu đại diện, trích thoại bất hủ, quy ước vũ đạo mở rộng tại chỗ. |
| **5** | `src/components/interactive/CostumesShowcase.tsx:63, 87-102` | `selectedCostume: CostumeItem` | 5 tab chuyển hiện vật trang phục (`Áo tứ thân`, `Nón quai thao`, `Yếm đào`, `Thắt lưng bao`, `Mũ cánh chuồn`). | Chuyển thành **Không Gian Trưng Bày Phục Sức Đa Tầng**: Các thẻ card hiện vật trực quan kèm ý nghĩa ngũ hành, chất liệu lụa tơ tằm và câu ca dao dẫn nhập. |
| **6** | `src/components/interactive/PlaysShowcase.tsx:54, 78-93` | `selectedPlay: ChèoPlay` | 4 tab chọn vở diễn (`Quan Âm Thị Kính`, `Xúy Vân`, `Lưu Bình`, `Nghêu Sò`), che khuất các kiệt tác khác. | Chuyển thành **Phòng Trưng Bày Tứ Đại Kiệt Tác**: Thẻ card sử thi đa thông số (Cốt truyện, Triết lý nhân sinh, Trích đoạn để đời). |
| **7** | `src/components/interactive/TimelineWidget.tsx:63, 87-105` | `activeEra: Milestone` | 4 nút chọn thế kỷ hoạt động như tab switcher thay vì một trục thời gian trực quan liên tục. | Chuyển thành **Dòng Thời Gian Lịch Sử 10 Thế Kỷ (Vertical/Horizontal Visual Timeline)** với trục kết nối, mốc son lịch sử và phù điêu thời đại. |

---

### 1.3 Khảo sát Các Điểm Nghẽn Mật Độ Văn Bản & Text Phụ Dài Dòng (R4 Audit)

* **Hotspot 1: Header trang nội dung tại `src/components/MuseumView.tsx:109-123`**:
  - Quan sát: Dưới thẻ `<h1>{route.title}</h1>`, đoạn văn mô tả `{route.description}` dài 30-50 từ bị đặt trực tiếp thành một khối văn bản đặc quánh không có cấu trúc phân tầng. Subtitle trong `sitemapRoutes.ts` hoàn toàn bị bỏ rơi hoặc nhồi nhét.
  - Hậu quả: Người xem không nắm bắt được thông tin phân loại nhanh (Niên đại, Điểm nổi bật, Xuất xứ, Thể loại).
* **Hotspot 2: Khối danh sách phòng con của Trang Hub tại `src/components/MuseumView.tsx:140-178`**:
  - Quan sát: Khi `route.isHub === true`, component chỉ render một lưới 2 cột `grid grid-cols-1 md:grid-cols-2` sơ sài với tiêu đề và mô tả bị cắt ngắn `line-clamp-2`.
  - Hậu quả: Vi phạm trực tiếp R1 và yêu cầu mở rộng số 1 của User: trang trung gian xơ xác, thiếu chủ đề, không có số liệu thống kê truyền cảm hứng.
* **Hotspot 3: Tiểu luận văn hóa tại `src/components/MuseumView.tsx:191-219`**:
  - Quan sát: Mọi đoạn văn trong `detailData.sections.paragraphs` đều được map trực tiếp vào các thẻ `<p>`. Các nội dung vốn có tính liệt kê (ví dụ: "1. Bảo tồn nguyên trạng: ...", "Chặng 1: ...") bị biến thành chuỗi văn bản dài lê thê.
* **Hotspot 4: Dữ liệu Subtitle dài dòng trong `src/data/sitemapRoutes.ts`**:
  - Ví dụ điển hình:
    - `/kham-pha/tong-quan/lich-su-phat-trien`: Subtitle `"Hơn 10 thế kỷ thăng trầm cùng vận mệnh dân tộc"`
    - `/kham-pha/san-khau/trang-phuc`: Subtitle `"Màu sắc, chất liệu & biểu tượng phục trang truyền thống"`
    - `/kham-pha/san-khau/am-thanh`: Subtitle `"Dàn nhạc dân tộc & hơn 200 làn điệu Chèo cổ"`
    - `/tien-ich/kho-tu-lieu`: Subtitle `"Thư viện số hóa đĩa than 78 vòng, sách & kịch bản cổ"`
  - Cần bóc tách: Thay vì đặt một câu subtitle dài, tách thành cụm meta badges ngắn gọn: `[Niên đại: 10 Thế Kỷ]`, `[Làn điệu: 200+]`, `[Dàn nhạc: Bát âm dân tộc]`.

---

### 1.4 Đánh giá Hiện Trạng Các Thành Phần UI (Cards, Banners, Timelines, Audio)

* **Banner**:
  - `HomePage.tsx` đã có Banner ảnh nghệ thuật sân đình đẹp (`/images/cheo_dinh_lang.jpg`) kèm chỉ số (Thế kỷ X, 200+ làn điệu, 5 mẫu).
  - Tuy nhiên, **tất cả 7 trang Hub con** (`/gioi-thieu`, `/kham-pha`, `/tien-ich`, `/kham-pha/tong-quan`, `/kham-pha/san-khau`, `/tien-ich/tham-quan-va-su-kien`, `/`) khi duyệt qua `MuseumView` lại **hoàn toàn không có Exhibition Banner** nào!
* **Cards**:
  - Hệ thống thẻ card hiện tại dùng chung bo góc `rounded-2xl`, viền `border-stone-800`.
  - Thiếu các thuộc tính phụ trợ: badge phân loại, key-values, hiệu ứng chiều sâu khi hover, và trích đoạn trực quan.
* **Audio Player**:
  - `AudioSamplePlayer.tsx` hiện tại chỉ hỗ trợ mô phỏng sóng âm tĩnh và chuyển đổi giữa 4 bài hát.
  - Thiếu hoàn toàn cấu trúc hành trình kịch tính của đêm diễn Chèo (Hồi 1 đến Hồi 4) và thiếu thẻ chi tiết cho từng nhạc cụ theo yêu cầu R3.
* **Modal**:
  - `SearchModal.tsx` và `SitemapTree.tsx` (modal cây sơ đồ) hoạt động tốt, thao tác phím ESC và nhấp nền đóng mượt mà. Cần chuẩn hóa màu sắc modal `SitemapTree` về tone màu di sản ấm thay vì tone xanh công nghệ `#0c101a`.

---

## 2. LOGIC CHAIN (CHUỖI SUY LUẬN TỪ QUAN SÁT ĐẾN GIẢI PHÁP)

1. **Từ Quan sát 1.2 (Lạm dụng Tab)**:
   - *Suy luận*: Giao diện bảo tàng số khác với ứng dụng quản trị dạng dashboard. Trên không gian triển lãm nghệ thuật, người tham quan cần trải nghiệm thị giác mở (open visual exhibition), có thể cuộn và quét nhanh toàn cảnh thay vì phải bấm từng tab để "mở hé" từng hiện vật. Việc dùng tab biến các kiệt tác nghệ thuật như 5 mẫu nhân vật hay tứ đại kiệt tác trở nên khuất lấp.
   - *Hành động*: Chuyển đổi toàn bộ 7 cụm tab thành dạng danh mục thẻ đa tầng (Multi-tier Grid Showcase) hoặc dòng thời gian tiến trình (Linear Journey).

2. **Từ Quan sát 1.3 (Dồn ép Subtitle & Đoạn văn đặc)**:
   - *Suy luận*: Theo tâm lý học nhận thức người dùng (Hick's Law & F-shaped pattern), những đoạn văn dài đặc quánh dưới tiêu đề khiến mắt người đọc bỏ qua (banner blindness). Việc chia nhỏ thông tin thành huy hiệu thông số (Meta Badges), viên thuốc thuộc tính (Feature Pills), và cặp Thuộc tính - Giá trị (Key-Value Pairs) giúp nâng cao tốc độ tiếp thu thông tin lên gấp nhiều lần, tạo phong cách đồ họa sang trọng như tạp chí di sản thế giới (Smithsonian, National Geographic).
   - *Hành động*: Xây dựng bộ component atomic `MetaBadge`, `FeaturePill`, `KeyValueGrid` và áp dụng đồng bộ cho tiêu đề trang và các phân đoạn bài viết.

3. **Từ Quan sát 1.1 & 1.4 (Trang Hub sơ sài & Thiếu Banner)**:
   - *Suy luận*: Khi người dùng nhấp vào `/kham-pha` hay `/gioi-thieu`, họ cần một "cánh cổng không gian" (Exhibition Hub Banner) định hình tinh thần của phòng trưng bày, đi kèm các số liệu ấn tượng khơi gợi tính tò mò. Việc chỉ hiển thị danh sách 3 thẻ card phẳng không kèm hình ảnh hay điểm nhấn khiến người dùng cảm thấy web cụt lủn, thiếu chiều sâu.
   - *Hành động*: Thiết kế mẫu component `ExhibitionHubBanner` và `HubShowcase` đồng bộ cho toàn bộ 7 trang Hub.

4. **Từ Quan sát 1.2 & R3 (Trang Âm Thanh)**:
   - *Suy luận*: Âm nhạc Chèo không phải là danh sách bài hát ngẫu nhiên (playlist MP3), mà là **nghệ thuật dẫn dắt kịch tính** của cả một đêm Chèo truyền thống từ lúc thúc trống mở màn đến khi kết màn hoan hỉ. Đồng thời, dàn nhạc Chèo có cấu trúc nhạc cụ bát âm rất đặc thù.
   - *Hành động*: Tách trang Âm Thanh thành 2 tầng rõ rệt: Tầng 1 là `CheoSoundJourneyTimeline` (Hành trình 4 hồi diễn xướng), Tầng 2 là `OrchestraInstrumentsGrid` (Card 6 nhạc cụ chi tiết có âm thanh và thơ cổ).

---

## 3. CAVEATS (GIỚI HẠN & ĐIỀU KIỆN RÀNG BUỘC)

1. **Phạm vi quyền hạn**: Explorer Survey 2 hoàn toàn tuân thủ nguyên tắc **READ-ONLY**, không chỉnh sửa bất kỳ tệp nguồn nào ngoài thư mục `.agents/explorer_survey_2/`.
2. **Nguồn âm thanh**: Dự án hiện không có sẵn các tệp `.mp3` local trong thư mục `public/`. Bộ component audio player được thiết kế tương thích với hệ thống phát âm thanh Web Audio API / Audio synthesizer mô phỏng nhịp trống và âm thanh truyền thống hoặc sẵn sàng nhận URL file audio thực tế khi có tài nguyên.
3. **Tính toàn vẹn TypeScript**: Mọi interface được đề xuất đều tương thích với cấu trúc định tuyến của `sitemapRoutes.ts` và `pageDetailsData.ts`. Quá trình chuyển đổi tab sang card không phá vỡ bất kỳ kiểu dữ liệu hiện hữu nào.

---

## 4. CONCLUSION & RECOMMENDED UI COMPONENT BLUEPRINTS

Dưới đây là đặc tả chi tiết 5 mẫu Component kiến trúc chuẩn hóa đề xuất cho đội ngũ thực thi:

### 4.1 Component 1: Exhibition Hub Banner & Showcase Pattern (`ExhibitionHubBanner.tsx`)
* **Mục đích**: Áp dụng cho 7 trang Hub (`/`, `/gioi-thieu`, `/kham-pha`, `/kham-pha/tong-quan`, `/kham-pha/san-khau`, `/tien-ich`, `/tien-ich/tham-quan-va-su-kien`).
* **Cấu trúc UI**:
  1. *Hero Banner Container*: Gradient chuyển sắc từ đỏ thẫm kinh kỳ (`from-red-950/60 via-[#181310] to-[#120f0d]`), viền son `border-amber-800/40`, hoa văn chìm.
  2. *Chỉ số văn hóa nổi bật (Key Metric Counters)*: 3 - 4 hộp số liệu điểm nhấn (ví dụ trang `/kham-pha`: `10+ Thế Kỷ`, `200+ Làn Điệu`, `5 Mẫu Nhân Vật`, `4 Đại Kiệt Tác`).
  3. *Lưới Thẻ Trưng Bày Đa Tầng (Multi-tier Room Cards)*: Thay thế hoàn toàn thẻ card 2 cột cũ. Mỗi thẻ phòng con bao gồm:
     - Số La Mã định vị phòng (Phòng I, II, III).
     - Tiêu đề font Serif nghệ thuật.
     - Cụm huy hiệu thuộc tính (ví dụ: `[Tư liệu 3D]`, `[Ghi âm mẫu]`, `[Trích đoạn kinh điển]`).
     - Tóm tắt cốt lõi 1 câu súc tích.
     - Danh sách 3 gạch đầu dòng điểm nhấn khám phá (bullet pills).
     - Nút CTA "Bước vào không gian di sản" có hiệu ứng mũi tên trượt mượt mà.

### 4.2 Component 2: 4-Phase Chèo Night Sound Journey Component (`CheoSoundJourneyTimeline.tsx`)
* **Mục đích**: Trực quan hóa tiến trình âm thanh đêm Chèo theo chuẩn R3 tại `/kham-pha/san-khau/am-thanh`.
* **Cấu trúc 4 Hồi Kịch Tính**:
  - **Hồi 1: Hiệu Lệnh Khởi Nhạc & Nhịp Trống Mở Màn**
    - *Nhạc cụ*: Trống cái, Trống đế (nhịp thúc giục liên hồi).
    - *Tính chất âm sắc*: Rộn rã, náo nức, báo hiệu hội làng bắt đầu.
    - *Làn điệu/Lối*: Đánh trống dạo đầu, điểm ba hồi chín tiếng.
  - **Hồi 2: Hát Xưng Danh & Ra Ngô Ra Khoai**
    - *Nhạc cụ*: Trống đế điểm phách, Thanh la, Kèn bóp.
    - *Tính chất âm sắc*: Dõng dạc, minh bạch, lôi cuốn người nghe nhập cuộc.
    - *Làn điệu/Lối*: Lối Hát Nói, Nói Lối, Hát Vỡ Nước Nhập Cuộc ("Tôi ra đây có phải xưng danh không nhỉ?").
  - **Hồi 3: Làn Điệu Trữ Tình & Tự Sự Khắc Khoải**
    - *Nhạc cụ*: Đàn nguyệt, Đàn nhị, Sáo trúc, Đàn bầu.
    - *Tính chất âm sắc*: Trầm lắng, thiết tha, chất chứa nỗi niềm nhân thế.
    - *Làn điệu/Lối*: Điệu Đào Liễu, Quân Tử Vu Dịch, Luyện Năm Cung, Sử Rầu.
  - **Hồi 4: Tiếng Cười Trào Lộng & Tiết Tấu Hoan Hỉ**
    - *Nhạc cụ*: Trống đế dồn dập, Mõ tre, Thanh la giòn giã.
    - *Tính chất âm sắc*: Hài hước, châm biếm sâu cay, kết thúc viên mãn.
    - *Làn điệu/Lối*: Hề Gậy, Hề Mồi, Sắp Chợ Duyên, Bình Thảo.
* **Tính năng tương tác**:
  - Dòng thời gian nối liền 4 trạm bằng trục chỉ báo ánh vàng son.
  - Mỗi trạm có nút nghe thử âm thanh, visualizer sóng âm động và trích đoạn lời ca/thơ cổ tương ứng.

### 4.3 Component 3: Orchestra Instruments Showcase Grid (`OrchestraInstrumentsGrid.tsx`)
* **Mục đích**: Triển lãm độc lập dàn nhạc cụ cổ truyền của Chèo (đáp ứng trọn vẹn R3).
* **Danh sách 6 Nhạc Cụ Mẫu Mực**:
  1. **Trống Đế (Linh hồn nhịp phách)**: Trọng tài và nhạc trưởng của chiếu chèo, điều tiết nhịp điệu và đối đáp cùng nhân vật qua tiếng "tùng", "cắc".
  2. **Trống Cơm (Âm trầm ấm nghĩa tình)**: Đệm cho các làn điệu trữ tình, gợi vẻ mộc mạc của làng quê lúa nước.
  3. **Đàn Nguyệt / Đàn Kìm (Tiếng tơ dẫn dắt)**: Cây đàn chủ lực dẫn dắt giai điệu hát, âm sắc thanh thoát, trong trẻo.
  4. **Đàn Nhị / Đàn Cò (Tiếng nỉ non da diết)**: Diễn tả nỗi niềm trắc ẩn, tâm trạng Đào thương ai oán hoặc cung bậc tự sự.
  5. **Sáo Trúc (Hơi thở đồng nội)**: Điểm xuyết không gian thiên nhiên thanh bình, gợi cảnh trăng thanh gió mát bên bờ liễu.
  6. **Thanh La & Mõ Tre (Tiết tấu trào phúng)**: Tạo nhịp gõ sắc lẹm, phụ họa cho những bước chân ngã vờ và tiếng cười của Hề Chèo.
* **Cấu trúc mỗi Card Nhạc Cụ**:
  - Tên nhạc cụ & Danh xưng di sản (ví dụ: "Nhạc trưởng chiếu Chèo").
  - Phân loại (Bộ gõ / Bộ dây / Bộ hơi).
  - Thuộc tính cấu tạo (Chất liệu gỗ mít, da trâu sấy, dây tơ tằm se, cật tre già).
  - Nút nghe âm sắc đặc trưng.
  - Khung trích dẫn lời ca dao/thơ cổ khắc họa cái hồn của nhạc cụ.

### 4.4 Component 4: Modern Chèo Multi-tier Exhibition (`ModernCheoExhibition.tsx`)
* **Mục đích**: Thay thế toàn diện component `ModernCheoShowcase.tsx` cũ bị ẩn sau 4 tab, giải quyết triệt để yêu cầu R2.
* **Bố cục 4 Tầng Trải Nghiệm Mở**:
  - **Tầng 1 - Cột Mốc Chuyển Mình (1951 - Nay)**: Dải timeline trực quan 4 giai đoạn phát triển (1951: Thành lập Đoàn Chèo Cổ truyền tại chiến khu Việt Bắc -> 1970-1980: Đỉnh cao kịch Chèo Tào Mạt -> 1990-2010: Giao thoa bán giao hưởng & đề tài xã hội -> 2020-Nay: Số hóa & hồ sơ di sản UNESCO).
  - **Tầng 2 - Tứ Trụ Tiên Phong & Bậc Thầy Di Sản**: Lưới thẻ card tôn vinh 4 nghệ sĩ kiệt xuất (NSND Tào Mạt, NSND Trịnh Thị Lan - Cả Tam, NSND Dịu Hương, NSND Thanh Hoài).
  - **Tầng 3 - Tác Phẩm Đột Phá Thời Đại**: Triển lãm 3 kiệt tác sân khấu hiện đại ("Bài ca giữ nước", "Nàng Sita", "Hồ Xuân Hương") với thông số tác giả, năm ra đời, đột phá nghệ thuật.
  - **Tầng 4 - Không Gian Hồ Sơ UNESCO & Định Hướng Tương Lai**: 3 trụ cột giá trị đáp ứng Công ước UNESCO 2003, mạng lưới 14 tỉnh thành đồng bằng sông Hồng và chiến lược đưa Chèo vào học đường.

### 4.5 Component 5: Bộ Khung Metadata Badges & Key-Value Grid (`MetaBadge.tsx`, `KeyValueGrid.tsx`, `FeaturePill.tsx`)
* **Mục đích**: Giải quyết dứt điểm yêu cầu R4 trên toàn bộ các trang nội dung.
* **Cấu trúc & Props**:
  - `<MetaBadge icon={Icon} label="Thế kỷ X" variant="amber | red | emerald | sky" />`
  - `<FeaturePill text="Làn điệu Đào Liễu" />`
  - `<KeyValueGrid items={[{ label: 'Bà tổ nghề', value: 'Phạm Thị Trân' }, { label: 'Xuất xứ', value: 'Kinh đô Hoa Lư' }]} />`
  - `<DecomposedHeader title="..." category="..." badges={[...]} leadSummary="..." keyValues={[...]} />`: Khung tiêu đề bài viết phân cấp khoa học, loại bỏ hoàn toàn tình trạng nhét subtitle và text phụ dài dòng lê thê.

---

## 5. VERIFICATION METHOD (PHƯƠNG PHÁP KIỂM TRA ĐỘC LẬP)

Để kiểm chứng tính xác thực của báo cáo và chất lượng triển khai downstream, người kiểm tra có thể thực hiện các bước sau:

1. **Kiểm tra trạng thái Build & Lint hiện tại của dự án**:
   ```powershell
   # Chạy kiểm tra TypeScript và đóng gói Vite:
   npm run build
   # Kết quả xác nhận: Build thành công (0 errors), 1893 modules transformed.

   # Chạy kiểm tra oxlint:
   npm run lint
   # Kết quả xác nhận: 0 errors, 1 warning (Date.now impure call tại AudioSamplePlayer.tsx:152)
   ```

2. **Kiểm chứng độc lập các vị trí Tab và Text Density**:
   - Mở file `src/components/HomePage.tsx`, tra cứu dòng 22 và 240-258: Xác nhận sự tồn tại của `stageTab` che giấu 3 component con.
   - Mở file `src/components/interactive/ModernCheoShowcase.tsx`, tra cứu dòng 126 và 164-189: Xác nhận 4 tab lớn `activeTab` và không được import trong `MuseumView.tsx`.
   - Mở file `src/components/interactive/AudioSamplePlayer.tsx`, tra cứu dòng 54 và 88-107: Xác nhận 4 nút tab chọn bài hát đơn điệu, thiếu timeline âm thanh và thiếu nhạc cụ dàn nhạc.
   - Mở file `src/components/MuseumView.tsx`, tra cứu dòng 109-123 và 140-178: Xác nhận đoạn text mô tả bị nhét thô dưới tiêu đề và danh sách phòng con dạng 2 cột đơn sơ không có banner.

3. **Điều kiện hoàn thành cho giai đoạn Implementation**:
   - Toàn bộ 7 vị trí tab được chuyển đổi thành Showcase / Timeline / Grid mở.
   - Không còn bất kỳ đoạn subtitle dài dòng nào dưới tiêu đề chính.
   - Các trang Hub có Banner chủ đề, số liệu nổi bật.
   - Lệnh `npm run build` và `npm run lint` đạt 100% không cảnh báo và không lỗi.
