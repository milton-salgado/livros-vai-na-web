import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import DonatedBooks from "../pages/DonatedBooks";
import Donation from "../pages/Donation";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/livros-vai-na-web/" element={<Home />} />
            <Route
                path="/livros-vai-na-web/donated-books"
                element={<DonatedBooks />}
            />
            <Route path="/livros-vai-na-web/donation" element={<Donation />} />
        </Routes>
    );
};

export default AppRoutes;
