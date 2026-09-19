# Bản Thiết Kế UI/UX & Nội Dung Toàn Bộ Các Trang — Bảo Tàng Chèo Số

> **Nguyên tắc viết nội dung**: Không dùng từ ngữ sáo rỗng của AI (cấm tuyệt đối các từ: *hồn cốt, ngàn năm lắng đọng, mạch nguồn phù sa, tinh hoa chắt lọc, thiêng liêng...*). Mọi câu chữ phải **thực tế, ngắn gọn, đi thẳng vào thông tin người xem cần biết**.

---

## I. QUY CHUẨN GIAO DIỆN & TƯƠNG TÁC (DESIGN SYSTEM)

1. **Về độ dài văn bản**:
   - Mỗi tiêu đề: tối đa 6-8 từ.
   - Mỗi câu mô tả trang: tối đa 15-20 từ. Không viết đoạn văn dài trên trang chính.
   - Chi tiết về lịch sử, kỹ thuật hát, phân tích nhân vật: đưa vào **Modal** hoặc **Accordion đóng/mở**.
2. **Về bố cục**:
   - Không dùng card chữ nhật xám xịt đóng khung dày đặc.
   - Dùng **Editorial Layout**: Tiêu đề lớn + số thứ tự to mờ phía sau (`01`, `02`, `03`...) + hình ảnh thực tế + các thẻ phân loại nhỏ (pills).
   - Bố cục so le (Asymmetric Split): Trái chữ - Phải ảnh; mục tiếp theo đảo lại để không bị nhàm mắt.
3. **Về tương tác nút bấm**:
   - Nút điều hướng (`Vào xem`, `Khám phá`): Click chuyển trang ngay lập tức (1-click).
   - Nút xem chi tiết (`Hồ sơ`, `Kịch bản`, `Nhạc cụ`): Click mở ngay Modal tại chỗ, có nút đóng `X` góc phải và bấm ra ngoài để thoát. Không sinh thêm thanh trung gian.

---

## II. THIẾT KẾ CHI TIẾT TỪNG TRANG (PAGE-BY-PAGE SPECIFICATION)

---

### TRANG 1: TRANG CHỦ (`/`)

#### 1. Người xem vào đây thấy gì?
Một trang giới thiệu tổng quan với ảnh sân khấu lớn, cho phép vào nhanh 4 khu vực chính và nghe thử âm thanh Chèo.

#### 2. Nội dung cụ thể trên trang:
* **Tiêu đề chính**: "Bảo Tàng Chèo Số"
* **Mô tả ngắn**: "Khám phá nghệ thuật Chèo qua 5 mẫu nhân vật, trang phục truyền thống, dàn nhạc và các trích đoạn kinh điển."
* **3 Chỉ số thực tế**:
  * `10 Thế Kỷ` — Thời gian phát triển từ thời nhà Đinh.
  * `200+` — Làn điệu được ký âm và thu thanh.
  * `5 Vai Diễn` — Hệ thống nhân vật mẫu mực.
* **4 Cổng vào nhanh**:
  1. *Nhân Vật*: Đào, Kép, Hề, Lão, Mụ.
  2. *Trang Phục*: Áo tứ thân, nón quai thao, yếm đào.
  3. *Âm Thanh*: Tiếng trống đế và dàn nhạc Bát âm.
  4. *Vở Diễn*: Thị Kính, Xúy Vân, Lưu Bình.

#### 3. Bố cục từ trên xuống dưới:
* **Khu vực 1 (Hero — 75vh)**:
  * Ảnh chụp sân đình kích thước lớn trải rộng toàn màn hình, phủ màu tối mờ dần xuống chân.
  * Chữ "Bảo Tàng Chèo Số" in hoa đậm nét nằm đè lên ảnh.
  * 2 Nút bấm lớn: `[Khám Phá Sân Khấu →]` và `[Lịch Diễn & Đặt Vé]`.
  * Dưới cùng của ảnh là 3 chỉ số (`10 Thế Kỷ` | `200+ Làn Điệu` | `5 Vai Diễn`) ngăn cách bằng vạch kẻ mỏng.
