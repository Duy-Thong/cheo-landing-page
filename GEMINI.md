# Quy Chuẩn Phát Triển & Thiết Kế UI — Bảo Tàng Chèo Số

Tất cả các thay đổi giao diện (UI/UX) và nội dung trên toàn bộ dự án **Bảo Tàng Chèo Số** bắt buộc phải tuân thủ nghiêm ngặt các nguyên tắc sau:

## 1. Bản Sắc Dự Án: Không Gian Văn Hóa Triển Lãm Số
- Dự án là một triển lãm số văn hóa nghệ thuật truyền thống Chèo Bắc Bộ, **tuyệt đối không phải website hành chính, báo cáo nội bộ hay phần mềm quản trị SaaS**.
- Ngôn ngữ và văn phong phải là **văn tự sự (storytelling), giàu chất thơ và cảm xúc**, mộc mạc, tôn vinh nghệ nhân và cội nguồn dân tộc.

## 2. Các Điều Cấm Kỵ Tuyệt Đối
1. **Cấm phong cách Dashboard / Báo cáo**:
   - Không đưa vào các khối số liệu thống kê to đùng kiểu dashboard (ví dụ: `10+`, `280+`, `100%`).
   - Không viết nội dung theo kiểu gạch đầu dòng liệt kê chỉ tiêu, báo cáo mục tiêu (ví dụ: `1. Bảo tồn... 2. Phổ quát... 3. Mở rộng...`).
2. **Cấm các nhãn meta-key / badge / pill thừa thãi**:
   - Không đặt các tag hoặc badge phân loại trước tiêu đề (ví dụ: `Tuyên Ngôn Sứ Mệnh`, `Di sản sống`, `Phần 1 trên 3`, `Mã phân mục: #...`).
   - Không tạo các thẻ "reflection card" có gắn tag (ví dụ: thẻ có nhãn `Tâm nguyện bảo tồn`, `Cầu nối thế hệ`). Mọi tâm tư đều phải được viết tự nhiên trong đoạn văn.
   - Không dùng các widget chuyển tab với icon vụn vặt làm gián đoạn mạch cảm xúc của bài viết.
3. **Cấm layout hẹp 1 cột co cụm vào giữa như bài báo**:
   - Không ép nội dung vào cột 768px (`max-w-3xl`) đơn điệu giữa màn hình lớn với 2 khoảng trống đen mênh mông hai bên.
   - Luôn sử dụng layout rộng mở **`max-w-7xl 2xl:max-w-[1620px]`** (~85% chiều rộng màn hình).
   - Trình bày nội dung dạng **lưới 2 cột so le (Split-Screen Alternating Grids)**: một bên là ảnh tư liệu lớn, một bên là bài văn tự sự kèm trích dẫn nghệ nhân.
4. **Cấm lặp lại hình ảnh**:
   - Mỗi trang, mỗi hồi phải có hình ảnh tư liệu phong phú, đúng với bối cảnh nội dung đang kể, không dùng đi dùng lại 2-3 tấm ảnh cũ.
5. **Cấm chụp ảnh màn hình (No Screenshots — Tiết kiệm Token)**:
   - Tuyệt đối không sử dụng công cụ chụp ảnh màn hình (`take_screenshot`, Chrome DevTools screenshot) hay mở file ảnh chụp màn hình để review UI vì gây tốn lượng lớn token.
   - Chỉ phân tích và kiểm tra trực tiếp qua mã nguồn TSX/CSS, kiểm tra DOM bằng text thuần hoặc `npm run build`.
6. **Cấm liệt kê các hộp chữ khô khan không minh họa (No Dry Text Dumps)**:
   - Mọi phân loại vai diễn, mẫu hình biến thể, quy ước vũ đạo, làn điệu **bắt buộc phải có hình ảnh trực quan minh họa** (thần thái, trang phục, biểu cảm, đạo cụ) hoặc âm thanh thực tế.
   - Tuyệt đối không làm một danh sách các ô xám chỉ toàn chữ làm người xem đọc xong trôi tuột không đọng lại gì.
