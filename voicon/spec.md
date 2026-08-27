# ĐẶC TẢ NỀN TẢNG CDP + APP KHÁCH HÀNG — VOICON

**Chuỗi bán lẻ Mẹ & Bé VoiCon — 13 cửa hàng**

| | |
|---|---|
| **Phiên bản** | 1.0 — Bản thảo luận |
| **Ngày** | 27/08/2026 |
| **Trạng thái** | Chờ khách hàng phản hồi và chốt các quyết định ở Mục 15 |
| **Mục đích tài liệu** | Thống nhất định hướng, phạm vi và lộ trình trước khi bước vào thiết kế chi tiết |

---

## 0. TÓM TẮT ĐIỀU HÀNH

VoiCon hiện vận hành tốt ở khâu bán hàng nhưng chưa chủ động ở khâu giữ khách. Haravan đáp ứng đủ cho đơn hàng, kho và POS, nhưng hạn chế ở marketing automation và chăm sóc vòng đời khách hàng.

Đề xuất: xây dựng một lớp hệ thống chạy **song song** với Haravan, gồm hai cấu phần:

1. **CDP (Customer Data Platform)** — hợp nhất dữ liệu khách hàng từ online, POS và app; tính toán chu kỳ tiêu thụ, dự báo nhu cầu và rủi ro rời bỏ.
2. **App khách hàng** — vừa là kênh chăm sóc, vừa là nguồn dữ liệu hành vi, vừa là kênh bán hàng ở giai đoạn sau.

Nguyên tắc phân vai: **Haravan giữ vai trò hệ thống ghi nhận (system of record), hệ thống mới là hệ thống thông minh (system of intelligence).** Không thay thế Haravan ở đơn hàng, kho và POS.

Ba điểm khác biệt của đề án so với cách làm phổ biến trên thị trường:

- **Mở rộng từ mẹ & bé sang bà bầu và người lớn tuổi**, biến vòng đời khách hàng từ 36 tháng thành hàng chục năm.
- **Khai thác đội ngũ bác sĩ liên kết sẵn có** để xây dựng lớp nội dung và tư vấn — đây là tài sản đối thủ khó sao chép.
- **Tự động hóa làm mặc định**, nhân sự chỉ xử lý khiếu nại và ca đặc biệt.

---

## 1. BỐI CẢNH VÀ HIỆN TRẠNG

### 1.1 Hiện trạng vận hành

| Hạng mục | Hiện trạng |
|---|---|
| Ngành hàng | Phân phối hàng mẹ & bé, trọng tâm là các dòng sữa |
| Cửa hàng | 13 điểm, bán trực tiếp và trưng bày giới thiệu sản phẩm |
| Online | Đầy đủ sàn TMĐT và website |
| Nền tảng bán hàng | Haravan (kho, quản lý, POS, xử lý đơn) |
| Kế toán | MISA |
| Livestream | Đầy đủ các nền tảng |
| Nguồn lực đặc biệt | Đội ngũ bác sĩ liên kết tư vấn |

### 1.2 Vấn đề cần giải quyết

- Haravan chưa được khai thác hết ở công cụ marketing và chăm sóc khách hàng, và bản thân nền tảng còn hạn chế ở nhóm chức năng này.
- Chưa có kịch bản chăm sóc vòng đời khách hàng đối với tệp đã mua hàng.
- Bị động: khách hàng nằm trên nền tảng của bên thứ ba, doanh nghiệp không chủ động được kênh tiếp cận.
- Chưa khai thác giá trị vòng đời khách hàng.

### 1.3 Mục tiêu chiến lược của khách hàng

Chủ động giữ chân khách hàng trong hệ thống, tối ưu giá trị vòng đời, và mở rộng quy mô với tư duy **lấy công nghệ làm lợi thế cạnh tranh**.

---

## 2. NHẬN ĐỊNH CHIẾN LƯỢC

### 2.1 Vòng đời khách hàng là vòng đời của người tiêu dùng cuối, không phải của người mua

Từ một mốc thời gian duy nhất (ngày dự sinh, ngày sinh của bé, độ tuổi người cao tuổi), hệ thống suy ra được gần như toàn bộ nhu cầu trong nhiều tháng tới. Không ngành bán lẻ nào có được trục thời gian dự đoán chính xác như ngành này.

**Hệ quả thiết kế:** dữ liệu quan trọng nhất không nằm trong Haravan. Nó phải được chủ động thu thập và là mục tiêu số một của giai đoạn đầu.

### 2.2 Sữa là mặt hàng có chu kỳ tiêu thụ tính được

Biết mã sản phẩm, trọng lượng và đối tượng sử dụng là ra được số ngày dùng hết với sai số khoảng ±3 ngày. Không cần mô hình học máy phức tạp — một bảng định mức tiêu thụ cộng vài phép tính cho độ chính xác tốt hơn phần lớn mô hình dự đoán.

**Hệ quả thiết kế:** đây là quick win lớn nhất, cần làm trước tiên.

### 2.3 Một tài khoản, ba chu kỳ tiêu dùng chồng lên nhau

Người mua chính (thường là phụ nữ 28–40 tuổi) đồng thời là người dùng sữa bầu, người mua sữa cho con, và người mua sữa cho bố mẹ mình.

```
Bà bầu (9 tháng) → Mẹ sau sinh + Bé sơ sinh (24 tháng)
                 → Bé lớn (đến 6 tuổi)
                 → Ông bà (quanh năm + đỉnh mùa lễ Tết)
                 → Bản thân người mẹ (dinh dưỡng người trưởng thành)
```

**Hệ quả thiết kế:** đơn vị chăm sóc phải là **hộ gia đình**, không phải khách hàng cá nhân. Mô hình dữ liệu phải hỗ trợ đa hồ sơ ngay từ đầu — sửa sau rất tốn kém.

### 2.4 Lợi thế cạnh tranh không nằm ở việc "có app"

Các chuỗi lớn đều đã có app và chương trình khách hàng thân thiết. Khác biệt phải đến từ chất lượng lớp dự đoán, mức độ cá nhân hóa, và đặc biệt là **lớp nội dung và tư vấn có bác sĩ** — thứ đòi hỏi thời gian tích lũy chứ không mua được bằng ngân sách.

### 2.5 App chỉ sống nếu có lý do mở khi không mua hàng

Ngành mẹ & bé mua 2–4 tuần một lần. Nếu app chỉ để đặt hàng, tần suất mở app sẽ bằng tần suất mua và app sẽ chết.

**Hệ quả thiết kế:** định vị app là **sổ theo dõi sức khỏe gia đình có bác sĩ đồng hành**, chức năng mua hàng gắn vào sau.

---

## 3. MỤC TIÊU VÀ PHẠM VI

### 3.1 Mục tiêu

