# BÁO CÁO CHIẾN LƯỢC COMPONENT NGUYÊN TỬ (ATOMIC UI) & TÁI CẤU TRÚC SUBTITLE CHO MILESTONE 1 (R4)

- **Tác giả**: teamwork_preview_explorer (`explorer_m1_2`)
- **Ngày hoàn thành**: 2026-09-18T17:36:00Z
- **Đối tượng tiếp nhận**: Parent Orchestrator / Sub-Orchestrator M1 / M1 Implementation Worker
- **Tài liệu căn cứ**: `.agents/ORIGINAL_REQUEST.md` (R4 & Expanded Scope), `PROJECT.md` (Milestone 1 Contract)

---

## 1. OBSERVATION (QUAN SÁT THỰC NGHIỆM TRỰC TIẾP)

### 1.1 Khảo sát Hệ Thống Token Styling & Tailwind v4 (`src/index.css`)
Quan sát trực tiếp tệp `src/index.css:1-17`:
```css
@import "tailwindcss";

@theme {
  --font-serif: 'Playfair Display', Georgia, Cambria, 'Times New Roman', serif;
  --font-sans: 'Be Vietnam Pro', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

body {
  font-family: var(--font-sans);
  background-color: #120f0d;
  color: #e7e0d8;
}

h1, h2, h3, .font-serif {
  font-family: var(--font-serif);
}
```
* **Font chữ quy chuẩn**:
  - `font-serif`: Ánh xạ tới `Playfair Display` (tiêu đề, trích dẫn thơ ca, thuật ngữ di sản).
  - `font-sans`: Ánh xạ tới `Be Vietnam Pro` (thông số, nhãn thuộc tính, văn bản nội dung).
* **Bảng màu di sản & token Tailwind v4**:
  - Nền tối mộc: `#120f0d` (gỗ lim trầm mặc), card container `#16120f`, `stone-900/40`, `stone-900/50`.
  - Văn bản: `#e7e0d8` (giấy dó ngà cổ điển), `text-stone-300`, `text-stone-400`.
  - Nhóm màu nhấn chủ đạo:
    - `amber` (`amber-300`, `amber-400`, `amber-500`, `amber-950/40`, viền `amber-800/40`): Đại diện cho sắc vàng son thiếp, chuông khánh đồng, ánh sáng sân khấu.
    - `red` (`red-300`, `red-400`, `red-950/40`, viền `red-800/40`, `from-red-800 to-amber-700`): Đại diện cho sắc son đỏ kinh thành, yếm thắm, mốc son lịch sử 1951.
    - `emerald` (`emerald-300`, `emerald-400`, `emerald-950/40`, viền `emerald-800/40`): Đại diện cho làn điệu dân gian, đồng bằng lúa nước sông Hồng, sáo trúc, sự bảo tồn nguyên bản.
    - `sky` (`sky-300`, `sky-400`, `sky-950/40`, viền `sky-800/40`): Đại diện cho không gian số hóa, thư viện lưu trữ Web3D, tiện ích đặt vé và công nghệ tra cứu.
    - `stone` (`stone-300`, `stone-400`, `stone-800/80`): Đại diện cho bản ghi chép khảo cứu, thư tịch cổ Nôm.

### 1.2 Khảo sát Header Bị Dồn Ép Tại `src/components/MuseumView.tsx:109-138`
Quan sát trực tiếp mã nguồn `src/components/MuseumView.tsx`:
```tsx
109:         {/* Exhibition Header */}
110:         <header className="space-y-3 text-left border-b border-stone-800/80 pb-6">
111:           <div className="flex items-center gap-3">
112:             <span className="text-[11px] uppercase tracking-widest text-amber-500 font-semibold font-serif">
113:               {route.category}
114:             </span>
115:           </div>
116: 
117:           <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white tracking-tight leading-snug">
118:             {route.title}
119:           </h1>
120: 
121:           <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed max-w-3xl">
122:             {route.description}
123:           </p>
124: 
125:           {/* Poetic quote if available */}
126:           {detailData?.quote && (
127:             <div className="pt-2">
128:               <blockquote className="p-4 sm:p-5 rounded-xl bg-[#171310] border-l-2 border-amber-600 font-serif italic text-amber-200/90 text-sm leading-relaxed">
129:                 &ldquo;{detailData.quote.text}&rdquo;
130:                 {detailData.quote.author && (
131:                   <footer className="text-xs text-stone-400 not-italic font-sans mt-2 font-normal">
132:                     &mdash; {detailData.quote.author}
133:                   </footer>
134:                 )}
135:               </blockquote>
136:             </div>
137:           )}
138:         </header>
```
* **Khiếm khuyết kiến trúc trực quan**:
  1. `route.subtitle` bị bỏ rơi hoàn toàn trong `MuseumView`! Mặc dù tất cả 30 route trong `sitemapRoutes.ts` đều có dữ liệu subtitle phong phú.
  2. Phân loại `route.category` chỉ là một thẻ `<span>` đơn điệu, không có badge thể hiện tính chất hiện vật, niên đại, hay tình trạng di sản.
  3. Đoạn mô tả `route.description` bị hiển thị dạng một khối văn bản đặc quánh 30–50 từ. Người dùng không có điểm quét thị giác (visual anchors).
  4. Thông số nhanh (`quickSpecs`) tuy đã được định nghĩa trong interface `PageDetailContent` (`src/data/pageDetailsData.ts:20`) nhưng không hề được hiển thị tại Header của trang.

