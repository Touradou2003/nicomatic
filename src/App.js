import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import About from "./pages/About";
function App() {
    return (
        <Router>
            <Routes>
                <Route index element={<Accueil/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </Router>
    );
}

export default App;
