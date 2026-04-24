# 📄 BUSINESS REQUIREMENT DOCUMENT (BRD)
# KingMap — Nền Tảng Bản Đồ Số & Hệ Sinh Thái Thương Mại

---

## 1. THÔNG TIN TÀI LIỆU

| Thông tin | Nội dung |
|---|---|
| **Tên dự án** | KingMap — Core Hub của Hệ sinh thái BizKingMap |
| **Phiên bản** | v2.0 |
| **Ngày lập** | 23/04/2026 |
| **Người lập** | [CẦN BỔ SUNG — Tên BA/PM] |
| **Project Sponsor** | Anh Hải (Chủ đầu tư) |
| **Trạng thái** | Draft — Chờ Sponsor Review |
| **Giai đoạn áp dụng** | Phase 1 — Web App |

---

## 2. EXECUTIVE SUMMARY

KingMap là sản phẩm cốt lõi (Core Hub) trong hệ sinh thái 4 phần mềm BizKingMap, được định vị như một **nền tảng bản đồ số thế hệ mới**, hoạt động như một "siêu phễu" (Funnel Hub) thu thập và quản lý tập dữ liệu khổng lồ về Người dùng, Địa điểm, Hàng hóa và Dịch vụ tại Việt Nam.

Khác biệt so với Google Maps (đối thủ benchmark), KingMap tích hợp trực tiếp mô hình thương mại vào bản đồ: địa điểm và doanh nghiệp chạy quảng cáo được nổi bật trực quan trên bản đồ, kết hợp hệ thống gói cước linh hoạt, cơ chế kiếm tiền Affiliate qua QR Code, và đồng bộ dữ liệu 2 chiều với 3 hệ thống vệ tinh (ShopLinks, DoStore, BizK).

**Phase 1** tập trung xây dựng Web App với mục tiêu đạt **10.000 users** đăng ký và **500 địa điểm** được ghi nhận tại TP.HCM. KingMap sẽ được phát triển trước, sau đó là ShopLinks → DoStore → BizK.

> 📊 **Sơ đồ tổng quan hệ sinh thái BizKingMap:**

![Tổng quan hệ sinh thái BizKingMap](images/ecosystem_overview_1776907708977.png)

---

## 3. BỐI CẢNH & VẤN ĐỀ KINH DOANH

### 3.1. Bối cảnh

Thị trường bản đồ số tại Việt Nam hiện bị chi phối bởi Google Maps — một nền tảng toàn cầu không tối ưu cho hành vi thương mại địa phương. Các doanh nghiệp nhỏ và cá nhân thiếu một công cụ giúp họ:
- Hiện diện số trên bản đồ một cách hiệu quả và có phí hợp lý
- Kết nối trực tiếp với người mua hàng ở gần đó
- Tham gia mạng lưới thương mại liên kết (Affiliate) một cách dễ dàng

### 3.2. Vấn đề kinh doanh

| # | Vấn đề | Tác động |
|---|---|---|
| P1 | Không có nền tảng bản đồ thương mại địa phương tích hợp mua bán | Người bán thiếu kênh phân phối kỹ thuật số chi phí thấp |
| P2 | Dữ liệu địa điểm, hàng hóa, dịch vụ phân mảnh trên nhiều platform | Người mua khó tìm kiếm, so sánh, và mua sắm tập trung |
| P3 | Người dùng bình thường không có công cụ để kiếm thu nhập thụ động từ mạng lưới của mình | Mất cơ hội viral growth và network effect |
| P4 | Chưa có hệ sinh thái tích hợp Bản đồ + E-commerce + Quản lý dòng họ + ERP | Doanh nghiệp phải dùng nhiều phần mềm rời rạc |

### 3.3. Giải pháp đề xuất

KingMap hoạt động như **Funnel Hub trung tâm**: thu hút user, địa điểm, hàng hóa → phân phối sang các hệ thống vệ tinh → tạo vòng lặp giá trị thương mại khép kín.

---

## 4. MỤC TIÊU KINH DOANH