* **Khu vực 2 (4 Cổng vào — Grid thoáng 4 cột)**:
  * 4 khối vuông vắn, nền tối nhẹ viền mỏng. Mỗi khối có icon, tên mục, 1 dòng tóm tắt và link `Vào xem →`.
* **Khu vực 3 (Kể chuyện bằng ảnh — Split 2 cột)**:
  * Cột trái: Ảnh chụp trang phục áo tứ thân và nón quai thao.
  * Cột phải: Đoạn văn ngắn 3 câu giới thiệu nguồn gốc Chèo làng quê, kèm 3 nút dẫn đến: Lịch sử, Chèo hiện đại, Đội ngũ thực hiện.
* **Khu vực 4 (Banner âm thanh & Dịch vụ)**:
  * Banner ngang ảnh dàn nhạc: Tiêu đề "Nghe Thử Dàn Nhạc Chèo" + nút `[Nghe Ngay →]`.
  * 3 ô dịch vụ thực tế: Xem lịch diễn cuối tuần, Kho tư liệu đĩa than, Bản đồ bảo tàng.

#### 4. Tương tác nút bấm:
* Nút `Khám Phá Sân Khấu →`: Chuyển sang `/kham-pha/san-khau`.
* Nút `Lịch Diễn & Đặt Vé`: Chuyển sang `/tien-ich/tham-quan-va-su-kien/dat-mua-ve`.
* Nút `Nghe Ngay →`: Chuyển sang `/kham-pha/san-khau/am-thanh`.
* 4 khối cổng vào: Click ô nào chuyển thẳng đến trang con của ô đó.

---

### TRANG 2: KHÔNG GIAN KHÁM PHÁ (HUB CHÍNH — `/kham-pha`)

#### 1. Người xem vào đây thấy gì?
Bản đồ định hướng 3 nhánh nội dung lớn của bảo tàng, không phải danh sách thẻ card vụn vặt.

#### 2. Nội dung cụ thể:
* **Tiêu đề**: "Không Gian Khám Phá"
* **Mô tả**: "Chọn 1 trong 3 nhánh trưng bày để bắt đầu tìm hiểu."
* **Dải 4 thông số ngang**: `10 Thế Kỷ` (Lịch sử) | `200+` (Làn điệu) | `3` (Nhánh trưng bày) | `UNESCO` (Hồ sơ đệ trình).
* **3 Nhánh chính**:
  1. *Biên Niên Sử*: Lịch sử Chèo từ thời Đinh (thế kỷ X) qua các triều đại.
  2. *Sân Khấu*: 4 thành phần tạo nên buổi diễn (Nhân vật, Trang phục, Dàn nhạc, Vở kinh điển).
  3. *Chèo Đương Đại*: Bước chuyển mình từ năm 1951, sân khấu hộp và hồ sơ UNESCO.

#### 3. Bố cục thị giác:
* 3 Phần xếp dọc từ trên xuống (Vertical Chapters):
  * Mỗi phần có số thứ tự in mờ rất lớn phía sau: `01`, `02`, `03`.
  * Tiêu đề in hoa: `01. BIÊN NIÊN SỬ`, `02. SÂN KHẤU CHÈO CỔ`, `03. CHÈO HIỆN ĐẠI`.
  * Mô tả 2 câu súc tích về nội dung bên trong.
  * Cạnh bên là ảnh chụp tư liệu tương ứng.
  * 1 Nút bấm to duy nhất dẫn vào nhánh đó.

#### 4. Tương tác nút bấm:
* Nhánh 1: Nút `Xem Dòng Thời Gian →` &rarr; Chuyển `/kham-pha/tong-quan`.
* Nhánh 2: Nút `Vào Không Gian Sân Khấu →` &rarr; Chuyển `/kham-pha/san-khau`.
* Nhánh 3: Nút `Xem Chèo Hiện Đại →` &rarr; Chuyển `/kham-pha/cheo-hien-dai`.

---