### 1.3 Khảo sát Dữ Liệu Subtitle Trong `src/data/sitemapRoutes.ts` (30 Tuyến Đường)
Toàn bộ 30 tuyến đường (`/`, `/sanh`, 4 route `/gioi-thieu/*`, 8 route `/kham-pha/*`, 16 route `/tien-ich/*`) hiện đang sử dụng subtitle dạng câu ghép kéo dài bằng các liên từ `&`, `,`, ví dụ:
- `am-thanh`: `"Dàn nhạc dân tộc & hơn 200 làn điệu Chèo cổ"`
- `lich-su-phat-trien`: `"Hơn 10 thế kỷ thăng trầm cùng vận mệnh dân tộc"`
- `nhan-vat`: `"Hệ thống 5 mẫu hình nhân vật chuẩn mực"`
- `trang-phuc`: `"Màu sắc, chất liệu & biểu tượng phục trang truyền thống"`
- `cheo-hien-dai`: `"Sức sống mới & Sự cách tân đương đại"`
- `kho-tu-lieu`: `"Thư viện số hóa đĩa than 78 vòng, sách & kịch bản cổ"`

Các chuỗi này vi phạm trực tiếp yêu cầu R4: *"Xóa bỏ hoàn toàn việc lạm dụng text phụ dài dòng ở tất cả các trang, bóc tách thành các block nội dung, meta badge, thuộc tính, key-values rõ ràng, trang nhã."*

### 1.4 Khảo sát Sự Phụ Thuộc Của Các Thành Phần Khác Vào `subtitle`
Tìm kiếm qua `grep_search` cho thấy `subtitle` đang được đọc bởi:
- `src/components/SearchModal.tsx:26, 92` (tìm kiếm từ khóa và hiển thị gợi ý).
- `src/components/SitemapTree.tsx:58` (lọc nút cây sitemap).
- `src/components/SitemapDirectory.tsx:27, 235` (tra cứu danh bạ sitemap).
- `src/components/NodeDetailDrawer.tsx:61, 63, 137` (ngăn kéo thông tin node).

-> **Kết luận quan sát**: Không được xóa trường `subtitle` trong `RouteNode` vì sẽ gây lỗi biên dịch ở 4 component tra cứu trên. Thay vào đó, cần bổ sung `metaBadges` có cấu trúc vào `RouteNode` và cung cấp giải thuật bóc tách tự động `parseSubtitleToBadges` làm lớp bảo vệ kép.

---

## 2. LOGIC CHAIN (CHUỖI SUY LUẬN TỪ QUAN SÁT ĐẾN GIẢI PHÁP)

1. **Từ Quan sát 1.1 & 1.2 (Header dồn ép & thiếu phân tầng thị giác)**:
   - *Suy luận*: Tiếp nhận thông tin trên web di sản tuân theo mô hình đọc quét (Scan-first, Read-second). Độc giả cần nhận biết ngay trong 3 giây đầu: Đây là phân mục gì? Thuộc niên đại nào? Có điểm gì đặc sắc? Các thông số cốt lõi là gì?
   - *Hành động*: Tạo ra 4 component nguyên tử độc lập (`MetaBadge`, `FeaturePill`, `KeyValueGrid`, `DecomposedHeader`) đặt trong thư mục chuẩn `src/components/common/`.

2. **Từ Quan sát 1.2 (Thay thế Header tại MuseumView.tsx)**:
   - *Suy luận*: `DecomposedHeader` phải đóng vai trò là container cấp cao (High-order Presentation Component). Nó nhận dữ liệu từ cả `RouteNode` (`title`, `category`, `description`) và `PageDetailContent` (`metaBadges`, `quickSpecs`, `quote`), sau đó sắp xếp theo 5 tầng thị giác:
     - Tầng 1: Category Tag + Dải MetaBadge (phân loại, niên đại, âm sắc).
     - Tầng 2: Tiêu đề H1 (Font Playfair Display cỡ lớn, trang nghiêm).
     - Tầng 3: Lead Summary (Đoạn dẫn nhập thanh thoát font sans).
     - Tầng 4: KeyValueGrid (Lưới thuộc tính nhanh: Niên đại, Địa bàn, Nhạc cụ chính, Bậc thầy đại diện).
     - Tầng 5: Poetic Quote (Trích dẫn cổ thi / danh ngôn nghệ nhân).

3. **Từ Quan sát 1.3 & 1.4 (Xử lý Subtitle không làm gãy code hiện hữu)**:
   - *Suy luận*: Cần áp dụng chiến lược **Additive Enhancement (Nâng cấp tương thích ngược)**:
     - Bổ sung trường tùy chọn `metaBadges?: Array<{ label: string; variant?: MetaBadgeVariant }>` vào `RouteNode` trong `sitemapRoutes.ts`.
     - Với các route đã được bổ sung `metaBadges` tường minh, hệ thống ưu tiên sử dụng.
     - Đồng thời, xây dựng hàm thuần túy `parseSubtitleToBadges(subtitle, category)` để bóc tách thông minh các chuỗi subtitle cũ (cắt theo `&`, `,`, `—`, `và`) và tự động gán biến thể màu (`amber`, `red`, `emerald`, `sky`, `stone`) theo ngữ nghĩa văn hóa.
     - Giữ nguyên `subtitle?: string` để `SearchModal`, `SitemapTree`, `SitemapDirectory` tiếp tục hoạt động 100% không lỗi.

