import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    name: String;
    color: {
      text: {
        body: string;
        menu: string;
        shadow: string;
        disabled: string;
      };
      input: {
        background: string;
        placeholder: string;
      };
      button: {
        color: string;
        background: string;
        colorDisabled: string;
        backgroundDisabled: string;
      };
      table: {
        tdBorder: string;
        thBorder: string;
        thBackground: string;
      };
      page: {
        border: string;
        background: string;
        loadingBackground: string;
      };
      status: {
        primary: string;
        primary_10: string;
        primary_20: string;
        primary_50: string;
        gray1: string;
        gray1_50: string;
        gray1_20: string;
        gray2: string;
        gray2_50: string;
        gray2_20: string;
        black: string;
        white: string;
        green: string;
        green_20: string;
        green1: string;
        dark_green: string;
        red: string;
        red_20: string;
        blue: string;
        blue_20: string;
        yellow: string;
        yellow_20: string;
        red_light: string;
        orange_50: string;
        [color]: string;
      };
    };
  }
  export type ThemeColor = keyof typeof DefaultTheme;
}
