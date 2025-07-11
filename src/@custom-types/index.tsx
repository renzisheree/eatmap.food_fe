export type TextAlign = "left" | "right" | "center";

export interface IconProperty {
  stroke?: string;
  width?: string | number;
  height?: string | number;
  fill?: string;
}

export interface ValueLabel {
  value: any;
  label: string | any;
}