| Nhóm | Mục tiêu |
|---|---|
| Dữ liệu | Hợp nhất dữ liệu khách hàng online + POS + app thành hồ sơ duy nhất theo hộ gia đình |
| Giữ chân | Tăng tỷ lệ mua lại và kéo dài vòng đời khách hàng qua nhiều đối tượng trong hộ |
| Tự động hóa | Đưa phần lớn hoạt động chăm sóc sang tự động, nhân sự tập trung vào ca cần con người |
| Thương hiệu | Xây dựng vị thế cố vấn dinh dưỡng và chăm sóc gia đình, không chỉ là nơi bán hàng |
| Nền tảng | Tạo hạ tầng dữ liệu phục vụ mở rộng quy mô chuỗi |

### 3.2 Trong phạm vi

- Đường ống đồng bộ dữ liệu hai chiều với Haravan
- Nền tảng dữ liệu khách hàng (CDP) và engine kịch bản
- App khách hàng đa nền tảng (iOS, Android)
- Hệ thống quản trị nội dung và quy trình duyệt chuyên môn
- Cổng làm việc cho bác sĩ
- Bảng điều khiển vận hành cho đội ngũ nội bộ

### 3.3 Ngoài phạm vi

- Thay thế Haravan ở quản lý kho, đơn hàng, POS
- Thay thế MISA ở nghiệp vụ kế toán
- Nghiệp vụ khám chữa bệnh từ xa có cấp phép *(xem Mục 11.2)*
- Sàn thương mại điện tử mở cho bên thứ ba

---

## 4. KIẾN TRÚC TỔNG THỂ

### 4.1 Sơ đồ lớp

```
┌─────────────────────────────────────────────────────────────┐
│  KÊNH TIẾP XÚC                                              │
│  App KH  │  Zalo OA/ZNS  │  SMS  │  Web  │  POS cửa hàng    │
└─────────────────────────────────────────────────────────────┘
                            ▲ ▼
┌─────────────────────────────────────────────────────────────┐
│  LỚP KÍCH HOẠT                                              │
│  Engine kịch bản  │  Rule tuân thủ  │  DS chăm sóc theo CH (optional) │
└─────────────────────────────────────────────────────────────┘
                            ▲ ▼
┌─────────────────────────────────────────────────────────────┐
│  LỚP TÍNH TOÁN                                              │
│  Chu kỳ mua lại │ Điểm rủi ro rời bỏ │ Gợi ý theo mốc       │
└─────────────────────────────────────────────────────────────┘
                            ▲ ▼
┌─────────────────────────────────────────────────────────────┐
│  LỚP DỮ LIỆU (CDP)                                          │
│  Event store │ Hồ sơ hộ GĐ + hồ sơ dinh dưỡng │ Identity    │
└─────────────────────────────────────────────────────────────┘
                            ▲ ▼
┌─────────────────────────────────────────────────────────────┐
│  LỚP THU THẬP                                               │
│  Webhook Haravan │ REST API │ Job đối soát │ Event SDK app  │
└─────────────────────────────────────────────────────────────┘
                            ▲ ▼
┌─────────────────────────────────────────────────────────────┐
│  HỆ THỐNG NGUỒN                                             │
│  Haravan (đơn, kho, POS, KH)  │  MISA  │  Sàn TMĐT          │
└─────────────────────────────────────────────────────────────┘
```

### 4.2 Lớp thu thập — yêu cầu kỹ thuật

Haravan cung cấp REST API và webhook có xác thực HMAC. Các ràng buộc đã xác nhận từ tài liệu nhà cung cấp và cách xử lý tương ứng:

| Ràng buộc của Haravan | Yêu cầu thiết kế |
|---|---|
| Webhook timeout 5 giây | Endpoint chỉ ghi vào hàng đợi rồi trả 200 ngay, xử lý bất đồng bộ |
| Retry 19 lần trong 48 giờ, thất bại liên tiếp thì tự xóa subscription | Watchdog kiểm tra subscription còn sống, cảnh báo khi mất |
| Có khả năng thất lạc sự kiện | Job đối soát hàng ngày qua REST API để bù dữ liệu |

**Nguyên tắc:** không bao giờ coi webhook là nguồn dữ liệu duy nhất.

### 4.3 Lớp dữ liệu

| Thành phần | Công nghệ đề xuất | Vai trò |
|---|---|---|
| Event store | ClickHouse | Lưu toàn bộ sự kiện hành vi, phân tích |
| Hồ sơ và trạng thái | PostgreSQL | Hồ sơ hộ gia đình, hồ sơ dinh dưỡng, trạng thái kịch bản |
| Hàng đợi và cache | Redis | Xử lý bất đồng bộ, giới hạn tần suất gửi tin |
| Ứng dụng | Node.js | Backend, API, engine kịch bản |
| App | Flutter | Đa nền tảng, một codebase |

### 4.4 Lớp tính toán

| Mô hình | Cách làm | Độ phức tạp |
|---|---|---|
| Chu kỳ mua lại | Bảng định mức tiêu thụ theo sản phẩm × đối tượng × giai đoạn | Thấp — làm ngay |
| Điểm rủi ro rời bỏ | Số ngày trễ so với chu kỳ dự kiến | Thấp |
| Gợi ý theo mốc | Luật theo giai đoạn trước, học từ dữ liệu sau | Trung bình |
| Dự báo giá trị vòng đời | Theo nhóm khách hàng cùng thời điểm bắt đầu | Trung bình — giai đoạn sau |

> **Ghi chú:** trễ chu kỳ 7 ngày là tín hiệu rời bỏ chính xác hơn nhiều so với mô hình RFM truyền thống trong ngành này, vì nó có nghĩa là khách gần như chắc chắn đã mua ở nơi khác.

### 4.5 Lớp kích hoạt

Các kênh theo thứ tự ưu tiên: App push và hộp thư trong app → Zalo ZNS/OA → SMS → **danh sách chăm sóc theo cửa hàng *(optional)***.

Kênh cuối cùng là tùy chọn: hệ thống đẩy danh sách khách cần chăm sóc về cửa hàng gần nhất để nhân viên chủ động liên hệ. Hiệu quả cao với đơn giá trị lớn, nhưng phụ thuộc vào năng lực vận hành của từng cửa hàng.

---

## 5. MÔ HÌNH DỮ LIỆU

### 5.1 Ba thực thể trung tâm

```
HỘ GIA ĐÌNH (Household)
   ├── TÀI KHOẢN (nhiều người: mẹ, bà, bố...)
   ├── VÍ ĐIỂM CHUNG
   └── HỒ SƠ DINH DƯỠNG (nhiều hồ sơ)
          ├── Bà bầu
          ├── Mẹ sau sinh
          ├── Bé (nhiều bé)
          ├── Người lớn tuổi (nhiều người)
          └── Người trưởng thành
```

### 5.2 Hồ sơ dinh dưỡng — thực thể chung cho mọi đối tượng