---

## 3. CAVEATS (GIỚI HẠN & ĐIỀU KIỆN RÀNG BUỘC)

1. **Ràng buộc Quyền Hạn**: Explorer hoạt động ở chế độ **READ-ONLY**. Không ghi đè trực tiếp vào các tệp trong `src/`. Tất cả mã thiết kế dưới đây là blueprint chính xác để Worker Milestone 1 triển khai.
2. **Phạm vi Milestone 1**: Milestone 1 chỉ chịu trách nhiệm tạo 4 atomic components, cập nhật cấu trúc dữ liệu `sitemapRoutes.ts`, `pageDetailsData.ts` và gắn `DecomposedHeader` vào `MuseumView.tsx`. Các Exhibition Hub Banner của 7 trang Hub thuộc Milestone 2; các widget `ModernCheoExhibition`, `CheoSoundJourneyTimeline`, `OrchestraInstrumentsGrid` thuộc Milestone 3.
3. **Purity & Oxlint**: Mọi component được thiết kế hoàn toàn là pure function component, không sử dụng `Date.now()`, không side-effect trong quá trình render, đảm bảo lệnh `npm run lint` đạt 0 error/0 warning.

---

## 4. CONCLUSION & BLUEPRINTS CHI TIẾT CHO 4 ATOMIC UI COMPONENTS

### 4.1 Component 1: `src/components/common/MetaBadge.tsx`

#### Mục đích:
Huy hiệu định danh cao cấp, đại diện cho niên đại, loại hình di sản, trạng thái tư liệu, hoặc mốc son nghệ thuật.

#### Mã nguồn chi tiết (Production-Ready Code):
```tsx
import React from 'react'

export type MetaBadgeVariant = 'amber' | 'red' | 'emerald' | 'sky' | 'stone'

export interface MetaBadgeProps {
  label: string
  variant?: MetaBadgeVariant
  icon?: React.ComponentType<{ className?: string }>
  size?: 'sm' | 'md'
  onClick?: () => void
  className?: string
}

const VARIANT_STYLES: Record<MetaBadgeVariant, string> = {
  amber: 'bg-amber-950/40 text-amber-300 border-amber-800/40 hover:border-amber-700/60 shadow-amber-950/20',
  red: 'bg-red-950/40 text-red-300 border-red-800/40 hover:border-red-700/60 shadow-red-950/20',
  emerald: 'bg-emerald-950/40 text-emerald-300 border-emerald-800/40 hover:border-emerald-700/60 shadow-emerald-950/20',
  sky: 'bg-sky-950/40 text-sky-300 border-sky-800/40 hover:border-sky-700/60 shadow-sky-950/20',
  stone: 'bg-stone-900/60 text-stone-300 border-stone-800/80 hover:border-stone-700'
}

const SIZE_STYLES = {
  sm: 'px-2.5 py-0.5 text-[11px] gap-1',
  md: 'px-3 py-1 text-xs gap-1.5'
}

export const MetaBadge: React.FC<MetaBadgeProps> = ({
  label,
  variant = 'amber',
  icon: Icon,
  size = 'md',
  onClick,
  className = ''
}) => {
  const isClickable = Boolean(onClick)
  const Component = isClickable ? 'button' : 'span'

  return (
    <Component
      type={isClickable ? 'button' : undefined}
      onClick={onClick}
      className={`inline-flex items-center font-medium font-sans rounded-full border backdrop-blur-sm transition-all shadow-sm select-none ${
        VARIANT_STYLES[variant]
      } ${SIZE_STYLES[size]} ${
        isClickable ? 'cursor-pointer hover:scale-[1.02] active:scale-[0.98]' : ''
      } ${className}`}
    >
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      <span>{label}</span>
    </Component>
  )
}
```

---

### 4.2 Component 2: `src/components/common/FeaturePill.tsx`

#### Mục đích:
Viên thuốc thuộc tính vi mô, dùng để thể hiện các từ khóa bổ trợ (nhạc cụ, chất liệu, tính cách nhân vật) mà không gây phân tán chú ý.

#### Mã nguồn chi tiết (Production-Ready Code):
```tsx
import React from 'react'

export interface FeaturePillProps {
  text: string
  variant?: 'default' | 'accent'
  icon?: React.ComponentType<{ className?: string }>
  dot?: boolean
  className?: string
}

export const FeaturePill: React.FC<FeaturePillProps> = ({
  text,
  variant = 'default',
  icon: Icon,
  dot = false,
  className = ''
}) => {
  const variantClass =
    variant === 'accent'
      ? 'bg-amber-950/30 text-amber-300/90 border-amber-800/30 hover:border-amber-700/50'
      : 'bg-stone-900/60 text-stone-300 border-stone-800/80 hover:border-stone-700'

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-sans font-medium border transition-colors ${variantClass} ${className}`}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            variant === 'accent' ? 'bg-amber-400' : 'bg-stone-400'
          }`}
        />
      )}
      {Icon && <Icon className="w-3 h-3 shrink-0 text-amber-400/80" />}
      <span>{text}</span>
    </span>
  )
}
```

---

### 4.3 Component 3: `src/components/common/KeyValueGrid.tsx`

#### Mục đích:
Tổ chức lại các thuộc tính văn hóa quan trọng (Niên đại, Không gian diễn xướng, Nhạc cụ chủ chốt, Nghệ nhân đại diện) thành dạng lưới trực quan 2/3/4 cột, thay thế triệt để các câu văn dài dòng.