### TRANG 3: SÂN KHẤU CHÈO CỔ (`/kham-pha/san-khau`)

#### 1. Người xem vào đây thấy gì?
Thay vì 4 khối hộp card màu xám nhàm chán như hiện tại, trang này trình bày như một **buổi tham quan 4 gian phòng diễn xướng** theo thứ tự từ nhân vật đến vở diễn.

#### 2. Nội dung cụ thể:
* **Dải chỉ số**: `4 Gian Phòng` | `5 Vai Mẫu` | `Ngũ Sắc` | `Bát Âm`.
* **4 Gian phòng**:
  * *Gian 01 — Nhân Vật*: 5 vai Đào, Kép, Hề, Lão, Mụ.
  * *Gian 02 — Phục Trang*: Áo tứ thân, yếm đào, nón quai thao, thắt lưng bao.
  * *Gian 03 — Âm Thanh*: Trống đế, đàn nguyệt, nhị, sáo và 4 chặng âm sắc đêm diễn.
  * *Gian 04 — Kiệt Tác*: Vở Quan Âm Thị Kính, Xúy Vân, Lưu Bình Dương Lễ.

#### 3. Bố cục thị giác (Phong cách Editorial, so le 2 bên):
* **Gian 01 (Nhân vật — Chữ bên trái, hình bên phải)**:
  * Nền có số `01` to mờ.
  * Trái: Tag `GIAN 01`, Tiêu đề lớn `5 VAI DIỄN MẪU MỰC`, 2 câu mô tả tính cách Đào/Kép/Hề/Lão/Mụ. Lời thoại mẫu của Thị Mầu. Nút đỏ son `[Vào Phòng Nhân Vật →]`.
  * Phải: Minh họa bóng dáng 5 nhân vật kèm nhãn tên.
* **Gian 02 (Phục trang — Đảo chiều: Hình bên trái, chữ bên phải)**:
  * Trái: Dải 5 ô màu ngũ sắc của trang phục Chèo (Đen the, Đỏ yếm, Xanh dải bao, Vàng hoàng yến, Trắng lụa bạch).
  * Phải: Số `02` to mờ. Tag `GIAN 02`, Tiêu đề `PHỤC TRANG & ĐẠO CỤ`, câu thơ ca dao về áo tứ thân, nút `[Xem Bộ Sưu Tập Trang Phục →]`.
* **Gian 03 (Âm thanh — Chữ bên trái, hình bên phải)**:
  * Trái: Số `03` to mờ. Tag `GIAN 03`, Tiêu đề `TIẾNG TRỐNG & DÀN NHẠC BÁT ÂM`, mô tả vai trò nhịp trống đế và các điệu hát Đào liễu, Hề mồi. Nút `[Vào Thính Phòng Âm Thanh →]`.
  * Phải: Đồ họa mô phỏng mặt trống đế và cột sóng âm thanh đang dao động.
* **Gian 04 (Kiệt tác — Đảo chiều: Hình bên trái, chữ bên phải)**:
  * Trái: Ảnh phục dựng bìa kịch bản chữ Nôm Quan Âm Thị Kính.
  * Phải: Số `04` to mờ. Tag `GIAN 04`, Tiêu đề `TỨ ĐẠI TÍCH CHÈO KINH ĐIỂN`, tóm tắt nhanh 4 câu chuyện. Nút `[Xem Kịch Bản Vở Diễn →]`.

#### 4. Tương tác nút bấm:
* Click nút ở mỗi gian phòng &rarr; Chuyển thẳng đến trang chi tiết của phòng đó (không popup trung gian).

---

### TRANG 4: NHÂN VẬT CHÈO CỔ (`/kham-pha/san-khau/nhan-vat`)

#### 1. Người xem vào đây thấy gì?
Xem danh sách 5 nhân vật kinh điển của Chèo. Bấm vào nhân vật nào thì xem ngay chi tiết dáng đi, giọng hát và lời thoại của vai đó.

