# AegisBoard — Phase 1 Foundation

## 1) Business Positioning (ThemeForest Market Fit)

**Product Name:** **AegisBoard**

**Positioning Statement:**
AegisBoard is a premium Bootstrap 5 admin dashboard HTML template purpose-built for enterprise SaaS products that need trustworthy, efficient, and highly maintainable back-office interfaces.

**Buyer Personas**
- SaaS founders launching B2B management portals.
- Product teams building CRM, ERP, HRM, finance, analytics, and property management systems.
- Agencies delivering white-label dashboard solutions.

**Commercial Differentiators**
- Original enterprise visual identity (not a clone of marketplace incumbents).
- Strong information hierarchy for data-dense products.
- Reusable pattern library with consistent UI behavior.
- LTR/RTL + Light/Dark-ready architecture from day one.
- Scalable folder and naming conventions for long-term maintenance.

---

## 2) Feature Strategy

### Core Product Pillars
1. **Composable Layout System**
   - Vertical, horizontal, collapsed, boxed, dark, and RTL variants.
2. **Domain-Ready Dashboards**
   - Analytics, Sales, CRM, Projects, and Property Management with realistic enterprise metrics.
3. **App-Centric Utility Pages**
   - Chat, Email, Kanban, Calendar, Tasks, Invoices, Files, Contacts.
4. **Complete UI & Forms Coverage**
   - Components, forms, tables, charts, auth, profile/settings, and system pages.
5. **Buyer Customization Engine**
   - Theme customizer controls for mode, direction, density, sidebar color, and width mode.
6. **Accessibility + Performance Baseline**
   - Semantic structure, keyboard support, visible focus, contrast-safe palette, and lean JS.

### Monetization-Ready Scope
- Multi-dashboard value proposition.
- Broad page inventory reducing buyer build time.
- Documentation-first onboarding to reduce support overhead.

---

## 3) UI Design System (Original Identity)

### 3.1 Visual Identity
- **Style:** Calm enterprise minimalism.
- **Tone:** Professional, analytical, trustworthy.
- **Shape Language:** Medium radius cards (`12px`) with subtle borders and restrained shadows.
- **Surface Strategy:** Layered neutral backgrounds to separate navigation, content, and widgets.

### 3.2 Spacing Scale (8pt-based)
- Base unit: `4px`
- Scale tokens: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64`
- Usage:
  - Card padding: `20px`
  - Section gap: `24px`
  - Dense layout mode multiplier: `0.85`

### 3.3 Typography System
- **Primary UI font:** `Inter` (fallback: `system-ui`, `Segoe UI`, `Roboto`, `Arial`)
- **Font scale:**
  - Display: `32/40`
  - H1: `28/36`
  - H2: `24/32`
  - H3: `20/28`
  - Body: `14/22`
  - Caption: `12/18`
- **Weight set:** `400, 500, 600, 700`

### 3.4 Color System (CSS Variable Driven)
- Primary: `#4F46E5`
- Secondary: `#0EA5E9`
- Success: `#10B981`
- Warning: `#F59E0B`
- Danger: `#EF4444`
- Info: `#06B6D4`
- Light surface: `#F8FAFC`
- Default text: `#0F172A`
- Muted text: `#64748B`
- Border: `#E2E8F0`

Dark mode equivalents map to semantic variables instead of hard-coded replacements.

### 3.5 Sidebar Behavior
- 3-level nested menu support.
- Auto-expand active branch.
- Collapsed state supports icon-only navigation with accessible tooltips.
- Scrollable menu body with sticky brand/header region.
- Keyboard navigation with arrow and enter support.

### 3.6 Reusable Card Patterns
- **Stat card** (metric + delta + sparkline slot).
- **Insight card** (title + helper text + chart body + actions).
- **Table card** (header tools + responsive table region + footer actions).
- **Timeline card** (vertical activity stream).
- **Task card** (checklist + due labels + assignees).
- **Profile summary card** (avatar + KPIs + quick actions).

### 3.7 Naming Convention
- Components: `.ab-` prefix (AegisBoard).
  - Example: `.ab-card`, `.ab-stat`, `.ab-sidebar`, `.ab-header`.
- Utilities: `.u-` prefix.
  - Example: `.u-text-muted-strong`, `.u-gap-24`.
- JS hooks: `data-ab-*` attributes.
  - Example: `data-ab-toggle="submenu"`.

### 3.8 File Naming Convention
- Kebab-case for pages and assets.
- Group prefix per module:
  - `dashboard-*`, `app-*`, `form-*`, `table-*`, `chart-*`, `pages-*`, `auth-*`.

