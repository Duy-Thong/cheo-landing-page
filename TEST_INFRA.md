# TEST_INFRA — Kiến Trúc & Chiến Lược Kiểm Thử Toàn Diện (E2E Test Architecture)

**Dự án**: Bảo Tàng Chèo Số (Chèo Digital Museum Landing Page)  
**Tác giả**: Lead E2E Test Writer (`teamwork_preview_test_writer`)  
**Tài liệu yêu cầu gốc**: `.agents/ORIGINAL_REQUEST.md`  
**Kế hoạch tổng thể**: `PROJECT.md`  
**Trạng thái**: ACTIVE / READY  

---

## 1. Triết Lý Kiểm Thử (Test Philosophy)

Kiểm thử hệ thống Bảo Tàng Chèo Số được thiết kế theo các nguyên tắc cốt lõi:

1. **Opaque-Box & Requirement-Driven (Hộp mờ hướng yêu cầu)**:
   - Bộ kiểm thử không gắn chặt với các chi tiết triển khai nội bộ nhất thời, mà kiểm chứng hệ thống thông qua các giao diện định tuyến, cấu trúc dữ liệu di sản văn hóa chuẩn hóa, và mã nguồn markup/DOM sinh ra bởi các React Component.
   - Mọi ca kiểm thử đều bắt nguồn trực tiếp từ các yêu cầu được định nghĩa trong `ORIGINAL_REQUEST.md` (R1: Khám Phá, R2: Chèo Hiện Đại, R3: Âm Thanh Sân Khấu & Nhạc Cụ, R4: Tái cấu trúc thông tin & loại bỏ text phụ dài dòng) và bản quy hoạch mở rộng toàn bộ 30 route.

2. **Bảo Chứng Tuyệt Đối Toàn Bộ 30 Tuyến Đường (Full 30-Route Verification)**:
   - Mọi route trong số 30 route (29 đường dẫn duy nhất và 1 bí danh `/sanh`) đều được kiểm tra tính toàn vẹn: khả năng phân giải đường dẫn qua `matchRoute`, cấu trúc dữ liệu tương ứng trong `PAGE_DETAILS_MAP`, tính hợp lệ của breadcrumbs, tags, mô tả, và liên kết hai chiều cha-con giữa 7 trang Hub và các trang lá.

3. **Bảo Tồn & Tôn Vinh Giá Trị Văn Hóa Di Sản (Cultural Heritage Fidelity)**:
   - Kiểm thử tính chính xác của các dữ liệu văn hóa đặc thù: mốc lịch sử từ thế kỷ X thời Đinh - Tiền Lê; cuộc chuyển mình năm 1951 tại Việt Bắc; các danh nhân chèo (NSND Tào Mạt, NSND Dịu Hương, Cả Tam); 4 kiệt tác Chèo cổ (*Quan Âm Thị Kính*, *Xúy Vân*, *Lưu Bình Dương Lễ*, *Nghêu Sò Ốc Hến*); 5 mẫu hình nhân vật ước lệ (*Đào, Kép, Hề, Lão, Mụ*); 4 hồi âm sắc đêm Chèo và 6 nhạc cụ cốt lõi của dàn Bát âm.

4. **Progressive Testability (Kiểm thử tăng tiến theo tiến độ)**:
   - Bộ kiểm thử được phân tầng rõ ràng, vừa kiểm chứng 100% tính năng hiện hữu, vừa sẵn sàng tiếp nhận các thành phần của các Milestone (M1: Types & Data Primitives, M2: Hub Pages & Banners, M3: Chèo Hiện Đại & Âm Thanh, M4: Chuyển đổi Tab sang Showcase/Grid) mà không gây vỡ build hay xung đột biên dịch.

5. **Hoàn Toàn Độc Lập & Tự Thân (Standalone & Zero External Flakiness)**:
   - Không phụ thuộc vào các trình duyệt headless cồng kềnh (Puppeteer/Playwright browser binaries) có thể gây lỗi mạng hoặc môi trường. Runner sử dụng `tsx` kết hợp engine assertion chuyên biệt và `react-dom/server` để render và kiểm thử trực tiếp DOM/HTML của các component React 19.

---

## 2. Kiến Trúc Kiểm Thử 4 Tầng (4-Tier Test Architecture)

Hệ thống kiểm thử được tổ chức thành 4 tầng kiểm định chuyên sâu:

```
                  ┌──────────────────────────────────────────────┐
                  │    Tier 4: Real-World Application Scenarios   │
                  │        (5 Hành trình người dùng thực tế)      │
                  └──────────────────────┬───────────────────────┘
                                         │
                  ┌──────────────────────▼───────────────────────┐
                  │    Tier 3: Cross-Feature Combinations         │
                  │    (Tương tác chéo giữa Routing & Widgets)    │
                  └──────────────────────┬───────────────────────┘
                                         │
                  ┌──────────────────────▼───────────────────────┐
                  │    Tier 2: Boundary & Corner Cases            │
                  │  (Biên đường dẫn, dữ liệu rỗng & khả năng chịu lỗi) │
                  └──────────────────────┬───────────────────────┘
                                         │
                  ┌──────────────────────▼───────────────────────┐
                  │    Tier 1: Feature Coverage (>=5 test/tính năng)│
                  │ (Định tuyến, 3 Trụ cột, Chèo Hiện Đại, Âm Thanh...) │
                  └──────────────────────────────────────────────┘
```

---

### Tier 1: Feature Coverage (Độ Bao Phủ Tính Năng)
*Mục tiêu: Đảm bảo >= 5 ca kiểm thử cho mỗi cụm tính năng chính của hệ thống.*

1. **Cụm 1: Định Tuyến & Điều Hướng Toàn Diện (Routes & Navigation Engine)**
   - Test 1.1: Khả năng phân giải chính xác tất cả 30 route trong `SITEMAP_ROUTES`.
   - Test 1.2: Phân giải đường dẫn gốc `/` và bí danh `/sanh` trỏ về cùng ID `sanh`.
   - Test 1.3: Cấu trúc breadcrumbs phân cấp hợp lệ cho tất cả 3 phân khu lớn (`/gioi-thieu`, `/kham-pha`, `/tien-ich`).
   - Test 1.4: Liên kết cha-con: Mỗi route có `isHub: true` phải có `childrenPaths` chứa ít nhất 2 trang con hợp lệ.
   - Test 1.5: Khả năng tìm kiếm ngược qua ID hoặc segment cuối của `matchRoute`.
   - Test 1.6: Metadata bắt buộc (`title`, `description`, `tags`) không được rỗng trên bất kỳ route nào.

2. **Cụm 2: Không Gian Khám Phá & 3 Trụ Cột Di Sản (R1 & Hub Pages)**
   - Test 1.7: Route `/kham-pha` là Hub chính với đúng 3 nhánh con (`/kham-pha/tong-quan`, `/kham-pha/san-khau`, `/kham-pha/cheo-hien-dai`).
   - Test 1.8: Hiện diện 3 Trụ cột di sản (Lịch sử thế kỷ X, Không gian sân khấu ước lệ, Chèo đương đại thế kỷ XX-XXI).
   - Test 1.9: Hiển thị các chỉ số văn hóa nổi bật (10+ thế kỷ, 200+ làn điệu, 5 mẫu hình nhân vật, 14 tỉnh thành).
   - Test 1.10: Kiểm tra 7 trang Hub có cấu trúc dẫn nhập và danh sách phòng con phong phú.
   - Test 1.11: Render component `MuseumView` với route `/kham-pha` xuất ra đầy đủ tiêu đề, phòng con và thẻ điều hướng.

3. **Cụm 3: Chèo Hiện Đại & Cột Mốc Lịch Sử (R2: Modern Chèo)**
   - Test 1.12: Route `/kham-pha/cheo-hien-dai` được định tuyến chính xác với đầy đủ metadata.
   - Test 1.13: Cột mốc lịch sử năm 1951 tại Việt Bắc (thành lập Đoàn Chèo Cổ truyền Việt Nam, tiền thân Nhà hát Chèo Việt Nam).
   - Test 1.14: Tôn vinh các nghệ nhân, nghệ sĩ tiên phong tiêu biểu: NSND Tào Mạt, NSND Dịu Hương, cụ Cả Tam.
   - Test 1.15: Bộ ba tác phẩm kinh điển chèo hiện đại sử thi: *Bài ca giữ nước* (*Thề cắn ngón tay*, *Hội thề Đông Quan*).
   - Test 1.16: Hồ sơ đề cử UNESCO di sản văn hóa phi vật thể của 14 tỉnh thành châu thổ sông Hồng.