| Mã | Mục tiêu | KPI | Target (Phase 1) |
|---|---|---|---|
| BO-1 | Thu hút người dùng đăng ký | Số tài khoản đăng ký | 10.000 users |
| BO-2 | Xây dựng cơ sở dữ liệu địa điểm | Số địa điểm trên bản đồ | 500 địa điểm tại TP.HCM |
| BO-3 | Tạo doanh thu từ gói cước | Số user trả phí | [CẦN BỔ SUNG — % conversion target] |
| BO-4 | Kích hoạt mạng lưới Affiliate | Số user active Affiliate | [CẦN BỔ SUNG] |
| BO-5 | Đồng bộ hệ sinh thái | Tài khoản được sync sang ShopLinks/DoStore/BizK | 100% auto-sync khi đăng ký |

---

## 5. PHẠM VI DỰ ÁN

### 5.1. In-Scope — Phase 1 (Web App)

**Nhóm A — Quản lý User & SSO:**
- Đăng ký / Đăng nhập (SĐT / Email)
- Quản lý thông tin cá nhân
- Tiện ích sau đăng nhập (lịch sử, yêu thích, gợi ý)
- Tự động đồng bộ tài khoản → DoStore (cá nhân) và BizK (doanh nghiệp)

**Nhóm B — Bản đồ & Địa điểm:**
- Hiển thị bản đồ nền (Google Maps API)
- Tạo / sửa / xóa địa điểm (tự tạo + tạo hộ)
- Import địa điểm hàng loạt qua Excel
- Pop-up thông tin nhanh, chỉ đường
- Trang chi tiết địa điểm/shop
- **Làm nổi bật địa điểm/doanh nghiệp chạy quảng cáo** trên bản đồ

**Nhóm C — Tìm kiếm:**
- Tìm kiếm hàng hóa, dịch vụ, địa điểm (từ khóa, danh mục, vị trí, khu vực)
- Bộ lọc kết quả (khoảng cách, ngành, giá, đánh giá)
- Gợi ý thông minh (auto-suggest)
- Tìm kiếm miễn phí (cơ bản)

**Nhóm D — Gói Cước & Premium:**
- Gói Tiêu chuẩn: 5.000đ/tháng hoặc 60.000đ/năm (mở khóa tìm kiếm nâng cao)
- Gói Premium 20.000đ/tháng (cửa hàng xem SĐT khách hàng, tìm kiếm gần đây nâng cao)
- Free tier: chỉ liên lạc qua email

**Nhóm E — Affiliate:**
- Kích hoạt khi user có đơn hàng ≥200.000đ/tháng
- Cấp mã QR cá nhân
- Ghi nhận và tính hoa hồng khi quét QR → mua hàng / đăng ký BizK

**Nhóm F — Đồng bộ Hệ sinh thái:**
- Đẩy hàng hóa → ShopLinks (phân loại danh mục)
- Đẩy tài khoản nhà bán hàng/nhà sản xuất → ShopLinks
- Đồng bộ 2 chiều với Website cá nhân (tĩnh và động)

**Nhóm G — Admin Portal:**
- Quản lý danh mục ngành hàng, dịch vụ
- Kiểm duyệt địa điểm
- Phân quyền RBAC (Admin / Moderator / End User)
- Dashboard thống kê (tìm kiếm, click, heatmap, hành vi)

### 5.2. Out-of-Scope — Phase 1

| Tính năng | Lý do hoãn |
|---|---|
| Mobile App (iOS/Android) | Phase 2+ |
| Sàn giao dịch Bất động sản | Phase 2 |
| Quảng cáo tự động (Auto-Ads) | Phase 2 |
| Tìm kiếm bằng AI | Phase 2 |
| Affiliate đa tầng (Downline) | Phase 2 |
| Bác sĩ Gia đình | Phase 3 |
| Nghiên cứu thị trường bản đồ | Phase 3 |
| So sánh hàng hóa tự động | Phase 3 |
| Môi giới BĐS toàn dân | Phase 3 |
| Văn bản pháp lý / Quy hoạch | Nguồn dữ liệu chưa xác định |

### 5.3. Phân pha tổng thể

```
Phase 1: KingMap (Web App) ← BRD này
Phase 2: ShopLinks
Phase 3: DoStore
Phase 4: BizK
```

---

## 6. CÁC BÊN LIÊN QUAN (STAKEHOLDERS)

