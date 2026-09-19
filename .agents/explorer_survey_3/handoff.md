# Báo Cáo Handoff — Khảo Sát & Thiết Kế Kiến Trúc Dữ Liệu Văn Hóa Chèo (Survey 3)

**Tác giả**: teamwork_preview_explorer (Explorer Survey 3)  
**Mục tiêu**: Cultural Content, Data Models & Assets Audit (R1, R2, R3 & Phạm Vi Mở Rộng)  
**Ngày thực hiện**: 2026-09-19 (UTC: 2026-09-18T17:35:00Z)  
**Tài liệu tham chiếu gốc**: `.agents/ORIGINAL_REQUEST.md`

---

## 1. Observation (Các Quan Sát Thực Tế Từ Codebase)

### 1.1. Hiện Trạng Thư Mục Dữ Liệu & Types Hiện Hữu
1. **Chưa có thư mục `src/types/`**:
   - Toàn bộ codebase chưa có thư mục quản lý kiểu dữ liệu tập trung.
   - Các interface hiện tại đang được khai báo tản mạn tại đầu các file data:
     - `src/data/sitemapRoutes.ts:1-13`: Khai báo `export interface RouteNode` (13 dòng).
     - `src/data/sitemapData.ts:1-11`: Khai báo `export interface SitemapNode` (11 dòng).
     - `src/data/pageDetailsData.ts:1-20`: Khai báo `export interface PageDetailContent` (20 dòng).

2. **Dữ liệu hiện có tại `src/data/pageDetailsData.ts` (657 dòng)**:
   - Cấu trúc `PAGE_DETAILS_MAP` mang tính khuôn mẫu phẳng: chỉ gồm `heroBadge`, `introduction`, mảng `sections: { heading, paragraphs, bullets }[]`, `funFacts?: string[]`, `widgetType?: ...`, `tags: string[]`.
   - Hoàn toàn thiếu các trường dữ liệu có cấu trúc cao (Key metrics, Meta badges, Thuộc tính key-values, Timeline pha đêm diễn, Danh mục nhạc cụ âm học, Danh nhân, Kiệt tác).

3. **Hiện Trạng Định Tuyến & Trang Hub tại `src/data/sitemapRoutes.ts` (519 dòng)**:
   - Trường `subtitle` tại `RouteNode` (dòng 5) đang bị lạm dụng để hiển thị các câu văn mô tả dài dòng dưới tiêu đề (ví dụ: dòng 136: `'Cội nguồn lịch sử & chiều sâu văn hóa'`, dòng 239: `'Màu sắc, chất liệu & biểu tượng phục trang truyền thống'`).
   - Các trang Hub lớn (`/kham-pha`, `/gioi-thieu`, `/tien-ich`, `/kham-pha/tong-quan`, `/kham-pha/san-khau`, `/tien-ich/tham-quan-va-su-kien`) đều có `isHub: true`.

4. **Hiện Trạng Render Trang Hub & Chi Tiết tại `src/components/MuseumView.tsx` (252 dòng)**:
   - Dòng 140 - 178: Khi `route.isHub === true`, component chỉ render một `grid grid-cols-1 md:grid-cols-2 gap-4` đơn sơ lặp qua các `childPath` với `child.title` và `child.description` cắt 2 dòng (`line-clamp-2`).
   - Đây chính là nguyên nhân trực tiếp dẫn tới hiện tượng "danh sách card sơ sài / xơ xác đơn điệu" bị phản ánh trong R1 và yêu cầu mở rộng ngày 2026-09-18T17:24:21Z.

### 1.2. Hiện Trạng Public Media Assets (Audio, Ảnh, Icon)
1. **Thư mục ảnh `public/images/`**:
   - Hiện chỉ có duy nhất 4 file ảnh:
     - `cheo_costume.jpg` (842 KB)
     - `cheo_dinh_lang.jpg` (1,037 KB)
     - `cheo_hero.jpg` (722 KB)
     - `cheo_instruments.jpg` (847 KB)
   - Thư mục `src/assets/` chỉ có `hero.png` (260 KB) và 2 file SVG mẫu (`react.svg`, `vite.svg`).