4. **Cụm 4: Hành Trình Âm Thanh & Thẻ Nhạc Cụ Dàn Nhạc (R3: Sound Journey & Instruments)**
   - Test 1.17: Route `/kham-pha/san-khau/am-thanh` gắn kết hợp lệ với widget âm thanh.
   - Test 1.18: 4 Hồi diễn xướng âm sắc đêm Chèo chuẩn mực (Hiệu lệnh mở màn, Hát xưng danh, Trữ tình khắc khoải, Tiếng cười trào lộng).
   - Test 1.19: Khu trưng bày 6 nhạc cụ nòng cốt (Trống đế, Trống cơm, Đàn nguyệt, Đàn nhị, Sáo trúc, Thanh la/Mõ).
   - Test 1.20: Dữ liệu âm học: âm sắc, cấu tạo vật lý, linh hồn nhịp phách và tương tác sân khấu của từng nhạc cụ.
   - Test 1.21: Tích hợp lời thơ cổ và tính chất điệu hát (*Đào liễu*, *Quân tử vu dịch*, *Sa lệch*, *Hề mồi*).

5. **Cụm 5: Dữ Liệu Văn Hóa Chuyên Sâu & Các Widget Sân Khấu (Deep Cultural Artifacts)**
   - Test 1.22: 5 Mẫu hình nhân vật ước lệ (*Đào, Kép, Hề, Lão, Mụ*) với tính cách và triết lý dân gian.
   - Test 1.23: Trưng bày phục sức Chèo cổ (*Áo tứ thân, Nón quai thao, Yếm đào, Thắt lưng bao, Mũ cánh chuồn*).
   - Test 1.24: Tứ đại kiệt tác Chèo (*Quan Âm Thị Kính, Xúy Vân giả dại, Lưu Bình - Dương Lễ, Nghêu Sò Ốc Hến*).
   - Test 1.25: Dòng thời gian lịch sử 10 thế kỷ từ triều Đinh - Tiền Lê (thế kỷ X) qua Lý, Trần, Hậu Lê đến đương đại.
   - Test 1.26: Không gian Tiện ích: Đặt vé xem biểu diễn, sơ đồ rạp Kim Mã & Đại Nam, kho tư liệu bản ghi âm đĩa than.

6. **Cụm 6: Tái Cấu Trúc Thông Tin & Xóa Bỏ Text Phụ Dài Dòng (R4: Atomic UI)**
   - Test 1.27: Kiểm tra độ dài `subtitle` trong dữ liệu routing không vượt ngưỡng dồn ép văn bản (> 80 ký tự).
   - Test 1.28: Sự hiện diện của các thuộc tính phân loại cấu trúc (meta badges, pills, tags).
   - Test 1.29: Tổ chức nội dung các section thành các khối tiêu đề + đoạn văn + gạch đầu dòng rõ ràng.
   - Test 1.30: Render sạch sẽ không phát sinh cảnh báo hay lỗi kiểu dữ liệu.

---

### Tier 2: Boundary & Corner Cases (Kiểm Thử Biên & Tình Huống Góc)
*Mục tiêu: Đảm bảo >= 5 ca kiểm thử cho từng khía cạnh biên và xử lý lỗi.*

1. **Biên Định Tuyến & Chuẩn Hóa Chuỗi Đường Dẫn (Path Normalization & Hash Edge Cases)**
   - Test 2.1: Chuỗi hash rỗng `""`, chỉ có dấu thăng `#`, hoặc `"#/"` đều phân giải an toàn về `/`.
   - Test 2.2: Đường dẫn có dấu xuyệt kép hoặc kết thúc bằng gạch chéo `//kham-pha/` tự động chuẩn hóa về `/kham-pha`.
   - Test 2.3: Phân giải đường dẫn viết hoa / không chuẩn `KHAM-PHA`, `San-Khau/Am-Thanh`.
   - Test 2.4: Đường dẫn không tồn tại `/duong-dan-khong-ton-tai` tự động fallback về `/` (Sảnh đón tiếp) an toàn, không ném exception.
   - Test 2.5: Phân giải qua ID phân đoạn cuối: `am-thanh` tự động khớp với `/kham-pha/san-khau/am-thanh`.