| Loại hồ sơ | Ngày mốc | Đồng hồ vòng đời | Đặc điểm |
|---|---|---|---|
| Bà bầu | Ngày dự sinh | Tuần thai 1–40 | Ngắn, deadline cứng, mật độ nội dung cao nhất |
| Mẹ sau sinh | Ngày sinh | Tháng 0–12 | Nối tiếp tự động từ hồ sơ bà bầu |
| Bé | Ngày sinh | Tháng 0–72 | Trục doanh thu chính hiện tại |
| Người lớn tuổi | Năm sinh | Theo tình trạng | Chu kỳ ổn định nhất, giá trị vòng đời cao nhất |
| Người trưởng thành | — | Theo mục tiêu dinh dưỡng | Nhóm mở rộng giai đoạn sau |

### 5.3 Ba quy tắc bắt buộc

1. **Người mua khác người dùng.** Mỗi hồ sơ có trường riêng cho "người tiêu dùng" và "người thanh toán". Nhóm người lớn tuổi gần như luôn lệch hai vai này.
2. **Một hộ, nhiều hồ sơ, một ví điểm chung.** Điểm tích từ sữa bầu phải dùng được cho sữa của ông bà. Đây là cơ chế giữ chân mạnh nhất khi hộ có nhiều hồ sơ.
3. **Chuyển trạng thái tự động.** Đến ngày dự sinh, hệ thống chủ động xác nhận và tách thành hồ sơ mẹ sau sinh + hồ sơ bé. Không bắt khách khai lại.

### 5.4 Định danh khách hàng

- Khóa chính: số điện thoại (nối App ↔ Haravan ↔ POS)
- Đồ thị định danh ở cấp hộ gia đình: nhiều SĐT có thể trỏ về cùng một hộ
- Mã QR thành viên trong app là công cụ định danh tại quầy

> **Điểm chết cần xử lý trước:** nếu nhân viên tại 13 cửa hàng không nhập định danh khách khi thanh toán, toàn bộ CDP mất mảng dữ liệu quan trọng nhất. Đây là bài toán vận hành, không phải kỹ thuật. **Cần đo tỷ lệ đơn có định danh theo từng cửa hàng trước khi bắt đầu dự án.**

---

## 6. DANH MỤC KỊCH BẢN CHĂM SÓC TỰ ĐỘNG

Mỗi kịch bản được định nghĩa đủ 6 thành phần: `trigger → điều kiện lọc → kênh → nội dung → hành động mong muốn → chỉ số đo`.

### 6.1 Nhóm A — Onboarding và thu thập dữ liệu (7 ngày đầu)

| Kịch bản | Trigger | Kênh | Mục tiêu |
|---|---|---|---|
| Chào mừng, tạo hồ sơ | Cài app / đơn đầu tiên | Push + in-app | Có ngày mốc của hồ sơ |
| Khai "tủ nhà mình" | Sau khi có hồ sơ | In-app | Kích hoạt toàn bộ nhóm C |
| Nhắc hoàn thiện hồ sơ | D+3 nếu thiếu ngày mốc | Push | Đổi quà nhỏ lấy dữ liệu |
| Hướng dẫn tích điểm tại cửa hàng | D+5 | Push + Zalo | Nối định danh POS ↔ app |

> Nhóm này quyết định thành bại của tất cả nhóm còn lại.

### 6.2 Nhóm B — Chuyển đơn 1 sang đơn 2

Đây là giai đoạn rơi rụng lớn nhất trong toàn bộ vòng đời.

| Kịch bản | Trigger | Kênh |
|---|---|---|
| Cảm ơn + hướng dẫn dùng sản phẩm | D+1 sau giao hàng | Push |
| Nội dung liên quan sản phẩm đã mua | D+3 | Feed trong app |
| Ưu đãi đơn thứ 2 có thời hạn | D+10 nếu chưa mua lại | Push + ZNS |
| Chuyển chăm sóc cửa hàng *(optional)* | D+21 nếu im lặng và đơn 1 giá trị cao | Danh sách chăm sóc theo cửa hàng |

### 6.3 Nhóm C — Mua lại theo chu kỳ (trục doanh thu chính)

| Kịch bản | Trigger | Ghi chú |
|---|---|---|
| Sắp hết hàng | Ngày dự kiến hết − 5 | Tính theo định mức tiêu thụ |
| Hết hàng hôm nay | Ngày dự kiến hết | Mua lại 1 chạm |
| Trễ chu kỳ | + 3 ngày | Tín hiệu rời bỏ mạnh nhất |
| Trễ nặng | + 10 ngày | Chuyển chăm sóc cửa hàng *(optional)* |
| Đề xuất giao định kỳ | Sau 3 lần mua lại đúng chu kỳ | Chuyển sang subscription |
| Nhắc theo sản phẩm phụ trợ | Theo chu kỳ riêng từng nhóm hàng | Bán chéo tự nhiên |

### 6.4 Nhóm D — Mốc vòng đời (trục giữ chân)

Nhóm **không mang tính thương mại**, quan trọng cả về giữ chân lẫn tuân thủ pháp lý.

- Nhắc mốc theo giai đoạn của từng hồ sơ
- Nhắc lịch tiêm chủng, lịch khám định kỳ
- Nhắc đo và cập nhật chỉ số theo dõi
- Mốc chuyển giai đoạn quan trọng
- Sinh nhật và các dịp cá nhân

### 6.5 Nhóm E — Win-back và giữ chân

| Kịch bản | Trigger |
|---|---|
| Khách im lặng 45 ngày | Nội dung giá trị trước, ưu đãi sau |
| Khách im lặng 90 ngày | Khảo sát một câu: vì sao chưa quay lại |
| Sắp rớt hạng thành viên | Cảnh báo trước 15 ngày |
| Chu kỳ lệch bất thường | Chuyển chăm sóc cửa hàng *(optional)* |

### 6.6 Nhóm F — Vận hành và sự vụ

Tự động 100%: trạng thái đơn hàng, giao hàng, đổi trả, xác nhận tích điểm, nhắc điểm và voucher sắp hết hạn.

### 6.7 Nhóm H — Kịch bản riêng cho bà bầu

| Kịch bản | Trigger |
|---|---|
| Nội dung theo tuần thai | Hàng tuần, tự động suốt 40 tuần |
| Nhắc lịch khám thai | Trước mốc 3 ngày |
| Chu kỳ sữa bầu | Ngày dự kiến hết − 5 |
| Chuẩn bị đi sinh | Tuần 32, 35, 37 |
| **Chuyển đổi sang hồ sơ bé** | Quanh ngày dự sinh |
| Chăm sóc sau sinh | Tuần 1–6 sau sinh |

