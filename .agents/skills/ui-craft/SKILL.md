---
name: ui-craft
description: >-
  Quy chuẩn và nguyên tắc bắt buộc khi thiết kế, tạo mới hoặc chỉnh sửa giao diện UI cho dự án Bảo Tàng Chèo Số.
  Kích hoạt skill này khi người dùng yêu cầu sửa UI, thiết kế lại layout, tạo trang mới hoặc tối ưu hóa trải nghiệm giao diện người dùng.
---

# Quy Chuẩn Thiết Kế & Chỉnh Sửa UI — Bảo Tàng Chèo Số

Tài liệu này định nghĩa toàn bộ quy chuẩn, triết lý và các điều cấm kỵ bắt buộc phải tuân thủ khi xây dựng, chỉnh sửa hoặc làm mới giao diện (UI/UX) cho dự án **Bảo Tàng Chèo Số**.

---

## 1. Triết Lý Thiết Kế Cốt Lõi: Không Gian Triển Lãm Số

- **Không phải báo cáo hành chính, không phải website tin tức**: Dự án là một không gian văn hóa nghệ thuật truyền thống, một triển lãm số (Digital Exhibition Sanctuary) mang chiều sâu lịch sử 10 thế kỷ của đồng bằng sông Hồng.
- **Văn phong tự sự (Storytelling Narrative)**: Mọi nội dung phải được viết dưới dạng bài ký văn hóa, lời tự sự mộc mạc, giàu chất thơ và cảm xúc, tôn vinh nghệ nhân và cội nguồn dân tộc.

---

## 2. Các Điều Cấm Kỵ Tuyệt Đối (Strict Prohibitions)

### ❌ 1. Tuyệt đối không làm giao diện kiểu Dashboard / SaaS
- **Không đặt dải chỉ số thống kê to đùng**: Cấm các khối như `10+ Thế kỷ | 280+ Làn điệu | 100% Dữ liệu mở`. Đây là không gian di sản, không phải dashboard quản trị hay báo cáo kinh doanh.
- **Không liệt kê kiểu KPI / Mục tiêu gạch đầu dòng**: Cấm các tiêu đề như "Ba mục tiêu chiến lược: 1... 2... 3..." hoặc "Ba tâm nguyện cốt lõi". Hãy chuyển hóa toàn bộ thành các chương truyện tự sự liền mạch.

### ❌ 2. Tuyệt đối không gắn nhãn meta-key / badge thừa thãi
- **Không đặt tag/key trước tiêu đề**: Cấm các dòng như `Tuyên Ngôn Sứ Mệnh & Ý Nghĩa Văn Hóa`, `Di sản sống`, `Phần 1 trên 3`, `Mã phân mục: #...`.
- **Không tạo thẻ "reflection card" có gắn tag**: Cấm các hộp phụ có nhãn như `Tâm nguyện bảo tồn`, `Cầu nối thế hệ`. Mọi suy ngẫm phải được viết tự nhiên trong đoạn văn tự sự.
- **Không tạo widget chuyển tab không cần thiết**: Tránh các nút bấm tab mang tính giao diện app kỹ thuật làm đứt gãy mạch đọc cảm xúc của người xem.

### ❌ 3. Tuyệt đối không dồn nội dung vào 1 cột hẹp kiểu bài báo
- **Cấm layout hẹp `max-w-3xl` / `max-w-4xl` đơn điệu**: Không bóp nghẹt toàn bộ trang vào một cột 768px ở giữa màn hình rồi xếp chồng "tiêu đề -> chữ -> ảnh -> chữ" từ trên xuống dưới như một bài báo VnExpress hay bài blog Medium.
- **Phải dùng layout đa cột rộng mở (`max-w-6xl` hoặc `max-w-7xl`)**: Tận dụng không gian màn hình hiện đại để tạo nên trải nghiệm triển lãm đa chiều, thoáng đãng, sang trọng.

### ❌ 4. Tuyệt đối không dùng đi dùng lại vài tấm ảnh cũ
- **Đa dạng hóa tư liệu thị giác**: Không tái sử dụng liên tục một bức ảnh cho nhiều trang hoặc nhiều phần trong cùng một trang.
- **Ảnh phải gắn liền với ngữ cảnh câu chuyện**:
  - Hồi về nghệ nhân cổ truyền: dùng ảnh nghệ nhân lão thành, manh chiếu sân đình, ngón đàn nhị.
  - Hồi về người trẻ / đương đại: dùng ảnh trang phục, quạt lụa, hậu trường trang điểm, đào chèo trẻ.
  - Hồi về sân khấu nhân loại: dùng ảnh toàn cảnh sân khấu, diễn xướng thăng hoa.

