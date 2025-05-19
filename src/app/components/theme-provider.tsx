import original from "react95/dist/themes/original";
import { createGlobalStyle, ThemeProvider as React95ThemeProvider } from "styled-components";
import { styleReset } from "react95";

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  body {
    font-family: ms_sans_serif;
  }
`;

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center min-h-screen !px-4">
      <GlobalStyles />
      <React95ThemeProvider theme={original}>{children}</React95ThemeProvider>
    </div>
  );
};