> **Yêu cầu đặc biệt cho kịch bản chuyển đổi quanh ngày dự sinh:** chuyển sang chế độ im lặng vài ngày quanh mốc; hỏi bằng ngôn ngữ nhẹ nhàng; **có nhánh xử lý trường hợp kết quả không như mong đợi — dừng toàn bộ automation và chuyển người.** Hệ thống không bao giờ được tiếp tục gửi nội dung mừng em bé trong trường hợp này.

### 6.8 Nhóm I — Kịch bản riêng cho người lớn tuổi

| Kịch bản | Trigger |
|---|---|
| Chu kỳ giao định kỳ | Trước ngày giao 3 ngày, xác nhận 1 chạm |
| Nhắc uống cho người dùng cuối | Hàng ngày qua Zalo/SMS, nếu bật |
| Mùa biếu tặng | Trước Tết 30/15/7 ngày, Vu Lan, 20/10, 8/3 |
| Kịch bản "mua cho bố mẹ" | Khách nhóm mẹ & bé có tuổi tài khoản > 12 tháng |
| Tạm dừng có lý do | Khách chủ động báo ngưng — hỏi lý do, đặt lịch quay lại |
| Giữ chân subscription | Trước ngày gia hạn |

### 6.9 Nhóm G — Tầng kiểm tra tuân thủ

Đặt giữa engine kịch bản và kênh gửi, chạy trước mọi nhóm khác. Chi tiết tại Mục 11.

---

## 7. ĐẶC TẢ CHỨC NĂNG APP KHÁCH HÀNG

### M1 — Tài khoản và định danh

- Đăng nhập bằng SĐT qua OTP
- Một tài khoản quản lý nhiều hồ sơ dinh dưỡng
- Chia sẻ tài khoản trong gia đình (mẹ, bà cùng xem một hồ sơ)
- Đồng bộ hai chiều với dữ liệu khách hàng trên Haravan
- Bản ghi đồng ý xử lý dữ liệu riêng cho từng loại hồ sơ

### M2 — Sổ theo dõi sức khỏe gia đình

**Hồ sơ bé:** biểu đồ tăng trưởng chiều cao/cân nặng theo chuẩn WHO có phân vị; lịch tiêm chủng với nhắc trước 3 ngày; nhật ký mốc phát triển; album ảnh theo tháng.

**Hồ sơ bà bầu:** đồng hồ thai kỳ theo tuần; lịch khám và mốc xét nghiệm, lưu được kết quả và ảnh siêu âm; theo dõi cân nặng theo chuẩn tăng cân thai kỳ; đếm cử động thai ở tam cá nguyệt cuối.

**Hồ sơ người lớn tuổi:** cân nặng, huyết áp, đường huyết do người dùng hoặc người con nhập.

> **Yêu cầu bắt buộc toàn bộ M2:** đây là công cụ ghi nhận và hiển thị, **không diễn giải, không chẩn đoán, không gợi ý sản phẩm dựa trên chỉ số y tế**. Mọi kết quả nằm ngoài ngưỡng bình thường đều dẫn đến khuyến nghị đi khám.

### M3 — Tủ nhà mình

Tính năng khác biệt lớn nhất và là đầu vào của toàn bộ nhóm kịch bản C.

- Khách khai sản phẩm đang dùng cho từng hồ sơ
- App đếm ngược số ngày còn lại theo định mức tiêu thụ
- Tự cập nhật khi có đơn mới từ online hoặc POS
- Cho phép chỉnh tay để hệ thống học chu kỳ thực tế của từng hộ
- Hỗ trợ nhiều địa chỉ giao cho nhiều hồ sơ trong cùng hộ

### M4 — Trung tâm nội dung

- Feed cá nhân hóa theo từng hồ sơ, không phải feed chung
- Thư viện tra cứu chủ động, phân loại theo đối tượng và chủ đề
- Công cụ tra cứu nhanh và checklist thực hành
- Bản tin tuần cố định giờ, có chữ ký bác sĩ
- Lịch livestream chuyên môn cố định hàng tuần
- Chuyên mục "Hỏi bác sĩ tuần này"
- Khóa học ngắn theo chặng

*Chi tiết kiến trúc nội dung tại Mục 8.*

### M5 — Thành viên và ví

- Hạng thành viên, tích điểm hợp nhất online + 13 cửa hàng
- **Mã QR thành viên hiển thị nhanh ở màn hình chính** — đây là cách sửa bài toán định danh tại POS bằng chính app
- Ví trả trước và gói giao định kỳ *(giai đoạn sau)*
- Lượt tư vấn bác sĩ gắn theo hạng thành viên

### M6 — Mua hàng

- Mua lại 1 chạm từ tủ nhà mình và từ lịch sử
- Giỏ hàng đồng bộ với web và Haravan
- Đặt giữ hàng tại cửa hàng gần nhất
- Kiểm tra tồn kho theo cửa hàng
- Chức năng biếu tặng: gửi kèm thiệp, giao đến địa chỉ người nhận, đặt trước cho dịp lễ

### M7 — Tư vấn bác sĩ

*Chi tiết tại Mục 9.*

### M8 — Chăm sóc và khiếu nại

- Hộp thư kịch bản trong app — không chỉ push, vì push bị tắt là mất kênh
- Chatbot xử lý câu hỏi thường gặp, tra cứu đơn, chính sách
- Nút "cần người hỗ trợ" luôn hiện diện, tối đa 2 chạm

### M9 — Chế độ chăm sóc từ xa

Dành cho nhóm người lớn tuổi, nơi người mua là con cái:

- Con tạo và quản lý hồ sơ cho bố mẹ
- Đặt giao định kỳ về địa chỉ khác
- Nhận nhắc thay cho người dùng cuối
- Nhắc uống sữa gửi trực tiếp cho người lớn tuổi qua Zalo/SMS, không bắt cài app
- Chế độ hiển thị đơn giản: chữ lớn, ít bước, nút gọi tổng đài nổi bật

### M10 — Yêu cầu phi chức năng

| Hạng mục | Yêu cầu |
|---|---|
| Event SDK | Mọi màn hình, mọi tương tác bắn sự kiện về CDP. App vừa là kênh vừa là nguồn dữ liệu hành vi phong phú nhất |
| Preference center | Khách tự chọn loại thông báo, tần suất, từ chối từng nhóm |
| Đồng ý dữ liệu | Theo Nghị định 13/2023, dữ liệu trẻ em và thai kỳ ở mức nhạy cảm, lưu vết theo phiên bản |
| Thử nghiệm | Feature flag và A/B testing ngay từ bản đầu, để đo được từng kịch bản |
| Mạng yếu | Hoạt động được ở mạng chậm; sổ theo dõi xem được offline |
| Bảo mật | Mã hóa dữ liệu sức khỏe, phân quyền chặt giữa vai trò bác sĩ và vai trò kinh doanh |

---

## 8. HỆ THỐNG NỘI DUNG

### 8.1 Ba lớp nội dung