7. **Cấm lạm dụng dấu trích dẫn (No Quote Abuse)**:
   - Không bao bọc dấu ngoặc kép `“...”` quanh các phụ đề, lời bình hay đoạn giải nghĩa thông thường.
   - Mỗi trang chỉ giữ tối đa 1 dải danh ngôn toàn cảnh (panoramic callout) lắng đọng của nghệ nhân tiền bối.
8. **Cấm gán ảnh lung tung, sai ngữ cảnh (No Random Mismatched Assets)**:
   - Không được tùy tiện nhét ảnh không liên quan (ảnh ám xanh, ma-nơ-canh lạc điệu, ảnh sai cử chỉ) vào các thẻ quy ước vũ đạo hay biến thể vai mẫu.
   - Khi chưa có ảnh tư liệu đúng bối cảnh diễn xướng, **phải dùng 1 ảnh placeholder chuẩn di sản thống nhất** (hoặc khung archive đồng bộ) để sẵn sàng thay thế bằng ảnh thực tế sau này.
9. **Cấm nhồi nhét tầng tầng lớp lớp thông tin vụn vặt (No Information Overload / No Text Clutter)**:
   - Cấm xếp chồng liên tiếp: Tiêu đề phụ + Tiêu đề chính + Dòng `Bối cảnh: ...` + Nhiều đoạn văn giải thích + Hộp trích dẫn (bắt người xem phải đọc 4-5 lớp nội dung phân mảnh trên một mục).
   - Người xem đến để thưởng lãm không gian di sản, không phải làm bài thi phân tích văn bản hay đọc hồ sơ hành chính.
   - Trình bày tinh giản, súc tích: **1 Tiêu đề chính rõ ràng** + **1 đoạn văn tự sự cô đọng, giàu hình tượng (2-3 câu, tối đa 50-60 từ)** + **trực quan hóa bằng ảnh/âm thanh**. Không bôi thêm nhãn phụ, không nhét thêm câu trích dẫn rời rạc nếu đoạn văn đã nói đủ ý.

## 3. Phân Tầng Trải Nghiệm & Modal Chi Tiết (Progressive Disclosure)
- **Số lượng tinh chọn**: Trên mặt trang, chỉ hiển thị vừa phải từ 2 - 4 mục tiêu biểu, không bày biện tràn lan gây rối mắt.
- **Thẻ bề mặt trực quan**: Ảnh minh họa chân thực có hồn + Tên mẫu hình + Điểm nhấn thần thái cốt lõi (1-2 câu súc tích) + Nút mở chi tiết.
- **Modal Chi Tiết (hoặc Trang Chi Tiết)**: Bấm vào để bung mở chiều sâu đầy đủ:
  - Ảnh khổ lớn sắc nét / cận cảnh thần thái nghệ nhân.
  - Phân tích chiều sâu tâm lý, bi kịch và thân phận nhân vật.
  - Trang phục cổ truyền & đạo cụ ước lệ đặc thù.
  - Làn điệu kinh điển kèm tính năng nghe âm thanh nhạc cụ/hát xướng thực tế.
  - Trích đoạn đối thoại bất hủ của tích chèo cổ.

## 4. Kiến Trúc Bố Cục Trang Chuẩn
- **Split-Screen Hero**: Tiêu đề lớn, lời đề từ in nghiêng, đoạn mở đầu có Drop-Cap + Ảnh nghệ thuật khổ lớn có chiều sâu bên cạnh.
- **Hồi tự sự so le 2 cột (12 cột)**: Ảnh tư liệu và bài viết tự sự đảo bên nhịp nhàng qua từng chương.
- **Dải nghỉ thị giác toàn cảnh (Panoramic Visual Callout)**: Dải danh ngôn nghệ nhân chạy ngang màn hình tạo nhịp thở.
- **Lưới khám phá 3 cột**: Các lối dẫn chuyên đề trải rộng 3 cột thoáng đãng.
- **Lời kết thi vị**: Đúc kết lắng đọng và câu ca dao dân gian Bắc Bộ.