### ❌ 5. Tuyệt đối không chụp ảnh màn hình (No Screenshots — Token Optimization)
- **Nghiêm cấm dùng công cụ chụp ảnh màn hình** (`take_screenshot`, Chrome DevTools screenshot, hoặc mở/view file ảnh chụp màn hình) khi kiểm tra giao diện hay review UI.
- **Lý do**: Ảnh chụp màn hình tiêu tốn một lượng cực lớn token (multimodal token overhead), làm tràn ngữ cảnh (context window) và lãng phí tài nguyên không cần thiết.
- **Phương thức kiểm tra thay thế bắt buộc**:
  - Phân tích trực tiếp mã nguồn code (React/TypeScript, cấu trúc JSX/TSX, Tailwind CSS classes).
  - Sử dụng DOM snapshot dạng văn bản (`take_snapshot` hoặc `evaluate_script` đọc textContent / classList / DOM tree nếu cần).
  - Chạy `npm run build` hoặc lệnh kiểm tra tĩnh để bảo đảm tính toàn vẹn kỹ thuật.

### ❌ 6. Tuyệt đối không liệt kê các ô chữ khô khan (No Dry Text Dumps)
- **Cấm xả các khối chữ phân loại không minh họa**: Liệt kê các biến thể, mẫu hình, làn điệu mà chỉ toàn các hộp chữ dày đặc là điều cấm kỵ. Người xem đọc xong sẽ trôi tuột và không thể đọng lại bất kỳ ấn tượng thị giác hay cảm xúc nào.
- **Mọi phân loại chính bắt buộc phải có minh họa trực quan (Visual Anchors)**:
  - Phân loại vai mẫu (Đào Thương, Đào Lẳng, Đào Điên, Đào Chiến; Hề Áo Ngắn, Hề Áo Dài; Kép Văn, Kép Võ...): **bắt buộc phải có ảnh tư liệu sân khấu** thể hiện thần thái, y phục, cử chỉ biểu cảm đặc trưng.
  - Quy ước hình thể: phải có ảnh động thái hoặc nhịp trống gõ minh họa.
  - Làn điệu hát xướng: phải có âm sắc nhạc cụ hoặc audio phát nghe thử.

### ❌ 7. Tuyệt đối không lạm dụng và spam trích dẫn (No Quote Abuse / No Inline Quote Box Spam)
- **Cấm chèn các hộp trích dẫn lặt vặt chen giữa các đoạn văn**: Không tạo các khung trích dẫn nhỏ (`border-l-2`, `bg-amber-950/20`) rải rác bên trong bài tự sự làm đứt gãy mạch đọc và spam trích dẫn rời rạc làm nhòe chủ đề chính.
- **Chỉ giữ 1 dải danh ngôn toàn cảnh**: Mỗi trang chỉ giữ tối đa 1 dải danh ngôn toàn cảnh (panoramic callout band) duy nhất nằm giữa hoặc cuối trang để tạo nhịp thở thị giác. Mọi suy nghĩ, chia sẻ của nghệ nhân hay nhân vật phải được hòa nhập tự nhiên thành một phần của bài viết tự sự.

### ❌ 8. Tuyệt đối không gán ảnh lung tung, sai ngữ cảnh (No Random Mismatched Assets)
- **Cấm nhét ảnh bừa bãi chỉ để cho có ảnh**: Không được tùy tiện lấy ảnh không liên quan (ảnh chân dung ám xanh, ảnh ma-nơ-canh bảo tàng không rõ bối cảnh, ảnh sai động tác) nhét vào thẻ quy ước hay vai mẫu.
- **Quy chuẩn Placeholder chuẩn mực**: Khi một mục chưa có ảnh tư liệu sân khấu thực tế chính xác, **phải dùng một ảnh placeholder chuẩn di sản** thống nhất (ví dụ: ảnh hoa văn đình làng `cheo_dinh_lang.jpg` hoặc khung archive chuẩn có nhãn trang nhã "Tư liệu diễn xướng đang số hóa"), tuyệt đối không chắp vá ảnh bừa bãi. Sau này người phụ trách nội dung sẽ thay thế bằng ảnh thực tế đúng quy cách.