2. **Biên Cấu Trúc Dữ Liệu & Khả Năng Chịu Lỗi (Data Boundary & Nil Safety)**
   - Test 2.6: Kiểm tra mọi route có `PAGE_DETAILS_MAP` tương ứng, không có route nào bị thiếu nội dung (orphan route).
   - Test 2.7: Mảng `tags` không chứa phần tử rỗng hoặc khoảng trắng vô nghĩa.
   - Test 2.8: Mảng `breadcrumbs` luôn có ít nhất 1 phần tử gốc và phần tử cuối cùng khớp với route hiện tại.
   - Test 2.9: Mảng `childrenPaths` của các trang Hub không chứa đường dẫn ảo không nằm trong `SITEMAP_ROUTES`.
   - Test 2.10: Xử lý dữ liệu văn bản chứa ký tự đặc biệt tiếng Việt có dấu, ngoặc kép, gạch nối (`Đào liễu`, “Xúy Vân”, `1951 - 2026`).

3. **Biên Hiển Thị Giao Diện & Component SSR (Component Rendering Boundaries)**
   - Test 2.11: `MuseumView` render an toàn khi nhận route có `widgetType` không xác định hoặc `undefined`.
   - Test 2.12: `MuseumView` render an toàn khi `onNavigate` là no-op callback rỗng.
   - Test 2.13: `HomePage` render không bị vỡ khi không truyền route params.
   - Test 2.14: Không có thuộc tính HTML nào bị `undefined` hoặc `null` trong chuỗi markup xuất ra.
   - Test 2.15: Kích thước DOM xuất ra cho mỗi route nằm trong khoảng hợp lý (1 KB - 500 KB), không bị tràn bộ nhớ.

4. **Biên Dữ Liệu Âm Sắc & Thời Lượng (Sound & Audio Boundaries)**
   - Test 2.16: Chỉ số tần số mô phỏng sóng âm nằm trong dải chuẩn `0 <= wave <= 100`.
   - Test 2.17: Thời lượng các làn điệu âm thanh mẫu hợp lệ (> 0 giây).
   - Test 2.18: 4 Hồi diễn xướng có số thứ tự tuần tự `1, 2, 3, 4` không bị nhảy cóc hoặc trùng lặp.
   - Test 2.19: Mỗi nhạc cụ có danh mục cấu tạo vật lý gồm ít nhất 2 thành phần chi tiết.
   - Test 2.20: Họ nhạc cụ thuộc đúng một trong 3 bộ chuẩn: `Bộ gõ`, `Bộ dây`, hoặc `Bộ hơi`.

5. **Biên Tìm Kiếm & Lọc Từ Khóa (Search & Filter Boundaries)**
   - Test 2.21: Tìm kiếm với từ khóa rỗng trả về toàn bộ hoặc không làm crash thuật toán lọc.
   - Test 2.22: Tìm kiếm với từ khóa không dấu (ví dụ: `cheo`, `he moi`) vẫn tìm được dữ liệu có dấu.
   - Test 2.23: Tìm kiếm với ký tự đặc biệt regex (`.*`, `[a-z]`, `\b`) không gây lỗi crash runtime.
   - Test 2.24: Tìm kiếm với từ khóa dài > 100 ký tự được xử lý an toàn.
   - Test 2.25: Giới hạn số lượng kết quả tìm kiếm tối đa trả về không vượt quá dung lượng hiển thị.

---

### Tier 3: Cross-Feature Combinations (Tương Tác Chéo Giữa Các Tính Năng)
*Mục tiêu: Đảm bảo tính nhất quán pairwise giữa các hệ thống con độc lập.*

1. **Kết hợp 1: Chuyển Đổi Route & Nạp Widget Tương Ứng (Routing + Widget Mount Pairing)**
   - Test 3.1: Khi điều hướng đến `/kham-pha/san-khau/am-thanh`, HTML render chứa đúng thành phần âm thanh.
   - Test 3.2: Khi điều hướng đến `/kham-pha/san-khau/nhan-vat`, HTML render chứa đúng gallery nhân vật.
   - Test 3.3: Khi điều hướng đến `/kham-pha/san-khau/trang-phuc`, HTML render chứa đúng showcase trang phục.
   - Test 3.4: Khi điều hướng đến `/kham-pha/san-khau/tac-pham-tieu-bieu`, HTML render chứa đúng phòng trưng bày tác phẩm.
   - Test 3.5: Khi điều hướng đến `/kham-pha/tong-quan/lich-su-phat-trien`, HTML render chứa đúng timeline lịch sử.
   - Test 3.6: Khi điều hướng đến `/kham-pha/cheo-hien-dai`, HTML render chứa đúng không gian Chèo hiện đại.