2. **Tài nguyên âm thanh (Audio Assets)**:
   - Kiểm tra toàn bộ dự án (`find_by_name` với extensions `.mp3`, `.wav`, `.ogg`, `.m4a`, `.aac`): **0 file âm thanh tồn tại**.
   - Trình phát `AudioSamplePlayer.tsx` hiện tại là dạng mô phỏng (visual simulation waveform bằng CSS/JS toán học, không phát file audio thực tế).
3. **Tài nguyên Icon `public/icons.svg`**:
   - Vẫn chứa các icon template dư thừa từ dự án mẫu (`bluesky-icon`, `discord-icon`, `github-icon`, `x-icon`, `documentation-icon`), không có icon di sản Chèo.

### 1.3. Lỗ Hổng Chi Tiết Đối Soát Với ORIGINAL_REQUEST.md
1. **Lỗ hổng R1 (`/kham-pha`)**:
   - `/kham-pha` trong `pageDetailsData.ts` (dòng 187-204) chỉ có 1 đoạn intro và 3 dòng text "Chặng 1, Chặng 2, Chặng 3".
   - Thiếu hoàn toàn 3 Trụ Cột Di Sản trực quan (Tổng Quan Lịch Sử, Không Gian Biểu Diễn, Chèo Đương Đại).
   - Thiếu các chỉ số nổi bật văn hóa (10+ thế kỷ, 200+ làn điệu, 5 mẫu nhân vật ước lệ, 14 tỉnh thành hồ sơ UNESCO).
   - Thiếu preview khơi gợi nhu cầu dẫn nhập vào từng phòng con.

2. **Lỗ hổng R2 (`/kham-pha/cheo-hien-dai`)**:
   - Trong `pageDetailsData.ts` (dòng 414-429), trang này chỉ có đúng 1 section và 1 đoạn văn chung chung: *"Cách tân Chèo là bài toán đòi hỏi sự cẩn trọng..."*. Thuộc tính `widgetType` bị bỏ trống (`undefined`).
   - File `src/components/interactive/ModernCheoShowcase.tsx` (367 dòng) **ĐANG BỊ BỎ HOANG HOÀN TOÀN (ORPHANED)**:
     - Không hề được import trong `DetailPageRenderer.tsx:12-19` hay `MuseumView.tsx:12-18`.
     - Không nằm trong union type `RouteNode.widgetType` hay `PageDetailContent.widgetType`.
     - Dữ liệu nằm cứng (hardcoded) bên trong file component thay vì được tách thành data model.
     - Sử dụng giao diện tab chuyển đổi (`activeTab: 'timeline' | 'masterpieces' | 'artists' | 'unesco'`), vi phạm tiêu chí R4 và yêu cầu mới về việc thay thế tab bằng Card/Timeline/Showcase đa tầng.

3. **Lỗ hổng R3 (`/kham-pha/san-khau/am-thanh`)**:
   - File `AudioSamplePlayer.tsx` (168 dòng) chỉ chứa mảng cứng `SAMPLE_MELODIES` gồm 4 điệu đơn lẻ (`dao-lieu`, `quan-tu-vu-dich`, `sa-lech`, `he-moi`).
   - Hoàn toàn KHÔNG CÓ:
     - Timeline Hành trình 4 giai đoạn đêm Chèo (*Khởi nhạc & Nhịp trống mở màn* → *Hát xưng danh & Ra ngô ra khoai* → *Làn điệu trữ tình & Tự sự khắc khoải* → *Tiếng cười trào lộng & Tiết tấu hoan hỉ*).
     - Khu trưng bày thẻ Card độc lập cho 6+ nhạc cụ cốt lõi (Trống đế, Trống cơm, Đàn nguyệt, Đàn nhị, Sáo trúc, Thanh la/Mõ) nêu rõ âm sắc, cấu tạo vật lý, linh hồn nhịp phách, tương tác sân khấu.
     - Dữ liệu lời thơ cổ đầy đủ (bài thơ, thể thơ lục bát / song thất lục bát, tính chất điệu hát, hoàn cảnh kịch tính).

