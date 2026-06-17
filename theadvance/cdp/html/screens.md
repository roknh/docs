# CDP TheAdvance — Danh sách màn hình UI

> Theo spec `cdp_spec.html` — 26 screens, 10 modules
> Tiến độ: **26/26 done** ✅

| # | File | Screen | Mô tả | Role | Status |
|---|------|--------|-------|------|--------|
| S1 | `ui-login.html` | Login | Đăng nhập SSO + MFA | Tất cả | Done |
| S2 | `ui-dashboard.html` | Dashboard Home | Overview theo role | Tất cả | Done |
| S3 | `ui-customer-list.html` | Customer List | Danh sách khách, tìm kiếm, filter | Marketing, CS, Staff | Done |
| S4 | `ui-customer360.html` | Customer 360 | Profile chi tiết 1 khách — 7 tabs: Overview, Giao dịch, Timeline, Scoring, Liệu trình, Campaigns, Notes | CS, Staff, Marketing | Done |
| S5 | `ui-segment-builder.html` | Segment Builder | Tạo/sửa segment bằng UI | Marketing, Analyst | Done |
| S6 | `ui-segment-list.html` | Segment List | Danh sách segment đã tạo | Marketing | Done |
| S7 | `ui-rfm-dashboard.html` | RFM Dashboard | Ma trận RFM, drill-down | Marketing, Management | Done |
| S8 | `ui-campaign-create.html` | Campaign Create | Tạo campaign mới | Marketing | Done |
| S9 | `ui-campaign-list.html` | Campaign List | Danh sách campaign, status, kết quả | Marketing | Done |
| S10 | `ui-campaign-detail.html` | Campaign Detail | Chi tiết kết quả 1 campaign | Marketing | Done |
| S11 | `ui-workflow-builder.html` | Workflow Builder | Tạo automation workflow | Marketing | Done |
| S12 | `ui-lead-list.html` | Lead List | Danh sách lead, sort by score | Telesale | Done |
| S13 | `ui-lead-pipeline.html` | Lead Pipeline | Kanban pipeline | Telesale Manager | Done |
| S14 | `ui-scoring-dashboard.html` | Scoring Dashboard | Phân bố tier, score trend, migration | Management | Done |
| S15 | `ui-health-dashboard.html` | Health Dashboard | Customer health map, alerts | CS Manager | Done |
| S16 | `ui-analytics-cohort.html` | Analytics — Cohort | Cohort retention chart | Analyst | Done |
| S17 | `ui-analytics-journey.html` | Analytics — Journey | Customer journey map | Analyst | Done |
| S18 | `ui-analytics-attribution.html` | Analytics — Attribution | Channel attribution | Marketing | Done |
| S19 | `ui-dealer-dashboard.html` | Dealer Dashboard | Health score đại lý, ranking (Ocany) | Sales Director | Done |
| S20 | `ui-connector-config.html` | Connector Config | Cấu hình data connectors | Admin | Done |
| S21 | `ui-pipeline-monitor.html` | Pipeline Monitor | Pipeline status, DAG steps, data freshness, auto-refresh | Admin | Done |
| S22 | `ui-score-config.html` | Score Config | Weight sliders, tier thresholds, CHS config, lifecycle transitions | Admin | Done |
| S23 | `ui-user-role.html` | User & Role Mgmt | User table + Role cards with permission matrix | Super Admin | Done |
| S24 | `ui-consent-center.html` | Consent Center | Per-channel consent toggles, PDPA compliance, change log | Admin, CS | Done |
| S25 | `ui-audit-log.html` | Audit Log | Action-typed log stream, expandable JSON, export | Super Admin | Done |
| S26 | `ui-custom-dashboard.html` | Custom Dashboard Builder | Drag & drop widgets, layout grid, widget settings | All (theo quyền) | Done |

## Tài liệu hỗ trợ

| File | Mô tả |
|------|-------|
| `design-system.html` | Living style guide — design tokens, components, responsive breakpoints |
| `cdp_spec.html` | Spec gốc — 10 modules, 29 features, 3 phases |

## Quy ước

- Tất cả file UI đặt tên `ui-[tên-screen].html`
- Dùng design tokens từ `design-system.html`
- Responsive: Desktop ≥1024px, Tablet 768–1023px, Mobile <768px, Small mobile <480px
- Table trên desktop → Card layout trên mobile
- Tiếng Việt có dấu đầy đủ
- BU color: Ngọc Dung (#e84393), Zema (#6c5ce7), Ocany (#00b894)
- Phone format: 0901-xxx-xxx (dashes)
- Lifecycle Stage: LEAD / TRIAL / ACTIVE / LOYAL / LAPSED / CHURNED
- Health Status: HEALTHY / ATTENTION / AT_RISK / CRITICAL
- Sidebar navigation: tất cả 25 screens (trừ login) có full menu links qua lại
- Web server: `http://localhost:8080`