#### Mã nguồn chi tiết (Production-Ready Code):
```tsx
import React from 'react'

export interface KeyValueItem {
  label: string
  value: string
  hint?: string
  icon?: React.ComponentType<{ className?: string }>
}

export interface KeyValueGridProps {
  items?: KeyValueItem[]
  columns?: 2 | 3 | 4
  className?: string
}

export const KeyValueGrid: React.FC<KeyValueGridProps> = ({
  items,
  columns = 4,
  className = ''
}) => {
  if (!items || items.length === 0) return null

  const colClass = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
  }[columns]

  return (
    <div className={`grid ${colClass} gap-3 w-full ${className}`}>
      {items.map((item, idx) => {
        const Icon = item.icon
        return (
          <div
            key={idx}
            className="p-3.5 rounded-xl bg-stone-900/50 border border-stone-800/80 hover:border-amber-900/50 transition-colors flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between gap-1 text-[11px] uppercase tracking-wider text-stone-400 font-sans font-medium">
              <div className="flex items-center gap-1.5">
                {Icon && (
                  <Icon className="w-3.5 h-3.5 text-amber-500/80 group-hover:text-amber-400 transition-colors" />
                )}
                <span>{item.label}</span>
              </div>
            </div>
            <div className="mt-1">
              <div className="text-sm font-serif font-semibold text-stone-100 group-hover:text-amber-200 transition-colors leading-snug">
                {item.value}
              </div>
              {item.hint && (
                <div className="text-[11px] text-stone-500 font-sans mt-0.5">
                  {item.hint}
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
```

---

### 4.4 Component 4: `src/components/common/DecomposedHeader.tsx`

#### Mục đích:
Thay thế trực tiếp phần tiêu đề và đoạn mô tả dồn ép tại `MuseumView.tsx:109-138`, tích hợp hoàn hảo dải huy hiệu phân loại, tiêu đề Playfair Serif, tóm tắt dẫn nhập, lưới thuộc tính nhanh và khung trích dẫn cổ thi.

#### Mã nguồn chi tiết (Production-Ready Code):
```tsx
import React from 'react'
import { MetaBadge, type MetaBadgeVariant } from './MetaBadge'
import { KeyValueGrid, type KeyValueItem } from './KeyValueGrid'

export interface DecomposedHeaderBadge {
  label: string
  variant?: MetaBadgeVariant
  icon?: React.ComponentType<{ className?: string }>
}

export interface DecomposedHeaderProps {
  title: string
  category?: string
  badges?: DecomposedHeaderBadge[]
  leadSummary?: string
  keyValues?: KeyValueItem[]
  quote?: {
    text: string
    author?: string
  }
  className?: string
}

export const DecomposedHeader: React.FC<DecomposedHeaderProps> = ({
  title,
  category,
  badges = [],
  leadSummary,
  keyValues = [],
  quote,
  className = ''
}) => {
  return (
    <header className={`space-y-5 text-left border-b border-stone-800/80 pb-8 ${className}`}>
      {/* 1. Dải Phân Loại & Huy Hiệu Metadata */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        {category && (
          <span className="text-[11px] uppercase tracking-widest text-amber-500 font-semibold font-serif px-2.5 py-1 rounded bg-amber-950/30 border border-amber-900/40">
            {category}
          </span>
        )}
        {badges && badges.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {badges.map((b, idx) => (
              <MetaBadge
                key={idx}
                label={b.label}
                variant={b.variant || 'amber'}
                icon={b.icon}
                size="sm"
              />
            ))}
          </div>
        )}
      </div>

      {/* 2. Tiêu Đề Triển Lãm Cốt Lõi */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
        {title}
      </h1>

      {/* 3. Đoạn Tóm Tắt Dẫn Nhập Thanh Thoát */}
      {leadSummary && (
        <p className="text-sm sm:text-base md:text-lg text-stone-300 font-light leading-relaxed max-w-4xl font-sans">
          {leadSummary}
        </p>
      )}

      {/* 4. Ma Trận Thuộc Tính Key-Value Grid (R4 Architecture) */}
      {keyValues && keyValues.length > 0 && (
        <div className="pt-2">
          <KeyValueGrid items={keyValues} columns={keyValues.length > 3 ? 4 : (keyValues.length as 2 | 3)} />
        </div>
      )}

      {/* 5. Khung Trích Cổ Thi / Lời Tự Sự Di Sản */}
      {quote && quote.text && (
        <div className="pt-2">
          <blockquote className="p-4 sm:p-5 rounded-xl bg-[#171310] border-l-2 border-amber-600 font-serif italic text-amber-200/90 text-sm leading-relaxed">
            &ldquo;{quote.text}&rdquo;
            {quote.author && (
              <footer className="text-xs text-stone-400 not-italic font-sans mt-2 font-normal">
                &mdash; {quote.author}
              </footer>
            )}
          </blockquote>
        </div>
      )}
    </header>
  )
}
```

---

## 5. KẾ HOẠCH THAY THẾ TẠI `src/components/MuseumView.tsx`