| Vai trò | Tên | Trách nhiệm |
|---|---|---|
| Project Sponsor | Anh Hải | Phê duyệt ngân sách, định hướng chiến lược, quyết định cuối cùng |
| Project Manager | [CẦN BỔ SUNG] | Quản lý tiến độ, điều phối team |
| Business Analyst | [CẦN BỔ SUNG] | Phân tích yêu cầu, viết tài liệu |
| Tech Lead | [CẦN BỔ SUNG — Outsource] | Thiết kế kiến trúc, dẫn dắt team dev |
| Dev Team | [CẦN BỔ SUNG — Outsource] | Phát triển hệ thống |
| End User — Cá nhân | Người dùng KingMap | Đăng ký, tìm kiếm, mua sắm, affiliate |
| End User — Doanh nghiệp | Chủ shop / cty | Tạo địa điểm, đăng hàng hóa, chạy quảng cáo |
| Admin / Moderator | Đội vận hành nội bộ | Kiểm duyệt nội dung, quản lý hệ thống |

### RACI Matrix (Rút gọn)

| Quyết định | Sponsor | PM | BA | Tech Lead |
|---|---|---|---|---|
| Phê duyệt BRD | **A** | R | R | I |
| Phê duyệt thiết kế UI/UX | **A** | R | C | R |
| Phê duyệt kiến trúc kỹ thuật | I | A | I | **R** |
| Phê duyệt go-live | **A** | R | I | C |

*(R=Responsible, A=Accountable, C=Consulted, I=Informed)*

---

## 7. YÊU CẦU NGHIỆP VỤ CẤP CAO

### BR-001: Quản lý Danh tính & Đồng bộ Hệ sinh thái (SSO)

| AS-IS | TO-BE |
|---|---|
| Mỗi hệ thống quản lý user riêng lẻ | 1 tài khoản KingMap → tự động tạo tài khoản DoStore, BizK, ShopLinks |
| User phải đăng ký nhiều lần | Đăng nhập 1 lần, dùng được toàn hệ sinh thái |

**Yêu cầu chi tiết:**

| Mã | Tên chức năng | Mô tả |
|---|---|---|
| FR-1.1.1 | Đăng ký / Đăng nhập | Qua SĐT hoặc Email |
| FR-1.1.2 | Hồ sơ User | Họ tên, Email, SĐT, Địa chỉ (Tỉnh/Thành — Xã/Phường) |
| FR-1.1.3 | Tiện ích cá nhân | Lưu yêu thích, lịch sử tìm kiếm, gợi ý cá nhân hóa |
| FR-1.1.4 | Đồng bộ → DoStore | Tự động khởi tạo tài khoản DoStore, dùng chung user/pass |
| FR-1.1.5 | Đồng bộ → BizK | Tự động cấp tư cách thành viên BizK cho tài khoản doanh nghiệp |
| FR-1.1.6 | Đồng bộ → ShopLinks | Đẩy hàng hóa + tài khoản nhà bán hàng sang ShopLinks |
| FR-1.1.7 | Đồng bộ 2 chiều ↔ Website | Đẩy hàng hóa ra website cá nhân; cập nhật ngược lại KingMap + ShopLinks |

> 📊 **Luồng đăng ký & đồng bộ tài khoản SSO:**

![Luồng đăng ký & đồng bộ SSO](images/sso_sync_flow_1776907734424.png)

---

### BR-002: Bản đồ & Quản lý Địa điểm

| AS-IS | TO-BE |
|---|---|
| Địa điểm doanh nghiệp chỉ hiển thị thụ động | Địa điểm được tạo, quản lý chủ động; doanh nghiệp quảng cáo được nổi bật trên map |

| Mã | Tên chức năng | Mô tả |
|---|---|---|
| FR-1.2.1 | Bản đồ nền | Google Maps API, Marker phân loại: Shop / Doanh nghiệp / Dịch vụ |
| FR-1.2.2 | Marker Quảng cáo nổi bật | Địa điểm/doanh nghiệp chạy ads được hiển thị nổi bật (màu sắc, icon, ưu tiên vị trí) |
| FR-1.2.3 | Pop-up thông tin nhanh | Logo, Tên, Khoảng cách, Đánh giá, nút "Xem chi tiết" / "Đi đến Shop" |
| FR-1.2.4 | Chỉ đường | Từ GPS hiện tại đến địa điểm chọn |
| FR-1.2.5 | Quản lý địa điểm | Tạo mới / sửa / xóa địa điểm (tự tạo + tạo hộ bên thứ 3) |
| FR-1.2.6 | Import Excel hàng loạt | Upload file Excel theo template để import nhiều địa điểm cùng lúc |
| FR-1.2.7 | Trang chi tiết địa điểm | Tên, mô tả, hình ảnh, địa chỉ+bản đồ, liên hệ, sản phẩm nổi bật, link ShopLinks |
| FR-1.2.8 | Seed data ban đầu | Admin import bộ dữ liệu địa điểm nền tại TP.HCM trước khi launch |

