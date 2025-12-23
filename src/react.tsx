import React from 'react';
import { getDefaultSVG, getWhiteSVG, getBlackSVG, getFaviconSVG } from './logos.js';
import type { LogoVariant } from './types.js';

export interface ZLogoProps {
  variant?: LogoVariant;
  size?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * React component for Z logo
 *
 * @example
 * ```tsx
 * import { ZLogo } from '@zeekay/logo';
 *
 * <ZLogo size={64} />
 * <ZLogo variant="white" size="2rem" />
 * <ZLogo variant="black" className="w-16 h-16" />
 * ```
 */
export const ZLogo: React.FC<ZLogoProps> = ({
  variant = 'default',
  size = 64,
  className,
  style
}) => {
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

  const sizeStyle = typeof size === 'number'
    ? { width: size, height: size }
    : { width: size, height: size };

  return (
    <div
      className={className}
      style={{ ...sizeStyle, ...style }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

/**
 * Z favicon component for <head>
 *
 * @example
 * ```tsx
 * import { ZFavicon } from '@zeekay/logo';
 *
 * // In your app's <head>
 * <ZFavicon />
 * ```
 */
export const ZFavicon: React.FC = () => {
  const svg = getFaviconSVG();
  const dataUrl = `data:image/svg+xml,${encodeURIComponent(svg)}`;

  return (
    <>
      <link rel="icon" type="image/svg+xml" href={dataUrl} />
      <link rel="apple-touch-icon" href={dataUrl} />
    </>
  );
};

export default ZLogo;
