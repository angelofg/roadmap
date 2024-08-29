import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Head from "./components/Head";
import Page404 from "./pages/Page404";
import Manager from "./components/Manager";
import Logout from "./pages/Logout";

function App() {
  return (
    <div>
      <Router>
        <Head />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/manager" element={<Manager />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