### 5.1 Đoạn code hiện tại (trước khi thay thế - dòng 109-138):
```tsx
        {/* Exhibition Header */}
        <header className="space-y-3 text-left border-b border-stone-800/80 pb-6">
          <div className="flex items-center gap-3">
            <span className="text-[11px] uppercase tracking-widest text-amber-500 font-semibold font-serif">
              {route.category}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white tracking-tight leading-snug">
            {route.title}
          </h1>

          <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed max-w-3xl">
            {route.description}
          </p>

          {/* Poetic quote if available */}
          {detailData?.quote && (
            <div className="pt-2">
              <blockquote className="p-4 sm:p-5 rounded-xl bg-[#171310] border-l-2 border-amber-600 font-serif italic text-amber-200/90 text-sm leading-relaxed">
                &ldquo;{detailData.quote.text}&rdquo;
                {detailData.quote.author && (
                  <footer className="text-xs text-stone-400 not-italic font-sans mt-2 font-normal">
                    &mdash; {detailData.quote.author}
                  </footer>
                )}
              </blockquote>
            </div>
          )}
        </header>
```

### 5.2 Bước triển khai thay thế:
1. Thêm import tại đầu `src/components/MuseumView.tsx`:
   ```tsx
   import { DecomposedHeader } from './common/DecomposedHeader'
   import { parseSubtitleToBadges } from '../data/sitemapRoutes'
   ```

2. Tính toán badges và keyValues trong body của component:
   ```tsx
   // Derive badges from explicit route.metaBadges or parse route.subtitle
   const headerBadges = route.metaBadges && route.metaBadges.length > 0
     ? route.metaBadges
     : parseSubtitleToBadges(route.subtitle, route.category, route.tags)

   // Quick specs from pageDetailsData or synthesized
   const headerSpecs = detailData?.quickSpecs || []
   ```

3. Thay thế toàn bộ khối `<header>...</header>` (dòng 109–138) bằng:
   ```tsx
   {/* Decomposed Exhibition Header (R4 Architecture) */}
   <DecomposedHeader
     title={route.title}
     category={route.category}
     badges={headerBadges}
     leadSummary={route.description}
     keyValues={headerSpecs}
     quote={detailData?.quote}
   />
   ```

---

## 6. CHIẾN LƯỢC BÓC TÁCH & BẢN ĐỒ SUBTITLE SITEMAP CHO TOÀN BỘ 30 TUYẾN ĐƯỜNG

### 6.1 Giải thuật thuần túy: `parseSubtitleToBadges`
Được export từ `src/data/sitemapRoutes.ts` để vừa phục vụ `MuseumView`, vừa phục vụ các component khác:
```typescript
import type { MetaBadgeVariant } from '../components/common/MetaBadge'

export interface ParsedBadge {
  label: string
  variant: MetaBadgeVariant
}

export function parseSubtitleToBadges(
  subtitle?: string,
  category?: string,
  tags?: string[]
): ParsedBadge[] {
  if (!subtitle || !subtitle.trim()) {
    if (tags && tags.length > 0) {
      return tags.slice(0, 3).map((t, idx) => ({
        label: t,
        variant: (['amber', 'emerald', 'sky'][idx % 3]) as MetaBadgeVariant
      }))
    }
    return []
  }

  // Tách theo các ký tự phân tách: &, ,, ;, —, hoặc chữ "và"
  const rawParts = subtitle.split(/\s*(?:&|,|;|—|\bvà\b|\bvà\b)\s*/)
  const parts = rawParts.map(p => p.trim()).filter(p => p.length > 0)

  const pickVariant = (text: string, idx: number): MetaBadgeVariant => {
    const lower = text.toLowerCase()
    if (lower.includes('1951') || lower.includes('unesco') || lower.includes('kiệt tác') || lower.includes('hồn cốt') || lower.includes('đào - kép') || lower.includes('mốc son')) {
      return 'red'
    }
    if (lower.includes('thế kỷ') || lower.includes('bảo tàng') || lower.includes('nghệ nhân') || lower.includes('cổ truyền') || lower.includes('đĩa than') || lower.includes('lịch sử') || lower.includes('phục trang')) {
      return 'amber'
    }
    if (lower.includes('làn điệu') || lower.includes('âm thanh') || lower.includes('dân gian') || lower.includes('sông hồng') || lower.includes('điền dã') || lower.includes('bảo tồn') || lower.includes('lịch diễn')) {
      return 'emerald'
    }
    if (lower.includes('số hóa') || lower.includes('web3d') || lower.includes('tìm kiếm') || lower.includes('bộ lọc') || lower.includes('vé') || lower.includes('hotline') || lower.includes('vr') || lower.includes('bản đồ')) {
      return 'sky'
    }
    const fallbacks: MetaBadgeVariant[] = ['amber', 'emerald', 'sky', 'red', 'stone']
    return fallbacks[idx % fallbacks.length]
  }

  return parts.map((part, idx) => ({
    label: part,
    variant: pickVariant(part, idx)
  }))
}
```

### 6.2 Cập nhật interface `RouteNode` trong `src/data/sitemapRoutes.ts`:
```typescript
import type { MetaBadgeVariant } from '../components/common/MetaBadge'

export interface RouteNode {
  path: string
  id: string
  title: string
  subtitle: string
  category: string
  breadcrumbs: { title: string; path: string }[]
  childrenPaths?: string[]
  isHub?: boolean
  description: string
  widgetType?: 'audio' | 'characters' | 'costumes' | 'ticket' | 'timeline' | 'feedback' | 'plays' | 'modern' | 'map' | 'archive' | 'default'
  tags: string[]
  metaBadges?: Array<{ label: string; variant?: MetaBadgeVariant }>
}
```