### ❌ 9. Tuyệt đối không nhồi nhét tầng tầng lớp lớp thông tin vụn vặt (No Information Overload / No Text Clutter)
- **Cấm xếp chồng 4-5 lớp nội dung phân mảnh**: Cấm xếp chồng liên tiếp: "Tiêu đề phụ nhỏ -> Tiêu đề chính lớn -> Dòng nhãn 'Bối cảnh: ...' -> Nhiều đoạn văn dài phân tích -> Hộp trích dẫn thơ/ca dao". Bắt người xem phải đọc và xử lý 4-5 tầng thông tin trên một mục là làm quá tải nhận thức, phá nát trải nghiệm thưởng thức nghệ thuật.
- **Quy tắc Trình bày Tinh Giản & Súc Tích**:
  - **1 Tiêu đề chính duy nhất & rõ ràng** (ví dụ: `Làn điệu Con Gà Rừng`).
  - **1 Đoạn văn tự sự cô đọng, đi thẳng vào hồn cốt tác phẩm** (khoảng 2-3 câu, tối đa 50-60 từ), giàu chất thơ và cảm xúc.
  - **Trực quan hóa trọng tâm**: Đi kèm ảnh tư liệu hoặc nút nghe âm thanh trực tiếp.
  - **Tuyệt đối không bôi thêm các dòng nhãn phụ** như `Khúc ...`, `Bối cảnh: ...`, hay trích dẫn rời rạc khi không cần thiết. Giữ không gian thoáng đãng để người xem tập trung cảm nhận.

### ❌ 10. Tuyệt đối không xả thuộc tính chi tiết vụn vặt lên thẻ/khối tự sự ở mặt trang tổng quan (No Detail Dump on Surface Cards)
- **Cấm liệt kê thông số kỹ thuật trên thẻ bề mặt**: Trên các thẻ danh sách hoặc khối 2 cột so le ở mặt trang tổng quan (Overview list / Split grids), **tuyệt đối không nhét thêm các dòng thông số chi tiết** như `Chất liệu cổ truyền: ...`, `Phụ kiện đặc trưng: ...`, `Kỹ thuật diễn tấu: ...`, `Cấu tạo: ...`.
- **Phân định rõ bề mặt và chiều sâu**:
  - **Mặt trang tổng quan**: Cực kỳ tinh giản và thoáng đãng — chỉ gồm **1 Ảnh tư liệu + 1 Tiêu đề chính + 1 Phụ đề/Phân vai ngắn + 1 Đoạn văn tự sự cô đọng (2-3 câu) + 1 Nút bấm chuyển vào chi tiết**.
  - **Chi tiết chuyên sâu (Detailed View / Modal)**: Bấm vào nút chuyển tiếp để bung mở đầy đủ các thông số chi tiết (chất liệu dệt may, phụ kiện, triết lý ngũ hành, lối diễn, âm thanh minh họa). Ngăn ngừa hoàn toàn việc làm rối mắt và quá tải thông tin cho người xem ngay từ trang ngoài.

### ❌ 11. Tuyệt đối không chồng chéo nhiều kiểu chữ/phụ đề dưới cùng một tiêu đề (No Typography Stacking Overload)
- **Cấm xếp chồng 4-5 font style khác nhau**: Không xếp chồng liên tiếp: Tiêu đề chữ đứng + Tiêu đề phụ ngắt dòng màu vàng in nghiêng + Khối phụ đề in nghiêng gạch viền bên trái (`border-l-2`) + Chữ Drop-Cap + Đoạn văn phụ. Việc này làm rối mắt thị giác dữ dội và gây mệt mỏi nhận thức.
- **Thống nhất tiêu đề Hero trang trọng**:
  - Chỉ dùng **1 Tiêu đề chính duy nhất (`h1`)** rõ ràng, đồng nhất một phong cách typographic (`font-serif font-bold text-white`).
  - Không bôi chữ nghiêng màu mè (`span italic text-amber-400`) lửng lơ trong tiêu đề.
  - Loại bỏ hoàn toàn các dải subtitle in nghiêng có đường viền gạch dọc bên trái (`border-l-2`) xếp ngay dưới tiêu đề. Phía dưới tiêu đề chính đi thẳng trực tiếp vào đoạn văn tự sự cô đọng.

---

## 3. Nguyên Tắc Thiết Kế Chi Tiết & Phân Tầng Trải Nghiệm (Progressive Disclosure)

### 1. Giới hạn số lượng mục tinh gọn (Curated Quantity)
- Không nhồi nhét quá nhiều thẻ trên cùng một mặt phẳng gây mệt mỏi thị giác.
- Mỗi nhóm chuyên đề chỉ hiển thị từ **2 đến 4 mục tinh hoa, tiêu biểu nhất** (ví dụ: 4 dạng Đào mẫu, 2 dạng Hề, 2 dạng Kép).

