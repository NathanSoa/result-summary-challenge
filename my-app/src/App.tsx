import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./presentation/styles/Theme";
import { GlobalTheme } from "./presentation/styles/Global";
import { Main } from "./presentation/components/Main";

export function App() {

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Main />
        <GlobalTheme />
      </ThemeProvider>
    </>
  )
}