### 6.3 Bảng Ánh Xạ Toàn Diện 30 Tuyến Đường (Master Subtitle Restructuring Table):

| # | Tuyến đường (`path`) | Subtitle Hiện Tại (Dồn ép) | Cụm `metaBadges` Tái Cấu Trúc Đề Xuất | `quickSpecs` Đề Xuất Cho `pageDetailsData.ts` |
| :--- | :--- | :--- | :--- | :--- |
| 1 | `/` & `/sanh` | Không gian trung tâm bảo tàng | `[Sảnh Đón Tiếp (amber)]`, `[Cổng 3 Không Gian (emerald)]`, `[Chỉ Dẫn 3D (sky)]` | Không gian: 3 Phân khu; Quy mô: 29 Phòng trưng bày; Hình thức: Số hóa tương tác |
| 2 | `/gioi-thieu` | Khởi nguồn, sứ mệnh & con người | `[Sứ Mệnh Di Sản (amber)]`, `[Hành Trình Điền Dã (emerald)]`, `[Đội Ngũ Sáng Lập (sky)]` | Trọng tâm: Bảo tồn & Lan tỏa; Địa bàn: Bắc Bộ; Phương thức: Âm thanh vòm & 3D |
| 3 | `/gioi-thieu/bao-tang-so-cheo` | Tầm nhìn số hóa di sản nghệ thuật | `[Tầm Nhìn Di Sản (sky)]`, `[Công Nghệ Web3D (amber)]`, `[Chuẩn Âm Vòm (emerald)]` | Nền tảng: Web tương tác; Âm thanh: 24-bit studio; Tư liệu: Kho mở cộng đồng |
| 4 | `/gioi-thieu/cau-chuyen-hinh-thanh` | Hành trình điền dã tìm về cội nguồn | `[2+ Năm Điền Dã (amber)]`, `[Làng Chèo Cổ (emerald)]`, `[Ký Sự Ghi Âm (stone)]` | Địa bàn: Khuốc, Yên Khánh, Nam Trực; Nhân chứng: 20+ Nghệ nhân lão thành; Hiện vật: 150+ Bản ghi |
| 5 | `/gioi-thieu/muc-tieu-va-y-nghia` | Gìn giữ hồn cốt & đưa di sản vào đời sống đương đại | `[Hồn Cốt Dân Tộc (red)]`, `[Tiếp Cận Trẻ Hóa (emerald)]`, `[Quảng Bá Quốc Tế (sky)]` | Mục tiêu: Giữ nguyên quy chuẩn; Đối tượng: Học đường & Quốc tế; Đổi mới: Đồ họa tương tác |
| 6 | `/gioi-thieu/doi-ngu-nhom-thuc-hien` | Hội đồng cố vấn, nghệ nhân & kỹ sư công nghệ | `[Nghệ Nhân Nhân Dân (amber)]`, `[Nhà Nghiên Cứu (stone)]`, `[Kỹ Sư Công Nghệ (sky)]` | Cố vấn: Viện Văn Hóa Nghệ Thuật; Chuyên gia: NSND Cả Tam, NSND Dịu Hương; Kỹ thuật: Team Web3D |
| 7 | `/kham-pha` | Trọng tâm biểu diễn & di sản Chèo | `[10+ Thế Kỷ Di Sản (amber)]`, `[200+ Làn Điệu (emerald)]`, `[5 Mẫu Nhân Vật (red)]` | Cột mốc: Từ TK X; Trụ cột: Lịch sử, Sân khấu, Hiện đại; Kiệt tác: Tứ đại tích cổ |
| 8 | `/kham-pha/tong-quan` | Cội nguồn lịch sử & chiều sâu văn hóa | `[Văn Minh Sông Hồng (emerald)]`, `[Bà Tổ Phạm Thị Trân (amber)]`, `[Đạo Lý Nhân Sinh (red)]` | Khởi phát: Kinh đô Hoa Lư; Không gian: Chiếu chèo sân đình; Giá trị: Nhân văn & Trào phúng |
| 9 | `/kham-pha/tong-quan/lich-su-phat-trien` | Hơn 10 thế kỷ thăng trầm cùng vận mệnh dân tộc | `[Khởi Nguồn TK X (amber)]`, `[Chèo Sân Đình (stone)]`, `[Sân Khấu Hộp 1951 (red)]` | Bà tổ nghề: Ưu bà Phạm Thị Trân; Niên đại: Thế kỷ X - Nay; Đỉnh cao: Chèo cổ TK 17-18 |
| 10 | `/kham-pha/tong-quan/gia-tri-van-hoa` | Đạo đức, ước mơ & nụ cười trào lộng dân gian | `[Đạo Lý Nhân Quả (amber)]`, `[Nụ Cười Trào Phúng (emerald)]`, `[Khát Vọng Công Lý (red)]` | Triết lý: Ở hiền gặp lành; Nhân vật phản biện: Hề Chèo; Tính cộng đồng: Hội làng Bắc Bộ |
| 11 | `/kham-pha/tong-quan/phia-sau-san-khau` | Hậu trường, hóa trang & công phu rèn luyện | `[Thanh - Sắc - Tinh - Nghệ (amber)]`, `[Vẽ Mặt Ước Lệ (red)]`, `[Đạo Cụ Tượng Trưng (stone)]` | Khẩu quyết: Nhất thanh nhị sắc tam tinh tứ nghệ; Đạo cụ chính: Chiếc quạt mo; Hóa trang: Lối vẽ biểu cảm |
| 12 | `/kham-pha/san-khau` | Bốn trụ cột tạo nên tác phẩm Chèo | `[4 Trụ Cột Sân Khấu (amber)]`, `[Chiếu Chèo Cổ (stone)]`, `[Nguyên Bản Dân Tộc (emerald)]` | Không gian: Chiếu hoa sân đình; Trụ cột: Nhân vật, Phục trang, Âm thanh, Vở diễn |
| 13 | `/kham-pha/san-khau/nhan-vat` | Hệ thống 5 mẫu hình nhân vật chuẩn mực | `[5 Mẫu Ước Lệ (amber)]`, `[Đào - Kép - Hề (red)]`, `[Lão - Mụ (stone)]` | Quy ước: Ước lệ nghiêm ngặt; Nổi bật: Thị Mầu, Xúy Vân; Điểm xuyết: Hề gậy, Hề mồi |
| 14 | `/kham-pha/san-khau/trang-phuc` | Màu sắc, chất liệu & biểu tượng phục trang truyền thống | `[Áo Tứ Thân Mớ Ba Mớ Bảy (amber)]`, `[Nón Quai Thao - Yếm Đào (red)]`, `[Ngũ Sắc Ước Lệ (emerald)]` | Chất liệu: Lụa tơ tằm, vải thô nhuộm củ nâu; Màu sắc: Ngũ hành ước lệ; Phụ kiện: Thắt lưng bao ngũ sắc |
| 15 | `/kham-pha/san-khau/am-thanh` | Dàn nhạc dân tộc & hơn 200 làn điệu Chèo cổ | `[Dàn Bát Âm Cổ (amber)]`, `[200+ Làn Điệu Mẫu (emerald)]`, `[Timeline 4 Hồi (sky)]` | Trưởng ban: Trống đế; Nhạc cụ gõ: Trống cái, thanh la, mõ; Giai điệu: Đàn nguyệt, đàn nhị, sáo trúc |
| 16 | `/kham-pha/san-khau/tac-pham-tieu-bieu` | Tứ đại kiệt tác Chèo cổ bất hủ | `[Tứ Đại Kiệt Tác (red)]`, `[Quan Âm Thị Kính (amber)]`, `[Xúy Vân Giả Dại (emerald)]` | Vở tiêu biểu: Quan Âm Thị Kính, Kim Nhan, Lưu Bình Dương Lễ; Giá trị: Bi kịch nhân văn sâu sắc |
| 17 | `/kham-pha/cheo-hien-dai` | Sức sống mới & Sự cách tân đương đại | `[Mốc Son 1951 (red)]`, `[Tác Phẩm Tào Mạt (amber)]`, `[Hồ Sơ UNESCO (sky)]` | Khởi đầu mới: Đoàn Chèo Cổ truyền 1951; Đỉnh cao: Bộ ba Bài ca giữ nước; Hồ sơ: 14 tỉnh thành châu thổ |
| 18 | `/tien-ich` | Dịch vụ tương tác & Thông tin người dùng | `[Tra Cứu Di Sản (sky)]`, `[Kho Tư Liệu Số (amber)]`, `[Lịch & Vé Trực Tuyến (emerald)]` | Công cụ: Lọc đa tiêu chí; Lưu trữ: Đĩa than & Bản Nôm; Tương tác: Bản đồ 3D |
| 19 | `/tien-ich/tim-kiem` | Bộ lọc thông minh theo làn điệu, nhân vật & nghệ nhân | `[Bộ Lọc Đa Tiêu Chí (sky)]`, `[Tra Cứu Làn Điệu (emerald)]`, `[Tìm Kiếm Kịch Bản (stone)]` | Tiêu chí: Làn điệu, Nhân vật, Nghệ nhân; Tốc độ: Tức thì (Client-side search) |
| 20 | `/tien-ich/danh-gia-cai-thien` | Khảo sát cảm nghĩ & đóng góp hoàn thiện nền tảng | `[Hòm Thư Di Sản (amber)]`, `[Khảo Sát Trải Nghiệm (emerald)]`, `[Góp Ý Hoàn Thiện (sky)]` | Kênh: Biểu mẫu trực tuyến; Đánh giá: Sao & Nhận xét; Phản hồi: Trong vòng 24h |
| 21 | `/tien-ich/ban-do-bao-tang` | Sơ đồ định vị các không gian trưng bày số | `[Mặt Bằng 5 Khu (sky)]`, `[Lộ Trình Gợi Ý (amber)]`, `[Định Vị Tương Tác (emerald)]` | Bản đồ: Sơ đồ tương tác; Lộ trình: 3 Tour chuyên đề; Định vị: Tọa độ phòng |
| 22 | `/tien-ich/kho-tu-lieu` | Thư viện số hóa đĩa than 78 vòng, sách & kịch bản cổ | `[Đĩa Than 78 Vòng (amber)]`, `[Bản Chép Tay Nôm 1875 (red)]`, `[Khảo Cứu Trần Bảng (stone)]` | Định dạng: Audio 78 RPM Dihavina; Bản thảo: Kịch bản Nôm thế kỷ 19; Sách: Khảo cứu học thuật |
| 23 | `/tien-ich/tham-quan-va-su-kien` | Lịch trình, địa điểm & mua vé biểu diễn | `[Nhà Hát & Sân Đình (amber)]`, `[Lịch Diễn Cập Nhật (emerald)]`, `[Vé Điện Tử (sky)]` | Mạng lưới: Toàn quốc; Hình thức: Rạp hát chuyên nghiệp & Chiếu chèo làng; Dịch vụ: Đặt chỗ tức thì |
| 24 | `/tien-ich/tham-quan-va-su-kien/thong-bao-su-kien` | Tin tức tọa đàm, workshop & festival Chèo | `[Festival Chèo (red)]`, `[Workshop Nghệ Nhân (amber)]`, `[Tọa Đàm Khoa Học (sky)]` | Tần suất: Hàng tháng; Địa điểm: Hà Nội & Ninh Bình; Đối tượng: Công chúng & Giới nghiên cứu |
| 25 | `/tien-ich/tham-quan-va-su-kien/lich-bieu-dien` | Lịch diễn tại các rạp hát & sân đình định kỳ | `[Lịch Diễn Cuối Tuần (emerald)]`, `[Rạp Kim Mã & Đại Nam (amber)]`, `[Chiếu Chèo Làng (stone)]` | Định kỳ: Tối thứ 6, 7, CN; Đơn vị: Nhà hát Chèo Việt Nam, Chèo Hà Nội; Cập nhật: Theo tuần |
| 26 | `/tien-ich/tham-quan-va-su-kien/dat-mua-ve` | Cổng bán vé điện tử & sơ đồ chọn ghế ngồi trực quan | `[Sơ Đồ Chọn Ghế (sky)]`, `[Thanh Toán QR Code (emerald)]`, `[Vé Điện Tử Tức Thì (amber)]` | Cổng vé: Trực tuyến 24/7; Thanh toán: Chuyển khoản, Thẻ, QR Code; Xác nhận: Email & SMS |
| 27 | `/tien-ich/tham-quan-va-su-kien/dia-diem-bieu-dien` | Mạng lưới các nhà hát & không gian diễn Chèo tiêu biểu | `[Mạng Lưới Rạp Hát (amber)]`, `[Bắc Ninh - Ninh Bình (emerald)]`, `[Thái Bình - Nam Định (stone)]` | Điểm diễn: Rạp Kim Mã, Rạp Đại Nam, Rạp Ninh Bình; Loại hình: Nhà hát chuyên nghiệp |
| 28 | `/tien-ich/tham-quan-va-su-kien/thong-tin-tham-quan` | Quy định, giá vé ưu đãi & dịch vụ Audio Guide | `[Dịch Vụ Audio Guide (sky)]`, `[Ưu Đãi Học Đường (emerald)]`, `[Nội Quy Bảo Tàng (stone)]` | Thuyết minh: Đa ngôn ngữ; Ưu đãi: Giảm 50% cho học sinh - sinh viên; Giờ mở cửa: 08:00 - 17:00 |
| 29 | `/tien-ich/thong-tin-va-ho-tro` | Tổng đài tư vấn, giải đáp FAQ & hỗ trợ kỹ thuật VR | `[Hotline 24/7 (sky)]`, `[Hỏi Đáp FAQ (amber)]`, `[Hỗ Trợ Kỹ Thuật VR (emerald)]` | Tổng đài: 1900 xxxx; Email: hotro@baotangcheoso.vn; Kỹ thuật: Trợ giúp tương tác 3D |