| Lớp | Bản chất | Cách phân phối |
|---|---|---|
| **Nền** | Tri thức thường trực, không gắn thời điểm | Thư viện tra cứu, đồng bộ ra web cho SEO |
| **Nhịp** | Gắn với tuần thai, tháng tuổi, mùa | Hệ thống tự đẩy đúng thời điểm |
| **Phản ứng** | Theo hành vi hoặc câu hỏi cụ thể | Kích hoạt bởi CDP |

Một chủ đề tốt nên tồn tại ở cả ba dạng.

### 8.2 Bản đồ chủ đề theo đối tượng

**Bà bầu:** theo tam cá nguyệt · dinh dưỡng thai kỳ · triệu chứng thường gặp · khám và xét nghiệm · **dấu hiệu cần đi khám ngay** · chuẩn bị sinh · tâm lý · thực hành hàng ngày

**Mẹ sau sinh:** phục hồi sau sinh · sữa mẹ và cho bú · dinh dưỡng mẹ · **tâm lý sau sinh** · sắp xếp sinh hoạt

**Bé 0–72 tháng:** dinh dưỡng theo tháng · mốc phát triển · giấc ngủ · bệnh thường gặp · **dấu hiệu nguy hiểm** · tiêm chủng · chăm sóc hàng ngày · nuôi dạy

**Người lớn tuổi:** dinh dưỡng người cao tuổi · vận động và phòng té ngã · chăm sóc từ xa · sinh hoạt với bệnh mạn tính · tâm lý tuổi già · **kiệt sức của người chăm sóc**

### 8.3 Định dạng nội dung

| Định dạng | Vai trò |
|---|---|
| Bài nền | Tri thức đầy đủ, tra cứu |
| Nội dung theo mốc | Đẩy tự động theo giai đoạn |
| Công cụ tra cứu | Tra dấu hiệu, tra lịch, tra định lượng — trả lời ngay, không phải bài viết |
| Checklist thực hành | Tích được, dẫn tự nhiên sang giỏ hàng (trừ nhóm bị hạn chế) |
| FAQ ngắn | 200–300 chữ, chuyển hóa từ câu hỏi 1:1 của bác sĩ |
| Video ngắn | Cắt từ livestream, tái sử dụng cả tuần |

### 8.4 Ước lượng khối lượng

| Đối tượng | Bài nền | Nội dung theo mốc | Công cụ/checklist |
|---|---|---|---|
| Bà bầu | 50–60 | 40 | 4–5 |
| Mẹ sau sinh | 30–40 | 12 | 2–3 |
| Bé | 80–100 | 36 | 5–6 |
| Người lớn tuổi | 40–50 | 12 | 3–4 |
| **Tổng** | **200–250** | **~100** | **~15** |

Khoảng 350 đơn vị nội dung, khả thi trong 4–6 tháng với AI soạn nháp và bác sĩ duyệt — **nhưng chỉ khi có người sở hữu trách nhiệm này toàn thời gian.**

**Thứ tự sản xuất đề xuất:** không dàn hàng ngang. Làm đủ sâu một đối tượng rồi mới sang đối tượng tiếp theo, theo thứ tự: bà bầu → bé 0–24 tháng → người lớn tuổi → bé trên 24 tháng. Mỗi đối tượng cần khoảng 30 bài nền cho các chủ đề được hỏi nhiều nhất là đủ để mở.

### 8.5 Quy trình sản xuất và quản trị

```
Đề tài  →  AI soạn nháp  →  Biên tập  →  BÁC SĨ DUYỆT VÀ KÝ  →  Xuất bản  →  Rà lại 12 tháng
   ↑                                                                              │
   └────────── Nguồn: câu hỏi thật của khách + tìm kiếm không có kết quả ─────────┘
```

**Metadata bắt buộc cho mỗi đơn vị nội dung:** đối tượng · khoảng tuổi hoặc tuần thai áp dụng · chủ đề · mức khẩn · người duyệt · ngày duyệt · ngày rà lại · phiên bản · nguồn tham khảo.

> Không có lớp metadata này thì thư viện chỉ là một tập bài viết rời rạc và CDP không dùng để cá nhân hóa được.

**Vòng lặp tái sử dụng:** mọi câu hỏi 1:1 sau khi trả lời đều được ẩn danh hóa và biên tập thành nội dung công khai. Sau 6 tháng, thư viện được xây bằng chính nhu cầu thật của khách hàng VoiCon — tài sản đối thủ không sao chép được.

### 8.6 Nguyên tắc nội dung bắt buộc

- Mọi bài y tế có tên và chuyên khoa người duyệt
- Mọi bài về triệu chứng kết thúc bằng mục "khi nào cần đi khám"
- Không gắn liên kết sản phẩm trong nội dung nhóm bé dưới 24 tháng
- Không hướng dẫn liều lượng thuốc, không thay thế chỉ định của bác sĩ
- Hiển thị ngày cập nhật gần nhất
- **Nội dung về sức khỏe tâm thần** (trầm cảm sau sinh, kiệt sức của người chăm sóc): không chạy qua automation thông thường, không gợi ý sản phẩm, luôn kèm đường dẫn tới hỗ trợ chuyên môn thật; nếu khách thể hiện dấu hiệu nghiêm trọng thì chuyển người ngay

---

## 9. CHĂM SÓC 1:1 VỚI BÁC SĨ

### 9.1 Mô hình kim tự tháp

Bác sĩ là tài nguyên khan hiếm. Nếu để mọi người dùng chat 1:1 tự do, chi phí sẽ vỡ và chất lượng sẽ giảm.

```
1:1 riêng tư          ~5% nhu cầu   →  gói thành viên / tính phí
1:ít (nhóm)          ~25%           →  miễn phí, tạo nhịp
1:nhiều (nội dung)   ~70%           →  miễn phí, tạo thói quen
```

### 9.2 Hỏi đáp bất đồng bộ — hình thái chính

Khách gửi câu hỏi kèm ảnh, bác sĩ trả lời trong 24 giờ. Rẻ hơn video nhiều lần, phù hợp với 80–90% nhu cầu thực tế, và không cần khớp lịch hai bên.

Yêu cầu: gửi được ảnh và video ngắn · hỏi tiếp trong cùng chủ đề trong 48 giờ · bác sĩ thấy trước hồ sơ sức khỏe liên quan · có SLA đếm ngược.

### 9.3 Tư vấn video có đặt lịch

Chọn chuyên khoa (nhi, sản, dinh dưỡng, lão khoa) → chọn khung giờ → thanh toán hoặc trừ lượt. Sau phiên, bác sĩ ghi tóm tắt vào sổ theo dõi của hồ sơ — biến mỗi lần tư vấn thành dữ liệu tích lũy và tạo lý do để khách không rời hệ thống.

### 9.4 Lợi thế từ CDP

