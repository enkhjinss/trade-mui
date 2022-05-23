import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#0375fe",
            },
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default MyApp;
