import { createBox, createText, createTheme } from "@shopify/restyle";
import { horizontalScale } from "@utils/platform";
import Borders from "./border";
import Colors from "./colors";
import Spacing from "./spacing";

const theme = createTheme({
  colors: {
    mainBackground: Colors.lightBackground,
    secBackground: Colors.lightBackgroundSec,
    text: Colors.darkText,
    darkText: Colors.darkText,
    lightText: Colors.lightText,
    overlay: Colors.overlay,
    shadow: Colors.lightShadow,
    primary: Colors.primary,
    primary1: Colors.primary1,
    primary2: Colors.primary2,
    primary3: Colors.primary3,
    primary4: Colors.primary4,
    primary5: Colors.primary5,
    primary6: Colors.primary6,
    primary7: Colors.primary7,
    primary8: Colors.primary8,
    black: Colors.black,
    black1: Colors.black1,
    black2: Colors.black2,
    black3: Colors.black3,
    black4: Colors.black4,
    black5: Colors.black5,
    black6: Colors.black6,
    black7: Colors.black7,
    black8: Colors.black8,
    black9: Colors.black9,
    error: Colors.error,
  },
  spacing: {
    none: Spacing.none,
    xs: Spacing.xs,
    s: Spacing.s,
    m: Spacing.m,
    l: Spacing.l,
    xl: Spacing.xl,
    xxl: Spacing.xxl,
  },
  breakpoints: {},
  textVariants: {
    DisplayLarge: {
      fontSize: horizontalScale(57),
      fontFamily: "CairoRegular",
      lineHeight: 64,
      color: "text",
    },
    DisplayMedium: {
      fontSize: horizontalScale(45),
      fontFamily: "CairoBold",
      lineHeight: 52,
      color: "text",
    },
    DisplaySmall: {
      fontSize: horizontalScale(36),
      fontFamily: "CairoRegular",
      lineHeight: 44,
      color: "text",
    },
    HeadlineLarge: {
      fontSize: horizontalScale(32),
      fontFamily: "CairoBold",
      lineHeight: 40,
      color: "text",
    },
    HeadlineMedium: {
      fontSize: horizontalScale(28),
      fontFamily: "CairoRegular",
      lineHeight: 36,
      color: "text",
    },
    HeadlineSmall: {
      fontSize: horizontalScale(24),
      fontFamily: "CairoRegular",
      lineHeight: 32,
      color: "text",
    },
    TitleLarge: {
      fontSize: horizontalScale(22),
      fontFamily: "CairoBold",
      lineHeight: 28,
      color: "text",
    },
    TitleMedium: {
      fontSize: horizontalScale(16),
      fontFamily: "CairoMedium",
      letterSpacing: 0.15,
      lineHeight: 24,
      color: "text",
    },
    TitleSmall: {
      fontSize: horizontalScale(14),
      fontFamily: "CairoMedium",
      letterSpacing: 0.1,
      lineHeight: 20,
      color: "text",
    },
    LabelLarge: {
      fontSize: horizontalScale(14),
      fontFamily: "CairoMedium",
      letterSpacing: 0.1,
      lineHeight: 20,
      color: "text",
    },
    LabelMedium: {
      fontSize: horizontalScale(12),
      fontFamily: "CairoMedium",
      letterSpacing: 0.5,
      lineHeight: 16,
      color: "text",
    },
    LabelSmall: {
      fontSize: horizontalScale(11),
      fontFamily: "CairoMedium",
      letterSpacing: 0.5,
      lineHeight: 16,
      color: "text",
    },
    BodyLarge: {
      fontSize: horizontalScale(16),
      fontFamily: "CairoRegular",
      letterSpacing: 0.5,
      lineHeight: 24,
      color: "text",
    },
    BodyMedium: {
      fontSize: horizontalScale(14),
      fontFamily: "CairoRegular",
      letterSpacing: 0.25,
      lineHeight: 20,
      color: "text",
    },
    BodySmall: {
      fontSize: horizontalScale(12),
      fontFamily: "CairoRegular",
      letterSpacing: 0.4,
      lineHeight: 16,
      color: "text",
    },
  },
  borderRadii: {
    none: Borders.none,
    s: Borders.s,
    m: Borders.m,
    l: Borders.l,
    xl: Borders.xl,
  },
  zIndices: {
    overlay: 1,
    modal: 2,
  },
});

export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    mainBackground: Colors.darkBackground,
    secBackground: Colors.darkBackgroundSec,
    text: Colors.lightText,
    shadow: Colors.darkShadow,
  },
};

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export default theme;
