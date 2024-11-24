import AppRoutes from "./routes/routes";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <Header />
            <AppRoutes />
            <Footer />
        </Router>
    );
}

export default App;
