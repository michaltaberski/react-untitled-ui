const grey = {
  25: '#FCFCFD',
  50: '#F9FAFB',
  100: '#F2F4F7',
  200: '#EAECF0',
  300: '#D0D5DD',
  400: '#98A2B3',
  500: '#667085',
  600: '#475467',
  700: '#344054',
  800: '#1D2939',
  900: '#101828',
} as const;

const brand = {
  25: '#FCFAFF',
  50: '#F9F5FF',
  100: '#F4EBFF',
  200: '#E9D7FE',
  300: '#D6BBFB',
  400: '#B692F6',
  500: '#9E77ED',
  600: '#7F56D9',
  700: '#6941C6',
  800: '#53389E',
  900: '#42307D',
} as const;

const error = {
  25: '#FFFBFA',
  50: '#FEF3F2',
  100: '#FEE4E2',
  200: '#FECDCA',
  300: '#FDA29B',
  400: '#F97066',
  500: '#F04438',
  600: '#D92D20',
  700: '#B42318',
  800: '#912018',
  900: '#7A271A',
} as const;

const warning = {
  25: '#FFFCF5',
  50: '#FFFAEB',
  100: '#FEF0C7',
  200: '#FEDF89',
  300: '#FEC84B',
  400: '#FDB022',
  500: '#F79009',
  600: '#DC6803',
  700: '#B54708',
  800: '#93370D',
  900: '#7A2E0E',
} as const;

const success = {
  25: '#F6FEF9',
  50: '#ECFDF3',
  100: '#D1FADF',
  200: '#A6F4C5',
  300: '#6CE9A6',
  400: '#32D583',
  500: '#12B76A',
  600: '#039855',
  700: '#027A48',
  800: '#05603A',
  900: '#054F31',
} as const;

// Secondary colors

const blueGray = {
  25: '#FCFCFD',
  50: '#F8F9FC',
  100: '#EAECF5',
  200: '#D5D9EB',
  300: '#AFB5D9',
  400: '#717BBC',
  500: '#4E5BA6',
  600: '#3E4784',
  700: '#363F72',
  800: '#293056',
  900: '#101323',
} as const;

const blueLight = {
  25: '#F5FBFF',
  50: '#F0F9FF',
  100: '#E0F2FE',
  200: '#B9E6FE',
  300: '#7CD4FD',
  400: '#36BFFA',
  500: '#0BA5EC',
  600: '#0086C9',
  700: '#026AA2',
  800: '#065986',
  900: '#0B4A6F',
} as const;

const blue = {
  25: '#F5FAFF',
  50: '#EFF8FF',
  100: '#D1E9FF',
  200: '#B2DDFF',
  300: '#84CAFF',
  400: '#53B1FD',
  500: '#2E90FA',
  600: '#1570EF',
  700: '#175CD3',
  800: '#1849A9',
  900: '#194185',
} as const;

const indigo = {
  25: '#F5F8FF',
  50: '#EEF4FF',
  100: '#E0EAFF',
  200: '#C7D7FE',
  300: '#A4BCFD',
  400: '#8098F9',
  500: '#6172F3',
  600: '#444CE7',
  700: '#3538CD',
  800: '#2D31A6',
  900: '#2D3282',
} as const;

const purple = {
  25: '#FAFAFF',
  50: '#F4F3FF',
  100: '#EBE9FE',
  200: '#D9D6FE',
  300: '#BDB4FE',
  400: '#9B8AFB',
  500: '#7A5AF8',
  600: '#6938EF',
  700: '#5925DC',
  800: '#4A1FB8',
  900: '#3E1C96',
} as const;

const pink = {
  25: '#FEF6FB',
  50: '#FDF2FA',
  100: '#FCE7F6',
  200: '#FCCEEE',
  300: '#FAA7E0',
  400: '#F670C7',
  500: '#EE46BC',
  600: '#DD2590',
  700: '#C11574',
  800: '#9E165F',
  900: '#851651',
} as const;

const rose = {
  25: '#FFF5F6',
  50: '#FFF1F3',
  100: '#FFE4E8',
  200: '#FECDD6',
  300: '#FEA3B4',
  400: '#FD6F8E',
  500: '#F63D68',
  600: '#E31B54',
  700: '#C01048',
  800: '#A11043',
  900: '#89123E',
} as const;

const orange = {
  25: '#FFFAF5',
  50: '#FFF6ED',
  100: '#FFEAD5',
  200: '#FDDCAB',
  300: '#FEB273',
  400: '#FD853A',
  500: '#FB6514',
  600: '#EC4A0A',
  700: '#C4320A',
  800: '#9C2A10',
  900: '#7E2410',
} as const;

export const color = {
  grey,
  brand,
  error,
  warning,
  success,
  blueGray,
  blueLight,
  blue,
  indigo,
  purple,
  pink,
  rose,
  orange,
} as const;

export type Color = typeof color;