#### 2. Nội dung cụ thể:
* **5 Nhân vật**:
  1. *Đào* (Đào thương Thị Kính, Đào lẳng Thị Mầu, Đào điên Xúy Vân).
  2. *Kép* (Kép quân tử Lưu Bình, Dương Lễ, Trương Viên).
  3. *Hề* (Hề áo ngắn, Hề gậy châm biếm quan lại).
  4. *Lão* (Lão say, Mãng Ông đứng đắn).
  5. *Mụ* (Mụ Quán đanh đá, Sùng Bà ác nghiệt).
* **Nội dung trong từng hồ sơ**: Tính cách & Vai trò • Dáng đi & Điệu bộ múa • Điệu hát sở trường • Lời thoại kinh điển.

#### 3. Bố cục thị giác:
* Dòng hướng dẫn ngắn: *"Nhấp vào vai diễn để xem vũ đạo và câu thoại mẫu mực."*
* Hàng 5 thẻ đứng cân đối, mỗi thẻ có: Tên vai, Huy hiệu màu, 2 dòng ví dụ nhân vật nổi tiếng, nhãn `Hồ sơ ›`.
* **Tuyệt đối không để thanh phụ bên dưới**.

#### 4. Tương tác nút bấm (1-Click Modal):
* **Nhấp vào thẻ Đào / Kép / Hề / Lão / Mụ**: **Mở ngay Modal hồ sơ**:
  * Tên vai diễn + Nhóm vai (Chính diện / Phản diện).
  * Mục 1: Dáng đi và điệu bộ múa (bước chữ Đinh, tay múa quạt).
  * Mục 2: Giọng hát và điệu chèo đặc trưng.
  * Mục 3: Trích dẫn 1 câu thoại nổi tiếng nhất của vai.
  * Nút `Đóng` ở góc và cuối modal.

---

### TRANG 5: PHỤC TRANG & ĐẠO CỤ (`/kham-pha/san-khau/trang-phuc`)

#### 1. Người xem vào đây thấy gì?
5 Món đồ phục trang đặc trưng nhất của diễn viên Chèo trên sân khấu. Bấm vào để xem cấu tạo, chất liệu và ý nghĩa màu sắc.

#### 2. Nội dung cụ thể:
* **5 Hiện vật**:
  1. *Áo Tứ Thân & Mớ Ba Mớ Bảy* (Trang phục nữ chính).
  2. *Nón Quai Thao* (Nón che duyên thiếu nữ Bắc Bộ).
  3. *Yếm Đào & Khăn Mỏ Quạ* (Trang phục truyền thống thôn quê).
  4. *Thắt Lưng Bao Ngũ Sắc* (Điểm nhấn eo khi múa quạt).
  5. *Mũ Cánh Chuồn & Hia Hài* (Trang phục quan viên, huyện trìu).
* **Nội dung chi tiết từng món**: Cấu tạo vạt áo/quai nón • Chất liệu dệt (lụa tơ tằm, vải đũi) • Ý nghĩa màu sắc ngũ hành.

#### 3. Bố cục thị giác:
* 5 Khối hiện vật xếp ngay ngắn, có ảnh hoặc hình vẽ đạo cụ, tên gọi, chất liệu tóm tắt 1 dòng.

#### 4. Tương tác nút bấm (1-Click Modal):
* **Nhấp vào hiện vật bất kỳ**: **Mở ngay Modal chi tiết**:
  * Xem cấu tạo 4 vạt áo hoặc cách đan nón.
  * Ý nghĩa màu sắc tương sinh theo Ngũ Hành (Kim, Mộc, Thủy, Hỏa, Thổ).
  * Câu ca dao dân gian nhắc đến trang phục đó.

---

### TRANG 6: ÂM THANH & LÀN ĐIỆU (`/kham-pha/san-khau/am-thanh`)

#### 1. Người xem vào đây thấy gì?
Một trang nghe và tìm hiểu âm nhạc Chèo thực tế gồm: Trình tự âm thanh một đêm diễn, dàn nhạc 6 nhạc cụ và máy phát nghe thử các làn điệu.

