# Original User Request

## 2026-09-18T17:23:25Z

Requested team: Full multi-agent team (Xử lý toàn diện: biên tập nội dung di sản, thiết kế card dàn nhạc, nâng cấp UI/UX các trang)

Nâng cấp toàn diện trải nghiệm UI/UX và dữ liệu chuyên sâu cho Bảo Tàng Chèo Số: tái thiết kế trang trung gian Khám Phá thành không gian di sản cuốn hút, bổ sung tư liệu lịch sử đầy đủ cho Chèo Hiện Đại, chuyển đổi trang Âm Thanh sang mô hình Timeline Hành Trình Âm Thanh Sân Khấu kết hợp thẻ card nhạc cụ trực quan, và xóa bỏ triệt để việc dồn ép text phụ dài dòng.

Working directory: d:\Learning\Chèo Landing page
Integrity mode: development

## Requirements

### R1. Tái thiết kế trang trung gian Khám Phá (/kham-pha)
Chuyển đổi trang hub /kham-pha từ danh sách card sơ sài thành một không gian trưng bày dẫn nhập hấp dẫn:
- Trực quan hóa 3 trụ cột di sản: Tổng Quan Lịch Sử (Từ thế kỷ X), Không Gian Biểu Diễn (Sân khấu, Nhân vật, Trang phục, Làn điệu) và Chèo Đương Đại (Thế kỷ XX - XXI).
- Tích hợp các chỉ số nổi bật (hơn 10 thế kỷ, 200+ làn điệu, 5 mẫu nhân vật ước lệ) và preview trực quan khơi gợi nhu cầu khám phá sâu vào từng phòng con.

### R2. Xây dựng nội dung & giao diện chuyên sâu cho Chèo Hiện Đại (/kham-pha/cheo-hien-dai)
Làm phong phú trang Chèo Hiện Đại với dữ liệu văn hóa và lịch sử chuẩn mực:
- Tiến trình chuyển mình từ chiếu chèo sân đình sang nhà hát sân khấu hộp hiện đại từ năm 1951 (thành lập Đoàn Chèo Cổ truyền Việt Nam, nay là Nhà hát Chèo Việt Nam).
- Tôn vinh các nghệ nhân, nghệ sĩ tiên phong tiêu biểu (NSND Dịu Hương, Cả Tam, NSND Tào Mạt với bộ ba vở chèo Bài ca giữ nước).
- Các thử nghiệm cách tân: giao thoa dàn nhạc dân tộc và phương Tây, các vở diễn đề tài chiến tranh và xã hội hiện đại, cùng nỗ lực xây dựng hồ sơ UNESCO ghi danh di sản nhân loại.

### R3. Thiết kế lại trang Âm Thanh (/kham-pha/san-khau/am-thanh) thành Timeline Hành Trình Âm Thanh & Card Nhạc Cụ
Thay thế hoàn toàn cấu trúc Tab đơn điệu cũ bằng trải nghiệm đa tầng:
- **Timeline Hành Trình Âm Sắc Sân Khấu**: Thể hiện mạch diễn tiến âm thanh chuẩn mực của một đêm Chèo:
  1. *Hiệu Lệnh Khởi Nhạc & Nhịp Trống Mở Màn* (Trống đế, Trống cái thúc giục náo nức hội làng).
  2. *Hát Xưng Danh & Ra Ngô Ra Khoai* (Các làn điệu Nói Lối, Hát Vỡ Nước Nhập Cuộc).
  3. *Làn Điệu Trữ Tình & Tự Sự Khắc Khoải* (Đào liễu, Quân tử vu dịch, Luyện năm cung...).
  4. *Tiếng Cười Trào Lộng & Tiết Tấu Hoan Hỉ* (Hề gậy, Hề mồi, Sắp chợ duyên...).
- **Khu Trưng Bày Nhạc Cụ Dàn Nhạc Chèo**: Các thẻ Card độc lập, rõ ràng cho từng nhạc cụ (Trống đế, Trống cơm, Đàn nguyệt, Đàn nhị, Sáo trúc, Thanh la/Mõ), nêu rõ âm sắc, cấu tạo và linh hồn nhịp phách.
- Nghe thử âm thanh tương ứng kết hợp hiển thị lời thơ cổ và tính chất điệu hát.

### R4. Tái cấu trúc thông tin, chấm dứt việc lạm dụng text phụ dài dòng
Loại bỏ hoàn toàn kiểu nhét các đoạn văn mô tả dài dòng thành subtitle/text phụ dưới tiêu đề. Tổ chức lại toàn bộ thông tin thành cấu trúc layout dạng thẻ, thuộc tính phân loại (meta badges, feature pills, key-value pairs) giúp người đọc tiếp nhận nhanh chóng, mạch lạc và trang nhã.

## Acceptance Criteria

### Tính Đầy Đủ Nội Dung & Trực Quan Hóa UI/UX
- [ ] Trang /kham-pha có giao diện dẫn nhập giàu tính trực quan, hiển thị preview rõ ràng 3 nhánh lớn cùng các điểm nhấn văn hóa, không còn là 3 thẻ card rời rạc.
- [ ] Trang /kham-pha/cheo-hien-dai có ít nhất 3 phân mục nội dung chi tiết (Cột mốc chuyển mình 1951, Danh nhân & Tác phẩm tiêu biểu, Hồ sơ UNESCO & Định hướng bảo tồn).
- [ ] Trang /kham-pha/san-khau/am-thanh hiển thị Timeline Diễn Tiến Âm Thanh và Grid Card Dàn Nhạc Cụ chi tiết, không còn dùng tab chuyển qua lại đơn sơ.
- [ ] Toàn bộ các đoạn phụ chú dài lê thê được tách thành cấu trúc thông tin khoa học (nhạc cụ, vai trò, điệu hát, ý nghĩa), typography phân cấp rõ ràng.
- [ ] Lệnh kiểm tra và biên dịch `npm run build` chạy thành công, không gặp bất kỳ lỗi TypeScript hay xung đột module nào.

## 2026-09-18T17:24:21Z

User update quan trọng: Mở rộng phạm vi thực hiện ra TOÀN BỘ các trang trên website:
1. Tất cả các trang trung gian / Hub pages (/gioi-thieu, /kham-pha, /tien-ich, /kham-pha/tong-quan, /kham-pha/san-khau, /tien-ich/tham-quan-va-su-kien...) phải được thiết kế thành các không gian triển lãm trực quan sống động, có banner chủ đề, số liệu điểm nhấn, cấu trúc thẻ đặc sắc, không để danh sách card xơ xác đơn điệu.
2. Tất cả các trang nội dung (Chèo hiện đại, Giá trị văn hóa, Phía sau sân khấu, Kho tư liệu, Bản đồ bảo tàng, v.v.) phải có dữ liệu văn hóa - nghệ thuật phong phú, sâu sắc và đầy đủ, tuyệt đối không để trang nào sơ sài.
3. Thay thế các UI tab đơn điệu trên toàn bộ các trang thành dạng Card, Timeline, Grid đa tầng, Showcase trực quan sinh động.
4. Xóa bỏ hoàn toàn việc lạm dụng text phụ dài dòng ở tất cả các trang, bóc tách thành các block nội dung, meta badge, thuộc tính, key-values rõ ràng, trang nhã.
Đảm bảo toàn bộ ứng dụng chạy build sạch sẽ (npm run build pass 100%).
