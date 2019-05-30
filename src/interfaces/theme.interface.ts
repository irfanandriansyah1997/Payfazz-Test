import { DefaultDynamicObject } from '@/interfaces/object.interface.ts';

export interface TypographyThemeInterface {
    primary: string;
    secondary: string;
}

export interface PaletteThemeInterface {
    primary: string[];
    secondary: string[];
    tertiary: string[];
    [key: string]: string[];
}

export interface SizeThemeInterface {
    fontSize: DefaultDynamicObject;
    fontSizeHeading: DefaultDynamicObject;
    lineHeightHeading: DefaultDynamicObject;
    buttonFontSize: DefaultDynamicObject;
    spacingSize: DefaultDynamicObject;
}

export interface ThemeInterface {
    typography: TypographyThemeInterface;
    palette: PaletteThemeInterface;
    size: SizeThemeInterface;
}
