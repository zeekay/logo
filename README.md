# @zeekay/logo

Z logo package with React components and utilities.

## Installation

```bash
npm install @zeekay/logo
```

## Usage

### SVG Functions

```typescript
import {
  getDefaultSVG,   // White Z on black rounded rect
  getWhiteSVG,     // White Z, transparent background
  getBlackSVG,     // Black Z, transparent background
  getFaviconSVG,   // 32x32 favicon version
  getLogo,         // Get any variant/format
} from '@zeekay/logo';

// Get SVG string
const svg = getDefaultSVG();

// Get data URL
import { getLogoDataUrl } from '@zeekay/logo';
const dataUrl = getLogoDataUrl({ variant: 'favicon' });
```

### Pre-generated Exports

```typescript
import {
  zLogo,           // Default SVG string
  zLogoWhite,      // White variant
  zLogoBlack,      // Black variant
  zFavicon,        // Favicon SVG
  zLogoDataUrl,    // Default as data URL
} from '@zeekay/logo';
```

### React Components

```tsx
import { ZLogo, ZFavicon } from '@zeekay/logo';

// Logo component
<ZLogo size={64} />
<ZLogo variant="white" size="2rem" />
<ZLogo variant="black" className="w-16 h-16" />

// Favicon component (for <head>)
<ZFavicon />
```

## Variants

- `default` - White Z on black rounded rectangle
- `white` - White Z, transparent background
- `black` - Black Z, transparent background
- `favicon` - 32x32 optimized version

## License

MIT