> 📊 **Luồng dữ liệu địa điểm & hàng hóa 2 chiều:**

![Luồng dữ liệu địa điểm & hàng hóa 2 chiều](images/data_sync_flow_1776907785556.png)

---

### BR-003: Tìm kiếm & Gói Cước

| Mã | Tên chức năng | Mô tả |
|---|---|---|
| FR-1.3.1 | Tìm kiếm 3 loại | Hàng hóa / Dịch vụ / Địa điểm |
| FR-1.3.2 | Hình thức tìm kiếm | Từ khóa, Danh mục, Vị trí hiện tại, Khu vực |
| FR-1.3.3 | Bộ lọc | Khoảng cách, Danh mục, Giá, Đánh giá (1-5 sao) |
| FR-1.3.4 | Auto-suggest | Gợi ý theo vị trí, từ khóa phổ biến, lịch sử |
| FR-1.3.5 | Gói Miễn phí | Tìm kiếm cơ bản, liên hệ qua email |
| FR-1.3.6 | Gói Tiêu chuẩn | 5.000đ/tháng hoặc 60.000đ/năm — mở khóa tìm kiếm đầy đủ |
| FR-1.3.7 | Gói Premium | 20.000đ/tháng — cửa hàng xem SĐT khách hàng, tìm kiếm gần đây nâng cao |
| FR-1.3.8 | Gói Pháp lý & Quy hoạch | [CẦN BỔ SUNG — nguồn dữ liệu + nội dung cụ thể] |

> 📊 **Mô hình gói cước & Monetization:**

![Gói cước & Monetization KingMap](images/subscription_tiers_1776907760305.png)

---

### BR-004: Affiliate — Tiếp thị Liên kết

| Mã | Tên chức năng | Mô tả |
|---|---|---|
| FR-1.4.1 | Điều kiện kích hoạt | User có ≥1 đơn hàng ≥200.000đ/tháng |
| FR-1.4.2 | Cấp mã QR | User đủ điều kiện được cấp mã QR cá nhân |
| FR-1.4.3 | Ghi nhận hoa hồng | Người quét QR → mua hàng hoặc đăng ký BizK → user nhận HH |
| FR-1.4.4 | Tỷ lệ hoa hồng | [CẦN BỔ SUNG] |

---

### BR-005: Admin Portal

| Mã | Tên chức năng | Mô tả |
|---|---|---|
| FR-1.5.1 | Quản lý danh mục | Ngành hàng, dịch vụ |
| FR-1.5.2 | Kiểm duyệt địa điểm | Duyệt / từ chối / chỉnh sửa địa điểm do user tạo |
| FR-1.5.3 | Phân quyền RBAC | Admin / Moderator / End User |
| FR-1.5.4 | Dashboard thống kê | Lượt tìm kiếm, lượt click, heatmap nhu cầu, dữ liệu hành vi |

---

## 8. RÀNG BUỘC & GIẢ ĐỊNH

### 8.1. Ràng buộc (Constraints)

| # | Ràng buộc | Chi tiết |
|---|---|---|
| C1 | Nền tảng Phase 1 | Chỉ phát triển Web App; Mobile App thuộc Phase sau |
| C2 | Bản đồ nền | Phụ thuộc Google Maps API/SDK — chi phí API theo lượng request |
| C3 | Đơn vị phát triển | Team Outsource — cần hợp đồng, SLA, quy trình bàn giao rõ ràng |
| C4 | Dữ liệu pháp lý | Nguồn dữ liệu văn bản pháp lý/quy hoạch chưa xác định — tính năng này bị chặn |
| C5 | Thứ tự build | KingMap phải hoàn thành trước khi build ShopLinks, DoStore, BizK |
| C6 | Tỷ lệ Affiliate | Chưa được định nghĩa — ảnh hưởng đến module tính hoa hồng |

### 8.2. Giả định (Assumptions)

