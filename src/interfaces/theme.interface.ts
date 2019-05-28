import { DefaultDynamicArrayList } from '@/interfaces/object.interface.ts';

export interface TypographyThemeInterface {
    primary: string;
    secondary: string;
}

export interface PaletteThemeInterface {
    primary: Array<string>;
    secondary: Array<string>;
    tertiary: Array<string>;
    [key: string]: Array<string>;
}

export interface SizeThemeInterface {
    fontSize: DefaultDynamicArrayList;
    fontSizeHeading: DefaultDynamicArrayList;
    lineHeightHeading: DefaultDynamicArrayList;
    buttonFontSize: DefaultDynamicArrayList;
    spacingSize: DefaultDynamicArrayList;
}

export interface ThemeInterface {
    typography: TypographyThemeInterface;
    palette: PaletteThemeInterface;
    size: SizeThemeInterface;
}