### 3.9 Buyer Customization Strategy
- Centralized token overrides in `_variables.scss`.
- Direction switching via RTL stylesheet and `dir` attribute.
- Mode switching via `data-theme="light|dark"`.
- Layout density via `data-density="comfortable|compact"`.
- Sidebar palette classes and CSS variables.

---

## 4) Folder Architecture

```text
AegisBoard/
├─ html/
│  ├─ index.html
│  ├─ dashboard-*.html
│  ├─ layout-*.html
│  ├─ app-*.html
│  ├─ form-*.html
│  ├─ table-*.html
│  ├─ chart-*.html
│  ├─ auth-*.html
│  └─ pages-*.html
├─ partials/
│  ├─ layout/
│  ├─ navigation/
│  ├─ widgets/
│  └─ shared/
├─ assets/
│  ├─ css/
│  ├─ scss/
│  │  ├─ base/
│  │  ├─ components/
│  │  ├─ layouts/
│  │  ├─ pages/
│  │  ├─ themes/
│  │  ├─ utilities/
│  │  └─ app.scss
│  ├─ js/
│  ├─ images/
│  └─ vendors/
│     ├─ apexcharts/
│     ├─ datatables/
│     └─ bootstrap-icons/
└─ documentation/
   ├─ index.html
   ├─ getting-started.md
   ├─ customization.md
   ├─ components.md
   ├─ changelog.md
   ├─ credits.md
   └─ support-policy.md
```

---

## 5) Complete Page Map

### Dashboards
- `index.html`
- `dashboard-analytics.html`
- `dashboard-sales.html`
- `dashboard-crm.html`
- `dashboard-projects.html`
- `dashboard-property-management.html`

### Layout Variants
- `layout-vertical.html`
- `layout-horizontal.html`
- `layout-collapsed-menu.html`
- `layout-boxed.html`
- `layout-dark.html`
- `layout-rtl.html`

### Apps
- `app-chat.html`
- `app-email.html`
- `app-kanban.html`
- `app-calendar.html`
- `app-tasks.html`
- `app-invoice-list.html`
- `app-invoice-details.html`
- `app-file-manager.html`
- `app-contact-list.html`

### UI Components
- `alerts.html`, `buttons.html`, `cards.html`, `modals.html`, `tabs.html`, `accordions.html`, `dropdowns.html`, `offcanvas.html`, `typography.html`, `icons.html`, `avatars.html`, `badges.html`, `tooltips.html`, `popovers.html`, `progress.html`, `spinners.html`, `notifications.html`

### Forms
- `form-elements.html`, `form-layouts.html`, `form-validation.html`, `form-wizard.html`, `form-repeater.html`, `form-file-upload.html`, `form-date-picker.html`, `form-select.html`, `form-input-mask.html`, `form-editors.html`

### Tables
- `table-basic.html`, `table-datatable.html`, `table-responsive.html`

### Charts
- `chart-apex.html`, `chart-chartjs.html`

### Standalone Pages
- `auth-login.html`, `auth-register.html`, `auth-forgot-password.html`, `auth-reset-password.html`
- `pages-profile.html`, `pages-account-settings.html`, `pages-pricing.html`, `pages-faq.html`, `pages-blank.html`
- `pages-404.html`, `pages-500.html`, `pages-maintenance.html`, `pages-coming-soon.html`

---

## 6) Asset Strategy

### CSS / SCSS
- Source-first SCSS with module imports in `app.scss`.
- Compiled outputs:
  - `assets/css/app.css`
  - `assets/css/app-dark.css`
  - `assets/css/app-rtl.css`

### JavaScript
- Core bootstrapping in `app.js`.
- Feature modules (`sidebar.js`, `theme-customizer.js`, `dashboard.js`, `charts.js`, `utilities.js`).
- No jQuery dependency.

### Images
- SVG-first icons and lightweight illustrations.
- Screenshot-ready dashboard assets for marketplace preview.

### Vendors
- Bootstrap 5 bundle.
- ApexCharts for interactive chart pages.
- DataTables for enhanced table page only.
- Optional icon pack locally shipped for offline reliability.

### Performance Principles
- Keep each page loading only required vendor scripts.
- Defer non-critical JS.
- Avoid large bitmap assets where SVG/optimized WebP fits.

---

## Phase 1 — Files Created
1. `documentation/phase-1-foundation.md`
2. Directory scaffold for:
   - `html/`
   - `partials/`
   - `assets/css/`
   - `assets/scss/`
   - `assets/js/`
   - `assets/images/`
   - `assets/vendors/apexcharts/`
   - `assets/vendors/datatables/`
   - `assets/vendors/bootstrap-icons/`
   - `documentation/`