2. **Kết hợp 2: Đồng Bộ Trạng Thái Hub Cha và Trang Con Lá (Hub-to-Leaf State Consistency)**
   - Test 3.7: Tất cả các trang con trong `childrenPaths` của `/gioi-thieu` đều có breadcrumbs trỏ ngược về `/gioi-thieu`.
   - Test 3.8: Tất cả các trang con trong `childrenPaths` của `/kham-pha` đều có breadcrumbs trỏ ngược về `/kham-pha`.
   - Test 3.9: Tất cả các trang con trong `childrenPaths` của `/tien-ich` đều có breadcrumbs trỏ ngược về `/tien-ich`.
   - Test 3.10: Thể loại `category` của trang con đồng nhất với tiêu đề phân khu của trang cha.

3. **Kết hợp 3: Điều Hướng Tìm Kiếm & Chuyển Trang (Search Modal + Route Navigation Pairing)**
   - Test 3.11: Kết quả tìm kiếm cho cụm từ `"Hề"` chứa đường dẫn hợp lệ dẫn tới `/kham-pha/san-khau/nhan-vat` hoặc `/kham-pha/san-khau/am-thanh`.
   - Test 3.12: Kết quả tìm kiếm cho cụm từ `"Tào Mạt"` chứa đường dẫn hợp lệ dẫn tới `/kham-pha/cheo-hien-dai`.
   - Test 3.13: Kết quả tìm kiếm cho cụm từ `"1951"` chứa đường dẫn tới trang Chèo Hiện Đại hoặc Tổng Quan Lịch Sử.

4. **Kết hợp 4: Đồng Bộ Âm Sắc, Lời Thơ Cổ & Nhạc Cụ (Audio Melody + Classic Verse Pairing)**
   - Test 3.14: Điệu hát `Đào liễu` kết hợp đúng với thể thơ lục bát và tính chất trữ tình của vai Nữ chính.
   - Test 3.15: Điệu hát `Hề mồi` kết hợp đúng với nhịp điệu trào lộng và tiếng cười sân đình.
   - Test 3.16: Tiết mục `Hiệu lệnh khởi nhạc` kết hợp đúng với các nhạc cụ chủ đạo: Trống đế và Trống cái.

---

### Tier 4: Real-World Application Scenarios (Kịch Bản Người Dùng Thực Tế)
*Mục tiêu: Tái hiện 5 kịch bản khám phá chân thực của các nhóm đối tượng người dùng khác nhau.*

1. **Scenario 1: Nhà Nghiên Cứu Văn Hóa Khảo Sát Tiến Trình Lịch Sử 10 Thế Kỷ**
   - Người dùng bước vào Sảnh đón tiếp (`/`) -> Xem banner dẫn nhập -> Điều hướng vào Không gian Khám Phá (`/kham-pha`) -> Đi sâu vào Tổng quan Lịch sử (`/kham-pha/tong-quan/lich-su-phat-trien`) -> Xem tiếp Giá trị văn hóa (`/kham-pha/tong-quan/gia-tri-van-hoa`) -> Khảo cứu Phía sau sân khấu (`/kham-pha/tong-quan/phia-sau-san-khau`).
   - Kiểm tra chuỗi trạng thái: Toàn bộ dữ liệu niên đại, triều đại phong kiến, khẩu quyết "Thanh - Sắc - Tinh - Nghệ" và đạo cụ ước lệ xuất hiện đầy đủ, liền mạch, không đứt gãy.

2. **Scenario 2: Khán Giả Yêu Nghệ Thuật Lên Kế Hoạch Đi Xem Đêm Diễn Chèo**
   - Khán giả vào Tiện ích (`/tien-ich`) -> Xem Tham quan & Sự kiện (`/tien-ich/tham-quan-va-su-kien`) -> Tra cứu Lịch biểu diễn (`/tien-ich/tham-quan-va-su-kien/lich-bieu-dien`) -> Xem Địa điểm rạp hát (`/tien-ich/tham-quan-va-su-kien/dia-diem-bieu-dien`) -> Đặt mua vé (`/tien-ich/tham-quan-va-su-kien/dat-mua-ve`).
   - Kiểm tra chuỗi trạng thái: Danh sách rạp Kim Mã, rạp Đại Nam hiển thị rõ ràng địa chỉ, hotline; widget đặt vé mở ra với đầy đủ thông tin suất diễn và khu vực ghế.