| # | Giả định | Mức độ rủi ro nếu sai |
|---|---|---|
| A1 | Anh Hải là Project Sponsor duy nhất, có toàn quyền phê duyệt ngân sách | 🔴 Cao |
| A2 | Timeline Phase 1 sẽ được ước tính sau khi scope được finalize | 🟡 Trung bình |
| A3 | Google Maps API được sử dụng làm bản đồ nền (có thể phát sinh chi phí lớn theo scale) | 🟡 Trung bình |
| A4 | Dữ liệu địa điểm seed ban đầu tại TP.HCM do team nội bộ chuẩn bị và import | 🟡 Trung bình |
| A5 | Cơ chế SSO sử dụng chung username/password (không dùng OAuth/token federation phức tạp) | 🟡 Trung bình |
| A6 | Website cá nhân đồng bộ 2 chiều được build theo kiến trúc đã thống nhất trước đó | 🟢 Thấp |

---

## 9. SUCCESS CRITERIA & KPIs

| # | KPI | Baseline | Target Phase 1 | Cách đo |
|---|---|---|---|---|
| KPI-1 | Số user đăng ký | 0 | 10.000 | Đếm tài khoản active trong DB |
| KPI-2 | Số địa điểm trên bản đồ | 0 | 500 (TP.HCM) | Đếm địa điểm đã duyệt |
| KPI-3 | Tỷ lệ chuyển đổi user trả phí | 0% | [CẦN BỔ SUNG] | (Paid users / Total users) × 100 |
| KPI-4 | Số user active Affiliate | 0 | [CẦN BỔ SUNG] | Đếm user có QR được kích hoạt |
| KPI-5 | Tốc độ phản hồi tìm kiếm | N/A | < 2 giây | Monitoring APM |
| KPI-6 | Uptime hệ thống | N/A | ≥ 99.9% | Uptime monitoring |
| KPI-7 | Tài khoản sync sang hệ sinh thái | 0% | 100% auto-sync | Kiểm tra cross-system |

---

## 10. TIMELINE SƠ BỘ (ƯỚC TÍNH)

> ⚠️ Đây là bản ước lượng sơ bộ (High-level Estimation) dựa trên khối lượng tính năng hiện tại. Timeline thực tế sẽ phụ thuộc vào quy mô Team Outsource.

| Phase / Giai đoạn | Mô tả | Thời lượng ước tính |
|---|---|---|
| **Phase 0 — Khởi động & Chuẩn bị** | Chốt yêu cầu (PRD), Thiết kế Kiến trúc hệ thống, Ký hợp đồng, Setup môi trường. | **2 Tuần** (Tuần 1 - Tuần 2) |
| **Phase 1 — KingMap MVP (Web)** | Phát triển toàn bộ tính năng Nhóm A → G. (Chi tiết bên dưới) | **12 Tuần** (Tuần 3 - Tuần 14) |
| **Phase 2 — ShopLinks** | Xây dựng nền tảng E-commerce vệ tinh và tích hợp với KingMap. | **12 - 16 Tuần** |
| **Phase 3 — DoStore** | Quản lý gia phả và mạng xã hội dòng tộc. | [CẦN BỔ SUNG] |
| **Phase 4 — BizK** | Phần mềm quản trị doanh nghiệp (ERP thu nhỏ). | [CẦN BỔ SUNG] |

### Chi tiết Lộ trình Phase 1 (KingMap Web App - 12 Tuần)

| Milestone (Cột mốc) | Tuần thực hiện | Các hạng mục triển khai chính |
|---|---|---|
| **M1: UI/UX & Prototype** | **Tuần 3 - Tuần 4** | Thiết kế toàn bộ giao diện Web, luồng người dùng (User Flow), Wireframe & Mockup. |
| **M2: Alpha Release** | **Tuần 5 - Tuần 8** | - **Nhóm A (User/SSO):** Hệ thống Auth, Profiles, nền tảng DB.<br>- **Nhóm B (Bản đồ):** Tích hợp Google Maps, tạo Marker, popup, Import Excel địa điểm. |
| **M3: Beta Release** | **Tuần 9 - Tuần 11** | - **Nhóm C (Tìm kiếm):** Bộ lọc, auto-suggest.<br>- **Nhóm D (Gói cước):** Tích hợp thanh toán, phân quyền Premium.<br>- **Nhóm E (Affiliate):** Gen QR Code, ghi nhận click/hoa hồng. |
| **M4: UAT & Go-Live** | **Tuần 12 - Tuần 14** | - **Nhóm F (Đồng bộ):** Đẩy API hàng hóa/user sang hệ thống khác.<br>- **Nhóm G (Admin):** CMS, duyệt địa điểm, Dashboard thống kê.<br>- **Kiểm thử (UAT)**, sửa lỗi, import Seed Data, cấu hình Server & Go-Live chính thức. |