---

## 7. VERIFICATION METHOD (PHƯƠNG PHÁP KIỂM CHỨNG ĐỘC LẬP)

Để kiểm chứng tính chính xác của chiến lược và kết quả triển khai downstream của M1 Worker:

### 7.1 Lệnh Kiểm Tra Biên Dịch & Linter
```powershell
# 1. Kiểm tra TypeScript compile toàn bộ project:
npm run build

# 2. Kiểm tra oxlint linter:
npm run lint
```
*Điều kiện đạt*:
- `npm run build` kết thúc với exit code 0, không có lỗi thiếu import hay sai type.
- `npm run lint` đạt 0 error, không có cảnh báo mới phát sinh.

### 7.2 Kiểm Chứng Cấu Trúc DOM & Trực Quan (Forensic Inspection)
1. **Kiểm tra file mới tạo**:
   - `src/components/common/MetaBadge.tsx` tồn tại và export `MetaBadge`.
   - `src/components/common/FeaturePill.tsx` tồn tại và export `FeaturePill`.
   - `src/components/common/KeyValueGrid.tsx` tồn tại và export `KeyValueGrid`.
   - `src/components/common/DecomposedHeader.tsx` tồn tại và export `DecomposedHeader`.
2. **Kiểm tra tích hợp tại `MuseumView.tsx`**:
   - Dòng 109-138 không còn thẻ `<header class="space-y-3...` phẳng cũ.
   - Thay vào đó là `<DecomposedHeader ... />` với đầy đủ `badges`, `keyValues`, `leadSummary`, và `quote`.
3. **Kiểm tra hiển thị giao diện**:
   - Mở route `/kham-pha/san-khau/am-thanh`: Phải hiển thị cụm huy hiệu `[Dàn Bát Âm Cổ]`, `[200+ Làn Điệu Mẫu]`, `[Timeline 4 Hồi]`, tiêu đề lớn "Âm Thanh", đoạn lead, và lưới thuộc tính nhanh.
   - Không còn hiện tượng chữ phụ dài dòng bị nhét dưới tiêu đề chính.

---
*Báo cáo hoàn tất và sẵn sàng bàn giao cho đội ngũ triển khai Milestone 1.*