4. **Lỗ hổng R4 & Phạm vi mở rộng**:
   - Trang `/kham-pha/tong-quan/gia-tri-van-hoa`: Chưa có cấu trúc phân tích 4 giá trị nhân đạo, cơ chế tiếng cười trào lộng, tính cố kết cộng đồng.
   - Trang `/kham-pha/tong-quan/phia-sau-san-khau`: Chưa có dữ liệu về khẩu quyết "Thanh - Sắc - Tinh - Nghệ", quy chuẩn vẽ mặt tạo hình Đào - Kép - Hề, và sự biến hóa của 5 đạo cụ ước lệ (Quạt mo, Đòn gánh, Roi ngựa, Áo tơi, Mái chèo).
   - Trang `/tien-ich/kho-tu-lieu`: Chưa có danh mục đĩa than 78 vòng Dihavina (1958 - 1980), bản chép tay chữ Nôm Quan Âm Thị Kính 1875, các chuyên khảo của GS. Trần Bảng.
   - Trang `/tien-ich/ban-do-bao-tang`: Chưa có sơ đồ phân bổ 5 gian triển lãm theo tầng và 3 tour tham quan định hướng (30 phút, 60 phút, nghiên cứu).

---

## 2. Logic Chain (Chuỗi Lập Luận Từ Quan Sát Đến Giải Pháp)

1. **Từ Quan sát 1.1 & 1.3 (R1 & R4)**:
   - Hiện tại `/kham-pha` bị đơn điệu vì `MuseumView.tsx` chỉ hiển thị thẻ card tiêu đề + mô tả 2 dòng, trong khi `pageDetailsData.ts` không chứa dữ liệu phân cấp.
   - → **Giải pháp**: Xây dựng interface `HubShowcaseData` và `HeritagePillar`. Bổ sung bộ dữ liệu `KHAM_PHA_HUB_DATA` gồm đầy đủ 3 trụ cột di sản, 4 chỉ số văn hóa nổi bật, lời bình thi ca, và các thẻ phòng con có bullet highlights rõ ràng.

2. **Từ Quan sát 1.3 (R2)**:
   - Trang `/kham-pha/cheo-hien-dai` bị sơ sài và `ModernCheoShowcase.tsx` bị bỏ rơi không kết nối vào hệ thống.
   - → **Giải pháp**: 
     - Thiết kế bộ kiểu dữ liệu `ModernCheoComprehensiveData` (`ModernMilestone`, `PioneerArtist`, `ModernMasterpiece`, `UnescoDossierData`).
     - Tách toàn bộ nội dung văn hóa sâu sắc thành dataset `MODERN_CHEO_DATA`: Cột mốc 1951 tại chiến khu Việt Bắc, 4 danh nhân tiên phong (Tào Mạt, Cả Tam, Dịu Hương, Bùi Đắc Sừ), bộ ba sử thi *Bài ca giữ nước*, vở kịch thơ *Nàng Sita*, hồ sơ UNESCO với 14 tỉnh thành châu thổ sông Hồng.
     - Đề xuất thay thế component `ModernCheoShowcase` từ dạng tab sang dạng Grid đa tầng & Timeline cuộn trực quan, kết nối vào `widgetType: 'modern'`.

3. **Từ Quan sát 1.2 & 1.3 (R3)**:
   - Trang `/kham-pha/san-khau/am-thanh` hiện chỉ có 4 điệu hát trong tab đơn giản, thiếu toàn bộ mạch hành trình âm thanh và chi tiết nhạc cụ.
   - → **Giải pháp**:
     - Thiết kế interface `CheoAudioCompleteData` gồm `CheoNightTimelinePhase`, `CheoInstrumentCard`, `CheoMelodyLyric`.
     - Xây dựng dataset `CHEO_AUDIO_COMPLETE_DATA`:
       * 4 pha thời gian đêm chèo (19:00 - 22:30) kèm chức năng kịch tính, âm quyển và tâm lý khán giả.
       * 6 card nhạc cụ độc lập: Trống đế (Nhạc trưởng), Trống cơm (Đệm trầm thổ âm), Đàn nguyệt (Dẫn giai điệu), Đàn nhị (Nỉ non cảm xúc), Sáo trúc (Thanh thoát), Thanh la & Mõ (Điểm xuyết kim mộc).
       * Catalog làn điệu kèm trích dẫn lời thơ cổ mẫu mực (Đào liễu, Quân tử vu dịch, Luyện năm cung, Hề mồi).

