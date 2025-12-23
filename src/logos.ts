import type { LogoSettings, LogoOptions } from './types.js';

// Z logo settings
export const LOGO_SETTINGS: LogoSettings = {
  viewBox: '0 0 512 512',
  width: 512,
  height: 512
};

// The bold geometric Z path (Geist-inspired)
const Z_PATH = 'M 96 96 L 416 96 L 416 160 L 210 352 L 416 352 L 416 416 L 96 416 L 96 352 L 302 160 L 96 160 Z';

/**
 * Generate Z SVG logo (white Z on black background)
 */
export function getDefaultSVG(): string {
  return `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" rx="64" fill="#000000"/>
  <path d="${Z_PATH}" fill="#ffffff"/>
</svg>`;
}

/**
 * Generate white Z logo (for dark backgrounds, no background)
 */
export function getWhiteSVG(): string {
  return `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <path d="${Z_PATH}" fill="#ffffff"/>
</svg>`;
}

/**
 * Generate black Z logo (for light backgrounds, no background)
 */
export function getBlackSVG(): string {
  return `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <path d="${Z_PATH}" fill="#000000"/>
</svg>`;
}

/**
 * Generate favicon SVG (white Z on black rounded rect, 32x32)
 */
export function getFaviconSVG(): string {
  return `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="4" fill="#000000"/>
  <path d="M 6 6 L 26 6 L 26 10 L 14 22 L 26 22 L 26 26 L 6 26 L 6 22 L 18 10 L 6 10 Z" fill="#ffffff"/>
</svg>`;
}

/**
 * Generate menu bar SVG (uses currentColor)
 */
export function getMenuBarSVG(): string {
  return `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <path d="${Z_PATH}" fill="currentColor"/>
</svg>`;
}

/**
 * Get logo as data URL
 */
export function getLogoDataUrl(options: LogoOptions = {}): string {
  const { variant = 'default' } = options;
  let svg = '';

  switch (variant) {
    case 'white':
      svg = getWhiteSVG();
      break;
    case 'black':
      svg = getBlackSVG();
      break;
    case 'favicon':
      svg = getFaviconSVG();
      break;
    default:
      svg = getDefaultSVG();
  }

  const base64 = btoa(unescape(encodeURIComponent(svg)));
  return `data:image/svg+xml;base64,${base64}`;
}

/**
 * Get logo as base64 string
 */
export function getLogoBase64(options: LogoOptions = {}): string {
  const { variant = 'default' } = options;
  let svg = '';

  switch (variant) {
    case 'white':
      svg = getWhiteSVG();
      break;
    case 'black':
      svg = getBlackSVG();
      break;
    case 'favicon':
      svg = getFaviconSVG();
      break;
    default:
      svg = getDefaultSVG();
  }

  return btoa(unescape(encodeURIComponent(svg)));
}

/**
 * Get logo in requested format
 */
export function getLogo(options: LogoOptions = {}): string {
  const { variant = 'default', format = 'svg' } = options;

  switch (format) {
    case 'dataUrl':
      return getLogoDataUrl({ variant });
    case 'base64':
      return getLogoBase64({ variant });
    default:
      switch (variant) {
        case 'white':
          return getWhiteSVG();
        case 'black':
          return getBlackSVG();
        case 'favicon':
          return getFaviconSVG();
        default:
          return getDefaultSVG();
      }
  }
}

// Export pre-generated versions for convenience
export const zLogo = getDefaultSVG();
export const zLogoWhite = getWhiteSVG();
export const zLogoBlack = getBlackSVG();
export const zFavicon = getFaviconSVG();
export const zLogoDataUrl = getLogoDataUrl();
export const zLogoWhiteDataUrl = getLogoDataUrl({ variant: 'white' });
export const zLogoBlackDataUrl = getLogoDataUrl({ variant: 'black' });
export const zFaviconDataUrl = getLogoDataUrl({ variant: 'favicon' });