### Dự toán Nhân sự (Resource Estimation) — Phase 1

Dựa trên khối lượng công việc 12 tuần (khoảng 3 tháng), dưới đây là quy mô team tiêu chuẩn (Scrum Team) cần thiết để đảm bảo tiến độ:

| Vai trò (Role) | Số lượng | Tần suất tham gia | Tổng Effort (Man-month) |
|---|---|---|---|
| **Project Manager / Scrum Master** | 1 | Bán thời gian (Part-time) | 1.5 MM |
| **Business Analyst (BA)** | 1 | Bán thời gian (Part-time) | 1.5 MM |
| **UI/UX Designer** | 1 | Tập trung cao ở Tháng 1 | 1.5 MM |
| **Frontend Developer** | 2 | Toàn thời gian (Full-time) | 6.0 MM |
| **Backend Developer** | 2 | Toàn thời gian (Full-time) | 6.0 MM |
| **QA / Tester** | 1 | Toàn thời gian (từ M2) | 2.5 MM |
| **Tổng cộng** | **8 Nhân sự** | | **~ 19 Man-months** |

> 💡 **Lưu ý chi phí:** Dự toán trên tính theo đơn vị Man-month (Tháng công). Chi phí thực tế bằng VND/USD sẽ phụ thuộc vào báo giá đơn giá (Rate card) của Team Outsource hoặc mức lương của team In-house. Trung bình một team 8 người như trên sẽ tốn khoảng 350.000.000đ - 500.000.000đ/tháng tùy năng lực (Mid/Senior).

> 📊 **Lộ trình phát triển hệ sinh thái:**

![Lộ trình phát triển BizKingMap](images/development_roadmap_1776907813126.png)

---

## 11. PHỤ LỤC

### 11.1. Thuật ngữ & Từ viết tắt

| Thuật ngữ | Giải thích |
|---|---|
| BRD | Business Requirement Document — Tài liệu Yêu cầu Nghiệp vụ |
| SSO | Single Sign-On — Đăng nhập một lần dùng nhiều hệ thống |
| Funnel Hub | Phễu trung tâm — thu hút user đầu vào, phân phối sang hệ thống vệ tinh |
| Affiliate / HH | Tiếp thị liên kết / Hoa hồng |
| Downline | Tuyến dưới trong mô hình Affiliate đa tầng |
| Heatmap | Bản đồ nhiệt — hiển thị mật độ theo màu sắc |
| Marker | Điểm ghim trên bản đồ |
| Seed Data | Dữ liệu nền được nhập sẵn trước khi hệ thống ra mắt |
| RBAC | Role-Based Access Control — Phân quyền theo vai trò |
| KingMap | Core Hub — Nền tảng bản đồ số trung tâm |
| ShopLinks | Nền tảng E-commerce vệ tinh (tương tự Shopee) |
| DoStore | Nền tảng quản lý gia phả + mạng xã hội dòng tộc |
| BizK | Phần mềm quản trị doanh nghiệp |

### 11.2. Tài liệu tham khảo

- BRD_KingMap.md (v1 — Draft ban đầu)
- Brief từ Stakeholder anh Hải (23/04/2026)
- Gói chức năng BizKingMap.xlsx

### 11.3. Lịch sử thay đổi

| Phiên bản | Ngày | Người thực hiện | Mô tả thay đổi |
|---|---|---|---|
| v1.0 | 23/04/2026 | [CẦN BỔ SUNG] | BRD Draft ban đầu — chỉ liệt kê tính năng |
| v2.0 | 23/04/2026 | AI BA Assistant | Hoàn thiện đầy đủ 11 mục BRD chuẩn, bổ sung Executive Summary, Stakeholders, KPIs, Constraints, Assumptions |

---

*Tài liệu này cần được anh Hải (Project Sponsor) review và ký duyệt trước khi chuyển sang giai đoạn PRD.*
