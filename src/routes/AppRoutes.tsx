import {BrowserRouter, Route, Routes} from "react-router-dom";
import WelcomePage from "../pages/WelcomePage.tsx";
import {LoginPage} from "../pages/LoginPage.tsx";

interface Props {
    toggleTheme: () => void;
}
export default function AppRoutes({toggleTheme}: Props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WelcomePage toggleTheme={toggleTheme} />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    )
}