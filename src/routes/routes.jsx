import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import DonatedBooks from "../pages/DonatedBooks";
import Donation from "../pages/Donation";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/donated-books" element={<DonatedBooks />} />
            <Route path="/donation" element={<Donation />} />
        </Routes>
    );
};

export default AppRoutes;
