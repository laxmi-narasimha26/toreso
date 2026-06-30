# Toreso - UI/UX Design Guidelines

## 1. Design Principles

### Core Principles
1. **Clarity**: Clear, intuitive interfaces that reduce cognitive load
2. **Efficiency**: Streamlined workflows for B2B procurement
3. **Trust**: Professional design that builds credibility
4. **Accessibility**: WCAG 2.1 AA compliant
5. **Consistency**: Unified design language across platform
6. **Responsiveness**: Seamless experience across devices

### B2B-Specific Considerations
- Data-dense interfaces with clear hierarchy
- Quick access to critical information
- Bulk actions and batch processing
- Advanced filtering and search
- Export and reporting capabilities
- Multi-user collaboration features

## 2. Visual Design System

### Color Palette

#### Primary Colors
- **Primary Blue**: #0066CC (Trust, professionalism)
- **Primary Dark**: #004080 (Headers, emphasis)
- **Primary Light**: #3399FF (Hover states, accents)

#### Secondary Colors
- **Success Green**: #28A745 (Confirmations, positive actions)
- **Warning Orange**: #FFA500 (Alerts, pending states)
- **Error Red**: #DC3545 (Errors, critical alerts)
- **Info Blue**: #17A2B8 (Information, tips)

#### Neutral Colors
- **Text Primary**: #212529 (Body text)
- **Text Secondary**: #6C757D (Supporting text)
- **Border**: #DEE2E6 (Dividers, borders)
- **Background**: #F8F9FA (Page background)
- **White**: #FFFFFF (Cards, modals)

### Typography

#### Font Family
- **Primary**: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto
- **Monospace**: "Courier New", monospace (for codes, numbers)

#### Font Sizes
- **H1**: 32px / 2rem (Page titles)
- **H2**: 24px / 1.5rem (Section headers)
- **H3**: 20px / 1.25rem (Subsection headers)
- **H4**: 18px / 1.125rem (Card titles)
- **Body**: 16px / 1rem (Regular text)
- **Small**: 14px / 0.875rem (Supporting text)
- **Tiny**: 12px / 0.75rem (Labels, captions)

#### Font Weights
- **Regular**: 400 (Body text)
- **Medium**: 500 (Emphasis)
- **Semibold**: 600 (Headings)
- **Bold**: 700 (Strong emphasis)

### Spacing System
- **Base unit**: 8px
- **Scale**: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
- **Component padding**: 16px (mobile), 24px (desktop)
- **Section spacing**: 48px (mobile), 64px (desktop)

### Border Radius
- **Small**: 4px (Buttons, inputs)
- **Medium**: 8px (Cards, modals)
- **Large**: 12px (Large cards, images)
- **Round**: 50% (Avatars, icons)

### Shadows
- **Small**: 0 1px 3px rgba(0,0,0,0.12)
- **Medium**: 0 4px 6px rgba(0,0,0,0.1)
- **Large**: 0 10px 20px rgba(0,0,0,0.15)
- **XL**: 0 20px 40px rgba(0,0,0,0.2)

## 3. Component Library

### Buttons

#### Primary Button
- Background: Primary Blue
- Text: White
- Hover: Primary Dark
- Padding: 12px 24px
- Border radius: 4px
- Font weight: 600

#### Secondary Button
- Background: White
- Text: Primary Blue
- Border: 1px solid Primary Blue
- Hover: Light blue background

#### Tertiary Button
- Background: Transparent
- Text: Primary Blue
- Hover: Light background

#### Button Sizes
- **Large**: 48px height (CTAs)
- **Medium**: 40px height (Standard)
- **Small**: 32px height (Compact areas)

### Form Elements

#### Text Input
- Height: 40px
- Border: 1px solid #DEE2E6
- Border radius: 4px
- Padding: 8px 12px
- Focus: Blue border, box-shadow

#### Select Dropdown
- Same as text input
- Dropdown icon on right
- Max height: 300px for options
- Search for long lists

#### Checkbox & Radio
- Size: 20px
- Border: 2px solid
- Checked: Primary blue fill
- Label spacing: 8px

#### File Upload
- Drag-and-drop area
- File type indicators
- Progress bars
- Preview thumbnails

### Cards
- Background: White
- Border: 1px solid #DEE2E6
- Border radius: 8px
- Padding: 24px
- Shadow: Small (hover: Medium)

### Tables
- Header: Light gray background
- Row height: 48px
- Alternating rows: Subtle background
- Hover: Light blue background
- Sticky header on scroll
- Sortable columns
- Pagination

### Modals
- Overlay: rgba(0,0,0,0.5)
- Background: White
- Border radius: 8px
- Max width: 600px (small), 900px (large)
- Close button: Top right
- Actions: Bottom right

### Navigation
- **Top Navigation**: 64px height
- **Sidebar**: 240px width (collapsible to 64px)
- **Breadcrumbs**: 40px height
- **Tabs**: 48px height

## 4. Page Layouts

### Dashboard Layout
```
┌─────────────────────────────────────────┐
│  Header (Logo, Search, User Menu)       │
├──────┬──────────────────────────────────┤
│      │  Page Title & Actions            │
│ Side │──────────────────────────────────│
│ bar  │  Quick Stats (4 cards)           │
│      │──────────────────────────────────│
│      │  Main Content Area               │
│      │  (Charts, Tables, Widgets)       │
│      │                                  │
└──────┴──────────────────────────────────┘
```