3. **Scenario 3: Sinh Viên Thanh Nhạc Thưởng Lãm Âm Sắc & Khám Phá Dàn Bát Âm**
   - Sinh viên vào Không gian Sân khấu (`/kham-pha/san-khau`) -> Chọn Âm thanh & Làn điệu (`/kham-pha/san-khau/am-thanh`) -> Thao tác qua 4 Hồi diễn xướng của đêm Chèo -> Khám phá từng thẻ nhạc cụ (Trống đế, Trống cơm, Nguyệt, Nhị, Sáo, Thanh la/Mõ) -> Đọc lời thơ cổ và cảm thụ âm sắc.
   - Kiểm tra chuỗi trạng thái: Các thẻ card nhạc cụ độc lập, lời thơ cổ, thông số âm học và mô phỏng âm thanh được tải đồng bộ.

4. **Scenario 4: Nhà Hoạt Động Di Sản Tìm Hiểu Chèo Đương Đại & Hồ Sơ UNESCO**
   - Người dùng từ Khám Phá (`/kham-pha`) -> Chuyển sang Chèo Hiện Đại (`/kham-pha/cheo-hien-dai`) -> Đọc mốc lịch sử 1951 tại chiến khu Việt Bắc -> Tôn vinh danh nhân (NSND Tào Mạt, NSND Dịu Hương) -> Khảo sát kiệt tác *Bài ca giữ nước* -> Đọc thông tin hồ sơ 14 tỉnh thành đệ trình UNESCO.
   - Kiểm tra chuỗi trạng thái: Dữ liệu lịch sử 1951, hình tượng danh nhân, tác phẩm và hồ sơ bảo tồn xuất hiện trang trọng, phân cấp rõ nét.

5. **Scenario 5: Học Sinh Phổ Thông Học Về Nghệ Thuật Ước Lệ: Nhân Vật & Trang Phục**
   - Học sinh vào Sân khấu (`/kham-pha/san-khau`) -> Xem Nhân vật (`/kham-pha/san-khau/nhan-vat`) với 5 mẫu hình Đào, Kép, Hề, Lão, Mụ -> Chuyển sang Trang phục (`/kham-pha/san-khau/trang-phuc`) -> Xem Tác phẩm tiêu biểu (`/kham-pha/san-khau/tac-pham-tieu-bieu`).
   - Kiểm tra chuỗi trạng thái: Cả 5 nhân vật, 5 mẫu phục sức và 4 vở diễn kinh điển được trình bày dưới dạng thẻ mở trực quan sinh động, không bị giấu sau tab đơn điệu.

---

## 3. Quy Chuẩn Kỹ Thuật Bộ Test Runner (`tests/e2e/runner.ts`)

- **Bộ thực thi (Engine)**: TypeScript thực thi qua `npx tsx` hoặc script npm `"test:e2e": "tsx tests/e2e/runner.ts"`.
- **Cơ chế gom nhóm**: Hỗ trợ cú pháp BDD chuẩn (`describe`, `it`, `test`) và hàm xác nhận trực quan `expect()`.
- **Mã phản hồi thoát (Exit Code)**:
  - `0`: Khi toàn bộ 100% test case vượt qua thành công.
  - `1`: Khi có bất kỳ test case nào thất bại (kèm stack trace và báo cáo chi tiết).
- **Báo cáo kết quả**: Xuất bảng thống kê ANSI màu sắc trực quan, chi tiết từng Tier, tỷ lệ đạt/không đạt, và tổng thời gian thực thi tính bằng mili-giây.

---

## 4. Xác Thực Đầu Ra Chuẩn (Authoritative Derivation)

Mọi giá trị kỳ vọng (Expected Output) trong bộ test được trích xuất trực tiếp từ các tài liệu quy chuẩn tối cao:
1. `ORIGINAL_REQUEST.md`: Định nghĩa yêu cầu văn hóa R1, R2, R3, R4 và bản cập nhật mở rộng ngày 2026-09-18T17:24:21Z.
2. `PROJECT.md`: Định nghĩa 30 routes trong routing table, kiến trúc 3 trụ cột, 7 hub pages, và hợp đồng interface dữ liệu văn hóa.
3. `src/data/sitemapRoutes.ts` & `src/data/pageDetailsData.ts`: Nguồn chân lý đối với định danh đường dẫn, cấu trúc danh mục và quan hệ phân cấp.