### 2. Mặt thẻ tinh gọn trực quan (Surface Cards)
- Ảnh minh họa nổi bật, sắc nét, có chiều sâu thị giác.
- Tên mẫu hình / phân loại + Tên vai diễn tiêu biểu trong các tích kinh điển.
- Nét nhận diện thần thái cốt lõi (1-2 câu súc tích, đọc là nhớ ngay đặc trưng).
- Nút tương tác mở chiều sâu: `[Chiêm ngưỡng vai mẫu ➔]` hoặc `[Khám phá chi tiết]`.

### 3. Phân tầng thông tin vào Modal Chi Tiết (Deep Detail Modal)
- Đưa các kiến thức chuyên sâu, giàu tư liệu vào **Modal Chi Tiết (hoặc trang chuyên đề)** thay vì phơi bày tràn lan trên mặt trang chính:
  - **Ảnh khổ lớn toàn thân / chân dung cận cảnh** nghệ nhân nhập vai.
  - **Phân tích chiều sâu tâm lý & số phận nhân vật** trong xã hội phong kiến xưa.
  - **Đặc trưng tạo hình & Y phục cổ truyền** (áo tứ thân mớ ba mớ bảy, yếm đào, nón quai thao, áo cánh nâu, dải khăn...).
  - **Lối diễn & Hát xướng kinh điển kèm âm thanh** (người xem có thể bấm nghe âm sắc nhạc cụ / làn điệu đại diện).
  - **Trích đoạn đối thoại bất hủ** gắn liền với tên tuổi các nghệ nhân cây đa cây đề.

---

## 4. Quy Chuẩn Bố Cục Triển Lãm Đa Cột (Exhibition Layout)

Mọi trang giới thiệu hoặc chuyên đề phải áp dụng kiến trúc bố cục nhịp nhàng sau:

### 1. Full-Bleed Cinema Overlay Hero Banner (Tràn viền chiều ngang 100%)
- **Bố cục tràn viền (Full-Bleed Horizontal)**: Sử dụng margin âm (`-mx-6 sm:-mx-10 lg:-mx-12 -mt-10 sm:-mt-14 w-[calc(100%+3rem)] sm:w-[calc(100%+5rem)] lg:w-[calc(100%+6rem)]`) để khung hero tràn qua khoảng đệm lề, tiếp xúc trực tiếp hai mép màn hình.
- **Tỉ lệ & Chiều cao**: `min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] relative overflow-hidden flex items-end`.
- **Background Cinema**:
  - Ảnh tư liệu lớn phủ 100% diện tích (`absolute inset-0 w-full h-full object-cover filter brightness-[0.6] contrast-105`).
  - Lớp dải phủ gradient tối mềm mại (`bg-gradient-to-t from-stone-950 via-stone-950/70 via-50% to-stone-950/20`).
- **Nội dung đè trực tiếp lên mặt ảnh (Overlaid Content)**:
  - Tiêu đề chính lớn (`h1` `text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white drop-shadow-md`).
  - Đoạn văn mở đầu cô đọng 2-3 câu có chữ cái đầu lớn (Drop Cap: `first-letter:text-4xl first-letter:font-bold first-letter:text-amber-400 drop-shadow`).

### 2. Dòng chảy câu chuyện so le (Alternating 2-Column Split Grids)
Thay vì xếp dọc 1 hàng chữ rồi đến 1 ảnh, chia thành các khối 2 cột so le:
- **Chương 1**: Ảnh tài liệu bên trái (5 cột) ⟷ Bài văn tự sự + Trích dẫn nghệ nhân bên phải (7 cột).
- **Chương 2**: Bài văn tự sự + Trích dẫn bên trái (7 cột) ⟷ Ảnh cận cảnh tư liệu bên phải (5 cột).
- **Chương 3**: Ảnh diễn xướng bên trái (5 cột) ⟷ Bài văn tự sự + Nhận định học giả bên phải (7 cột).

### 3. Dải nghỉ thị giác toàn cảnh (Panoramic Visual Callout Band)
- Giữa các hồi câu chuyện, bố trí một dải băng rộng ngang màn hình với gradient trầm ấm (`bg-gradient-to-r from-stone-900 via-amber-950/40 to-stone-900 border border-stone-800/80 p-8 sm:p-12`).
- Chứa một câu danh ngôn / câu nói bất hủ của nghệ nhân tiền nhân để tạo khoảng lắng đọng tâm hồn cho người đọc.