### Product Listing Layout
```
┌─────────────────────────────────────────┐
│  Header                                  │
├──────┬──────────────────────────────────┤
│      │  Breadcrumbs                     │
│      │──────────────────────────────────│
│Filter│  Search & Sort                   │
│Panel │──────────────────────────────────│
│      │  Product Grid/List               │
│      │  ┌────┐ ┌────┐ ┌────┐           │
│      │  │    │ │    │ │    │           │
│      │  └────┘ └────┘ └────┘           │
│      │  Pagination                      │
└──────┴──────────────────────────────────┘
```

### Product Detail Layout
```
┌─────────────────────────────────────────┐
│  Header                                  │
├─────────────────────────────────────────┤
│  Breadcrumbs                            │
├──────────────┬──────────────────────────┤
│              │  Product Name            │
│  Image       │  Rating & Reviews        │
│  Gallery     │  Price & MOQ             │
│              │  Quantity Selector       │
│              │  Add to Cart / RFQ       │
├──────────────┴──────────────────────────┤
│  Tabs (Description, Specs, Reviews)     │
│  Tab Content                            │
└─────────────────────────────────────────┘
```

## 5. Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1440px

### Mobile Adaptations
- Hamburger menu for navigation
- Stacked layouts
- Touch-friendly targets (min 44px)
- Simplified tables (cards on mobile)
- Bottom navigation bar
- Swipeable carousels

### Tablet Adaptations
- Collapsible sidebar
- 2-column layouts
- Optimized for both portrait and landscape

## 6. Interaction Patterns

### Loading States
- Skeleton screens for content
- Spinners for actions
- Progress bars for uploads
- Shimmer effect for placeholders

### Empty States
- Illustrative graphics
- Clear messaging
- Call-to-action
- Helpful suggestions

### Error States
- Clear error messages
- Suggested actions
- Contact support option
- Error codes for reference

### Success States
- Confirmation messages
- Success icons
- Next steps
- Undo option (where applicable)

## 7. Accessibility

### WCAG 2.1 AA Compliance
- Color contrast ratio: 4.5:1 (text), 3:1 (UI components)
- Keyboard navigation support
- Screen reader compatibility
- Focus indicators
- Alt text for images
- ARIA labels
- Skip to main content link

### Keyboard Shortcuts
- `/` - Focus search
- `Esc` - Close modals
- `Tab` - Navigate forward
- `Shift+Tab` - Navigate backward
- `Enter` - Activate buttons
- `Space` - Toggle checkboxes

## 8. Animation & Transitions

### Timing
- **Fast**: 150ms (Hover states)
- **Medium**: 300ms (Modals, dropdowns)
- **Slow**: 500ms (Page transitions)

### Easing
- **Ease-out**: For entering elements
- **Ease-in**: For exiting elements
- **Ease-in-out**: For moving elements

### Use Cases
- Hover effects
- Modal open/close
- Dropdown expand/collapse
- Page transitions
- Loading animations
- Success/error feedback

## 9. Iconography

### Icon Library
- **Primary**: Feather Icons / Heroicons
- **Size**: 16px, 20px, 24px, 32px
- **Style**: Outline (default), Solid (emphasis)
- **Color**: Inherit from text or custom

### Common Icons
- Search: Magnifying glass
- Cart: Shopping cart
- User: User circle
- Menu: Hamburger
- Close: X
- Check: Checkmark
- Alert: Exclamation
- Info: Information circle
- Settings: Gear
- Logout: Arrow right from box

## 10. Data Visualization

### Charts
- **Line Charts**: Trends over time
- **Bar Charts**: Comparisons
- **Pie Charts**: Proportions (max 5 segments)
- **Area Charts**: Volume over time
- **Scatter Plots**: Correlations

### Chart Guidelines
- Clear labels and legends
- Consistent color scheme
- Tooltips on hover
- Responsive sizing
- Export options
- Accessible data tables

## 11. Mobile App Design

### Bottom Navigation
- 5 primary actions
- Icons with labels
- Active state indicator
- Badge for notifications

### Gestures
- Swipe to delete
- Pull to refresh
- Swipe between tabs
- Pinch to zoom (images)
- Long press for options

### Mobile-Specific Features
- Biometric authentication
- Camera integration
- Barcode scanning
- Push notifications
- Offline mode indicators

## 12. Design Tokens

### Implementation
```json
{
  "colors": {
    "primary": "#0066CC",
    "primary-dark": "#004080",
    "primary-light": "#3399FF"
  },
  "spacing": {
    "xs": "4px",
    "sm": "8px",
    "md": "16px",
    "lg": "24px",
    "xl": "32px"
  },
  "typography": {
    "font-family": "Inter, sans-serif",
    "font-size-base": "16px",
    "line-height-base": "1.5"
  }
}
```

## 13. Design Checklist

### Before Development
- [ ] Wireframes approved
- [ ] High-fidelity mockups complete
- [ ] Interactive prototype tested
- [ ] Design system documented
- [ ] Accessibility review done
- [ ] Responsive designs for all breakpoints
- [ ] User testing completed
- [ ] Stakeholder approval

### During Development
- [ ] Design tokens implemented
- [ ] Component library built
- [ ] Responsive behavior verified
- [ ] Accessibility tested
- [ ] Cross-browser testing
- [ ] Performance optimization
- [ ] Design QA review

### Post-Launch
- [ ] User feedback collected
- [ ] Analytics reviewed
- [ ] A/B testing results
- [ ] Iterative improvements
- [ ] Design system updates

