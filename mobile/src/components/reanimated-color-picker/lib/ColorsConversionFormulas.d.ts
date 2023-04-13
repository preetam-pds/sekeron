/**
 * The function takes in a hue value, a saturation value, and a lightness value, and returns an object
 * with the corresponding red, green, and blue values.
 * @param h - hue (0-360)
 * @param s - saturation
 * @param l - lightness
 * @returns  The RGB color as an object.
 */
export declare const HSL_RGB: (h: number, s: number, l: number) => {
    r: number;
    g: number;
    b: number;
};
/**
 * It takes a number between 0 and 100 and returns a hexadecimal string between 00 and FF.
 * @param number - a number between 0 and 100
 * @returns a hexadecimal value.
 */
export declare const ALPHA_HEX: (number: number) => string;
/**
 * It takes a hue, saturation, and lightness value and returns a hex color
 * @param h - Hue (0-360)
 * @param s - saturation (0-100)
 * @param l - lightness
 * @returns A hex color.
 */
export declare const HSL_HEX: (h: number, s: number, l: number) => string;
/**
 * It takes a hsv color and returns a hsl color as an object with the h, s, and l values.
 * @param h - Hue
 * @param s - saturation
 * @param b - brightness
 * @returns - A hsl color as an object with the properties h, s, and l.
 */
export declare const HSV_HSL: (h: number, s: number, b: number) => {
    h: number;
    s: number;
    l: number;
};
/**
 * It takes a color in RGB format and returns the same color in HSV format
 * @param r - red value
 * @param g - The green value of the color.
 * @param b - Brightness
 * @returns - An object with the properties h, s, and b.
 */
export declare const RGB_HSV: (r: number, g: number, b: number) => {
    h: number;
    s: number;
    b: number;
};
/**
 * It takes a hex string, splits it into chunks, converts each chunk to a number between 0 and 255, and returns an object with the RGB values
 * @param hex - A hex color string.
 * @returns - The RGBA color as an object.
 */
export declare const HEX_RGB: (hex: string) => {
    r: number;
    g: number;
    b: number;
    a: number;
};
/**
 * Convert a hexadecimal color value to an HSV color object.
 * @param hex - A hex color string.
 * @returns - An object with the properties h, s, b, and a.
 */
export declare const HEX_HSV: (hex: string) => {
    a: number;
    h: number;
    s: number;
    b: number;
};
/**
 * Convert HSL to RGB, then convert RGB to HSV.
 * @param h - Hue (0-360)
 * @param s - saturation
 * @param l - lightness
 * @returns - An object with the properties h, s, and v.
 */
export declare const HSL_HSV: (h: number, s: number, l: number) => {
    h: number;
    s: number;
    b: number;
};
/**
 * It takes a color string in any format and returns an object with the color's hue, saturation, value, and alpha
 * @param colorStr - A color string.
 * @returns - An object with the properties h, s, b, and a.
 */
export declare const COLOR_HSVA: (colorStr: string) => {
    a: number;
    h: number;
    s: number;
    b: number;
};
/**
 * It converts a color to a hex value
 * @param color - A color string in any format
 * @returns - A hex color code.
 */
export declare const COLOR_HEX: (color: string) => string;
/**
 * It takes a color in HSV format and a color in hex format and returns the contrast ratio between the two colors
 * @param color1 - A hsv color object.
 * @param hex - The hex value of the color you want to compare against.
 * @returns - The contrast ratio between the two colors.
 */
export declare const CONTRAST_RATIO: ({ h, s, b }: {
    h: number;
    s: number;
    b: number;
}, hex: string) => number;
/**
 * It converts the HSV color to HSL color string.
 * @param color - A hsv color object.
 * @returns - A string of the color in HSL format.
 */
export declare const HSL_FORMAT: (color: {
    h: number;
    s: number;
    b: number;
}) => string;
/**
 * It converts the HSV color to HSLA color string.
 * @param color - A hsv color object.
 * @returns A string of the color in HSL format.
 */
export declare const HSLA_FORMAT: (color: {
    h: number;
    s: number;
    b: number;
    a: number;
}) => string;
/**
 * Convert HSV to HSL, then HSL to HEX, then add the alpha value to the end of the HEX string.
 * @param color - A hsv color object.
 * @returns - A string of the color in hex format.
 */
export declare const HEX_FORMAT: (color: {
    h: number;
    s: number;
    b: number;
    a: number;
}) => string;
/**
 * Convert the color from HSV to HSL, then convert the color from HSL to RGB
 * @param color - A hsv color object.
 * @returns - A string of the color in RGB format.
 */
export declare const RGB_FORMAT: (color: {
    h: number;
    s: number;
    b: number;
}) => string;
/**
 * Convert HSV to HSL, then HSL to RGB, then return the RGBA value as a string
 * @param color - A hsv color object.
 * @returns - A string in the format of "rgba(r, g, b, a)"
 */
export declare const RGBA_FORMAT: (color: {
    h: number;
    s: number;
    b: number;
    a: number;
}) => string;
/**
 * Convert the color from HSV object to string.
 * @param color - A hsv color object.
 * @returns - A string with the color in HSV format.
 */
export declare const HSV_FORMAT: (color: {
    h: number;
    s: number;
    b: number;
}) => string;
/**
 * Convert the color from HSV object to string.
 * @param color - A hsv color object.
 * @returns - A string with the color in HSVA format.
 */
export declare const HSVA_FORMAT: (color: {
    h: number;
    s: number;
    b: number;
    a: number;
}) => string;