#### 2. Nội dung cụ thể:
* **Phần 1: 4 Chặng âm sắc đêm Chèo**:
  * *Chặng 1*: Tiếng trống mở màn (Trống cái, trống đế thúc giục).
  * *Chặng 2*: Hát xưng danh (Nói lối ra mắt khán giả).
  * *Chặng 3*: Hát trữ tình (Đào liễu, Quân tử vu dịch tâm tình).
  * *Chặng 4*: Tiếng cười kết màn (Điệu hề mồi rộn rã).
* **Phần 2: 6 Nhạc cụ chính**: Trống đế, Trống cơm, Đàn nguyệt, Đàn nhị, Sáo trúc, Thanh la & Mõ.
* **Phần 3: Máy phát nghe thử**: 4 Làn điệu mẫu (Đào liễu, Quân tử vu dịch, Sa lệch chênh, Hề mồi).

#### 3. Bố cục thị giác:
* **Trên cùng**: Thanh timeline 4 chặng ngang với số `Chặng 01`, `Chặng 02`, `Chặng 03`, `Chặng 04`.
* **Ở giữa**: Lưới 6 ô nhạc cụ nhỏ gọn (icon nốt nhạc, tên nhạc cụ, 1 câu mô tả âm thanh).
* **Dưới cùng**: Máy phát nhạc màu đen viền vàng, có nút Play to, thanh sóng nhạc chạy động, lời thơ mẫu của bài hát.

#### 4. Tương tác nút bấm:
* **Bấm vào chặng trên Timeline**: Mở Modal xem mẫu câu hát và cách gõ nhịp trống của chặng đó.
* **Bấm vào nhạc cụ (Trống đế, Đàn nhị...)**: **Mở ngay Modal chi tiết**: Cấu tạo gỗ/da, kỹ thuật gõ tang hoặc kéo vĩ, câu thơ miêu tả tiếng đàn.
* **Bấm nút Play tròn**: Bật/Dừng phát âm thanh thử nghiệm; sóng nhạc nhấp nhô theo nhịp.
* **Bấm chọn tên điệu hát**: Tự động chuyển bài và cập nhật lời thơ hiển thị.

---

### TRANG 7: KIỆT TÁC TÍCH TRÒ (`/kham-pha/san-khau/tac-pham-tieu-bieu`)

#### 1. Người xem vào đây thấy gì?
Tóm tắt cốt truyện và trích đoạn nổi tiếng nhất của 4 vở Chèo kinh điển.

#### 2. Nội dung cụ thể:
* **4 Vở kịch**:
  1. *Quan Âm Thị Kính*: Nỗi oan giết chồng và oan Thị Mầu.
  2. *Kim Nhan (Xúy Vân Giả Dại)*: Nỗi lòng người phụ nữ phong kiến và đoạn múa điên.
  3. *Lưu Bình — Dương Lễ*: Tình bạn tri kỷ và tấm lòng nàng Châu Long.
  4. *Nghêu Sò Ốc Hến*: Vở hài châm biếm quan huyện, thầy đề, thầy lý.
* **Thông tin mỗi vở**: Tóm tắt 3 câu • Nhân vật chính • Trích đoạn hay nhất • Câu thoại đắt giá.

#### 3. Bố cục thị giác:
* 4 Ô tác phẩm lớn xếp 2x2. Mỗi ô có số thứ tự mờ, tên vở in hoa, huy hiệu đề tài, 2 dòng tóm tắt kịch tính, nút `Xem kịch bản & trích đoạn →`.

#### 4. Tương tác nút bấm (1-Click Modal):
* **Bấm vào vở diễn bất kỳ**: **Mở ngay Modal kịch bản**:
  * Tóm tắt đầy đủ cốt truyện theo 3 hồi.
  * Danh sách vai diễn chính.
  * Trích đoạn kịch tính nhất và câu thoại mẫu.

---

### TRANG 8: CHÈO HIỆN ĐẠI & UNESCO (`/kham-pha/cheo-hien-dai`)

#### 1. Người xem vào đây thấy gì?
Quá trình Chèo phát triển từ chiếu chèo sân đình sang nhà hát hiện đại từ sau năm 1951 và hồ sơ đệ trình UNESCO.

