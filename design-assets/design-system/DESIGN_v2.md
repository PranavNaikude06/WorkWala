---
name: Hyperlocal Energetic
colors:
  surface: '#fafaf5'
  surface-dim: '#dadad5'
  surface-bright: '#fafaf5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4ef'
  surface-container: '#eeeee9'
  surface-container-high: '#e8e8e3'
  surface-container-highest: '#e3e3de'
  on-surface: '#1a1c19'
  on-surface-variant: '#5a4136'
  inverse-surface: '#2f312e'
  inverse-on-surface: '#f1f1ec'
  outline: '#8e7164'
  outline-variant: '#e2bfb0'
  surface-tint: '#a04100'
  primary: '#a04100'
  on-primary: '#ffffff'
  primary-container: '#ff6b00'
  on-primary-container: '#572000'
  inverse-primary: '#ffb693'
  secondary: '#5d5c74'
  on-secondary: '#ffffff'
  secondary-container: '#e2e0fc'
  on-secondary-container: '#63627a'
  tertiary: '#006e2f'
  on-tertiary: '#ffffff'
  tertiary-container: '#00b050'
  on-tertiary-container: '#003a15'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcc'
  primary-fixed-dim: '#ffb693'
  on-primary-fixed: '#351000'
  on-primary-fixed-variant: '#7a3000'
  secondary-fixed: '#e2e0fc'
  secondary-fixed-dim: '#c6c4df'
  on-secondary-fixed: '#1a1a2e'
  on-secondary-fixed-variant: '#45455b'
  tertiary-fixed: '#6bff8f'
  tertiary-fixed-dim: '#4ae176'
  on-tertiary-fixed: '#002109'
  on-tertiary-fixed-variant: '#005321'
  background: '#fafaf5'
  on-background: '#1a1c19'
  surface-variant: '#e3e3de'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  touch-target-min: 56px
  base-unit: 8px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 40px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 40px
---

## Brand & Style
The design system is engineered to bridge the gap between high-end digital utility and grounded, local accessibility. It targets a blue-collar workforce where trust and speed are paramount. The personality is **Bold, Energetic, and Reliable**, utilizing a mix of **Minimalism** for clarity and **Tactile** elements to ensure touch targets feel physical and intentional. 

The visual narrative focuses on "Dignity of Labor," using premium finishes (clean typography and soft shadows) to elevate the user's experience while maintaining approachability through high-contrast action colors and intuitive, icon-led layouts. The design must feel high-quality enough to inspire trust but simple enough to be navigated by users with varying levels of digital literacy.

## Colors
The palette is rooted in a high-visibility **Vibrant Orange**, chosen to evoke energy and immediate action. This is balanced against a **Deep Navy** for text to ensure maximum legibility and a sense of institutional stability.

- **Primary**: Use for main actions, high-priority buttons, and progress indicators.
- **Surface**: The background is a warm off-white, reducing screen glare during outdoor use while maintaining a "clean" feel.
- **Functional Colors**: Success (Green), Warning (Yellow), and Danger (Red) are used strictly for status signaling—ensuring that even without reading the text, the user understands the state of their application or payment.

## Typography
The design system utilizes **Inter** for its exceptional legibility and neutral, professional character. To accommodate users who may struggle with small text, the scale is intentionally generous.

- **Headlines**: Use Bold (700) weights to anchor the page and provide clear section titles.
- **Body Text**: Maintain a minimum size of 16px for general content to ensure readability in various lighting conditions.
- **Hierarchy**: Use weight (Semi-bold vs Regular) rather than subtle color shifts to denote importance, as contrast is critical for accessibility.

## Layout & Spacing
The layout follows a **Fluid Grid** model with high-density protection. Given the mobile-first nature of the product, the system prioritizes vertical stacking and thumb-friendly interactions.

- **Margins**: Mobile devices use a 20px side margin to prevent accidental edge-touches while providing breathing room.
- **Rhythm**: An 8px linear scale governs all spacing. Vertical gaps between distinct content "cards" should be 16px (sm) or 24px (md).
- **Touch Targets**: All interactive elements (buttons, inputs, list items) must adhere to a minimum height of **56px** to accommodate users with larger hands or those operating in active work environments.

## Elevation & Depth
Depth is used to signify "interactability" and to separate content from the warm background. This system utilizes **Ambient Shadows** and **Tonal Layering**.

- **Level 1 (Cards)**: White surfaces with a soft, 12% opacity Navy shadow (Y: 4px, Blur: 12px). These host primary content like job listings or profile details.
- **Level 2 (Active States/Floating Buttons)**: Increased shadow spread (Y: 8px, Blur: 20px) at 15% opacity to indicate the element is "above" the main scroll.
- **Interactive Depth**: Buttons should feel "pressed" when tapped, achieved by removing the shadow and applying a slight 2% darken overlay on the primary color.

## Shapes
The shape language is friendly and modern. A **roundedness level of 2** (0.5rem base) is used for input fields and small components, but significant containers (Cards and Primary Buttons) use **16px to 24px** corner radii to reinforce the "approachable" brand personality.

- **Primary Buttons**: 16px radius for a sturdy, modern feel.
- **Content Cards**: 24px radius to create a distinct, premium containment for information.
- **Status Pills**: Fully rounded (pill-shaped) to distinguish them from actionable buttons.

## Components

### Buttons
- **Primary**: 56px height, #FF6B00 background, White 18px Semi-bold text. Large, full-width on mobile.
- **Secondary**: 56px height, Transparent background, 2px #FF6B00 border, #FF6B00 text.

### Cards
- Always use a White (#FFFFFF) background. 
- Padding: 20px internal padding.
- Elevation: Level 1 shadow.
- Border-radius: 24px.

### Inputs
- Height: 56px.
- Border: 2px solid #E5E7EB. On focus, border changes to #FF6B00.
- Labels should be persistent and high-contrast.

### Iconography & Navigation
- **Navigation**: Bottom-bar focused with 48px icons and clear text labels.
- **Visual Aids**: Use icons alongside text for every major action (e.g., a "Map" pin next to location, a "Rupee" symbol next to salary) to aid low-literacy comprehension.
- **Status Indicators**: Large, colored "pills" at the top-right of cards (e.g., "Verified" in Green, "Pending" in Yellow).

### List Items
- Height: Minimum 72px for list rows.
- Always include a trailing "chevron" icon or an action arrow to indicate the row is clickable.