4. **Từ Quan sát 1.3 & Yêu cầu mở rộng (Expanded Scope)**:
   - Các trang nội dung còn lại cũng cần dữ liệu chuyên sâu để xóa bỏ text phụ dài dòng.
   - → **Giải pháp**: Cung cấp sẵn các dataset:
     - `BACKSTAGE_ARTISTRY_DATA`: Khẩu quyết 4 chữ vàng Thanh - Sắc - Tinh - Nghệ, cẩm nang hóa trang 3 dạng vai, 2 đạo cụ ước lệ biến hóa (Quạt mo, Đòn gánh).
     - `CULTURAL_PHILOSOPHY_DATA`: 3 trụ cột nhân văn, cơ chế trào lộng của Hề chèo.
     - `ARCHIVE_VAULT_DATA`: 4 tư liệu đĩa than 78 vòng Dihavina và bản chép tay chữ Nôm cổ.
     - `MUSEUM_ZONES_DATA` & `CURATED_TOURS_DATA`: Sơ đồ 5 gian bảo tàng số và lộ trình tour 30 - 60 phút.

5. **Tính Chuẩn Hóa & An Toàn Kỹ Thuật**:
   - Tất cả các interface và dữ liệu được đóng gói độc lập trong 2 file tại thư mục của Explorer:
     - `.agents/explorer_survey_3/proposed_cheoCulturalTypes.ts`
     - `.agents/explorer_survey_3/proposed_cheoDataFiles.ts`
   - Đã được kiểm tra biên dịch bằng TypeScript compiler (`tsc --noEmit --ignoreConfig`), đạt **0 lỗi** (Exit code 0).

---

## 3. Caveats (Các Điểm Lưu Ý & Giới Hạn)

1. **Về file âm thanh vật lý (.mp3)**:
   - Do thư mục `public/` hiện không có sẵn file `.mp3`, trong cấu trúc dữ liệu âm thanh, trường `sampleAudioData` và `audioMetadata` chứa các thông số mô phỏng (tên đoạn trích, nhịp phách, thời lượng, ghi chú thu âm) và sẵn sàng tiếp nhận đường dẫn URL khi có file audio thực tế.
   - Trình phát âm thanh có thể tiếp tục sử dụng bộ visualizer sóng âm động kết hợp preview lời thơ và tính chất điệu hát để tạo trải nghiệm tương tác trực quan cao cấp mà không bị crash do thiếu file media.
2. **Quy tắc Read-Only của Explorer**:
   - Explorer Survey 3 tuân thủ nghiêm ngặt nguyên tắc chỉ đọc: Không ghi đè hay sửa đổi bất kỳ file nào trong `src/`.
   - Các giải pháp và file mã nguồn mẫu được lưu giữ trọn vẹn tại `.agents/explorer_survey_3/` để các Sub-orchestrator và Worker triển khai áp dụng vào `src/types/` và `src/data/`.

---

## 4. Conclusion (Kết Luận & Kiến Trúc Đề Xuất Cho Đội Thi Công)

### 4.1. Bản Đồ File Đề Xuất Chuyển Giao Cho Worker Triển Khai
| File Đề Xuất Trong Thư Mục Này | Đích Đến Đề Xuất Trong Dự Án (`src/`) | Mục Đích & Vai Trò |
|---|---|---|
| `proposed_cheoCulturalTypes.ts` | `src/types/cultural.ts` | Định nghĩa toàn bộ TypeScript interfaces chuẩn hóa cho di sản Chèo, Hub pages, Nhạc cụ, Timeline, Danh nhân, UNESCO. |
| `proposed_cheoDataFiles.ts` | `src/data/cheoModernData.ts`<br/>`src/data/cheoAudioData.ts`<br/>`src/data/cheoHeritageData.ts`<br/>`src/data/cheoBackstageData.ts` | Cung cấp dữ liệu văn hóa trọn vẹn, giàu tính lịch sử và học thuật, loại bỏ hoàn toàn subtitle text phụ dài dòng. |

### 4.2. Khuyến Nghị Trọng Tâm Dành Cho Các Nhóm UI & Component (Worker)
1. **Đối với R1 (`/kham-pha`)**:
   - Tạo component `HubShowcaseRenderer` hoặc nâng cấp `MuseumView.tsx`: Thay vì render thẻ 2 cột xơ xác, hãy render banner chủ đề, 4 thẻ điểm nhấn số liệu (`keyMetrics`), 3 khối Trụ Cột Di Sản lớn (`HeritagePillar`) có ảnh minh họa thực tế (`cheo_dinh_lang.jpg`, `cheo_costume.jpg`, `cheo_instruments.jpg`) và các badge phân loại màu sắc trang nhã.
