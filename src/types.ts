export interface LogoSettings {
  viewBox: string;
  width: number;
  height: number;
}

export type LogoVariant = 'default' | 'white' | 'black' | 'favicon';
export type LogoFormat = 'svg' | 'dataUrl' | 'base64';

export interface LogoOptions {
  variant?: LogoVariant;
  format?: LogoFormat;
  size?: number;
}