Bác sĩ mở phiên đã thấy sẵn tuổi, biểu đồ tăng trưởng, lịch sử hỏi đáp trước, kết quả sàng lọc gần nhất. Chất lượng tư vấn cao hơn hẳn các nền tảng tư vấn đại trà — đây là điểm bán thật sự của tính năng.

### 9.5 Mô hình gói thành viên

| Hạng | Quyền lợi tư vấn |
|---|---|
| Cơ bản | Nội dung, livestream, hỏi đáp cộng đồng |
| Thân thiết | 2 câu hỏi bất đồng bộ mỗi tháng |
| VIP | Không giới hạn hỏi đáp + 1 phiên video mỗi tháng |

Lượt không dùng hết thì mất theo tháng — tạo động lực dùng, mà dùng thì mở app. Khách đang có lượt tư vấn chưa dùng sẽ không chuyển sang mua ở nơi khác.

### 9.6 Vận hành: đảm bảo đủ năng lực

| Cơ chế | Tác dụng |
|---|---|
| Tầng sàng lọc trước bác sĩ | Câu hỏi trùng thư viện đã duyệt trả lời ngay; câu hỏi vận hành chuyển CSKH. Lọc được ước tính 40–60% khối lượng |
| AI soạn nháp | Sinh bản nháp từ thư viện đã duyệt và hồ sơ khách, bác sĩ đọc, sửa và ký. **Không bao giờ gửi câu trả lời chưa có bác sĩ duyệt** |
| Định tuyến khẩn cấp | Nhận diện tình huống nguy hiểm ngay tại màn hình nhập, hiển thị cảnh báo đi cấp cứu, không xếp hàng đợi 24 giờ |
| Bảng điều khiển bác sĩ | Hàng đợi, SLA đếm ngược, hồ sơ khách, thư viện mẫu, lịch trực |

> **Điều kiện tiên quyết:** không tự động hóa được phần định tuyến khẩn cấp thì không nên mở tính năng tư vấn.

### 9.7 Tạo nhịp mở app hàng tuần

Thói quen sinh ra từ nhịp cố định, không từ nội dung hay.

| Cơ chế | Mô tả |
|---|---|
| Bản tin tuần | Cố định giờ (ví dụ 20h Chủ nhật), cá nhân hóa theo từng hồ sơ, có chữ ký bác sĩ |
| Lịch livestream cố định | Tách hoàn toàn khỏi livestream bán hàng — khác giờ, khác định dạng, khác người dẫn |
| Hỏi bác sĩ tuần này | Chọn 5–7 câu mỗi tuần, bác sĩ trả lời bằng video 1–2 phút. Chi phí thấp (~30 phút quay/tuần), giữ chân tốt nhất |
| Check-in định kỳ có phản hồi | Sau mỗi lần nhập chỉ số, hiển thị nhận xét từ thư viện phản hồi đã được bác sĩ duyệt sẵn — không phải AI tự sinh |
| Sàng lọc mốc phát triển hàng tháng | Bộ câu hỏi ngắn theo tháng tuổi. **Là công cụ sàng lọc, không phải chẩn đoán** |
| Cộng đồng theo nhóm đồng cảnh | Giai đoạn sau — cần kiểm duyệt thật sự vì dễ lan tin sai về y tế |

Lịch phát sóng đề xuất:

| Thứ | Chuyên mục | Đối tượng |
|---|---|---|
| Ba | Bác sĩ sản nói chuyện thai kỳ | Bà bầu |
| Năm | Bác sĩ nhi giải đáp | Mẹ có con nhỏ |
| Bảy | Dinh dưỡng người cao tuổi | Người mua cho bố mẹ |

Một buổi livestream 45 phút tạo ra 8–10 clip ngắn dùng cho cả tuần.

---

## 10. MÔ HÌNH AUTOMATION-FIRST

### 10.1 Ba tầng xử lý

| Tầng | Phạm vi | Tỷ trọng mục tiêu |
|---|---|---|
| **L0 — Tự động hoàn toàn** | Kịch bản vòng đời, trạng thái đơn, tích điểm, nhắc lịch, nội dung | ~80% |
| **L1 — AI hội thoại** | FAQ, tư vấn chọn sản phẩm theo giai đoạn, tra cứu | ~15% |
| **L2 — Nhân viên** | Khiếu nại, đổi trả, đơn giá trị cao, khách VIP | ~5% |

L1 chỉ trả lời trong phạm vi tri thức đã duyệt, có ngưỡng tin cậy. Dưới ngưỡng thì chuyển L2, không đoán.

### 10.2 Danh sách tuyệt đối không tự động — chuyển người ngay

- Bé hoặc người dùng có phản ứng bất thường sau khi dùng sản phẩm
- Nghi ngờ hàng giả, hàng lỗi, hết hạn
- Mọi câu hỏi mang tính tư vấn y tế cho trường hợp cụ thể
- Khiếu nại lần thứ hai về cùng một vụ việc
- Ngôn ngữ thể hiện bức xúc mạnh
- Dấu hiệu liên quan sức khỏe tâm thần nghiêm trọng
- Trường hợp thai kỳ có kết quả không như mong đợi

> Với ngành mẹ & bé, một ca xử lý sai kiểu này lan nhanh trên mạng xã hội và phá hỏng nhiều hơn phần tiết kiệm được từ automation. **Automation-first không có nghĩa là human-last — nghĩa là con người ở đúng chỗ đắt tiền.**

### 10.3 Chỉ số theo dõi

Tỷ lệ tự phục vụ · tỷ lệ chuyển tầng · thời gian đến người thật khi cần · CSAT tách riêng theo từng tầng.

---

## 11. TUÂN THỦ PHÁP LÝ

> Toàn bộ mục này cần bộ phận pháp chế rà soát và chốt trước khi bật các kịch bản liên quan. Nội dung dưới đây là nhận diện rủi ro để thiết kế hệ thống, không phải ý kiến pháp lý chính thức.

### 11.1 Quảng cáo sản phẩm thay thế sữa mẹ

Nghị định 100/2014/NĐ-CP có các quy định hạn chế đối với quảng cáo sản phẩm thay thế sữa mẹ dùng cho trẻ dưới 24 tháng tuổi và thức ăn bổ sung cho trẻ dưới 6 tháng, đồng thời hạn chế sự tham gia của nhân viên y tế vào hoạt động quảng bá các sản phẩm này.

**Yêu cầu thiết kế — tường lửa cứng giữa luồng tư vấn và luồng bán hàng:**

| Ràng buộc | Cách thực thi trong hệ thống |
|---|---|
| Không nội dung thương mại cho hồ sơ bé dưới 24 tháng | Rule engine chặn trước khi gửi, ghi log mọi lần chặn |
| Bác sĩ không tham gia bán hàng | Bác sĩ không thấy lịch sử mua hàng của hồ sơ dưới 24 tháng; không có KPI doanh thu, không hoa hồng theo đơn |
| Luồng tư vấn nhi dưới 24 tháng | Không hiển thị sản phẩm, không gắn link mua, không đề xuất sau phiên |
| Nhóm C với bé dưới 24 tháng | Chỉ ở dạng tiện ích (nhắc tồn kho cá nhân), không kèm giá và khuyến mại |