2. **Đối với R2 (`/kham-pha/cheo-hien-dai`)**:
   - Cập nhật `RouteNode.widgetType` và `PageDetailContent.widgetType` bổ sung thêm `'modern'`.
   - Cải tổ `ModernCheoShowcase.tsx`: Thay vì dùng 4 tab chuyển đổi (bị che khuất nội dung), hãy dựng thành bố cục Showcase đa tầng gồm:
     - Khối Hero điểm nhấn & Cột mốc chuyển mình 1951.
     - Lưới thẻ Danh Nhân & Kiệt Tác Tiên Phong (Tào Mạt, Cả Tam, Dịu Hương, Sita).
     - Khối Hồ Sơ UNESCO với bản đồ 14 tỉnh thành và 3 tiêu chí di sản.
3. **Đối với R3 (`/kham-pha/san-khau/am-thanh`)**:
   - Tái thiết kế `AudioSamplePlayer.tsx` thành `AudioJourneyAndInstruments`:
     - Tầng 1: Timeline Hành Trình 4 Giai Đoạn Đêm Chèo (thanh tiến trình dọc hoặc ngang sinh động).
     - Tầng 2: Grid 6 Thẻ Card Độc Lập cho Dàn Nhạc Cụ (Trống đế, Trống cơm, Đàn nguyệt, Đàn nhị, Sáo trúc, Thanh la/Mõ) với các thuộc tính âm học, vật liệu, linh hồn nhịp phách.
     - Tầng 3: Trạm Thưởng Thức Làn Điệu & Thơ Cổ kèm bộ mô phỏng sóng âm và lời bình văn học.
4. **Đối với R4 & Toàn bộ các trang Hub/Nội dung**:
   - Rà soát `sitemapRoutes.ts`: Chuyển đổi các chuỗi `subtitle` dài dòng thành các thuộc tính cấu trúc (`metaBadges`, `categoryTag`, `keyAttributes`).

---

## 5. Verification Method (Phương Pháp Kiểm Tra Độc Lập)

Bất kỳ thành viên nào trong đội ngũ hoặc Sentinel Agent đều có thể kiểm chứng báo cáo này qua các bước sau:

1. **Kiểm tra cú pháp & tính tương thích TypeScript của các file đề xuất**:
   ```powershell
   npx tsc --noEmit --ignoreConfig --target es2023 --module esnext --moduleResolution bundler --skipLibCheck ".agents/explorer_survey_3/proposed_cheoDataFiles.ts"
   ```
   *Kết quả kỳ vọng*: Lệnh thoát với mã `0`, không xuất hiện bất kỳ cảnh báo hoặc lỗi TypeScript nào.

2. **Kiểm tra trạng thái build sạch của toàn bộ dự án hiện tại**:
   ```powershell
   npm run build
   ```
   *Kết quả kỳ vọng*: `tsc -b && vite build` biên dịch 100% thành công trong < 1s, output tại `dist/`.

3. **Kiểm tra vị trí các file tư liệu đã lập**:
   - File Types: `d:\Learning\Chèo Landing page\.agents\explorer_survey_3\proposed_cheoCulturalTypes.ts`
   - File Dữ liệu mẫu: `d:\Learning\Chèo Landing page\.agents\explorer_survey_3\proposed_cheoDataFiles.ts`
   - Báo cáo Handoff: `d:\Learning\Chèo Landing page\.agents\explorer_survey_3\handoff.md`

4. **Điều kiện vô hiệu hóa (Invalidation Conditions)**:
   - Nếu bất kỳ dữ liệu lịch sử nào (năm 1951, vai trò bà tổ Phạm Thị Trân, tên tuổi NSND Tào Mạt hay danh mục 6 nhạc cụ) bị sai lệch với hồ sơ của Cục Di sản Văn hóa hoặc Viện Văn hóa Nghệ thuật Quốc gia Việt Nam.
   - Nếu việc tích hợp các interface này gây ra bất kỳ lỗi type mismatch nào với phiên bản React 19 / TypeScript 6.0 hiện hành.