#### 2. Nội dung cụ thể:
* **4 Mốc thời gian**:
  * *1951*: Thành lập Đoàn Chèo Cổ truyền Việt Nam tại chiến khu Việt Bắc.
  * *Thập niên 1970*: Tác giả Tào Mạt viết bộ ba kịch Chèo *Bài ca giữ nước*.
  * *Thập niên 1990*: Dàn dựng các vở cải biên như *Nàng Sita*, *Hồ Xuân Hương*.
  * *Hiện nay*: Lập hồ sơ đệ trình UNESCO công nhận Chèo là di sản văn hóa phi vật thể.
* **Nghệ sĩ tiêu biểu**: NSND Tào Mạt, NSND Dịu Hương, NSND Bùi Đắc Sừ.

#### 3. Bố cục thị giác:
* Trục thời gian dọc nối 4 mốc năm. Mỗi mốc là một điểm sáng, tiêu đề sự kiện, mô tả ngắn 2 dòng và huy hiệu thời kỳ.
* Cuối trang là ô thông tin hồ sơ UNESCO với huy hiệu di sản.

#### 4. Tương tác nút bấm:
* Nhấp vào mốc năm mở Modal xem ảnh tư liệu và tác phẩm tiêu biểu của thời kỳ đó.

---

### TRANG 9: TỔNG QUAN LỊCH SỬ (`/kham-pha/tong-quan` & 3 TRANG CON)

#### 1. Nhóm trang này gồm những gì?
* `/kham-pha/tong-quan`: Hub dẫn vào 3 bài học lịch sử.
* `/kham-pha/tong-quan/lich-su-phat-trien`: Dòng thời gian 10 thế kỷ (thời Đinh, Lý, Trần, Hậu Lê, Nguyễn, Đương đại).
* `/kham-pha/tong-quan/gia-tri-van-hoa`: Tính nhân văn, tính trào phúng và tính cộng đồng làng xã.
* `/kham-pha/tong-quan/phia-sau-san-khau`: Hậu trường đêm diễn (thắp nhang bàn thờ Tổ, hóa trang phấn son, gõ tang trống khai màn).

#### 2. Bố cục & Tương tác:
* Bố cục dòng thời gian sạch sẽ, không nhồi chữ.
* Bấm vào từng thời kỳ lịch sử mở Modal xem các sự kiện và nhân vật liên quan.

---

### TRANG 10: NHÓM TRANG GIỚI THIỆU (`/gioi-thieu` & 4 TRANG CON)

#### 1. Người xem vào đây thấy gì?
Biết rõ ai làm ra trang web này, điền dã ở đâu, mục đích làm gì, có những chuyên gia nào cố vấn.

#### 2. Bố cục & Nội dung 4 trang con:
* **Trang 1: Dự án Bảo tàng số (`/gioi-thieu/bao-tang-so-cheo`)**:
  * 3 Ô công nghệ: Scan 3D trang phục, Thu âm vòm 24-bit, Dữ liệu mở cộng đồng.
  * 4 Con số thực tế: 1.200 giờ thu âm, 180 mẫu 3D, 250 làn điệu đã ký âm, 100% phi lợi nhuận.
* **Trang 2: Ký sự điền dã (`/gioi-thieu/cau-chuyen-hinh-thanh`)**:
  * Dòng thời gian điền dã 3 địa điểm: Làng Khuốc (Thái Bình), Yên Khánh (Ninh Bình), Nam Trực (Nam Định).
  * Click vào địa điểm mở Modal xem ghi chép điền dã và nghệ nhân đã gặp.
* **Trang 3: Sứ mệnh (`/gioi-thieu/muc-tieu-va-y-nghia`)**:
  * 3 Mục tiêu rõ ràng: Bảo tồn chuẩn mực cổ, Đưa Chèo vào trường học, Quảng bá ra quốc tế.