**Lưu ý về phạm vi:** các hạn chế này **không áp dụng** cho nhóm bà bầu, người lớn tuổi và bé trên 24 tháng. Đây là một lý do kinh doanh mạnh để mở rộng đối tượng, bên cạnh lý do giá trị vòng đời.

### 11.2 Định vị pháp lý của kênh tư vấn — quyết định cần chốt sớm

Hai phương án:

| Phương án | Yêu cầu | Đánh giá |
|---|---|---|
| Khám chữa bệnh từ xa | Cơ sở được cấp phép, điều kiện theo Luật Khám bệnh, chữa bệnh 2023 | Nặng, không phù hợp với doanh nghiệp bán lẻ ở giai đoạn này |
| **Tư vấn dinh dưỡng và chăm sóc, không chẩn đoán, không kê đơn** | Phạm vi hẹp hơn, ràng buộc nhẹ hơn | **Đề xuất chọn phương án này** |

Quyết định này ảnh hưởng tới cả sản phẩm lẫn cách viết mọi câu chữ trong app, nên cần chốt trước khi bắt đầu thiết kế chi tiết.

### 11.3 Quảng cáo thực phẩm và thực phẩm bổ sung

Không được quảng cáo gây hiểu nhầm sản phẩm có tác dụng như thuốc chữa bệnh. Nhóm sản phẩm cho người có tình trạng sức khỏe đặc biệt là vùng rủi ro cao nhất.

**Ba quy tắc cứng đưa vào hệ thống:**

1. Rule engine chặn mọi nội dung tự động ghép **chỉ số sức khỏe do người dùng nhập** với **gợi ý sản phẩm**. Không bao giờ có kịch bản kiểu "chỉ số của bác cao, mời dùng sản phẩm X".
2. AI hội thoại không trả lời câu hỏi mang tính tư vấn bệnh lý — chuyển người hoặc khuyến nghị đi khám.
3. Nội dung nhóm thai kỳ và người lớn tuổi qua duyệt chuyên môn có lưu vết, mức kiểm soát cao hơn nhóm bé.

### 11.4 Bảo vệ dữ liệu cá nhân

Theo Nghị định 13/2023/NĐ-CP: dữ liệu trẻ em, dữ liệu thai kỳ và chỉ số sức khỏe thuộc nhóm dữ liệu cá nhân nhạy cảm.

- Bản ghi đồng ý **riêng cho từng loại hồ sơ**, không gộp chung một lần khi cài app
- Lưu vết đồng ý theo phiên bản
- Cơ chế rút lại đồng ý và xóa dữ liệu theo yêu cầu
- Phân quyền chặt: vai trò kinh doanh không truy cập được dữ liệu sức khỏe

---

## 12. LỘ TRÌNH TRIỂN KHAI

### Giai đoạn 0 — Chuẩn bị nền tảng dữ liệu *(2–4 tuần)*

Chưa cần hệ thống mới. Mục tiêu là sửa nguồn dữ liệu:

- Đo tỷ lệ đơn có định danh khách tại từng cửa hàng trong 13 điểm
- Đặt KPI định danh cho cửa hàng, thiết kế cơ chế khuyến khích nhân viên
- Thiết kế cơ chế thu thập ngày mốc của hồ sơ
- Chốt định vị pháp lý của kênh tư vấn (Mục 11.2)
- Chốt cam kết lịch của đội ngũ bác sĩ liên kết
- Khởi động sản xuất nội dung nhóm bà bầu

### Giai đoạn 1 — Đường ống dữ liệu + một kịch bản *(4–6 tuần)*

- Đồng bộ Haravan → CDP, dựng hồ sơ hộ gia đình thống nhất
- Mô hình dữ liệu đa hồ sơ hoàn chỉnh *(bắt buộc làm đúng ngay từ đầu)*
- Chạy đúng **một** kịch bản: nhắc mua lại theo chu kỳ
- Đo bằng A/B với nhóm đối chứng

> **Tiêu chí quyết định:** nếu kịch bản này không nâng được tỷ lệ mua lại, các kịch bản còn lại cũng sẽ không. Cần chứng minh trước khi mở rộng.

### Giai đoạn 2 — App bản đầu *(8–12 tuần)*

**Phạm vi:** M1 + M2 + M3 + M5 (điểm và QR) + M6 (mua lại) + M8 + nhóm kịch bản A, C, F.

**Nội dung đợt 1:** bản tin tuần, lịch livestream cố định, hỏi bác sĩ tuần này, check-in có phản hồi. Toàn bộ là nội dung và nhịp, gần như không cần bác sĩ trực — chi phí thấp nhất, tác động lên tần suất mở app cao nhất.

**Đối tượng:** nhóm mẹ & bé + nhóm bà bầu.

### Giai đoạn 3 — Mở rộng kịch bản và tư vấn *(8–10 tuần)*

- Nhóm kịch bản B, D, E, H đầy đủ
- M4 trung tâm nội dung đầy đủ, thư viện tra cứu
- Hỏi đáp bất đồng bộ có SLA + tầng sàng lọc + AI soạn nháp
- L1 AI hội thoại

### Giai đoạn 4 — Người lớn tuổi và subscription *(8–10 tuần)*

- M9 chế độ chăm sóc từ xa
- Giao hàng định kỳ và ví trả trước
- Nhóm kịch bản I
- Tư vấn video có lịch, gói thành viên
- Sàng lọc mốc phát triển, khóa học

### Giai đoạn 5 — Mở rộng

Kịch bản chuyển đổi chéo giữa các nhóm · mùa vụ biếu tặng · cộng đồng · dự báo giá trị vòng đời.

---

## 13. CHỈ SỐ ĐO LƯỜNG

### 13.1 Chỉ số nền tảng dữ liệu

| Chỉ số | Ý nghĩa |
|---|---|
| Tỷ lệ đơn có định danh tại POS | Điều kiện tiên quyết của mọi thứ khác |
| Tỷ lệ khách có hồ sơ dinh dưỡng đầy đủ ngày mốc | Điều kiện kích hoạt automation |
| Tỷ lệ khách khai tủ nhà mình | Điều kiện của nhóm kịch bản C |
| Số hồ sơ trung bình trên mỗi hộ | Đo hiệu quả mở rộng đối tượng |

### 13.2 Chỉ số giữ chân