### 4. Lưới khám phá tiếp nối (Exhibition Gateways - 3 cột)
- Cuối trang, bố trí 3 lối dẫn sang các chuyên đề liên quan dưới dạng lưới 3 cột (`grid-cols-1 md:grid-cols-3 gap-6`).
- Mỗi thẻ có icon văn hóa trang nhã, tiêu đề, tóm tắt mộc mạc và mũi tên chuyển động nhẹ nhàng khi hover.

### 5. Lời kết thi vị (Poetic Epilogue)
- Khép lại bằng tâm nguyện sâu lắng, trích dẫn ca dao / hát ví đồng bằng Bắc Bộ được căn giữa trang trọng, nhẹ nhàng.

---

## 5. Bảng Màu & Typography Chuẩn Mực

- **Màu nền**: Gỗ mun trầm `#120f0d`, panel tối `#0f0c0a`, border gỗ mộc `stone-800/80`.
- **Màu chữ**: Giấy dó cổ truyền `#e7e0d8`, chữ phụ `stone-400`, chữ mờ `stone-500`.
- **Màu nhấn văn hóa**: Vàng thếp `amber-400` / `amber-500`, đỏ sơn son `red-800` / `red-900`.
- **Typography**:
  - Tiêu đề và trích dẫn: `font-serif` (Playfair Display / Noto Serif).
  - Thân bài: `font-serif font-light text-base sm:text-lg leading-relaxed text-stone-300`.
  - Chú thích và nhãn phụ: `font-sans` hoặc `font-serif italic`.

---

## 6. Danh Sách Kiểm Tra Nhanh (Pre-Flight Checklist)

Trước khi xác nhận hoàn thành bất kỳ trang UI nào, hãy tự kiểm tra 10 tiêu chí:

1. [ ] Có xuất hiện số liệu thống kê kiểu dashboard (10+, 280+, 100%) không? ➔ **Nếu có: Xóa ngay**.
2. [ ] Có xuất hiện nhãn gán meta-key, badge kiểu `Tuyên ngôn...`, `Phần 1 trên 3`, `Mã phân mục` không? ➔ **Nếu có: Xóa ngay**.
3. [ ] Có bị co cụm vào một cột hẹp 768px ở giữa màn hình giống bài báo không? ➔ **Nếu có: Chuyển sang bố cục đa cột `max-w-7xl 2xl:max-w-[1620px]`**.
4. [ ] Hình ảnh có bị lặp lại từ các trang khác không? ➔ **Nếu có: Thay bằng hình ảnh tư liệu đúng chủ đề**.
5. [ ] Có bị gán ảnh lung tung, sai động tác, sai bối cảnh (như mặt ám xanh, ma-nơ-canh lạc điệu) không? ➔ **Nếu chưa có ảnh chuẩn: Dùng ảnh placeholder di sản chuẩn mực để thay thế sau**.
6. [ ] Có bị liệt kê các ô chữ khô khan, thiếu hình ảnh hoặc âm thanh minh họa ("đọc xong chả nhớ gì") không? ➔ **Nếu có: Bổ sung ngay ảnh tư liệu biểu cảm, âm thanh đặc trưng và đưa chi tiết sâu vào Modal Chi Tiết**.
7. [ ] Số lượng mục có vừa phải (2 - 4 mục tinh hoa) và có lối mở chi tiết sâu (Progressive Disclosure) chưa?
8. [ ] Có bị lạm dụng dấu trích dẫn khắp nơi không? ➔ **Nếu có: Bỏ các dấu ngoặc kép tùy tiện, chỉ giữ 1 dải danh ngôn toàn cảnh**.
9. [ ] Mạch văn có phải tự sự văn hóa mộc mạc, tôn vinh nghệ thuật truyền thống không?
10. [ ] Tuyệt đối KHÔNG chụp ảnh màn hình (`take_screenshot`) hay load file ảnh chụp màn hình để bảo toàn token. Đã chạy `npm run build` kiểm tra không có lỗi TypeScript/CSS chưa?
11. [ ] Có bị nhồi nhét tầng tầng lớp lớp thông tin vụn vặt (tiêu đề phụ + tiêu đề chính + bối cảnh + nhiều đoạn văn + trích dẫn) trên cùng một mục không? ➔ **Nếu có: Rút gọn ngay, chỉ giữ 1 tiêu đề chính + 1 đoạn tự sự súc tích (2-3 câu)**.
