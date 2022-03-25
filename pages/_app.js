import Layout from "../public/src/components/layout/Layout";
import "../public/src/styles/global/style.css";
import { useState } from "react";


import { createTheme, responsiveFontSizes, ThemeProvider,useTheme } from '@mui/material/styles';


const App = ({ Component, pageProps }) => {
    const [isDark, setisDark] =useState(false)

  const darkModeTheme = createTheme({
    palette: {
      mode: isDark ? "dark":"light",
     
      
    },
  });
  const theme = useTheme();
    return (
        <ThemeProvider theme={darkModeTheme}>
        <Layout >
            <Component {...pageProps} />
        </Layout>
        </ThemeProvider>
    )
}
export default App;