| Chỉ số | Ghi chú |
|---|---|
| **Tỷ lệ mở app hàng tuần (WAU/MAU)** | Chỉ số bắc cầu quan trọng nhất. **Không vượt 40% sau 3 tháng nghĩa là lớp nội dung chưa đủ sức tạo nhịp — phải sửa trước khi mở rộng** |
| Tỷ lệ mua lại theo nhóm khách cùng thời điểm | |
| Khoảng cách trung bình giữa hai đơn | So với chu kỳ dự kiến |
| Tỷ lệ rời bỏ theo nhóm đối tượng | |
| Giá trị vòng đời theo nhóm | |

### 13.3 Chỉ số vận hành

Tỷ lệ tự phục vụ · tỷ lệ chuyển tầng · thời gian phản hồi trung bình của bác sĩ · tỷ lệ trễ SLA · tỷ lệ hài lòng · tỷ lệ câu trả lời 1:1 được tái sử dụng thành nội dung.

### 13.4 Chỉ số kinh doanh

Doanh thu qua app · tỷ lệ đơn có nguồn từ kịch bản automation · tỷ lệ chuyển đổi giữa các nhóm đối tượng · tỷ lệ khách chuyển sang giao định kỳ.

---

## 14. RỦI RO CHÍNH

| # | Rủi ro | Mức độ | Cách giảm thiểu |
|---|---|---|---|
| 1 | Tỷ lệ định danh tại POS thấp, CDP thiếu dữ liệu cốt lõi | **Cao** | Giai đoạn 0 xử lý trước; QR thành viên trong app; KPI cho cửa hàng |
| 2 | Sản xuất nội dung là nút thắt, không phải kỹ thuật | **Cao** | Có người sở hữu toàn thời gian; AI soạn nháp; làm sâu từng đối tượng |
| 3 | Bác sĩ không cam kết lịch cố định, phá nhịp đã công bố | **Cao** | Chuyển từ quan hệ theo vụ việc sang hợp đồng có lịch, **trước khi** công bố lịch với khách |
| 4 | Vi phạm quy định quảng cáo sữa | **Cao** | Rule engine chặn tự động; tường lửa tư vấn – bán hàng; pháp chế duyệt trước |
| 5 | App không tạo được thói quen, chỉ mở khi mua hàng | Trung bình | Theo dõi WAU/MAU như chỉ số chặn; nội dung và nhịp làm trước tính năng bán |
| 6 | Sự cố xử lý sai trong tình huống nhạy cảm | Trung bình | Danh sách tuyệt đối không tự động; định tuyến khẩn cấp; nhánh xử lý ca đặc biệt |
| 7 | Phạm vi mở rộng quá nhanh, nhiều hạng mục dở dang | Trung bình | Khóa chặt phạm vi từng giai đoạn; tiêu chí nghiệm thu rõ trước khi sang giai đoạn sau |
| 8 | Phụ thuộc thay đổi từ phía Haravan | Thấp | Tách lớp kết nối thành adapter riêng, không hard-code |

---

## 15. CÁC QUYẾT ĐỊNH CẦN KHÁCH HÀNG CHỐT

| # | Nội dung | Ảnh hưởng |
|---|---|---|
| 1 | **Tỷ lệ đơn có định danh khách tại 13 cửa hàng hiện là bao nhiêu?** | Xác định dự án bắt đầu từ Giai đoạn 0 hay Giai đoạn 1 |
| 2 | Định vị pháp lý của kênh tư vấn: tư vấn dinh dưỡng hay khám chữa bệnh từ xa | Ảnh hưởng toàn bộ thiết kế Mục 9 và câu chữ trong app |
| 3 | Hình thức hợp tác với bác sĩ: theo vụ việc hay theo ca có lịch cố định | Quyết định có mở được lịch livestream tuần hay không |
| 4 | Ai sở hữu trách nhiệm sản xuất và duyệt nội dung, toàn thời gian hay kiêm nhiệm | Rủi ro tiến độ lớn thứ hai của dự án |
| 5 | Thứ tự ưu tiên đối tượng: bà bầu trước hay người lớn tuổi trước | Ảnh hưởng lộ trình Giai đoạn 3–4 |
| 6 | Mô hình thu phí tư vấn: gắn hạng thành viên, bán lẻ lượt, hay miễn phí hoàn toàn | Ảnh hưởng thiết kế M5 và mô hình vận hành bác sĩ |
| 7 | Ngân sách và mốc thời gian kỳ vọng | Điều chỉnh phạm vi từng giai đoạn |
| 8 | Nguồn lực nội bộ có sẵn cho dự án (kỹ thuật, nội dung, vận hành) | Xác định phần nào tự làm, phần nào thuê ngoài |

---

## PHỤ LỤC A — NGUYÊN TẮC THIẾT KẾ XUYÊN SUỐT

1. **Haravan là hệ thống ghi nhận, hệ thống mới là hệ thống thông minh.** Không cạnh tranh vai trò.
2. **Đơn vị chăm sóc là hộ gia đình, không phải khách hàng cá nhân.**
3. **Dữ liệu trước, kịch bản sau, app sau nữa, bán hàng qua app sau cùng.**
4. **App là sổ theo dõi sức khỏe gia đình, chức năng mua hàng gắn vào sau.**
5. **Nhịp cố định tạo thói quen, không phải nội dung hay.**
6. **AI viết, con người chịu trách nhiệm.** Không bao giờ gửi nội dung y tế chưa qua duyệt.
7. **Tường lửa giữa tư vấn và bán hàng** ở nhóm bị hạn chế quảng cáo.
8. **Tự động hóa là mặc định, con người ở đúng chỗ đắt tiền.**
9. **Mỗi giai đoạn phải chứng minh được kết quả trước khi mở rộng.**

---

## PHỤ LỤC B — GHI CHÚ VỀ KHẢ NĂNG SẢN PHẨM HÓA

Lớp CDP và kịch bản vòng đời chồng lên Haravan gần như không có gì riêng cho VoiCon. Nhiều chuỗi bán lẻ Việt Nam đang dùng Haravan, Sapo hoặc KiotViet và gặp đúng vấn đề: nền tảng đủ tốt cho bán hàng, yếu ở giữ khách.

Nếu tính đến khả năng đóng gói thành sản phẩm cho thị trường rộng hơn, cần đảm bảo ngay từ Giai đoạn 1:

- Tách lớp kết nối nền tảng bán hàng thành **adapter riêng**
- Không hard-code logic đặc thù ngành sữa vào phần lõi
- Cấu hình hóa bảng định mức tiêu thụ, danh mục kịch bản và rule tuân thủ
- Tách rõ phần lõi CDP và phần cấu hình theo ngành

Việc này làm ngay từ đầu gần như không tăng chi phí, nhưng làm lại về sau thì rất tốn kém.

---

*Tài liệu này là bản thảo luận. Sau khi khách hàng phản hồi và chốt các quyết định ở Mục 15, bước tiếp theo là xây dựng đặc tả chi tiết theo từng module với user story và tiêu chí nghiệm thu.*
