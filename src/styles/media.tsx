export const breakpoints = {
  xs: 768,
  sm: 991,
  lg: 1024,
};

export const size = {
  xs: `${breakpoints.xs}px`,
  sm: `${breakpoints.sm}px`,
  lg: `${breakpoints.lg}px`,
};

export const device = {
  mobile: `screen and (max-width: ${breakpoints.xs}px)`,
  tablet: `screen and (min-width: ${breakpoints.xs + 1}px) and (max-width: ${
    breakpoints.lg
  }px)`,
  desktop: `screen and (min-width: ${breakpoints.lg + 1}px)`,
  noMobile: `screen and (min-width: ${breakpoints.xs + 1}px)`,
  noDesktop: `screen and (max-width: ${breakpoints.lg}px)`,
};