* **Trang 4: Đội ngũ thực hiện (`/gioi-thieu/doi-ngu-nhom-thuc-hien`)**:
  * Hội đồng cố vấn: GS.NSND Trần Bảng, PGS.TS Nguyễn Thị Minh Thái, NSND Thanh Trầm.
  * Nghệ nhân dân gian: NNND Nguyễn Thị Sinh, NSƯT Xuân Hinh, NSND Thúy Mùi.
  * Click vào thẻ người nào mở Modal xem tiểu sử và đóng góp của người đó.

---

### TRANG 11: NHÓM TRANG TIỆN ÍCH (`/tien-ich` & CÁC DỊCH VỤ)

#### 1. Người xem vào đây thấy gì?
Các công cụ phục vụ trải nghiệm thực tế: xem sơ đồ bảo tàng, tra cứu kho tư liệu số, xem lịch diễn và đặt vé.

#### 2. Bố cục & Nội dung các trang con:
* **Đặt mua vé & Lịch diễn (`/tien-ich/tham-quan-va-su-kien/dat-mua-ve`)**:
  * Lịch các suất diễn cuối tuần tại Nhà hát Chèo Việt Nam và rạp Đại Nam.
  * Sơ đồ chọn ghế ngồi trực tiếp (Ghế VIP màu vàng, Ghế thường màu xám).
  * Form nhập tên, số điện thoại & Nút `[Xuất Vé QR]`. Bấm nút mở Modal hiển thị mã QR vé điện tử.
* **Kho tư liệu số (`/tien-ich/kho-tu-lieu`)**:
  * Danh mục các bản ghi đĩa than 78 vòng Dihavina xưa, bản chép tay chữ Nôm kịch bản thế kỷ XIX.
  * Click vào đĩa than mở Modal nghe trích đoạn thu âm gốc không lọc tạp âm.
* **Bản đồ bảo tàng (`/tien-ich/ban-do-bao-tang`)**:
  * Sơ đồ 3 tầng bảo tàng (Tầng 1 Sảnh; Tầng 2 Sân khấu; Tầng 3 Lưu trữ).
  * Bấm vào phòng nào trên sơ đồ nhảy thẳng đến trang của phòng đó.
* **Đóng góp ý kiến (`/tien-ich/danh-gia-cai-thien`)**:
  * Đánh giá 1-5 sao và khung nhập nhận xét góp ý.

---

## III. TỔNG KẾT BẢNG QUY TẮC HIỂN THỊ CHỮ TRÊN TOÀN TRANG

| Thành phần | Quy tắc độ dài & phong cách | Ví dụ SAI (Văn mẫu AI) | Ví dụ ĐÚNG (Thực tế, ngắn gọn) |
|---|---|---|---|
| **Tiêu đề trang (H1)** | 3 - 6 từ, rõ ràng danh xưng | *Không Gian Hồn Cốt Dân Gian Chiếu Chèo* | **Không Gian Sân Khấu Chèo** |
| **Câu mở đề (Subtitle)** | Tối đa 20 từ, nêu đúng nội dung | *Nơi lắng đọng phù sa ngàn năm thiêng liêng chắt lọc* | **Khám phá 4 yếu tố: nhân vật, trang phục, âm thanh và kịch bản.** |
| **Huy hiệu (Pill Badge)** | 2 - 4 từ, mang tính phân loại | *Hồn Cốt Dân Tộc Tinh Hoa* | **5 Vai Diễn Ước Lệ** |
| **Nút hành động (CTA)** | Bắt đầu bằng động từ hành động | *Mở Bài Chuyên Khảo Chi Tiết Thâm Sâu* | **Vào Phòng Nhân Vật →** |
| **Bài viết chi tiết** | Đóng trong Accordion hoặc Modal | Nhét cả bài luận 1.000 chữ ra giữa trang chủ | Mặc định đóng gọn, bấm tiêu đề mở rộng đọc tại chỗ |

---

> **Tài liệu này đã sẵn sàng để người dùng duyệt.** Mọi trang tiếp theo sẽ được code bám sát 100% theo các mục, bố cục và tương tác đã đặc tả ở trên.
