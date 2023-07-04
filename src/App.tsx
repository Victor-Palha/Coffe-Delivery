import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import {GlobalStyle} from "./styles/global";

import {BrowserRouter} from "react-router-dom";
import { Router } from "./Router";
import { CoffeContextProvider } from "./context/coffeContext";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeContextProvider>
          <Router/>
        </CoffeContextProvider>
        <ToastContainer/>
      </BrowserRouter>

      <GlobalStyle/>
    </ThemeProvider>
  )
}


