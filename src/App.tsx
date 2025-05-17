import {CssBaseline, ThemeProvider} from "@mui/material";
import {useState} from "react";
import {darkTheme, lightTheme} from "./theme/theme.ts";
import AppRoutes from "./routes/AppRoutes.tsx";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const currentTheme = isDarkMode ? darkTheme : lightTheme;

    return (
        <ThemeProvider theme={currentTheme}>
            <CssBaseline />
            <AppRoutes toggleTheme={() => setIsDarkMode(!isDarkMode)} />
        </ThemeProvider>
    )
}

export default App
