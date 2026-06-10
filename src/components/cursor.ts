// ─────────────────────────────────────────────────────────────────────────────
// types/cursor.ts
// ─────────────────────────────────────────────────────────────────────────────

export interface CursorOptions {
  /** Inner SVG markup for the logo (without outer <svg> wrapper needed).
   *  The component provides the outer <svg viewBox="0 0 40 40"> wrapper.
   *  Leave undefined to use the built-in default globe logo. */
  logoSVG?: React.ReactNode;

  /** CSS color string for the dot. Default: '#ffffff' */
  accentColor?: string;

  /** Milliseconds of stillness before the logo fades in. Default: 800 */
  idleDelay?: number;

  /** CSS selectors that trigger magnetic + logo-enlarge on hover.
   *  Default: ['button', 'a', '[data-magnetic]'] */
  magneticSelectors?: string[];

  /** CSS color for the particle trail. Default: 'rgba(255,255,255,0.55)' */
  particleColor?: string;

  /** Normal logo diameter in px. Default: 52 */
  logoSize?: number;

  /** Logo diameter on button hover in px. Default: 80 */
  logoHoverSize?: number;

  /** Whether the cursor is enabled at all. Default: true */
  enabled?: boolean;
}

export interface CursorState {
  /** Current mouse X (viewport px) */
  mouseX: number;
  /** Current mouse Y (viewport px) */
  mouseY: number;
  /** Lagging logo X */
  logoX: number;
  /** Lagging logo Y */
  logoY: number;
  /** Accumulated rotation degrees */
  rotation: number;
  /** Whether the cursor has been idle long enough to show logo */
  isIdle: boolean;
  /** Whether mouse is hovering a magnetic element */
  isHovering: boolean;
  /** Whether cursor is inside the window */
  isVisible: boolean;
}